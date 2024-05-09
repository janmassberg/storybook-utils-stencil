import {
    generateSourceCodeAngularComponent,
    generateSourceCodeAngularHtml,
} from "./angular";
import { testArgs } from "../test-utils/testArgs";

const testSlot = `
<my-child-component foo-bar="foo">
<my-nested-child-component bar-foo="bar">
<span class="test-class">Test children</span></my-nested-child-component>
</my-child-component>
`;

describe("generateSourceCodeAngularComponent", () => {
    it("should generate valid formatted angular component source code", () => {
        expect(
            generateSourceCodeAngularComponent("my-component", testArgs)
        ).toMatchSnapshot();
    });

    it("should generate valid formatted angular component source code with children", () => {
        expect(
            generateSourceCodeAngularComponent("my-component", {
                _children: testSlot,
            })
        ).toMatchSnapshot();
    });
});

describe("generateSourceCodeAngularHtml", () => {
    it("should generate valid formatted angular html template source code", () => {
        expect(
            generateSourceCodeAngularHtml("my-component", testArgs)
        ).toMatchSnapshot();
    });

    it("should generate valid formatted angular html template source code with children", () => {
        expect(
            generateSourceCodeAngularHtml("my-component", {
                _children: testSlot,
            })
        ).toMatchSnapshot();
    });
});
