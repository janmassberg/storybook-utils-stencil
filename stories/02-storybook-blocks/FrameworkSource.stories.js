import * as React from "react";
import { storyWrapper } from "../utils";
import { FrameworkSource } from "../../src";
import { testArgs } from "../../src/test-utils/testArgs";

const Template = ({ theme = "dark", component, props }) => {
    return (
        <FrameworkSource theme={theme} component={component} props={props} />
    );
};

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
    args: {
        theme: "dark",
        component: "my-component",
        props: testArgs,
    },
};

export const Default = {
    args: {
        component: "my-component",
        props: testArgs,
    },
};

export const LightTheme = {
    parameters: {
        docs: {
            description: {
                story: "",
            },
        },
    },
    args: {
        theme: "light",
    },
};
