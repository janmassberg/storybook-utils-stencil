import { generateSourceCodeReact } from "./generateSourceCodeReact";
import { testArgs } from "../test-utils/testArgs";

describe("generateSourceCodeReact", () => {
    it("should generate valid formatted react JSX code with props", () => {
        expect(
            generateSourceCodeReact("my-component", testArgs)
        ).toMatchSnapshot();
    });

    it("should generate valid formatted react JSX code with children", () => {
        expect(
            generateSourceCodeReact("my-component", {
                _children: `<my-child-component foo-bar="foo">
    <my-nested-child-component bar-foo="bar">
    <span class="test-class">Test children</span></my-nested-child-component>
</my-child-component>`,
            })
        ).toMatchSnapshot();
    });
});
