"""
Pyscript Entity Export with Fixed Daily Filename
File: /config/pyscript/export_entities_daily.py
Purpose: Export entities to CSV with predictable filename for email automation
"""

import csv
import smtplib
from datetime import datetime
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email import encoders

@pyscript_executor
def write_csv_file(filename, data):
    """Write CSV file using native Python - runs in executor thread."""
    try:
        with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
            if not data:
                return None, "No data to write"
            
            # Get all unique keys from all entities for column headers
            fieldnames = set()
            for row in data:
                fieldnames.update(row.keys())
            fieldnames = sorted(list(fieldnames))
            
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(data)
            
        return len(data), None
    except Exception as exc:
        return None, str(exc)


@pyscript_executor
def send_export_email(filename, entity_count, gmail_password):
    """Send the export CSV file via email."""
    try:
        # Email config
        sender_email = "jbarkhuizen@gmail.com"
        receiver_email = "jbarkhuizen@gmail.com"
        
        # Create message
        message = MIMEMultipart()
        message["From"] = sender_email
        message["To"] = receiver_email
        message["Subject"] = f"Daily Entity Export - {datetime.now().strftime('%Y-%m-%d')}"
        
        # Body text
        body = f"Attached: Daily entity export with {entity_count} entities.\nFile: {filename}"
        message.attach(MIMEText(body, "plain"))
        
        # Attach CSV file
        with open(filename, "rb") as attachment:
            part = MIMEBase("application", "octet-stream")
            part.set_payload(attachment.read())
        
        encoders.encode_base64(part)
        part.add_header("Content-Disposition", f"attachment; filename={filename.split('/')[-1]}")
        message.attach(part)
        
        # Send email
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(sender_email, gmail_password)
        server.sendmail(sender_email, receiver_email, message.as_string())
        server.quit()
        
        return True, "Email sent successfully"
    except Exception as exc:
        return False, str(exc)


@service
def export_entities_daily():
    """
    Export all Home Assistant entities to CSV with fixed daily filename.
    Creates: /config/exports/entities_daily_YYYYMMDD.csv
    
    This uses a predictable filename based on date, making it easy to
    attach to automated emails.
    
    Call from Developer Tools > Services: pyscript.export_entities_daily
    Or from automations at scheduled times.
    """
    # Use today's date for filename (not timestamp)
    today = datetime.now().strftime("%Y%m%d")
    filename = f"/config/exports/entities_daily_{today}.csv"
    
    log.info(f"Starting daily entity export to {filename}")
    
    # Get all entity IDs in your Home Assistant instance
    all_entity_ids = state.names()
    
    # Collect complete data from all entities
    entities_data = []
    
    for entity_id in all_entity_ids:
        try:
            # Get current state
            entity_state = state.get(entity_id)
            if entity_state is None:
                continue
            
            # Get all attributes
            attrs = state.getattr(entity_id) or {}
            
            # Build comprehensive row data
            row = {
                'entity_id': entity_id,
                'state': entity_state,
                'domain': entity_id.split('.')[0],
                'friendly_name': attrs.get('friendly_name', ''),
                'device_class': attrs.get('device_class', ''),
                'unit_of_measurement': attrs.get('unit_of_measurement', ''),
            }
            
            # Add important attributes as separate columns
            important_attrs = [
                'battery', 'temperature', 'humidity', 'brightness',
                'current_temperature', 'target_temperature',
                'current_position', 'assumed_state', 'restored'
            ]
            
            for attr_key in important_attrs:
                if attr_key in attrs:
                    row[attr_key] = attrs[attr_key]
            
            # Add last changed/updated
            row['last_changed'] = attrs.get('last_changed', '')
            row['last_updated'] = attrs.get('last_updated', '')
            
            entities_data.append(row)
            
        except Exception as exc:
            log.warning(f"Error processing {entity_id}: {exc}")
            continue
    
    # Write to CSV file
    count, error = write_csv_file(filename, entities_data)
    
    if error:
        log.error(f"Failed to write CSV: {error}")
        persistent_notification.create(
            title="Entity Export Failed",
            message=f"Error: {error}",
            notification_id="entity_export_error"
        )
        return False
    else:
        log.info(f"Successfully exported {count} entities to {filename}")
        
        # Get Gmail app password from secrets
        try:
            gmail_password = pyscript.get_state("secret.gmail_app_password")
        except:
            gmail_password = None
        
        if gmail_password:
            # Send email with attachment
            email_sent, email_msg = send_export_email(filename, count, gmail_password)
            
            if email_sent:
                log.info(f"Export email sent successfully")
                persistent_notification.create(
                    title="Entity Export Complete",
                    message=f"Exported {count} entities to {filename} and emailed to jbarkhuizen@gmail.com",
                    notification_id="entity_export_success"
                )
            else:
                log.error(f"Export completed but email failed: {email_msg}")
                persistent_notification.create(
                    title="Entity Export Complete - Email Failed",
                    message=f"Exported {count} entities to {filename} but email send failed: {email_msg}",
                    notification_id="entity_export_email_error"
                )
        else:
            log.warning("Gmail password not found in secrets - skipping email")
            persistent_notification.create(
                title="Entity Export Complete - Email Skipped",
                message=f"Exported {count} entities to {filename} but email password not configured",
                notification_id="entity_export_no_password"
            )
        
        return True


@time_trigger("cron(0 6 * * *)")
def scheduled_daily_export_and_cleanup():
    """
    Automatically export entities daily at 06:00.
    Also cleans up exports older than 30 days.
    """
    # Run the export
    success = export_entities_daily()
    
    if success:
        # Clean up old files (optional)
        cleanup_old_exports()


@pyscript_executor
def cleanup_old_exports():
    """Clean up export files older than 30 days."""
    import os
    from datetime import datetime, timedelta
    
    export_dir = "/config/exports"
    max_age_days = 30
    
    try:
        now = datetime.now()
        deleted_count = 0
        
        for filename in os.listdir(export_dir):
            if filename.startswith("entities_daily_") and filename.endswith(".csv"):
                filepath = os.path.join(export_dir, filename)
                
                # Get file modification time
                file_time = datetime.fromtimestamp(os.path.getmtime(filepath))
                age_days = (now - file_time).days
                
                # Delete if older than 30 days
                if age_days > max_age_days:
                    os.remove(filepath)
                    deleted_count += 1
                    log.info(f"Deleted old export: {filename} (age: {age_days} days)")
        
        if deleted_count > 0:
            log.info(f"Cleanup complete: deleted {deleted_count} old export files")
            
    except Exception as exc:
        log.warning(f"Error during cleanup: {exc}")


# ============================================================================
# Alternative: Export Specific Domains Only
# ============================================================================

@service
def export_sensors_daily():
    """
    Export only sensor entities with key attributes.
    Creates smaller, focused CSV files.
    """
    today = datetime.now().strftime("%Y%m%d")
    filename = f"/config/exports/sensors_daily_{today}.csv"
    
    log.info(f"Exporting sensor entities to {filename}")
    
    # Get only sensor entities
    sensor_ids = state.names("sensor")
    
    sensors_data = []
    
    for sensor_id in sensor_ids:
        try:
            sensor_state = state.get(sensor_id)
            attrs = state.getattr(sensor_id) or {}
            
            # Create structured row with key sensor attributes
            row = {
                'entity_id': sensor_id,
                'state': sensor_state,
                'friendly_name': attrs.get('friendly_name', ''),
                'unit_of_measurement': attrs.get('unit_of_measurement', ''),
                'device_class': attrs.get('device_class', ''),
                'state_class': attrs.get('state_class', ''),
                'last_changed': str(attrs.get('last_changed', '')),
            }
            
            sensors_data.append(row)
            
        except Exception as exc:
            log.warning(f"Error processing {sensor_id}: {exc}")
    
    count, error = write_csv_file(filename, sensors_data)
    
    if error:
        log.error(f"Sensor export failed: {error}")
        return False
    else:
        log.info(f"Exported {count} sensors successfully")
        persistent_notification.create(
            title="Sensor Export Complete",
            message=f"Exported {count} sensors to {filename}",
            notification_id="sensor_export_success"
        )
        return True