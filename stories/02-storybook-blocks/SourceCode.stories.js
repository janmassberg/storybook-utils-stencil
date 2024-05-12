import * as React from "react";
import { storyWrapper } from "../utils";
import {
    generateSourceCodeJavascript,
    generateSourceCodeHtml,
    SourceCode,
} from "../../src";
import { testArgs } from "../../src/test-utils/testArgs";

export default {
    title: "Storybook Blocks/SourceCode",
    component: SourceCode,
    decorators: [storyWrapper],
    argTypes: {
        theme: {
            control: {
                type: "inline-radio",
                options: ["dark", "light"],
            },
        },
    },
    args: {
        theme: "dark",
        codeBlocks: {
            HTML: [
                {
                    language: "html",
                    code: generateSourceCodeHtml("my-component", testArgs),
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
            HTML: [
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
            HTML: [
                {
                    language: "html",
                    code: "<my-component id='test-id'></my-component>",
                },
            ],
            Javascript: [
                {
                    language: "javascript",
                    code: "const element = document.querySelector('my-component#test-id');",
                },
            ],
        },
    },
};
