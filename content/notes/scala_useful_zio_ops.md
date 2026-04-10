+++
title = 'Useful ZIO Ops'
date = '2025-10-22T01:13:07+01:00'
draft = false
tags = ['scala', 'zio']
+++

Useful `zio` ops (extensions) at scala 2.13.

### Errors

```scala
implicit class ZIOThrowableOps[R, A](self: ZIO[R, Throwable, A]) {
    def enrich[E <: YourCustomError](desc: String)(implicit ct: ClassTag[E]): ZIO[R, E, A] =
      self.flatMapError { e =>
        // ... do your handlings
        ZIO
          .logErrorCause("add logging...", fail(e))
          .as {
            // transform if needed
          }
      }
  }
```

### Streams

```scala
implicit class ZStreamOps[-R, +E, +A](self: ZStream[R, E, A]) {
    // this is bucket throttle. this means, fill the bucket at rate of `config.requestBatchSize` per `config.requestBatchDelay`
    // be aware that this process is by `Chunks` so it builds chunks of `config.requestBatchSize` elements
    // each token costs is `(_ => _.size)`, the size of the chunk ::
    // meaning it let pass chunks of `config.requestBatchSize` elements
    def throttled(batchSize: Int, delay: zio.Duration): ZStream[R, E, A] =
      self
        .rechunk(batchSize)
        .throttleShape(batchSize.toLong, delay)(_.size.toLong)
  }
```
