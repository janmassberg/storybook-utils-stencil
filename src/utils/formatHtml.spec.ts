import { formatHtml } from "./formatHtml";

describe("formatHtml", () => {
    it("returns correctly formatted HTML code", () => {
        expect(
            formatHtml(
                `<my-component
class="my-container"
data-id="test-id"
data-name="test-name"><span>test content</span></my-component>`
            )
        ).toMatchSnapshot();
    });
});
