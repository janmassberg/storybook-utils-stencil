import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

const pkg = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            { file: pkg.main, format: "cjs", sourcemap: true },
            { file: pkg.module, format: "es", sourcemap: true },
        ],
        external: [/node_modules\/(prettier|react|@storybook)/],
        plugins: [
            typescript({
                sourceMap: true,
            }),
            commonjs(),
            resolve(),
        ],
    },
];
