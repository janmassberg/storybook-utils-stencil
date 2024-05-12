module.exports = {
    root: true,
    env: {
        jest: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.eslint.json",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["@typescript-eslint", "react", "jest"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
    ],
    settings: {
        react: {
            pragma: "React",
            fragment: "Fragment",
            version: "detect",
        },
    },
    rules: {
        "@typescript-eslint/no-unused-vars": [
            "error",
            { varsIgnorePattern: "^h$" },
        ],
        "react/jsx-no-bind": 1,
    },
};
