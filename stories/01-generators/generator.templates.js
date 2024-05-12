import { testArgsButton } from "../../src/test-utils/testArgs";

export const generatorIntegrationSourceArgs = `{
    component: "ui-button",
    args: {
        required: true,
        variant: "primary",
        onClick: (event) => {
            // Handle click event
            console.log(event.target);
        },
        _slot: "Label",
    }
}`;

export const generatorIntegrationArgs = {
    component: "ui-button",
    args: testArgsButton,
};
