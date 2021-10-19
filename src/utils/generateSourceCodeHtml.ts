import { toKebabCase } from "./stringUtils";
import { formatHtml } from "./formatHtml";
import { filterHtmlAttributes, ArgsType } from "./argUtils";

const generateHtmlAttributes = (attributes: ArgsType): string => {
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

export const generateSourceCodeHtml = (
    component: string,
    args: any
): string => {
    const htmlAttributes = generateHtmlAttributes(filterHtmlAttributes(args));
    const children = args._children || "";
    return formatHtml(
        `<${component} ${htmlAttributes}>${children}</${component}>`
    );
};
