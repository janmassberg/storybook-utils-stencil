import { generateSourceHtmlMarkup } from "./html";
import { testArgsComponentGenerator } from "../test-utils/testArgs";

describe("generateSourceHtmlMarkup", () => {
    it("should build the HTML source for a component with args correctly", () => {
        expect(
            generateSourceHtmlMarkup(testArgsComponentGenerator)
        ).toMatchSnapshot();
    });
});
