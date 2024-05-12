import {
    generateSourceCodeReact,
    generateSourceCodeReactComponent,
} from "./react";
import {
    testArgsComponentGenerator,
    testCopmonentSlot,
} from "../test-utils/testArgs";

describe("generateSourceCodeReact", () => {
    it("should generate valid formatted react JSX code with args", () => {
        expect(
            generateSourceCodeReact(testArgsComponentGenerator)
        ).toMatchSnapshot();
    });

    it("should generate valid formatted react JSX code with children", () => {
        expect(
            generateSourceCodeReact({
                ...testArgsComponentGenerator,
                args: {
                    _slot: testCopmonentSlot,
                },
            })
        ).toMatchSnapshot();
    });
});

describe("generateSourceCodeReactComponent", () => {
    it("should generate the source code for a basic integration with args", () => {
        expect(
            generateSourceCodeReactComponent(testArgsComponentGenerator)
        ).toMatchSnapshot();
    });

    it("should generate the source code for a basic integration with children", () => {
        expect(
            generateSourceCodeReactComponent({
                ...testArgsComponentGenerator,
                args: {
                    _slot: testCopmonentSlot,
                },
            })
        ).toMatchSnapshot();
    });
});
