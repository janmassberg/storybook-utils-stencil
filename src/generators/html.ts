import type { CodeGeneratorArgs } from "./types";
import {
    ArgEntries,
    filterHtmlAttributes,
    formatHtml,
    toKebabCase,
} from "../utils";

const generateHtmlAttributes = (attributes: ArgEntries): string => {
    return attributes
        .map(([key, value]) => {
            key = toKebabCase(key);
            if (typeof value === "boolean") {
                return value ? key : "";
            }
            return `${key}="${value}"`;
        })
        .filter((str) => str !== "")
        .join(" ");
};

export const generateSourceHtmlMarkup = ({
    component,
    args,
}: CodeGeneratorArgs): string => {
    const htmlAttributes = generateHtmlAttributes(filterHtmlAttributes(args));
    const children = args?._slot || "";
    return formatHtml(
        `<${component} ${htmlAttributes}>${children}</${component}>`
    );
};
