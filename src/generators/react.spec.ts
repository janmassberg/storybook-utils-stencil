import {
    generateSourceCodeReact,
    generateSourceCodeReactComponent,
} from "./react";
import { testArgs } from "../test-utils/testArgs";

const testSlot = `<my-child-component foo-bar="foo">
    <my-nested-child-component bar-foo="bar">
    <span class="test-class">Test children</span></my-nested-child-component>
</my-child-component>`;

describe("generateSourceCodeReact", () => {
    it("should generate valid formatted react JSX code with props", () => {
        expect(
            generateSourceCodeReact("my-component", testArgs)
        ).toMatchSnapshot();
    });

    it("should generate valid formatted react JSX code with children", () => {
        expect(
            generateSourceCodeReact("my-component", {
                _slot: testSlot,
            })
        ).toMatchSnapshot();
    });
});

describe("generateSourceCodeReactComponent", () => {
    it("should generate the source code for a basic integration with props", () => {
        expect(
            generateSourceCodeReactComponent("my-component", testArgs)
        ).toMatchSnapshot();
    });

    it("should generate the source code for a basic integration with children", () => {
        expect(
            generateSourceCodeReactComponent("my-component", {
                _slot: testSlot,
            })
        ).toMatchSnapshot();
    });
});
