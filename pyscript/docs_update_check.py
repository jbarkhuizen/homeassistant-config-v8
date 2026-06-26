"""
Home Assistant Pyscript: docs_update_check
Purpose: Weekly documentation update task
- Export current entity counts
- Compare with documented inventory
- Detect changes (new entities, unavailable count, etc.)
- Generate summary report for notification

Called by: docs_weekly_update_friday automation
Returns: Dictionary with update report details
"""

import json
from datetime import datetime

@pyscript.service
async def docs_update_check():
    """
    Export current entity state and compare with documentation
    Returns a report dictionary with change detection
    """
    
    log.info("[DOCS UPDATE] Starting comparison of current vs documented entity state")
    
    # DOCUMENTED BASELINE (from HA_COMPREHENSIVE_ENTITY_REFERENCE_V1_0_LIVING.md)
    documented = {
        "total_entities": 3426,
        "unavailable_entities": 680,
        "automations": 30,
        "template_sensors": 52,
        "update_entities": 181,
        "sensor_entities": 1802,
        "switch_entities": 481,
        "number_entities": 193,
        "binary_sensor_entities": 158,
        "device_tracker_entities": 157,
        "input_text_entities": 87,
        "automation_entities": 97,
        "select_entities": 59,
    }
    
    # GET CURRENT STATE FROM HOME ASSISTANT
    current = {
        "timestamp": datetime.now().isoformat(),
        "total_entities": len(hass.states.all()),
        "unavailable_entities": len([e for e in hass.states.all() if e.state == "unavailable"]),
        "sensor_entities": len([e for e in hass.states.all() if e.entity_id.startswith("sensor.")]),
        "switch_entities": len([e for e in hass.states.all() if e.entity_id.startswith("switch.")]),
        "number_entities": len([e for e in hass.states.all() if e.entity_id.startswith("number.")]),
        "binary_sensor_entities": len([e for e in hass.states.all() if e.entity_id.startswith("binary_sensor.")]),
        "device_tracker_entities": len([e for e in hass.states.all() if e.entity_id.startswith("device_tracker.")]),
        "input_text_entities": len([e for e in hass.states.all() if e.entity_id.startswith("input_text.")]),
        "update_entities": len([e for e in hass.states.all() if e.entity_id.startswith("update.")]),
        "select_entities": len([e for e in hass.states.all() if e.entity_id.startswith("select.")]),
        "automation_entities": len([e for e in hass.states.all() if e.entity_id.startswith("automation.")]),
    }
    
    # CALCULATE CHANGES
    changes = {}
    changes_detected = False
    
    for key in documented:
        if key in current:
            delta = current[key] - documented[key]
            delta_pct = (delta / documented[key] * 100) if documented[key] != 0 else 0
            changes[key] = {
                "documented": documented[key],
                "current": current[key],
                "delta": delta,
                "delta_pct": delta_pct,
            }
            
            # Flag significant changes (>5% or >10 entities)
            if abs(delta) > 10 or abs(delta_pct) > 5:
                changes_detected = True
    
    # UNAVAILABLE ENTITY DETAILS
    unavailable_percent = (current["unavailable_entities"] / current["total_entities"] * 100) if current["total_entities"] > 0 else 0
    unavailable_delta = current["unavailable_entities"] - documented["unavailable_entities"]
    unavailable_improved = unavailable_delta < 0
    
    # GENERATE SUMMARY
    summary_lines = []
    
    # Total entities
    if changes["total_entities"]["delta"] != 0:
        summary_lines.append(f"Total Entities: {current['total_entities']} (was {documented['total_entities']}, {changes['total_entities']['delta']:+d})")
    else:
        summary_lines.append(f"Total Entities: {current['total_entities']} ✓ (stable)")
    
    # Unavailable entities
    if unavailable_improved:
        summary_lines.append(f"Unavailable: {current['unavailable_entities']} ({unavailable_percent:.1f}%) ✅ Improved by {abs(unavailable_delta)}")
    elif unavailable_delta > 0:
        summary_lines.append(f"Unavailable: {current['unavailable_entities']} ({unavailable_percent:.1f}%) ⚠️ Increased by {unavailable_delta}")
    else:
        summary_lines.append(f"Unavailable: {current['unavailable_entities']} ({unavailable_percent:.1f}%) ✓ (stable)")
    
    # Major domain changes
    domain_changes = []
    for domain in ["sensor_entities", "switch_entities", "number_entities", "binary_sensor_entities"]:
        if domain in changes and changes[domain]["delta"] != 0:
            domain_name = domain.replace("_entities", "").title()
            delta_display = f"{changes[domain]['delta']:+d}"
            domain_changes.append(f"  • {domain_name}: {changes[domain]['current']} ({delta_display})")
    
    if domain_changes:
        summary_lines.append("Domain Changes:")
        summary_lines.extend(domain_changes)
    
    # Compile full summary
    summary = "\n".join(summary_lines)
    summary_short = summary_lines[0] if summary_lines else "No data"
    
    # Count actual automations in config
        automation_delta = current["automation_entities"] - documented["automations"]
        
    # Build report
    report = {
        "status": "✅ Complete" if not changes_detected else "⚠️ Changes Detected",
        "changes_detected": changes_detected,
        "timestamp": current["timestamp"],
        "summary": summary,
        "summary_short": summary_short,
        "total_entities_documented": documented["total_entities"],
        "total_entities_current": current["total_entities"],
        "total_entities_delta": changes["total_entities"]["delta"],
        "unavailable_entities_documented": documented["unavailable_entities"],
        "unavailable_entities_current": current["unavailable_entities"],
        "unavailable_delta": unavailable_delta,
        "unavailable_percent": round(unavailable_percent, 1),
        "unavailable_improved": unavailable_improved,
        "new_entities_count": changes["total_entities"]["delta"],
        "automation_changes": f"{automation_delta:+d}" if automation_delta != 0 else "0",
        "template_changes": "0 (needs manual check)",
        "changes_summary": json.dumps(changes, default=str),
    }
    
    # Log results
    log.info(f"[DOCS UPDATE] Comparison complete: {report['status']}")
    log.info(f"[DOCS UPDATE] Total entities: {current['total_entities']} (documented: {documented['total_entities']})")
    log.info(f"[DOCS UPDATE] Unavailable: {current['unavailable_entities']} ({unavailable_percent:.1f}%)")
    log.info(f"[DOCS UPDATE] Changes detected: {changes_detected}")
    
    return report