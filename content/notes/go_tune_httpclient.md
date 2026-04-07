+++
title = 'Tune Go httpclient'
date = '2026-03-14T23:31:53+01:00'
draft = false
tags = ['go']
+++

```go
// this is how to create a scalable HTTP client using the standard library

transport := &http.Transport{
  MaxIdleConns: 10, // global number of idle conns
  MaxIdleConnsPerHost: 5, // subset of MaxIdleConns, per-host
  // declare a conn idle after 10 seconds. too low and conns are recycled too much, too high and conns aren't recycled enough
  IdleConnTimeout: 10 * time.Second, 
  // DisableKeepAlives: true, // this means create a new connection per request. not recommended
}
cl := &http.Client{
  Transport: transport,
  Timeout: 2 * time.Second,
}
```

Right now the `Timeout` at the `http.Client` is not need with the use of the `WithContext` option
when creating a request.

Source:
- https://gist.github.com/arschles/b6e216fe99dd2d137e93986e86430678
- https://github.com/astavonin/go-optimization-guide
