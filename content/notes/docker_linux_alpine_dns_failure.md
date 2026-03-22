+++
title = 'Docker_linux_alpine_dns_failure'
date = '2026-03-23T00:34:02+01:00'
draft = true
tags = ['docker', 'linux']
+++

For problems when build image not getting internet connection, check this to solve docker dns problems

https://stackoverflow.com/questions/44761246/temporary-failure-in-name-resolution-errno-3-with-docker
https://medium.com/@gembit.soultan/gitlab-ci-cd-fixing-alpinelinux-temporary-error-ba73b7080ec3

example error with go-alpine docker build
```shell
[2/3] RUN apk update:
5.359 WARNING: updating and opening https://dl-cdn.alpinelinux.org/alpine/v3.23/main/x86_64/APKINDEX.tar.gz: DNS: transient error (try again later)
```
