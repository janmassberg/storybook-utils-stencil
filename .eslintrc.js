module.exports = {
    root: true,
    env: {
        jest: true,
    },
    parserOptions: {
        project: "./tsconfig.json",
    },
    plugins: ["@typescript-eslint", "jest"],
    extends: ["eslint:recommended", "plugin:react/recommended"],
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
