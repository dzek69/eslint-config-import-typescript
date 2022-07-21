# eslint-config-import-typescript

These are my preferred Import Plugin code style linting rules. You'll probably hate them.

This is an TypeScript addition to "base" `@dzek69/eslint-config-import` package. Using this package alone doesn't make
sense. Also you HAVE TO have `@dzek69/eslint-config-typescript` set up already.

## Idea behind these

No tricks, no magic, no useless code, no complicated code. Very opinionated. Rules that duplicates features of IDEs are
disabled.

## Installation

Installation steps assumes you've already configured base eslint config, ie: installed
[my base rules](https://github.com/dzek69/eslint-config-base). Installation steps also adds "base" eslint-config-import.

```
npm i eslint-plugin-import @dzek69/eslint-config-import @dzek69/eslint-config-import-typescript --save-dev
```

In your `.eslintrc` file add the rules in `extends` array:
```json
{
  "extends": [
    "@dzek69/eslint-config-import-typescript"
  ]
}
```

It will automatically define proper plugin.

Then to lint `src` and `test` directories with subdirectories run:
```
npx eslint src test --ext .ts,.tsx,.js,.jsx,.mjs
```

## Full config example

```json
{
    "extends": [
        "@dzek69/eslint-config-base",
        "@dzek69/eslint-config-typescript",
        "@dzek69/eslint-config-import",
        "@dzek69/eslint-config-import-typescript"
    ],
    "env": {
        "node": true
    },
    "parserOptions": {
        "sourceType": "module"
    }
}
```

## License

MIT
