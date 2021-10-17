type ArgEntry = [string, any];
type ArgsType = ArgEntry[];

interface ArgsFilter {
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
const isEventArg = ([key, value]: ArgEntry): boolean => {
    return isFunctionValue(value) && isEventHandlerKey(key);
};

/** @private */
const isHiddenArg = ([key]: ArgEntry): boolean => {
    return key.slice(0, 1) === "_";
};

/**
 * Checks if an argument can be treated as HTML attribute
 * @param args {ArgsType}
 */
export const isHtmlArg = ([key, value]: ArgEntry): boolean => {
    return (
        value !== undefined &&
        !isHiddenArg([key, value]) &&
        !isEventArg([key, value]) &&
        !isFunctionValue(value) &&
        !isObjectValue(value)
    );
};

/**
 * Checks if an argument should be considered as JSX property
 * @param args {ArgsType}
 */
export const isJsxArg = ([key, value]: ArgEntry): boolean => {
    return (
        value !== undefined &&
        !isHtmlArg([key, value]) &&
        !isHiddenArg([key, value]) &&
        !isEventArg([key, value])
    );
};

/**
 * Filters args with valid HTML attributes
 * @param args {ArgsType}
 */
export const filterHtmlAttributes: ArgsFilter = (args: ArgsType): ArgsType => {
    return Object.entries(args).filter(isHtmlArg);
};

/**
 * Filters args with valid JSX properties
 * @param args {ArgsType}
 */
export const filterJsxProperties: ArgsFilter = (args: ArgsType): ArgsType => {
    return Object.entries(args).filter(isJsxArg);
};
