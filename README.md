# Gorim Documentation

This repository contains the documentation for Gorim, built using [VuePress](https://vuepress.vuejs.org/).

## Prerequisites

- Node.js (version 22 or higher)
- npm or yarn

## Setup

1. Clone the repository:

```bash
git clone https://github.com/rimba47prayoga/gorim-docs.git
cd gorim-docs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

## Development

To start the development server with hot-reload:

```bash
npm run docs:dev
# or
yarn docs:dev
```

The documentation will be available at `http://localhost:8080` by default.

## Building for Production

To build the documentation for production:

```bash
npm run docs:build
# or
yarn docs:build
```

The built files will be available in the `.vuepress/dist` directory.

## Project Structure

```
.
├── docs
│   ├── .vuepress
│   │   ├── config.js
│   │   └── components/
│   ├── guide/
│   ├── api/
│   └── README.md
└── package.json
```

## Configuration

The VuePress configuration is located in `docs/.vuepress/config.js`. Refer to the [VuePress documentation](https://vuepress.vuejs.org/config/) for more configuration options.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT

## Support

For support, please [create an issue](https://github.com/rimba47prayoga/gorim/issues) or contact [rimba47prayoga@gmail.com].
