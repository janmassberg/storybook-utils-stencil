import { toQuotedKeyName } from "./stringUtils";

/**
 * Converts any object to a string representation.
 * @param value {string|number|boolean|function|{}}
 */
export const objectToString = (value: unknown): string => {
    const valueType = typeof value;
    switch (valueType) {
        case "string":
            return `"${value}"`;
        case "number":
        case "boolean":
        case "function":
            return `${value}`;
        case "object":
            if (Array.isArray(value)) {
                return `[${value.map(objectToString).join(", ")}]`;
            }
            if (value !== null) {
                const props = Object.entries(
                    value as Record<string, unknown>
                ).map(
                    ([key, value]) =>
                        `${toQuotedKeyName(key)}: ${objectToString(value)}`
                );
                return `{${props.join(", ")}}`;
            }
            return "";
        case "undefined":
        default:
            return "";
    }
};
