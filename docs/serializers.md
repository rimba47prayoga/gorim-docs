---
title: Serializers
---

# Serializers in Gorim

Gorim provides a powerful way to convert JSON to struct with complex validation and serialization logic.

## Basic Usage

```go
import (
	"gorim.org/gorim/serializers"
	"myproject/models"
)

type UserSerializer struct {
    serializers.ModelSerializer[models.User]
    ID   int    `json:"id"`
    Name string `json:"name"`
}
```

## Validation

Gorim provides a powerful way to validate data using serializers.

```go
import (
	"gorim.org/gorim/serializers"
)

type UserSerializer struct {
    serializers.ModelSerializer[models.User]
    ID   int    `json:"id"`
    Name string `json:"name"`
}

func (s *UserSerializer) Validate() {
    // call the parent validate method first for default validation
    s.ModelSerializer.Validate()

    if s.Name == "Bad User" {
        s.AddError("name", "Name cannot be Bad User")
    }
}
```

## Single Field Validation

Gorim provides a powerful way to validate a single field using `Validate{FieldName}` followed by the field name.

for example:

```go
import (
	"gorim.org/gorim/serializers"
)

type UserSerializer struct {
    serializers.ModelSerializer[models.User]
    Name string `json:"name"`
}

func (s *UserSerializer) ValidateName() {
    if s.Name == "Bad User" {
        s.AddError("name", "Name cannot be Bad User")
    }
}
```



