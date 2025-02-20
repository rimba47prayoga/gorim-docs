# Getting Started

This guide will help you set up and create your first Gorim application.

## Prerequisites

- Go 1.22.0 or higher installed on your system
- Basic understanding of Go programming
- Familiarity with web development concepts

## Installation

Install Gorim using the Go package manager:
```sh
go get gorim.org/gorim
```

## Creating Your First Project

### 1. Project Structure

Create a new directory for your project and initialize a Go module:

```sh
mkdir myproject
cd myproject
go mod init myproject
```

A typical Gorim project structure looks like this:

```
myproject/
├── main.go
├── settings/
│   └── config.go
├── user/
│   ├── views.go
│   ├── router.go
│   └── serializers.go
├── models/
│   └── user.go
└── migrations/
```

### 2. Basic Setup

Create a `config.go` file in the settings directory:

```go
package settings

import "gorim.org/gorim"

var Settings = &gorim.Settings{
    Debug: true,
    Database: gorim.DatabaseSettings{
        Driver:   "postgres",
        Host:     "localhost",
        Port:     5432,
        Name:     "mydb",
        User:     "postgres",
        Password: "password",
    },
    Server: gorim.ServerSettings{
        Host: "localhost",
        Port: 8000,
    },
}
```

### 3. Creating a Simple Model

Create a model in `myproject/models/user.go`:

```go
package models

import "gorim.org/gorim/models"

type User struct {
	models.BaseModel // Optional: This will add id, created_at, updated_at, deleted_at fields
	Email		string		`validate:"required,email" json:"email"`
	Password	string		`validate:"required" json:"password"`
}
```

### 4. Creating a Simple Serializer

Create a serializer in `myproject/user/serializers.go`:

```go
package user

import (
	"myproject/models"
	"gorim.org/gorim/serializers"
)

type UserSerializer struct {
	serializers.ModelSerializer[models.User]
	Email		string		`validate:"required,email" json:"email"`
	Password	string		`validate:"required" json:"password"`
}

```

### 5. Creating a Simple View

Create a view in `myproject/user/views.go`:

```go
package user

import (
    "gorim.org/gorim/views"
    "myproject/models"
)

type UserViewSet struct {
	views.ModelViewSet[models.User]
}

func NewUserViewSet() *UserViewSet {
	var serializer UserSerializer
	viewset := UserViewSet{}
	params := views.ModelViewSetParams[models.User]{
		Serializer: &serializer,
		Child: &viewset,
	}
	modelViewSet := views.NewModelViewSet(params)
	viewset.ModelViewSet = *modelViewSet
	return &viewset
}
```

### 6. Setting Up Routes

In your `myproject/user/router.go`:

```go
package user

import (
	"net/http"

	"gorim.org/gorim"
	"gorim.org/gorim/routers"
)

func RouterUser(group *gorim.Group) {
	routeGroup := group.Group("/users")
	routers.NewDefaultRouter[*UserViewSet](routeGroup, NewUserViewSet)
}
```

## Running Your Application

1. Apply migrations (if any):
```sh
go run main.go migrate
```

2. Start the server:
```sh
go run main.go runserver
```

Your application will be available at `http://localhost:8000`.

## Next Steps

- Learn about [Serializers](./serializers.md)
- Explore [Class-Based Views](./views.md)
- Understand [Permissions](./permissions.md)
- Work with [Migrations](./migrations.md)

## Need Help?
- Report issues on [GitHub](https://github.com/rimba47prayoga/gorim/issues)
- Join the community [Discord](https://discord.gg/gorim)
