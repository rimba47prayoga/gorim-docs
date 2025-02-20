# Introduction

Gorim is a powerful web framework for Go developers who value both productivity and code quality. Inspired by Django REST Framework, it brings battle-tested patterns and conventions to the Go ecosystem while maintaining Go's performance and type safety advantages.

## Key Features

### Django-Inspired Design
Built on proven patterns from Django REST Framework, Gorim offers a familiar and battle-tested architecture that helps Go developers build robust APIs quickly and efficiently.

### Type-Safe ViewSets
Gorim leverages Go's generics to provide type-safe ModelViewSets and serializers. This ensures compile-time type checking and better IDE support while maintaining the flexibility of Django-style views.

### Powerful ORM Integration
With seamless GORM integration, Gorim provides:
- Built-in filtering system
- Automatic pagination
- Advanced querying capabilities
- Database migrations support

### Comprehensive Middleware
Gorim includes production-ready middleware for:
- Authentication
- Logging
- Error handling with panic recovery
- Custom middleware support

### Flexible Serialization
The serialization system includes:
- Validation support
- Nested relationship handling
- Custom field handling
- Type-safe model serialization

### Enterprise Ready
Gorim is built for production use with features like:
- Structured error handling
- Comprehensive permissions system
- Database migrations
- Panic recovery
- Logging middleware

## Philosophy

Gorim follows the "batteries included" philosophy, providing everything needed to build production-ready APIs while maintaining the flexibility to customize any component. It emphasizes:

1. **Developer Productivity**: Reduce boilerplate while maintaining Go's type safety
2. **Best Practices**: Follow established patterns from Django REST Framework
3. **Type Safety**: Leverage Go's type system for better reliability
4. **Extensibility**: Easy to customize and extend any component
5. **Production Ready**: Built-in features for enterprise applications

## Getting Started

To start using Gorim, check out the [Getting Started](./get-started.md) guide or explore specific topics:

- [Serializers](./serializers.md) - Learn about data validation and serialization
- [Views](./views.md) - Understand class-based views and ViewSets
- [Permissions](./permissions.md) - Implement access control
- [Error Handling](./error-handling.md) - Handle errors gracefully
- [Middleware](./middleware.md) - Add custom middleware
- [Filtering](./filter.md) - Query data efficiently
- [Pagination](./pagination.md) - Handle large datasets

## Community

- Report issues on [GitHub](https://github.com/rimba47prayoga/gorim/issues)
- Join the community [Discord](https://discord.gg/gorim)
- Contribute to the project [here](https://github.com/rimba47prayoga/gorim)
