module.exports = {
    sourceType: "unambiguous",
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-react",
        "@babel/preset-typescript",
    ],
    plugins: ["@babel/plugin-transform-runtime"],
};
