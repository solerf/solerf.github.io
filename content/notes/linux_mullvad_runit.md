+++
title = 'Mullvad runit'
date = '2025-12-07T19:07:38+01:00'
draft = false 
tags = ['linux', 'mullvad']
+++

## Create the runit Service:

- As root, create the service directory: `mkdir -p /etc/runit/sv/mullvad`.

- Create a run file in `/etc/runit/sv/mullvad` with the following content (adjust paths if necessary):

```bash
#!/bin/sh
exec 2>&1
sv check dbus > /dev/null || exit 1
exec /opt/Mullvad\ VPN/resources/mullvad-daemon -v --disable-stdout-timestamps
# exec /usr/bin/mullvad-daemon -v --disable-stdout-timestamps
```

This script runs the daemon, redirects logs, and ensures D-Bus is running.

- Make the run script executable: `chmod +x /etc/sv/mullvad/run`.

## Enable the Service:

- Create a symbolic link to activate the service: 

```bash
ln -s /etc/runit/sv/mullvad /run/runit/service/ #(or /var/service/ on some systems).
```

## Start the VPN:
`sv up /run/runit/service/mullvad` to start it, or reboot.

## Manage the Service:
`sv status /run/runit/service/mullvad` to check status.
`sv restart /run/runit/service/mullvad` to restart. 

