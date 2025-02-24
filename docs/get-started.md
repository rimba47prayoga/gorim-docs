# Getting Started

This guide will help you set up and create your first Gorim application.

## Prerequisites

- Go 1.22.0 or higher
- Basic understanding of Go programming
- Familiarity with web development concepts

## Quick Start

1. Install the CLI:
```sh
go install gorim.org/gorim-cli@latest
```

2. Create a new project:
```sh
gorim-cli startproject myproject
cd myproject
gorim-cli startapp user
```

This creates:
```
myproject/
├── api/          # API routes
├── settings/     # Configuration
├── migrations/   # Database migrations
├── user/         # Your new app
├── main.go
└── .env
```

## Basic Setup

### 1. Database Setup

Gorim will use SQLite as default database. 

You can change it to your preferred database by updating the database settings in `myproject/settings/config.go`.

```go
func Configure() {
	// ...
	DATABASE = conf.Database{
		Name:     conf.GetEnv("DB_NAME", "sqlite.db"),
	}
}
```

### 2. Creating a Simple Model

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

Register the model to `myproject/migrations/register.go`:

```go
package migrations

func Register() []interface{} {
	return []interface{}{
		// Add your models here
		models.User{},
	}
}
```

### 3. Creating a Simple Serializer

Create a serializer in `myproject/apps/user/serializers.go`:

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

### 4. Creating a Simple View

Create a view in `myproject/apps/user/views.go`:

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

### 5. Setting Up Routes

In your `myproject/apps/user/router.go`:

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

Add to `myproject/api/routes.go`:

```go
package api

import (
	"myproject/api/user"
	"myproject/settings"
)

func APIRoutes() {
	api := settings.Server.Group("/api/v1")
	// Add your routes here
	user.RouterUser(api)
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

## Learn More
- [Serializers](./serializers.md)
- [Views](./views.md)
- [Permissions](./permissions.md)
- [Migrations](./migrations.md)

## Support
- [GitHub Issues](https://github.com/rimba47prayoga/gorim/issues)
- [Discord Community](https://discord.gg/gorim)