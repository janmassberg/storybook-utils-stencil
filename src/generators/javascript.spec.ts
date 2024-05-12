import { generateSourceCodeJavascript } from "./javascript";
import { testArgsComponentGenerator } from "../test-utils/testArgs";

describe("generateSourceCodeJavascript", () => {
    it("should return an empty string if no args or event handlers", () => {
        expect(
            generateSourceCodeJavascript({
                ...testArgsComponentGenerator,
                args: {
                    testString: "test string",
                    testNumber: 12345,
                    testTrue: true,
                    testFalse: false,
                    testNull: null,
                    testUndefined: undefined,
                },
            })
        ).toEqual("");
    });

    it("should generate a script tag with prop injection and event handlers", () => {
        expect(
            generateSourceCodeJavascript(testArgsComponentGenerator)
        ).toMatchSnapshot();
    });
});
