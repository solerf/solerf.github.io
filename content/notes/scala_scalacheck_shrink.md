+++
title = 'scalacheck shrink'
date = '2025-10-12T21:13:13+02:00'
draft = false
tags = ['scala', 'scalacheck']
+++

When working with `scalacheck` or `scalacheck-effect` for property testing, using arbitrary and generators
they will usually __shrink__ the test inputs to explore different cases and might generate invalid values which will
fail the test.
For some cases, in theory, those invalid values would never happen, be it for previous validations of the specific
feature or whatever.

So we might want to __NOT__  __shrink__ the inputs. The easiest way is to use:

```scala
// when scalacheck
Prop.forAllNoShrink(genA) { a =>
...
}

// when scalacheck-effect
PropF.forAllNoShrinkF(genA) { a =>
...
}
```

But might happen that we don't want to __shrink__ all inputs, when you have more than one input generator:

```scala
Prop.forAll(genA, genB, genC) { (a, b, c) =>
...
}
```

So the options are:

1. For scala `2.12`, use the `Stream` api

```scala
implicit val s: Shrink[Int] = Shrink { x: Int =>
  Stream.iterate(x / 2)(x: Int => x / 2).takeWhile(x: Int => x > 0)
}
```

The problem with `Stream` is that it was deprecated after version `2.12`

2. For scala `2.13`

```scala
implicit val s: Shrink[Int] = Shrink.shrinkIntegral[Int].suchThat(_ > 0)
// or  
implicit val s: Shrink[List[Int]] = Shrink.shrinkContainer[List, Int].suchThat(_.nonEmpty)
```

- [Good read on how __shrink__ works](https://blog.ssanj.net/posts/2017-04-12-how-does-scalacheck-shrinking-work.html)
