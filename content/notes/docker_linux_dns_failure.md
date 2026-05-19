+++
title = 'docker dns failure'
date = '2026-03-23T00:34:02+01:00'
draft = false
tags = ['docker', 'linux']
+++

For problems when build image not getting internet connection:

- Example error with `go-alpine` docker build

```shell
[2/3] RUN apk update:
5.359 WARNING: updating and opening https://dl-cdn.alpinelinux.org/alpine/v3.23/main/x86_64/APKINDEX.tar.gz: DNS: transient error (try again later)
```

Just set up a dns config for the docker daemon (I think those are google's dns):
```json
{
    "dns": ["8.8.8.8", "8.8.4.4"]
}
```

at one of those two:
- `$HOME/.docker/daemon.json` (this path does not work for linux)
- `/etc/docker/daemon.json`

> Do not forget to restart the service

Sources:

- https://stackoverflow.com/questions/44761246/temporary-failure-in-name-resolution-errno-3-with-docker
- https://medium.com/@gembit.soultan/gitlab-ci-cd-fixing-alpinelinux-temporary-error-ba73b7080ec3
- https://docs.docker.com/engine/daemon/
