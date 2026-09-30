#!/usr/bin/env python3
"""Expose every entity to voice assistants via the HA websocket API (same call the UI makes)."""
import asyncio
import datetime
import pathlib
import traceback

import aiohttp

URLS = ["ws://localhost:8123/api/websocket", "wss://localhost:8123/api/websocket"]
SECRETS_FILE = pathlib.Path("/config/secrets.yaml")
LOG_FILE = pathlib.Path("/config/expose_all_entities.log")
TOKEN_KEY = "expose_token"
ASSISTANTS = ["conversation", "cloud.google_assistant", "cloud.alexa"]
EXCLUDE_DOMAINS = {"lock", "alarm_control_panel"}


class ExposeError(Exception):
    pass


def log(msg: str) -> None:
    print(msg)
    with LOG_FILE.open("a") as f:
        f.write(f"{datetime.datetime.now():%Y-%m-%d %H:%M:%S} {msg}\n")


def read_token() -> str:
    # Line scan instead of yaml.load so custom tags (!env_var etc.) in secrets.yaml don't break it.
    for line in SECRETS_FILE.read_text().splitlines():
        key, _, value = line.partition(":")
        if key.strip() == TOKEN_KEY:
            return value.strip().strip("'\"")
    raise ExposeError(f"'{TOKEN_KEY}' not found in {SECRETS_FILE}")


class HA:
    def __init__(self, ws):
        self.ws = ws
        self.msg_id = 0

    async def call(self, payload: dict) -> dict:
        self.msg_id += 1
        await self.ws.send_json({"id": self.msg_id, **payload})
        while True:
            msg = await self.ws.receive_json()
            if msg.get("id") == self.msg_id:
                return msg

    async def result(self, payload: dict):
        msg = await self.call(payload)
        if not msg.get("success"):
            raise ExposeError(f"{payload['type']} failed: {msg.get('error')}")
        return msg["result"]


async def connect(session: aiohttp.ClientSession):
    errors = []
    for url in URLS:
        try:
            # ssl=False: localhost won't match the public cert. max_msg_size=0: get_states can exceed 4MB.
            return await session.ws_connect(url, ssl=False, max_msg_size=0, timeout=10)
        except Exception as err:
            errors.append(f"{url}: {err!r}")
    raise ExposeError("Cannot connect. " + " / ".join(errors))


async def expose(ha: HA, assistant: str, entity_ids: list[str]) -> list[str]:
    """Expose in one batch; a batch is all-or-nothing, so split in half on failure to isolate rejects."""
    if not entity_ids:
        return []
    msg = await ha.call({
        "type": "homeassistant/expose_entity",
        "assistants": [assistant],
        "entity_ids": entity_ids,
        "should_expose": True,
    })
    if msg.get("success"):
        return []
    if len(entity_ids) == 1:
        return entity_ids
    mid = len(entity_ids) // 2
    return await expose(ha, assistant, entity_ids[:mid]) + await expose(ha, assistant, entity_ids[mid:])


async def main() -> None:
    token = read_token()
    async with aiohttp.ClientSession() as session:
        ws = await connect(session)
        async with ws:
            await ws.receive_json()
            await ws.send_json({"type": "auth", "access_token": token})
            auth = await ws.receive_json()
            if auth.get("type") != "auth_ok":
                raise ExposeError(f"Auth failed (check {TOKEN_KEY} in secrets.yaml): {auth.get('message')}")

            ha = HA(ws)
            states = await ha.result({"type": "get_states"})
            exposed = (await ha.result({"type": "homeassistant/expose_entity/list"}))["exposed_entities"]
            candidates = [s["entity_id"] for s in states if s["entity_id"].split(".")[0] not in EXCLUDE_DOMAINS]

            for assistant in ASSISTANTS:
                todo = sorted(e for e in candidates if not exposed.get(e, {}).get(assistant))
                failed = await expose(ha, assistant, todo)
                log(f"{assistant}: exposed {len(todo) - len(failed)}, rejected {len(failed)} {failed or ''}")


try:
    asyncio.run(asyncio.wait_for(main(), timeout=50))
except ExposeError as err:
    log(f"ERROR: {err}")
except Exception:
    log("ERROR: " + traceback.format_exc())
# Always exit 0: HA only reports "undefined" on non-zero exit, so errors go to stdout and the log instead.
