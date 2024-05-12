import type { CodeGeneratorArgs } from "./types";
import {
    ArgEntries,
    filterEventHandlers,
    filterHtmlAttributes,
    filterJsxProperties,
    formatHtml,
    formatJsx,
    objectToString,
    toKebabCase,
    toUpperCamelCase,
    ucFirst,
} from "../utils";

const transformAngularAttributes = (attributes: ArgEntries) => {
    return attributes.map(([key, value]) => {
        return `${toKebabCase(key)}="${value}"`;
    });
};

export const generateSourceCodeAngularHtml = ({
    component,
    args,
}: CodeGeneratorArgs): string => {
    const attribs = filterHtmlAttributes(args);
    const props = filterJsxProperties(args);
    const events = filterEventHandlers(args);
    const slot = args?._slot || "";

    const angularAttributes = transformAngularAttributes(attribs);
    const angularProps = props.map(([key]) => `[${key}]="${key}"\n`);
    const angularEvents = events.map(
        ([key]) => `(${key})="on${ucFirst(key)}($event)"\n`
    );

    const angularComponentSource = `
        <${component} ${angularAttributes.join(" ")} ${angularProps.join(
        " "
    )} ${angularEvents.join(" ")}>${slot}</${component}>`;
    return formatHtml(angularComponentSource);
};

export const generateSourceCodeAngularComponent = ({
    component,
    args,
}: CodeGeneratorArgs): string => {
    const props = filterJsxProperties(args);
    const events = filterEventHandlers(args);
    const angularProps = props.map(([key, value]) => {
        return `public ${key} = ${objectToString(value)};\n`;
    });
    const angularEventHandlers = events.map(
        ([key, value]) => `on${ucFirst(key)} (event: Event) {
            ${(value as string)
                .toString()
                .replace(/^[^{]+{/, "")
                .replace(/}$/, "")}
        }`
    );

    const componentName = `${toUpperCamelCase(component)}Example`;
    const componentSelector = `app-${toKebabCase(componentName)}`;
    const templateUrl = `./${toKebabCase(componentName)}.component.html`;
    const angularComponentSource = `import { Component } from "@angular/core";
${" "}
@Component({
    selector: '${componentSelector}',
    templateUrl: '${templateUrl}',
})
export class ${componentName}Component {
    ${angularProps.join("\n")}
    ${angularEventHandlers.join("\n")}
}
    `;
    return formatJsx(angularComponentSource);
};
