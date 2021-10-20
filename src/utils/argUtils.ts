export type ArgEntry = [string, any];
export type ArgsType = ArgEntry[];

export interface ArgsFilter {
    (args: any): ArgsType;
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
 * @param args {ArgsType}
 */
export const isEventArg = ([key, value]: ArgEntry): boolean => {
    return isEventHandlerKey(key) && isFunctionValue(value);
};

/**
 * Checks if an argument is a valid HTML attribute
 * @param args {ArgsType}
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
 * @param args {ArgsType}
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
 * @param args {ArgsType}
 */
export const filterHtmlAttributes: ArgsFilter = (args: ArgsType): ArgsType => {
    return Object.entries(args).filter(isHtmlArg);
};

/**
 * Filters args with valid JSX properties only
 * @param args {ArgsType}
 */
export const filterJsxProperties: ArgsFilter = (args: ArgsType): ArgsType => {
    return Object.entries(args).filter(isJsxArg);
};

/**
 * Filters args with valid event handlers only
 * @param args {ArgsType}
 */
export const filterEventHandlers: ArgsFilter = (args: ArgsType): ArgsType => {
    return Object.entries(args).filter(isEventArg);
};
