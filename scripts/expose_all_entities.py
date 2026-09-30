#!/usr/bin/env python3
"""Expose every entity to Assist via the HA websocket API (same call the UI makes)."""
import asyncio
import pathlib
import sys

import aiohttp

HA_URL = "ws://localhost:8123/api/websocket"
SECRETS_FILE = pathlib.Path("/config/secrets.yaml")
TOKEN_KEY = "expose_token"
ASSISTANTS = ["conversation", "cloud.google_assistant"]  # add "cloud.alexa" for Alexa
EXCLUDE_DOMAINS = {"lock", "alarm_control_panel"}


def read_token() -> str:
    # Line scan instead of yaml.load so custom tags (!env_var etc.) in secrets.yaml don't break it.
    for line in SECRETS_FILE.read_text().splitlines():
        key, _, value = line.partition(":")
        if key.strip() == TOKEN_KEY:
            return value.strip().strip("'\"")
    sys.exit(f"'{TOKEN_KEY}' not found in {SECRETS_FILE}")


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


async def main() -> None:
    token = read_token()
    async with aiohttp.ClientSession() as session:
        # get_states can be several MB on big installs; lift aiohttp's 4MB default cap.
        async with session.ws_connect(HA_URL, max_msg_size=0) as ws:
            await ws.receive_json()
            await ws.send_json({"type": "auth", "access_token": token})
            auth = await ws.receive_json()
            if auth.get("type") != "auth_ok":
                sys.exit(f"Auth failed: {auth}")

            ha = HA(ws)
            states = (await ha.call({"type": "get_states"}))["result"]
            exposed = (await ha.call({"type": "homeassistant/expose_entity/list"}))["result"]["exposed_entities"]

            candidates = [s["entity_id"] for s in states if s["entity_id"].split(".")[0] not in EXCLUDE_DOMAINS]

            for assistant in ASSISTANTS:
                todo = sorted(e for e in candidates if not exposed.get(e, {}).get(assistant))
                failed = await expose(ha, assistant, todo)
                print(f"{assistant}: exposed {len(todo) - len(failed)}, rejected {len(failed)} {failed or ''}")


async def expose(ha: HA, assistant: str, entity_ids: list[str]) -> list[str]:
    """Expose in one batch; a batch is all-or-nothing, so split in half on failure to isolate rejects."""
    if not entity_ids:
        return []
    result = await ha.call({
        "type": "homeassistant/expose_entity",
        "assistants": [assistant],
        "entity_ids": entity_ids,
        "should_expose": True,
    })
    if result.get("success"):
        return []
    if len(entity_ids) == 1:
        return entity_ids
    mid = len(entity_ids) // 2
    return await expose(ha, assistant, entity_ids[:mid]) + await expose(ha, assistant, entity_ids[mid:])


asyncio.run(main())
