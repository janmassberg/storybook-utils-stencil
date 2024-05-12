import { lcFirst } from "./stringUtils";

export type ArgEntry = [string, any];
export type ArgEntries = ArgEntry[];

export interface ArgsFilter {
    (args: any): ArgEntries;
}

/** @private */
const isFunctionValue = (value: any): boolean => {
    return typeof value === "function";
};

/** @private */
const isObjectValue = (value: any): boolean => {
    return typeof value === "object" && value !== null;
};

/** @private */
const isEventHandlerKey = (key: string): boolean => {
    return /^on[A-Z][a-zA-Z]+$/.test(key);
};

/** @private */
const isHiddenArg = ([key]: ArgEntry): boolean => {
    return key.slice(0, 1) === "_";
};

/**
 * Checks if an argument is an event handler
 * @param args {ArgEntries}
 */
export const isEventArg = ([key, value]: ArgEntry): boolean => {
    return isEventHandlerKey(key) && isFunctionValue(value);
};

/**
 * Checks if an argument is a valid HTML attribute
 * @param args {ArgEntries}
 */
export const isHtmlArg = ([key, value]: ArgEntry): boolean => {
    return (
        value !== undefined &&
        value !== null &&
        !isHiddenArg([key, value]) &&
        !isEventArg([key, value]) &&
        !isFunctionValue(value) &&
        !isObjectValue(value)
    );
};

/**
 * Checks if an argument is a valid JSX property
 * @param args {ArgEntries}
 */
export const isJsxArg = ([key, value]: ArgEntry): boolean => {
    return (
        value !== undefined &&
        value !== null &&
        !isHiddenArg([key, value]) &&
        !isEventArg([key, value]) &&
        !isHtmlArg([key, value])
    );
};

/**
 * Filters args with valid HTML attributes only
 * @param args {ArgEntries}
 */
export const filterHtmlAttributes: ArgsFilter = (args: any): ArgEntries => {
    return Object.entries(args).filter(isHtmlArg);
};

/**
 * Filters args with valid JSX properties only
 * @param args {ArgEntries}
 */
export const filterJsxProperties: ArgsFilter = (args: any): ArgEntries => {
    return Object.entries(args).filter(isJsxArg);
};

/**
 * Filters args with valid event handlers only
 * @param args {ArgEntries}
 */
export const filterEventHandlers: ArgsFilter = (args: any): ArgEntries => {
    return Object.entries(args).filter(isEventArg).map(([key, value]) => [getEventNameFromHandler(key), value]);
};

export const getEventNameFromHandler = (handlerName: string): string => {
    return lcFirst(handlerName.replace(/^(on|@)/, ""));
};
