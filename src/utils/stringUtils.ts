export const toKebabCase = (str: string): string => {
    return str
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .toLowerCase();
};

export const toCamelCase = (str: string): string => {
    return str.replace(/-./g, (x) => x.toUpperCase()[1]);
};
