import { objectToString } from "./objectToString";

/**
 * Converts any object to a jsx string.
 * @param value {string|number|boolean|function|{}}
 */
export const objectToStringJsx = (value: any): string => {
    return typeof value === "string"
        ? `"${value}"`
        : `{${objectToString(value)}}`;
};
