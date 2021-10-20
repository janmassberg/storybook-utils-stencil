import { generateSourceCodeVanillaJs } from "./generateSourceCodeVanillaJs";
import { testArgs } from "../test-utils/testArgs";

describe("generateSourceCodeVanillaJs", () => {
    it("should return an empty string if no props or event handlers", () => {
        expect(
            generateSourceCodeVanillaJs("my-component", {
                testString: "test string",
                testNumber: 12345,
                testTrue: true,
                testFalse: false,
                testNull: null,
                testUndefined: undefined,
            })
        ).toEqual("");
    });

    it("should generate a script tag with prop injection and event handlers", () => {
        expect(
            generateSourceCodeVanillaJs("my-component", testArgs)
        ).toMatchSnapshot();
    });
});
