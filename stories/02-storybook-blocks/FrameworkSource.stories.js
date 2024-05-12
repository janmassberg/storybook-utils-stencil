import * as React from "react";
import { storyWrapper } from "../utils";
import { FrameworkSource } from "../../src";
import { testArgsComponentGenerator } from "../../src/test-utils/testArgs";

export default {
    title: "Storybook Blocks/FrameworkSource",
    component: FrameworkSource,
    decorators: [storyWrapper],
    argTypes: {
        theme: {
            control: {
                type: "inline-radio",
                options: ["dark", "light"],
            },
        },
    },
    args: testArgsComponentGenerator,
};

export const Default = {
    parameters: {
        docs: {
            description: {
                story: "By default, the component is styled based on the `dark` theme",
            },
        },
    },
};

export const LightTheme = {
    parameters: {
        docs: {
            description: {
                story: 'Set `theme="light"` if you prefer a light background',
            },
        },
    },
    args: {
        theme: "light",
    },
};
