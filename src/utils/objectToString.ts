import { toQuotedKeyName } from "./stringUtils";

/**
 * Converts any object to a string representation.
 * @param value {string|number|boolean|function|{}}
 */
export const objectToString = (value: any): string => {
    const valueType = typeof value;
    switch(valueType) {
        case "string":
            return `"${value}"`;
        case "number":
        case "boolean":
        case "function":
            return value.toString();
        case "object":
            if (Array.isArray(value)) {
                return `[${value.map(objectToString).join(", ")}]`;
            }
            const props = Object.entries(value).map(
                ([key, value]) => `${toQuotedKeyName(key)}: ${objectToString(value)}`
            );
            return `{${props.join(", ")}}`;
        case "undefined":
        default:
            return "";
    }
};