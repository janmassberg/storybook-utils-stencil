import { generateSourceCodeVanillaJs } from "./generateSourceCodeVanillaJs";
import { testArgs } from "../test-utils/testArgs";

describe("generateSourceCodeVanillaJs", () => {
    it("should generate a script tag with prop injection and event handlers", () => {
        expect(
            generateSourceCodeVanillaJs("my-component", testArgs)
        ).toMatchSnapshot();
    });
});
