+++
title = 'Docker_clean_cache'
date = '2026-04-09T00:14:57+02:00'
draft = true
tags = ['docker', 'linux']
+++

Docker Build Error: "ref ... locked ... unavailable"
You encountered this error during the exporting to image stage:
textERROR: failed to build: failed to solve: mount callback failed ... 
ref moby/1/... locked ... : unavailable
Good news: This error is not caused by your Dockerfile.
Your Dockerfile is correct and simple.
dockerfileFROM alpine:latest AS base

RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash hledger

WORKDIR /opt
RUN mkdir hledger_data

RUN hledger --version

ENTRYPOINT ["hledger"]
The issue is a temporary containerd / BuildKit lock that occurs at the end of the build.
Common Causes

Stale or dangling lock in BuildKit/containerd (most common)
Interrupted or concurrent builds
Docker Desktop glitch (especially on macOS or Windows)
Buildx builder in a bad state

Solutions (Try in This Order)
1. Quick Fix – Restart Docker
This resolves the issue in most cases.

Linux:Bashsudo systemctl restart docker
Docker Desktop:
Fully quit Docker Desktop and restart it.

2. Clean BuildKit Cache (What Worked for You)
Bashdocker builder prune -f
Or more thorough:
Bashdocker buildx prune -f
docker system prune -f
3. Build Without Cache
Bashdocker build --no-cache -f Dockerfile-hledger -t hledger-test .
4. Disable BuildKit (for testing)
BashDOCKER_BUILDKIT=0 docker build -f Dockerfile-hledger -t hledger-test .
5. Check Disk Space
Bashdf -h /var/lib/docker
docker system df
Recommendation
After cleaning with docker buildx prune, your build should now work reliably.
If the error returns in the future, the fastest recovery is usually:

Restart Docker Desktop / Docker service
Run docker builder prune -f
