# eslint-config-typescript

## Installation

```shell
npm install -D @flaforgue/eslint-config-typescript
yarn add -D @flaforgue/eslint-config-typescript
```

## Usage

Use in your `eslint.config.js` file:

```js
import { defineConfig } from "eslint/config";
import typescriptConfig from "@flaforgue/eslint-config-typescript";

export default defineConfig([
  // ...
  {
    files: [
      "**/*.{ts,tsx}",
    ],
    extends: [typescriptConfig],

    // anything from here will override typescriptConfig
    // rules: {
    //   "no-unused-vars": "warn",
    // },
  },
  // ...
]);
```

## License

ISC
