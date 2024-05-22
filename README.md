[![Node version](https://img.shields.io/node/v/npm.svg?style=flat)](https://nodejs.org/download/)

# Storybook + Web Components

**Utilities, code generators and components for Storybook-based library documentation of web-components.**

This library is designed for use in projects that use Storybook for documentation.

- [Installation](#installation)
- [Source Code Generators](#Source-code-generators)
- [Storybook Blocks](#storybook-blocks)


The provided components depend on modules that are typically installed with Storybook.

## Installation

```shell
npm i -D @jmassberg/storybook-web-components
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
import { generateSourceReactJsx } from "@jmassberg/storybook-web-components";

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

#### FrameworkSource

The `<FrameworkSource>` component can be used in MDX stories to display integration source for all supported frameworks
(HTML, Angular, React and Vue) in separate tabs.

```jsx
import { FrameworkSource } from "@jmassberg/storybook-web-components";

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

The `<SourceCode>` component can be used in MDX stories to group code snippets and provide a tab navigation to only show
code that is relevant for the user.

```jsx
import { SourceCode } from "@jmassberg/storybook-web-components";

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
