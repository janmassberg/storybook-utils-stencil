import { generateSourceAngularComponent, generateSourceAngularHtml } from "./generateSourceCodeAngular";
import { testArgs } from "../test-utils/testArgs";

describe("generateSourceCodeAngular", () => {
    it("should generate valid formatted angular component source code", () => {
        expect(
            generateSourceAngularComponent("my-component", testArgs)
        ).toMatchSnapshot();
    });
    it("should generate valid formatted angular html template source code", () => {
        expect(
            generateSourceAngularHtml("my-component", testArgs)
        ).toMatchSnapshot();
    });
    it("should generate valid formatted angular component source code with children", () => {
        expect(
            generateSourceAngularComponent("my-component", {
                _children: `<my-child-component foo-bar="foo">
    <my-nested-child-component bar-foo="bar">
    <span class="test-class">Test children</span></my-nested-child-component>
</my-child-component>`,
            })
        ).toMatchSnapshot();
    });
    it("should generate valid formatted angular html template source code with children", () => {
        expect(
            generateSourceAngularHtml("my-component", {
                _children: `<my-child-component foo-bar="foo">
    <my-nested-child-component bar-foo="bar">
    <span class="test-class">Test children</span></my-nested-child-component>
</my-child-component>`,
            })
        ).toMatchSnapshot();
    });
});
