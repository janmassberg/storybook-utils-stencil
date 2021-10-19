import { toKebabCase } from "./stringUtils";
import { formatHtml } from "./formatHtml";
import { filterHtmlAttributes, ArgsType } from "./argUtils";

const getHtmlAttributes = (attributes: ArgsType): string[] => {
    return attributes
        .map(([key, value]) => {
            key = toKebabCase(key);
            if (typeof value === "boolean") {
                return value ? key : "";
            }
            return `${key}="${value}"`;
        })
        .filter((str) => str !== "");
};

export const generateSourceCodeHtml = (
    component: string,
    args: any
): string => {
    const htmlAttributes = getHtmlAttributes(filterHtmlAttributes(args));
    const children = args._children || "";
    return formatHtml(
        `<${component} ${htmlAttributes.join(" ")}>${children}</${component}>`
    );
};
