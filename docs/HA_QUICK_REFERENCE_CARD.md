# HOME ASSISTANT QUICK REFERENCE CARD

**For fast lookups — Use with HA_COMPREHENSIVE_ENTITY_REFERENCE_V1_0_LIVING.md**

---

## ⚡ CRITICAL ENTITIES (Status at a glance)

### Battery & Power (Check first)
- `sensor.deyeinvertercombined_battery_soc` → Battery level (%) | Automation: Low SoC alerts
- `sensor.deyeinvertermaster_inverter_output_power` → Load power (W) | Automation: Load blocking
- `sensor.solar_forecast_total_today` → Daily solar prediction (kWh) | Automation: Noon load scheduling
- `sensor.prepaid_units_left` → Grid credit remaining (kWh) | Automation: Low-balance alerts

### System Health (Check weekly)
- `sensor.homeassistant_db_size_mb` → Database size (MB) | Automation: Growth alerts
- `sensor.badlogin` → Failed login count | Automation: Security check (09:00 daily)
- `sensor.mosquitto_broker_cpu_percent` → MQTT broker CPU (%) | Automation: Health alerts
- `binary_sensor.mqtt_broker_alert_active` → Broker warning flag | Automation: Escalation

### Unavailable Count (Audit status)
- Search: `sensor.unavailable_entities_count` OR use Developer Tools > States > Filter "unavailable"
- Target: < 5% (< 170 entities) — Currently at 19.8% (680 entities) ⚠️

---

## 🔧 COMMON AUTOMATION LOOKUPS

### Solar-Related
| Automation | File | Trigger | Time | Purpose |
|-----------|------|---------|------|---------|
| Load Scheduling | `solar_production_automation.yaml` | Solar threshold | Real-time | Pool pump, heavy loads |
| Daily Report | `solar_daily_report.yaml` | Time | 21:00 | Email summary |
| Hourly Report | `solar_hourly_report.yaml` | Hourly | :00 | Intraday tracking |
| Forecast Notify | `solar_forecast_notifications.yaml` | Threshold | Real-time | Alerts on production drops |
| Weekly Summary | `solar_weekly_report.yaml` | Weekly | Sun 19:00 | Email report |

### Battery-Related
| Automation | File | Trigger | Time | Purpose |
|-----------|------|---------|------|---------|
| Low SoC Alert | `prepaid_meter_automations.yaml` | SoC < 20% | Real-time | Battery warning |
| Weekly Health | `battery_weekly_summary.yaml` | Weekly | Mon 19:00 | Battery status report |
| Discharge Alert | `solar_battery_alerts.yaml` | Threshold | Real-time | Overdischarge prevention |

### Security-Related
| Automation | File | Trigger | Time | Purpose |
|-----------|------|---------|------|---------|
| Bad Login Check | `automations.yaml` (root) | Daily | 09:00 | Spike detection |
| Anomaly Detection | `security_anomaly_detection.yaml` | Pattern match | Real-time | Intrusion alerts |
| IP Ban Summary | `security_ipban_daily_summary.yaml` | Daily | 06:00 | Ban log review |

### System-Related
| Automation | File | Trigger | Time | Purpose |
|-----------|------|---------|------|---------|
| Morning Overview | `system_morning_overview.yaml` | Daily | 07:00 | Briefing email |
| Update Report | `update_report_email.yaml` | Daily | 15:00 | Available updates list |
| Git Backup | `git_snapshot_0855.yaml` | Daily | 08:55 | Config to GitHub |
| Maintenance Reminder | `maintanance_mode_reminder.yaml` | Timeout | Auto-exit | Mode expiration |

---

## 🎯 ENTITY ID PATTERNS (Quick Find)

### Inverter Entities
- `sensor.deyeinverter[master/slave]_*` — All Deye inverter sensors
- `sensor.sunsynk_*` — Sunsynk hybrid inverter
- `switch.deyeinverter[master/slave]_*` — Load switches, settings
- `select.deyeinverter[master/slave]_*` — Mode selectors (Battery Priority, etc.)

### Solar & Forecast
- `sensor.solar_forecast_*` — Solcast/SolarForecast data
- `sensor.solar_*` — Derived solar metrics
- `sensor.pv_*` — PV array-specific data
- `number.solar_*` — Solar configuration inputs

### Prepaid Meter
- `sensor.prepaid_*` — Credit, usage, predictions
- `input_number.prepaid_*` — Manual configuration
- `automation.*prepaid*` — Low-balance alerts

### Smart Devices
- `switch.sonoff_*` — SONOFF smart plugs/switches
- `sensor.sonoff_*_power` — Device power consumption
- `sensor.sonoff_*_voltage` — Device voltage
- `switch.pool_pump_*` — Pool equipment
- `switch.geyser_*` — Water heater

### System Health
- `sensor.*_http_status_code` — Service availability (HA, Grafana, Node-RED)
- `sensor.badlogin` — Security metric
- `sensor.homeassistant_*` — HA instance metrics
- `sensor.mosquitto_broker_*` — MQTT broker health

---

## 📡 NOTIFICATION SERVICES (Quick Send)

### To trigger manually (Developer Tools > Services):

```yaml
# Email
service: notify.email_ha
data:
  title: "Your Subject"
  message: "Your message body"

# Telegram
service: telegram_bot.send_message
data:
  chat_id: 6167623299
  message: "Your message"

# Mobile Push (Samsung S21)
service: notify.mobile_app_sm_g996b
data:
  title: "Alert"
  message: "Details"
  data:
    channel: "Important"
    importance: "high"

# All Alexa devices
service: notify.everywhere_announce
data:
  message: "Announcement text"

# MagicMirror
service: notify.johan_s_magicmirror_announce
data:
  message: "Display message"
```

---

## 🔍 TROUBLESHOOTING QUICK LINKS

### "Entities Unavailable" (680 currently)

**Step 1: Identify root cause**
```
1. Check logs: tail -50 /config/home-assistant.log | grep -i "deye\|sunsynk\|error"
2. List all unavailable: Developer Tools > States > Filter "unavailable"
3. Note integration: Most are Sunsynk (441) or Deye (364)
```

**Step 2: Test connectivity**
```bash
# Ping inverter
ping <inverter-ip>

# Test REST API
curl -I http://<inverter-ip>:5000/status

# Check MQTT
mosquitto_sub -h 192.168.1.31 -t "deye/+" -C 1
```

**Step 3: Reload integration**
```yaml
# Developer Tools > Services:
service: homeassistant.reload_config_entry
data:
  entry_id: [get from Settings > Devices & Services > Integration]
```

### "Automation not triggering"

**Check:**
1. Is automation enabled? → Settings > Automations > [Name] > Toggle ON
2. Does trigger entity exist? → Developer Tools > States > Search
3. Does condition pass? → Add `@debug` to template condition, view logs
4. Are actions valid? → Check template syntax, service names, entity IDs

### "Database growing too fast"

**Monitor:**
```yaml
sensor.homeassistant_db_size_mb   # Should grow ~10-20 MB/week
sensor.database_growth_rate       # Watch this metric
```

**Actions:**
1. Check `recorder` include/exclude filters (configuration.yaml)
2. Run manual purge: Developer Tools > Services > `recorder.purge`
3. Repack database: `recorder.repack_database`
4. Check for runaway automations creating entities

### "MQTT broker CPU high"

**Check:**
```yaml
sensor.mosquitto_broker_cpu_percent   # Alert if > 80%
input_number.mqtt_broker_cpu_alert_threshold  # Adjust threshold
```

**Actions:**
1. SSH into HA, check MQTT processes: `ps aux | grep mosquitto`
2. Look for retained messages: `mosquitto_sub -h localhost -t '#' -v | head -50`
3. Restart Mosquitto: Settings > Add-ons > Mosquitto > Restart
4. Check for Node-RED flow loops: Home Assistant > Node-RED > Debug nodes

---

## 📅 AUTOMATION SCHEDULE (15-min intervals from 07:00)

```
07:00  — Morning Overview (system_morning_overview.yaml)
        [Email + Mobile alert with battery, solar, weather, upcoming tasks]
        
07:15  — AI Automation Suggester (automations.yaml root)
        [Weekly automation suggestions based on system usage]
        
08:00  — [Available for custom automations]

08:55  — Git Config Snapshot (git_snapshot_0855.yaml)
        [Backup config to GitHub]
        
09:00  — Security Bad Login Check (automations.yaml root)
        [Daily spike detection, baseline rollover]
        
09:15  — [Solar/Battery optimization begins - Real-time triggers]

15:00  — Update Report (update_report_email.yaml)
        [Email list of available HA/add-on/custom component updates]
        
19:00  — Solar Weekly Summary (solar_weekly_report.yaml, if Monday)
        [Weekly solar KPI report + efficiency analysis]
        
19:00  — Battery Weekly Summary (battery_weekly_summary.yaml, if Monday)
        [Weekly battery health + charge/discharge cycles]
        
20:00  — Prepaid Daily Accuracy (prepaid_daily_accuracy_report.yaml)
        [Grid import report, units remaining, cost summary]
        
21:00  — Solar Daily Report (solar_daily_report.yaml)
        [Daily generation, target vs actual, KPI]
        
21:30  — [System maintenance window - log rotation, DB cleanup]

06:00* — IP Ban Daily Summary (security_ipban_daily_summary.yaml)
        [Review IP bans from previous day]

Real-time triggers (no fixed time):
  - Pool pump solar management (solar_production_automation.yaml)
  - Prepaid low-balance alerts
  - Battery SoC thresholds
  - Inverter fault detection
  - Security anomalies
```

---

## 🔐 IMPORTANT SECRETS (NOT in config, in secrets.yaml)

- `ha_internal_url` → http://192.168.1.31:8123
- `ha_external_url` → https://gy98slwcfto2t5oia2xnqjeabx480gs6.ui.nabu.casa/
- `ha_long_lived_token` → [Long-lived auth token for API calls]
- `home_name` → Your home name
- `home_latitude` / `home_longitude` / `home_elevation` → Coordinates
- Email credentials (Gmail SMTP)
- Telegram bot token + chat ID
- Inverter IP + credentials
- MQTT broker credentials

---

## 💡 COMMON TASKS

### Add a new automation
1. Create file: `/config/automations/new_automation_name.yaml`
2. Use template from existing automation
3. Validate syntax: Settings > System > Check Configuration
4. Restart HA: Settings > System > Restart
5. Add to git: Via `git_commit.sh` automation or manually

### Add a new template sensor
1. Edit: `/config/template.yaml`
2. Add under appropriate category (Solar, Battery, Prepaid, etc.)
3. Include unit_of_measurement, device_class, state_class
4. Add availability guard if inputs required
5. Validate: Settings > System > Check Configuration
6. Restart HA

### Disable an automation (don't delete)
1. Settings > Automations > [Name] > Toggle OFF
2. Add note in automation file: `# [DISABLED] Reason: ...`
3. Commit to GitHub

### Test notification service
```yaml
# Developer Tools > Services:
service: notify.email_ha
data:
  title: "Test"
  message: "Test email from HA"
```

---

## 📞 SUPPORT CONTACTS

- **HA Community Forum:** https://community.home-assistant.io
- **Sunsynk Support:** [Contact info from inverter docs]
- **Deye Inverter Support:** [Contact info from inverter docs]
- **GitHub Issues:** https://github.com/jbarkhuizen/homeassistant-config-V8/issues

---

**Quick Card Version:** 1.0  
**Last Updated:** June 20, 2026  
**Use with:** HA_COMPREHENSIVE_ENTITY_REFERENCE_V1_0_LIVING.md
