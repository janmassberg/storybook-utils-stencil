# @jmassberg/storybook-utils

Utilities, code generators and components for storybook based library documentation

## Requirements

This library is meant to be used in storybook projects.
The provided utilities and components depend on modules that are usually installed with storybook.

## Installation

```shell
npm i @jmassberg/storybook-utils
```

## Utilities

#### Usage example: generateSourceCode

```jsx
import {
    generateSourceCodeHtml,
    generateSourceCodeJavascript,
    generateSourceCodeReact,
} from "@jmassberg/storybook-utils";

const args = {
    testFalse: false,
    testTrue: true,
    testString: "test-string",
    testNumber: 12345,
    testArray: [1, 2, 3],
    testObject: {
        foo: "bar",
    },
    onTestEvent: testArgEventHandler,
    _children: "Test children",
};

const htmlCode = generateSourceCodeHtml("my-component", args);
const jsCode = generateSourceCodeJavascript("my-component", args);
const reactCode = generateSourceCodeReact("my-component", args);
```

## Components

#### Usage example: SourceCode

In your MDX story:

```jsx
import { SourceCode } from "@jmassberg/storybook-utils";

<SourceCode
    theme="dark"
    codeBlocks={{
        html: [
            {
                language: "html",
                code: "<my-component id='test-id'></my-component>"
            }
        ],
        javascript: [
            {
                language: "javascript",
                code: "const element = document.querySelector('my-component#test-id');"
            }
        ]
    }}
/>
```
