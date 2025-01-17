---
title: "Implementing Coding Standards"
description: "Learn how to ensure consistent and high-quality code through established coding standards"
isDraft: false
publishDate: 2025-01-17
tags: ["coding-standards", "eslint", "style-guides"]
---

Maintaining coding standards is a crucial aspect of software development. Consistent coding practices ensure that projects remain manageable, understandable, and maintainable across teams. This article explores the importance of coding standards and provides practical guidance on their implementation.

## Why Coding Standards Matter

Coding standards help enforce best practices and consistency within a project. They:

- **Reduce errors** by highlighting common mistakes.
- **Improve readability**, making it easier for developers to understand and modify code.
- **Streamline collaboration** by providing a common framework for contributors.
- **Enhance onboarding** for new team members by eliminating guesswork regarding project conventions.

## Implementing Coding Standards

One of the most effective ways to maintain consistent code quality is to implement industry-proven [ESLint](https://eslint.org/) configurations. Many successful companies and projects rely on established style guides, with [Airbnb](https://github.com/airbnb/javascript)'s JavaScript Style Guide being one of the most widely adopted standards in the industry.

## Example of a ESLint Configuration

```typescript
/** @type { import("eslint").Linter.Config } */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"]
  },
  plugins: ["react", "@typescript-eslint", "prettier"]
}
```

> The above configuration, sourced from [CodingGarden](https://github.com/CodingGarden)'s [react-ts-starter](https://github.com/CodingGarden/react-ts-starter/blob/main/.eslintrc.cjs), applies the Airbnb style guide for TypeScript projects.

### Benefits of Established Standards

Using widely recognized style guides offers several advantages:

- Rules that prevent common mistakes
- Wide IDE and tooling support
- Easier onboarding for new team members

## Honorable Mention: antfu/eslint-config

While Airbnb's config is widely adopted, 'antfu/eslint-config' by Anthony Fu deserves special recognition for its modern and pragmatic approach to JavaScript/TypeScript linting. With it's default configuration and easy overridable rules, it's a great choice for modern projects.

### Example of [antfu/eslint-config](https://github.com/antfu/eslint-config/tree/main)

```javascript
// eslint.config.js
import antfu from "@antfu/eslint-config"

export default antfu({
  // Type of the project. 'lib' for libraries, the default is 'app'
  type: "lib",

  // Enable stylistic formatting rules
  // stylistic: true,

  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: "single" // or 'double'
  },

  // TypeScript and Vue are autodetected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    "**/fixtures"
    // ...globs
  ]
})
```

[comment]: <> (This article was created based on I want to be able to improve code quality through effective refactoring and technical feedback)
