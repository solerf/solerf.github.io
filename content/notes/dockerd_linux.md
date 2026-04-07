+++
title = 'dockerd linux'
date = '2026-02-15T13:15:31+01:00'
draft = false 
tags = ['docker', 'linux']
+++

To add `dockerd` as a service in `runit` and avoid missing `docker.sock` error:

- As root, create the service directory: `mkdir -p /etc/runit/sv/dockerd`.
- Create a run file in previous created directory:

```bash
#!/bin/sh
exec 2>&1
exec dockerd
```

- Make it executable `chmod +x /etc/runit/sv/dockerd/run`
- Link the `run` file as usual for `runit`:

```
ln -s /etc/runit/sv/docker /run/runit/service
```
