---
title: Mixins
---

# Mixins

Gorim adopts [django-rest-framework](https://www.django-rest-framework.org/api-guide/mixins/) to provide a powerful mixins system that allows you to add additional functionality to your views.
It `requires` to be embedded in your new `CustomView` struct with the `GenericViewSet` struct first followed by the mixin struct.

## ListMixin

The `ListMixin` is a mixin that provides a list of objects.
May be overridden for custom behavior.

for example:
```go
import (
	"gorim.org/gorim/mixins"
)

type UserListView struct {
    mixins.GenericViewSet
	mixins.ListMixin
}

func (v *UserListView) List(ctx gorim.Context) {
    // custom logic here
    return v.ListMixin.List(ctx)
}
```

## RetrieveMixin

The `RetrieveMixin` is a mixin that provides a single object.
May be overridden for custom behavior.

for example:
```go
import (
	"gorim.org/gorim/mixins"
)

type UserDetailView struct {
    mixins.GenericViewSet
	mixins.RetrieveMixin
}

func (v *UserDetailView) Retrieve(ctx gorim.Context) {
    // custom logic here
    return v.RetrieveMixin.Retrieve(ctx)
}
```

## CreateMixin

The `CreateMixin` is a mixin that provides a single object.
