import { generateSourceCodeVue } from "./vue";
import { testArgs } from "../test-utils/testArgs";

describe("generateSourceCodeVue", () => {
    it("should generate valid formatted vue JSX code with props", () => {
        expect(
            generateSourceCodeVue("my-component", testArgs)
        ).toMatchSnapshot();
    });

    it("should generate valid formatted vue JSX code with children", () => {
        expect(
            generateSourceCodeVue("my-component", {
                _children: `<my-child-component foo-bar="foo">
    <my-nested-child-component bar-foo="bar">
    <span class="test-class">Test children</span></my-nested-child-component>
</my-child-component>`,
            })
        ).toMatchSnapshot();
    });
});
