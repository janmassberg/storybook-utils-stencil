import { generateSourceCodeHtml } from "./html";
import { testArgs } from "../test-utils/testArgs";

describe("generateSourceCodeHtml", () => {
    it("should build the HTML source for a component with args correctly", () => {
        expect(
            generateSourceCodeHtml("my-component", testArgs)
        ).toMatchSnapshot();
    });
});
