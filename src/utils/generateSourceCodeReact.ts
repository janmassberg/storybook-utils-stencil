import { formatJsx } from "./formatJsx";
import {
    filterEventHandlers,
    filterJsxProperties,
    ArgsType,
    filterHtmlAttributes,
} from "./argUtils";
import { objectToStringJsx } from "./objectToStringJsx";
import { toCamelCase, ucFirst } from "./stringUtils";

const transformReactComponentName = (component: string): string => {
    return ucFirst(toCamelCase(component));
};

const transformReactPropName = (key: string): string => toCamelCase(key);

const transformReactProps = (args: ArgsType): string[] => {
    return args.map(([key, value]) => {
        return `${transformReactPropName(key)}=${objectToStringJsx(value)}`;
    });
};

const transformReactChildren = (str: string): string => {
    if (!str || str === "") {
        return "";
    }
    const matches = str.match(/<([a-z]-[a-z-]+)/gi);
    if (!matches || !matches.length) {
        return str;
    }
    const tagNames: string[] = [];
    matches.forEach((match) => {
        const tagName = match.replace(/[<>/]/g, "");
        if (tagNames.indexOf(tagName) === -1) {
            tagNames.push(tagName);
        }
    });
    tagNames.sort((a, b) => {
        if (a.length > b.length) return -1;
        if (b.length > a.length) return 1;
        return 0;
    });
    tagNames.forEach((tagName) => {
        const reactTagName = transformReactComponentName(tagName);
        str = str.replace(new RegExp(tagName, "g"), reactTagName);
        str = str.replace(
            new RegExp(`([a-z-]+)="([a-z0-9-]+)"`, "g"),
            (match, attrib, value) => {
                return `${transformReactPropName(attrib)}=${objectToStringJsx(
                    value
                )}`;
            }
        );
    });
    return str;
};

export const generateSourceCodeReact = (
    component: string,
    args: any
): string => {
    const children = args._children || "";
    const reactComponentName = transformReactComponentName(component);
    const reactAttributes = filterHtmlAttributes(args);
    const reactProps = filterJsxProperties(args);
    const reactEventHandlers = filterEventHandlers(args);
    const reactJsx = `<${reactComponentName}
        ${transformReactProps(reactAttributes).join(" ")}
        ${transformReactProps(reactProps).join(" ")}
        ${transformReactProps(reactEventHandlers).join(" ")}
        >${transformReactChildren(children)}</${reactComponentName}>`;
    return formatJsx(reactJsx);
};
