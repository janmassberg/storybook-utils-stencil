import { format } from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import parserTypescript from "prettier/parser-typescript";

/**
 * Formats JSX source code.
 * @param {string} code The source code
 */
export const formatJsx = (code: string): string =>
    format(code, {
        parser: "typescript",
        plugins: [parserTypescript, parserBabel],
        htmlWhitespaceSensitivity: "ignore",
    });
