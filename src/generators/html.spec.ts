import { generateSourceCodeHtml } from "./html";
import { testArgsComponentGenerator } from "../test-utils/testArgs";

describe("generateSourceCodeHtml", () => {
    it("should build the HTML source for a component with args correctly", () => {
        expect(
            generateSourceCodeHtml(testArgsComponentGenerator)
        ).toMatchSnapshot();
    });
});
