---
title: Filter
---

# Filter in Gorim

Gorim adopts [django-filter](https://github.com/carltongibson/django-filter) to provide a powerful filtering system that allows you to filter querysets based on the request parameters with seamless integration with the GenericViewSet.

## FilterSet

The `FilterSet` is a struct that contains the filters for the view.
It must be embedded in your new `CustomFilterSet` struct.

For example:
```go
import (
    "gorim.org/gorim"
	"gorim.org/gorim/filters"
)

type CustomFilterSet struct {
	filters.FilterSet
    Name    string `json:"name" db:"name" operator:"like"`
    Search  string `json:"search" method:"FilterSearch"`
}

func (f *CustomFilterSet) FilterSearch(ctx gorim.Context, queryset *gorm.DB) *gorm.DB {
    search := ctx.Query("search")
    return queryset.Where("name LIKE ? OR description LIKE ?", "%"+search+"%", "%"+search+"%")
}
```


