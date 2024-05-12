import { objectToString } from "./objectToString";

/**
 * Converts any object to a jsx string.
 * @param value {string|number|boolean|function|{}}
 */
export const objectToStringJsx = (value: any): string => {
    if (typeof value === "string") {
        return `"${value}"`;
    }
    if (typeof value === "function") {
        return `{${value.toString()}}`;
    }
    return `{${objectToString(value)}}`;
};
