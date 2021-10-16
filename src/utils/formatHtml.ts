import { format } from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import parserBabel from "prettier/parser-babel";

/**
 * Formats HTML source code.
 * @param {string} code The source code
 */
export const formatHtml = (code: string): string =>
    format(code, {
        parser: "html",
        plugins: [parserHtml, parserBabel],
        htmlWhitespaceSensitivity: "ignore",
    });
