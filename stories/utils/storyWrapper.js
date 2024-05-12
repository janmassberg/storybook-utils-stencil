import * as React from "react";
import {
    convert as convertTheme,
    ThemeProvider,
    themes,
} from "@storybook/theming";

const theme = convertTheme(themes.light);

export const storyWrapper = (Story) => {
    return <ThemeProvider theme={theme}>{Story()}</ThemeProvider>;
};
