+++
title = 'Go check stdin'
date = '2026-02-25T12:52:45+01:00'
draft = false 
tags = ['go']
+++

When writing terminal programs with `go` a nice way to identify if input data is comming from a piped command:

```go
stat, _ := os.Stdin.Stat()
if (stat.Mode() & os.ModeCharDevice) == 0 {
    fmt.Println("data is being piped to stdin")
} else {
    fmt.Println("stdin is from a terminal")
}
```

Source: https://stackoverflow.com/questions/22744443/check-if-there-is-something-to-read-on-stdin-in-golang/26567513#26567513
