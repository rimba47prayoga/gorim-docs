---
title: Middleware
---

# Middleware

Gorim uses struct-based middleware.

## Basic Usage

```go
import (
	"gorim.org/gorim/middlewares"
)

type MyMiddleware struct {
    middlewares.BaseMiddleware
}
func (m *MyMiddleware) Call(c gorim.Context) error {
    // Your middleware logic here
    return nil
}
```

## Built-in Middleware

Gorim provides some built-in middleware:

### RecoverMiddleware

The `RecoverMiddleware` is a middleware that recovers from panics and returns a 500 error.

### LoggerMiddleware

The `LoggerMiddleware` is a middleware that logs the request and response in the console.

### AuthenticationMiddleware

The `AuthenticationMiddleware` is a middleware that authenticates the request.