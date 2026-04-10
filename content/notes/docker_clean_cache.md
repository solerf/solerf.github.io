+++
title = 'docker clean cache'
date = '2026-04-09T00:14:57+02:00'
draft = false
tags = ['docker', 'linux']
+++

When containerd/buildkit keep locks after build end for whatever reason. To know if this is
happening usually following messages will appear:

```bash
ERROR: failed to build: failed to solve: mount callback failed ...
ERROR: ref moby/1/... locked ... : unavailable ...
```

Docker service restart sometimes is enough, if not, try:

```bash
docker builder prune -f

# OR

docker buildx prune -f
```

Worst case you can always disable cache when building:
```bash 
docker build --no-cache -f Dockerfile -t tag .
```
