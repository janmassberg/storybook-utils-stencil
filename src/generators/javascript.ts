import type { CodeGeneratorArgs } from "./types";
import {
    ArgEntries,
    filterEventHandlers,
    filterJsxProperties,
    formatHtml,
    objectToString,
} from "../utils";

const generateJavascriptCode = (
    component: string,
    props: ArgEntries,
    events: ArgEntries
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
                          `element.addEventListener("${key}", ${objectToString(
                              value
                          )});`
                  )
                  .join("\n")
            : "";
    return `
    const element = document.querySelector("${component}");
    ${jsProps}
    ${jsEvents}
    `;
};

export const generateSourceHtmlScript = ({
    component,
    args,
}: CodeGeneratorArgs): string => {
    const eventHandlers = filterEventHandlers(args);
    const jsxProps = filterJsxProperties(args);
    const jsCode = generateJavascriptCode(component, jsxProps, eventHandlers);
    return jsCode === "" ? "" : formatHtml(`<script>${jsCode}</script>`);
};
