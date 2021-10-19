import { formatHtml } from "./formatHtml";
import { filterEventHandlers, filterJsxProperties, ArgsType } from "./argUtils";
import { objectToString } from "./sourceCodeUtils/utils";

export const generateVanillaJsCode = (
    component: string,
    props: [string, any][],
    events: [string, any][]
): string => {
    if (props.length === 0 && events.length === 0) {
        return "";
    }
    const jsProps =
        props.length > 0
            ? props
                .map(
                    ([key, value]) =>
                        `element.${key} = ${objectToString(value)};`
                )
                .join("\n")
            : "";
    const jsEvents =
        events.length > 0
            ? events
                .map(
                    ([key, value]) =>
                        `element.addEventListener("${key}", ${value.toString()});`
                )
                .join("\n")
            : "";
    return `
    const element = document.querySelector("${component}");
    ${jsProps}
    ${jsEvents}
    `;
};

export const generateSourceCodeVanillaJs = (
    component: string,
    args: any
): string => {
    const eventHandlers = filterEventHandlers(args);
    const jsxProps = filterJsxProperties(args);
    return formatHtml(
        `<script>${generateVanillaJsCode(component, jsxProps, eventHandlers)}</script>`);
};
