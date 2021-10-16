import {
    toCamelCase,
    toKebabCase,
    ucFirst,
    toQuotedKeyName,
} from "./stringUtils";

describe("toCamelCase", () => {
    it("converts string to camel case correctly", () => {
        expect(toCamelCase("my-example-string")).toEqual("myExampleString");
    });
});

describe("toKebabCase", () => {
    it("converts string to kebab case correctly", () => {
        expect(toKebabCase("myExampleString")).toEqual("my-example-string");
    });
});

describe("ucFirst", () => {
    it("converts the first letter to uppercase", () => {
        expect(ucFirst("myExampleString")).toEqual("MyExampleString");
    });
});

describe("toQuotedKeyName", () => {
    it("does not add quotes if the string is a valid key name", () => {
        expect(toQuotedKeyName("myExampleKey")).toEqual("myExampleKey");
    });

    it("adds quotes if the string contains invalid characters", () => {
        expect(toQuotedKeyName("my-example-key")).toEqual(`"my-example-key"`);
    });
});
