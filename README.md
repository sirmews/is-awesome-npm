# is-awesome

A simple package to determine level of awesome based on whether a supplied string of followers includes Jade.

To be clear this is a joke package based on a [LinkedIn post](https://www.linkedin.com/feed/update/urn:li:activity:7314346981928169472)

## Installation

```bash
npm install is-awesome
# or
bun install is-awesome
```

## Usage

```typescript
import { levelOfAwesomeness } from "is-awesome";

// Check if something is awesome
console.log(levelOfAwesomeness(["Jade"])); // Output: 'Awesome'
console.log(levelOfAwesomeness(["John", "Clyde"])); // Output: 'Lame'
```

## Development

This package uses Bun for development. To get started:

1. Clone the repository
2. Run `bun install`
3. Run `bun test` to run tests
4. Run `bun run build` to build the package

## Publishing

Use the Makefile commands for easy deployment:

```bash
make test     # Run tests
make build    # Build the package
make publish  # Publish to npm
```

## License

[WTFPL](https://www.wtfpl.net)
