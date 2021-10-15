module.exports = {
    overrides: [
        {
            files: "*.scss",
            options: {
                parser: "scss",
            },
        },
        {
            files: "*.ts",
            options: {
                parser: "typescript",
            },
        },
        {
            files: "*.mdx",
            options: {
                parser: "mdx",
            },
        },
    ],
};
