import { generateSourceReactJsx, generateSourceReactFC } from "./react";
import {
    testArgsComponentGenerator,
    testCopmonentSlot,
} from "../test-utils/testArgs";

describe("generateSourceReactJsx", () => {
    it("should generate valid formatted react JSX code with args", () => {
        expect(
            generateSourceReactJsx(testArgsComponentGenerator)
        ).toMatchSnapshot();
    });

    it("should generate valid formatted react JSX code with children", () => {
        expect(
            generateSourceReactJsx({
                ...testArgsComponentGenerator,
                args: {
                    _slot: testCopmonentSlot,
                },
            })
        ).toMatchSnapshot();
    });
});

describe("generateSourceReactFC", () => {
    it("should generate the source code for a basic integration with args", () => {
        expect(
            generateSourceReactFC(testArgsComponentGenerator)
        ).toMatchSnapshot();
    });

    it("should generate the source code for a basic integration with children", () => {
        expect(
            generateSourceReactFC({
                ...testArgsComponentGenerator,
                args: {
                    _slot: testCopmonentSlot,
                },
            })
        ).toMatchSnapshot();
    });
});
