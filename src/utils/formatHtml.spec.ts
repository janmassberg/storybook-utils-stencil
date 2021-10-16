import { formatHtml } from "./formatHtml";

describe("formatHtml", () => {
    it("converts string to camel case correctly", () => {
        expect(
            formatHtml(
                `<div
class="my-container"
data-id="test-id"
data-name="test-name"><span>test content</span></div>`
            )
        ).toMatchSnapshot();
    });
});
