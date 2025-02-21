---
title: Views
---

# Views

Gorim uses class-based views similar to [django-rest-framework](https://www.django-rest-framework.org/api-guide/views/).

## GenericViewSet

The `GenericViewSet` provides common functionality like:

### GetQuerySet
Returns the queryset that should be used for `List` views, and that should be used as the base for lookups in `Detail` views. Defaults to returning the queryset specified by the queryset attribute.

May be overridden to provide dynamic behavior, such as returning a queryset, that is specific to the user making the request.

For example:
```go
func (v *GenericViewSet[T]) GetQuerySet() *gorm.DB {
	if v.Action == "Profile" {
		return v.GetQuerySet().Preload("Profile") // Preload Profile model
	}
	return v.GetQuerySet()
}
```

### GetObject

Return the single object that should be used for `Detail` views.

May be overridden to return a struct from model specified in the GenericViewSet.

For example:
```go
import (
	"gorim.org/gorim/utils"
)

func (v *GenericViewSet[T]) GetObject() *T {
	if v.Action == "Profile" {
		queryset := v.GetQuerySet().Preload("Profile")
		return utils.GetObjectOr404[T](queryset, "id = ?", v.Context.Param("pk"))
	}
	return v.GetObject()
}
```

### GetSerializerStruct

Return the serializer struct that should be used for the view.

May be overridden to return a different serializer struct.
For example:
```go

func(v *GenericViewSet[T]) GetSerializerStruct() serializers.IModelSerializer[T] {
    if v.Action == "UpdateProfile" {
        return &UpdateProfileSerializer{}
    }
	return v.Serializer
}
```

### GetPermissions

Return the permissions that should be used for the view.

May be overridden to return a different permissions struct.

For example:
```go
import (
	"gorim.org/gorim/interfaces"
	"gorim.org/gorim/permissions"
)

func (v *GenericViewSet[T]) GetPermissions(c gorim.Context) []interfaces.IPermission {
    // Allow all users to list without authentication
	if v.Action == "List" {
		return []interfaces.IPermission{
			&permissions.AllowAny{},
		}
	}
	return v.GetPermissions()
}
```