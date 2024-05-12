import * as React from "react";
import {
    ThemeProvider,
    convert as convertTheme,
    themes,
} from "@storybook/theming";
import {
    generateSourceCodeAngularComponent,
    generateSourceCodeAngularHtml,
    generateSourceCodeJavascript,
    generateSourceCodeVue,
    generateSourceCodeReact,
    generateSourceCodeHtml,
    SourceCode,
} from "../../src";
import { testArgs } from "../../src/test-utils/testArgs";

const Template = ({ theme = "dark", codeBlocks }) => {
    return <SourceCode theme={theme} codeBlocks={codeBlocks} />;
};

const theme = convertTheme(themes.light);

const storyWrapper = (Story) => {
    return <ThemeProvider theme={theme}>{Story()}</ThemeProvider>;
};

export default {
    title: "Components/SourceCode",
    component: SourceCode,
    decorators: [storyWrapper],
    argTypes: {
        theme: {
            control: {
                type: "radio",
                options: ["dark", "light"],
            },
        },
    },
    args: {
        theme: "dark",
        codeBlocks: {
            html: [
                {
                    language: "html",
                    code: generateSourceCodeHtml("my-component", testArgs),
                },
            ],
            javascript: [
                {
                    language: "javascript",
                    code: generateSourceCodeJavascript(
                        "my-component",
                        testArgs
                    ),
                },
            ],
        },
    },
};

export const Default = {};

export const LightTheme = {
    args: {
        theme: "light",
    },
};

export const MultipleBlock = {
    args: {
        codeBlocks: {
            javascript: [
                {
                    language: "html",
                    code: generateSourceCodeHtml("my-component", testArgs),
                },
                {
                    language: "html",
                    code: generateSourceCodeJavascript(
                        "my-component",
                        testArgs
                    ),
                },
            ],
        },
    },
};

export const MultipleTabs = {
    args: {
        codeBlocks: {
            html: [
                {
                    language: "html",
                    code: "<my-component id='test-id'></my-component>",
                },
            ],
            javascript: [
                {
                    language: "javascript",
                    code: "const element = document.querySelector('my-component#test-id');",
                },
            ],
        },
    },
};

export const AllFrameworks = {
    args: {
        codeBlocks: {
            VanillaJS: [
                {
                    language: "html",
                    code: generateSourceCodeHtml("my-component", testArgs),
                },
                {
                    language: "html",
                    code: generateSourceCodeJavascript(
                        "my-component",
                        testArgs
                    ),
                },
            ],
            Angular: [
                {
                    language: "html",
                    code: generateSourceCodeAngularHtml(
                        "my-component",
                        testArgs
                    ),
                },
                {
                    language: "typescript",
                    code: generateSourceCodeAngularComponent(
                        "my-component",
                        testArgs
                    ),
                },
            ],
            React: [
                {
                    language: "jsx",
                    code: generateSourceCodeReact("my-component", testArgs),
                },
            ],
            Vue: [
                {
                    language: "html",
                    code: generateSourceCodeVue("my-component", testArgs),
                },
            ],
        },
    },
};
