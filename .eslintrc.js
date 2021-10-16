module.exports = {
    root: true,
    env: {
        jest: true,
    },
    parser: "babel-eslint",
    parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["@typescript-eslint", "react", "jest"],
    extends: ["eslint:recommended", "plugin:react/recommended"],
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
        "no-extra-boolean-cast": 0,
        "no-unused-vars": 0,
        "react/jsx-no-bind": 0,
        "react/jsx-uses-vars": 2,
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "no-undef": "off",
            },
        },
    ],
};
