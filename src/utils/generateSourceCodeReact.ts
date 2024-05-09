import { formatJsx } from "./formatJsx";
import {
    ArgsType,
    filterEventHandlers,
    filterHtmlAttributes,
    filterJsxProperties,
} from "./argUtils";
import { objectToString } from "./objectToString";
import { objectToStringJsx } from "./objectToStringJsx";
import { toLowerCamelCase, toUpperCamelCase, ucFirst } from "./stringUtils";

const transformReactAttributes = (
    attributes: ArgsType
) => {
    return attributes
        .map(([key, value]) => {
            key = toLowerCamelCase(key);
            if (typeof value === "boolean") {
                return value ? key : "";
            }
            if (key === "class") {
                key = "className";
            }
            return `${key}=${objectToStringJsx(value)}`;
        })
        .filter((str) => !!str);
};

const transformReactAttributesString = (str: string): string => {
    return str.replace(
        new RegExp(`([a-z]-[a-z-]+)(="[^"]+")`, "g"),
        (_match, attrib, value) => {
            const valueTransformed = value === '="true"' ? "" : value;
            return `${toLowerCamelCase(attrib)}${valueTransformed}`;
        }
    );
};

const transformChildComponents = (str: string): string => {
    if (!str) {
        return "";
    }
    const matches = str.match(/<([a-z-]+-[a-z-]+)/g);
    const tagNames: string[] = [];
    if (matches && matches.length) {
        matches.forEach((match) => {
            const tagName = match.replace(/[<>/]/g, "");
            if (tagNames.indexOf(tagName) === -1) {
                tagNames.push(tagName);
            }
        });
    }
    tagNames.sort((a, b) => b.length - a.length);
    tagNames.forEach((tagName) => {
        const reactTagName = toUpperCamelCase(tagName);
        str = str.replace(new RegExp(tagName, "g"), reactTagName);
        str = str.replace(
            new RegExp(`<${reactTagName}([^/>]+)`, "g"),
            (_, attributes) => {
                return `<${reactTagName}${transformReactAttributesString(
                    attributes
                )}`;
            }
        );
    });
    return str.replace(/(\s)class=/gi, "$1className=");
};

export const generateSourceCodeReact = (
    component: string,
    args: Record<string, unknown>
) => {
    const attribs = filterHtmlAttributes(args);
    const props = filterJsxProperties(args);
    const events = filterEventHandlers(args);
    const slot = typeof args._children === "string" ? args._children : "";

    const reactComponentName = toUpperCamelCase(component);
    const reactAttributes = transformReactAttributes(attribs);
    const reactProps = props.map(
        ([key]) =>
            `${toLowerCamelCase(key)}={${toLowerCamelCase(key)}}\n`
    );
    const reactEvents = events.map(
        ([key]) => `on${ucFirst(key)}={on${ucFirst(key)}}\n`
    );
    const reactComponentJsx = `<${reactComponentName}
        ${reactAttributes.join(" ")}
        ${reactProps.join(" ")}
        ${reactEvents.join(" ")}
        >${transformChildComponents(slot)}</${reactComponentName}>`;

    const reactEventHandlers = events.map(
        ([key, value]) => `const on${ucFirst(key)} = (event: Event) => {
            ${value
            .toString()
            .replace(/^[^{]+{/, "")
            .replace(/}$/, "")}
        };`
    );

    const reactConstants = props.map(([key, value]) => {
        return `const ${key} = ${objectToString(value)};`;
    });

    const componentName = `${toUpperCamelCase(component)}Example`;
    const reactComponentSource = `
    const ${componentName} = () => {

        ${reactConstants.join("\n\n")}

        ${reactEventHandlers.join("\n\n")}

        return (
            ${reactComponentJsx}
        );
    };
    `;
    return formatJsx(reactComponentSource);
};

