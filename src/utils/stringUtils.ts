export const toKebabCase = (str: string): string => {
    return str
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .toLowerCase();
};

export const toCamelCase = (str: string): string => {
    return str.replace(/-./g, (x) => x.toUpperCase()[1]);
};

export const ucFirst = (str: string): string => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
};

export const toQuotedKeyName = (str: string): string => {
    return /^[a-z]+$/i.test(str) ? str : `"${str}"`;
};
