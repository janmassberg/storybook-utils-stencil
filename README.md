[![Node version](https://img.shields.io/node/v/npm.svg?style=flat)](https://nodejs.org/download/)

# Storybook Utils

**Utilities, code generators and components for Storybook-based library documentation**

This library is designed for use in projects that use Storybook for documentation.

- [Installation](#installation)
- [Source Code Generators](#Source-code-generators)
- [Storybook Blocks](#storybook-blocks)


The provided components depend on modules that are typically installed with Storybook.

## Installation

```shell
npm i -D @jmassberg/storybook-utils
```

## Source Code Generators

### Available Generators

- `generateSourceAngularHtml: CodeGeneratorFn`
- `generateSourceAngularComponent: CodeGeneratorFn`
- `generateSourceHtmlMarkup: CodeGeneratorFn`
- `generateSourceHtmlScript: CodeGeneratorFn`
- `generateSourceReactFC: CodeGeneratorFn`
- `generateSourceReactJsx: CodeGeneratorFn`
- `generateSourceVueComponent: CodeGeneratorFn`

### Interface

```typescript
interface CodeGeneratorFn {
    (args: CodeGeneratorArgs): string;
}

interface CodeGeneratorArgs {
    component: string;
    args: Record<string, unknown>;
}
```

### Example

#### Generate React JSX Source Code

```jsx
import { generateSourceReactJsx } from "@jmassberg/storybook-utils";

const reactJsx = generateSourceReactJsx({
    component: "my-component",
    args: {
        _slot: "Label",
        variant: "primary",
        required: true,
        onChange: (event) => {
            // Handle event
        }
    }
});
```

## Storybook Blocks

### Available Components

- `FrameworkSource`
- `SourceCode`

#### SourceCode

```jsx
import { FrameworkSource } from "@jmassberg/storybook-utils";

<FrameworkSource
    theme="dark"
    component="my-component"
    args={{
        _slot: "Label",
        variant: "primary",
        required: true,
        onChange: (event) => {
            // Handle event
        }
    }}
/>
```

#### SourceCode

```jsx
import { SourceCode } from "@jmassberg/storybook-utils";

<SourceCode
    theme="dark"
    codeBlocks={{
        HTML: [
            {
                language: "html",
                code: "<my-component id='test-id'></my-component>"
            }
        ],
        Javascript: [
            {
                language: "javascript",
                code: "const element = document.querySelector('my-component#test-id');"
            }
        ]
    }}
/>
```
