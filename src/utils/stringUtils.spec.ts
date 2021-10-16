import { toCamelCase, toKebabCase } from "./stringUtils";

describe("toCamelCase", () => {
    it("converts string to camel case correctly", () => {
        expect(toCamelCase("my-example-string")).toEqual("myExampleString");
    });

    it("converts string to kebab case correctly", () => {
        expect(toKebabCase("myExampleString")).toEqual("my-example-string");
    });
});
