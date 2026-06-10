#!/usr/bin/env python3
"""Generate Google location sharing cookies file for Home Assistant."""

import sys
import json
import os
import yaml

try:
    from locationsharinglib import Service
    
    print("=" * 60)
    print("Google Location Sharing Authentication")
    print("=" * 60)
    print()
    
    # Read secrets file
    secrets_file = '/config/secrets.yaml'
    if not os.path.exists(secrets_file):
        print("✗ secrets.yaml not found!")
        sys.exit(1)
    
    with open(secrets_file, 'r') as f:
        secrets = yaml.safe_load(f) or {}
    
    # Get email and app password from secrets
    email = secrets.get('google_maps_email') or 'jbarkhuizen@gmail.com'
    app_password = secrets.get('google_maps_app_password')
    
    if not app_password:
        print("✗ google_maps_app_password not found in secrets.yaml!")
        print()
        print("Add to your secrets.yaml:")
        print("google_maps_email: jbarkhuizen@gmail.com")
        print("google_maps_app_password: your-16-character-app-password")
        print()
        print("Get your app password here: https://myaccount.google.com/apppasswords")
        sys.exit(1)
    
    print(f"Using email: {email}")
    print("Authenticating with Google...")
    print("(This may take a moment...)")
    print()
    
    # Initialize the service with just email and password
    # Service will handle cookies internally
    service = Service(email, app_password)
    
    # Save cookies to HA config
    ha_cookies_path = '/config/.google_maps_cookies'
    
    # Get the cookies from the service
    cookies = service.cookies
    
    with open(ha_cookies_path, 'w') as f:
        json.dump(cookies, f)
    
    print("✓ SUCCESS!")
    print(f"✓ Cookies file created at {ha_cookies_path}")
    print()
    print("Next steps:")
    print("1. Restart Home Assistant (Settings > System > Restart)")
    print("2. Check that device_tracker now shows your location")
    
except Exception as e:
    print(f"✗ Authentication failed: {e}")
    import traceback
    traceback.print_exc()
    sys.exit(1)