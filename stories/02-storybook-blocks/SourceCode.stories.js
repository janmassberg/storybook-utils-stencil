import * as React from "react";
import { storyWrapper } from "../utils";
import {
    generateSourceHtmlScript,
    generateSourceHtmlMarkup,
    SourceCode,
} from "../../src";
import { testArgsComponentGenerator } from "../../src/test-utils/testArgs";

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
                    code: generateSourceHtmlMarkup(testArgsComponentGenerator),
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
                    code: generateSourceHtmlMarkup(testArgsComponentGenerator),
                },
                {
                    language: "html",
                    code: generateSourceHtmlScript(testArgsComponentGenerator),
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
