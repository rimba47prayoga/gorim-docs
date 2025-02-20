---
title: Permissions
---

# Permissions in Gorim

Gorim adopts the concept of permissions from [django-rest-framework](https://www.django-rest-framework.org/api-guide/permissions/).

## Basic Usage

```go
import (
	"gorim.org/gorim/permissions"
)

type IsAuthenticated struct {
    permissions.BasePermission
}

func (p *IsAuthenticated) HasPermission(c gorim.Context) bool {
    return c.User != nil
}
```

## Built-in Permissions

Gorim provides some built-in permissions:

### AllowAny

The `AllowAny` permission allows all users to access the resource.

### IsAuthenticated

The `IsAuthenticated` permission allows only authenticated users to access the resource.