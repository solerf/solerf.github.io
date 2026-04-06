+++
title = 'go build/install arch & os'
date = '2025-09-22T12:18:00+02:00'
draft = false
tags = ['go']
+++

To set `GOOS` and `GOARCH` by the current machine:
```shell
# GOOS
$(uname -o | sed 's/gnu\///i' | tr '[:upper:]' '[:lower:]')

#GOARCH
$(uname -m | sed 's/aarch64/arm64/i' | sed 's/x86_64/amd64/i')
```

Or use fixed values and iterate over them
```shell
goos='darwin linux'
goarch='arm64 amd64'

for os in $goos; do
  for arch in $goarch; do
      env GOOS=$os GOARCH=$arch go build -o $output .
  done
done
```
