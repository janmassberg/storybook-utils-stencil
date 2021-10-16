import { formatJsx } from "./formatJsx";

describe("formatJsx", () => {
    it("returns correctly formatted JSX code", () => {
        expect(
            formatJsx(
                `<MyComponent
dataId="test-id"
dataName="test-name"
onClick={event => handleClick(event)}><span>test content</span></MyComponent>`
            )
        ).toMatchSnapshot();
    });
});
