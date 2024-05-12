import {
    ArgEntries,
    formatJsx,
    filterEventHandlers,
    filterHtmlAttributes,
    filterJsxProperties,
    objectToString,
    objectToStringJsx,
    toLowerCamelCase,
    toUpperCamelCase,
    ucFirst,
} from "../utils";

const transformReactAttributes = (attributes: ArgEntries) => {
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
    const slot = typeof args._slot === "string" ? args._slot : "";

    const reactComponentName = toUpperCamelCase(component);
    const reactAttributes = transformReactAttributes(attribs);
    const reactProps = transformReactAttributes(props);
    const reactEvents = events.map(
        ([key, value]) => `on${ucFirst(key)}={${objectToString(value)}}\n`
    );
    const reactComponentJsx = `<${reactComponentName}
        ${reactAttributes.join(" ")}
        ${reactProps.join(" ")}
        ${reactEvents.join(" ")}
        >${transformChildComponents(slot)}</${reactComponentName}>`;
    return formatJsx(reactComponentJsx).replace(/;\s+?$/, "");
};

export const generateSourceCodeReactComponent = (
    component: string,
    args: Record<string, unknown>
) => {
    const attribs = filterHtmlAttributes(args);
    const props = filterJsxProperties(args);
    const events = filterEventHandlers(args);
    const slot = typeof args._slot === "string" ? args._slot : "";

    const reactComponentName = toUpperCamelCase(component);
    const reactAttributes = transformReactAttributes(attribs);
    const reactProps = props.map(
        ([key]) => `${toLowerCamelCase(key)}={${toLowerCamelCase(key)}}\n`
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
        ([key, value]) => `const on${ucFirst(
            key
        )} = React.useCallback((event: Event) => {
            ${value
                .toString()
                .replace(/^[^{]+{/, "")
                .replace(/}$/, "")}
        }, []);`
    );

    const reactConstants = props.map(([key, value]) => {
        let propType: string;
        if (typeof value === "function") {
            return `const ${key} = React.useCallback(
                ${objectToString(value)},
                []
            );`;
        }
        if (Array.isArray(value)) {
            let arrayType: string = typeof value[0];
            if (!["boolean", "number", "string"].includes(arrayType)) {
                arrayType = "any";
            }
            propType = `Array<${arrayType}>`;
            return `const [${key}, set${ucFirst(
                key
            )}] = React.useState<${propType}>(${objectToString(value)});`;
        }
        return `const [${key}, set${ucFirst(
            key
        )}] = React.useState<Record<string, any>>(${objectToString(value)});`;
    });

    const componentName = `${toUpperCamelCase(component)}Example`;
    const reactComponentSource = `
    import * as React from "react";\n
    const ${componentName}: React.FC = () => {
        ${reactConstants.join("\n")}
        ${reactEventHandlers.join("\n\n")}

        return (
            ${reactComponentJsx}
        );
    };
    `;
    return formatJsx(reactComponentSource);
};
