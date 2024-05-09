export const lcFirst = (str: string): string => {
    return str.slice(0, 1).toLowerCase() + str.slice(1);
};

export const ucFirst = (str: string): string => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
};

export const toKebabCase = (str: string): string => {
    return str
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .toLowerCase();
};

export const toCamelCase = (str: string): string => {
    return str.replace(/-./g, (x) => x.toUpperCase()[1]);
};

export const toLowerCamelCase = (str: string): string => {
    return lcFirst(toCamelCase(str));
};

export const toUpperCamelCase = (str: string): string => {
    return ucFirst(toCamelCase(str));
};

export const toQuotedKeyName = (str: string): string => {
    return /^[a-z]+$/i.test(str) ? str : `"${str}"`;
};
