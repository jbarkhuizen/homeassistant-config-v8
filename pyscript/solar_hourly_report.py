"""
Solar Hourly Report
Production version

Purpose
- Create a daily baseline
- Capture hourly PV deltas
- Store JSON history
- Publish pyscript.solar_hourly_report_status
"""

import json
import os
from datetime import datetime

REPORT_DIR = "/config/sensor_reports"
FILE_PREFIX = "solar_hourly_"

PV1_SENSOR = "sensor.deyeinvertermaster_summary_total_pv1_fix"
PV2_SENSOR = "sensor.deyeinvertermaster_summary_total_pv2_fix"
TARGET_SENSOR = "input_number.solar_generation_target"

STATUS_ENTITY = "pyscript.solar_hourly_report_status"


@pyscript_executor
def ensure_report_dir():
    os.makedirs(REPORT_DIR, exist_ok=True)


@pyscript_executor
def write_json_file(filename, data):
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)


@pyscript_executor
def read_json_file(filename):
    if not os.path.exists(filename):
        return None
    with open(filename, "r", encoding="utf-8") as f:
        return json.load(f)


def get_today_str():
    return datetime.now().strftime("%Y%m%d")


def get_today_display():
    return datetime.now().strftime("%Y-%m-%d")


def get_now_str():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def get_file_path():
    return f"{REPORT_DIR}/{FILE_PREFIX}{get_today_str()}.json"


def safe_float(entity_id, default=0.0):
    try:
        value = state.get(entity_id)
        if value in [None, "unknown", "unavailable", "", "None"]:
            return float(default)
        return float(value)
    except Exception:
        return float(default)


def completed_hour_label():
    hour_num = datetime.now().hour - 1
    if hour_num < 0:
        hour_num = 23
    return f"{hour_num:02d}:00-{hour_num:02d}:59"


def publish_status(payload):
    state.set(STATUS_ENTITY, payload["state"], payload)
    log.info(f"Published {STATUS_ENTITY} with state {payload['state']}")


def publish_from_report(report):
    rows = report.get("rows", [])

    total_pv1 = round(sum(float(r.get("pv1_kwh", 0)) for r in rows), 2)
    total_pv2 = round(sum(float(r.get("pv2_kwh", 0)) for r in rows), 2)
    total_combined = round(total_pv1 + total_pv2, 2)

    best_hour = "N/A"
    best_hour_total = 0.0
    if rows:
        best_row = max(rows, key=lambda r: float(r.get("total_kwh", 0)))
        best_hour = best_row.get("hour", "N/A")
        best_hour_total = round(float(best_row.get("total_kwh", 0)), 2)

    last_row = rows[-1] if rows else {}

    target = safe_float(TARGET_SENSOR, 25.0)
    achievement_pct = round((total_combined / target * 100), 1) if target > 0 else 0.0

    payload = {
        "state": last_row.get("hour", "initialized"),
        "report_date": report.get("report_date", get_today_display()),
        "generated_at": get_now_str(),
        "last_completed_hour": last_row.get("hour", "N/A"),
        "last_pv1_kwh": float(last_row.get("pv1_kwh", 0)),
        "last_pv2_kwh": float(last_row.get("pv2_kwh", 0)),
        "last_total_kwh": float(last_row.get("total_kwh", 0)),
        "total_pv1_kwh": total_pv1,
        "total_pv2_kwh": total_pv2,
        "total_combined_kwh": total_combined,
        "best_hour": best_hour,
        "best_hour_total_kwh": best_hour_total,
        "target_kwh": target,
        "achievement_pct": achievement_pct,
        "row_count": len(rows),
        "rows": rows,
        "version_marker": "PROD-V1"
    }

    publish_status(payload)


@service
def solar_hourly_report_init_day():
    ensure_report_dir()

    pv1_total = safe_float(PV1_SENSOR, 0.0)
    pv2_total = safe_float(PV2_SENSOR, 0.0)

    report = {
        "report_date": get_today_display(),
        "created_at": get_now_str(),
        "updated_at": get_now_str(),
        "baseline": {
            "pv1_total": round(pv1_total, 3),
            "pv2_total": round(pv2_total, 3)
        },
        "last_snapshot": {
            "pv1_total": round(pv1_total, 3),
            "pv2_total": round(pv2_total, 3)
        },
        "rows": []
    }

    write_json_file(get_file_path(), report)
    publish_from_report(report)
    log.info("solar_hourly_report_init_day executed")


@service
def solar_hourly_report_capture_and_prepare():
    ensure_report_dir()

    report = read_json_file(get_file_path())

    if report is None:
        solar_hourly_report_init_day()
        report = read_json_file(get_file_path())

    rows = report.get("rows", [])
    hour_label = completed_hour_label()

    existing_hours = [row.get("hour") for row in rows]
    if hour_label in existing_hours:
        publish_from_report(report)
        log.info(f"Hourly row already exists for {hour_label}")
        return

    current_pv1_total = safe_float(PV1_SENSOR, 0.0)
    current_pv2_total = safe_float(PV2_SENSOR, 0.0)

    previous_pv1_total = float(report.get("last_snapshot", {}).get("pv1_total", current_pv1_total))
    previous_pv2_total = float(report.get("last_snapshot", {}).get("pv2_total", current_pv2_total))

    pv1_hour = round(max(0.0, current_pv1_total - previous_pv1_total), 2)
    pv2_hour = round(max(0.0, current_pv2_total - previous_pv2_total), 2)
    total_hour = round(pv1_hour + pv2_hour, 2)

    prev_cum_pv1 = float(rows[-1]["cum_pv1"]) if rows else 0.0
    prev_cum_pv2 = float(rows[-1]["cum_pv2"]) if rows else 0.0
    prev_cum_total = float(rows[-1]["cum_total"]) if rows else 0.0

    row = {
        "hour": hour_label,
        "pv1_kwh": pv1_hour,
        "pv2_kwh": pv2_hour,
        "total_kwh": total_hour,
        "cum_pv1": round(prev_cum_pv1 + pv1_hour, 2),
        "cum_pv2": round(prev_cum_pv2 + pv2_hour, 2),
        "cum_total": round(prev_cum_total + total_hour, 2)
    }

    rows.append(row)
    report["rows"] = rows
    report["last_snapshot"] = {
        "pv1_total": round(current_pv1_total, 3),
        "pv2_total": round(current_pv2_total, 3)
    }
    report["updated_at"] = get_now_str()

    write_json_file(get_file_path(), report)
    publish_from_report(report)
    log.info(f"solar_hourly_report_capture_and_prepare executed for {hour_label}")