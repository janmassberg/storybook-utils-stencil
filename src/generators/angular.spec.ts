import {
    generateSourceCodeAngularComponent,
    generateSourceCodeAngularHtml,
} from "./angular";
import { testArgsComponentGenerator, testCopmonentSlot } from "../test-utils/testArgs";

describe("generateSourceCodeAngularComponent", () => {
    it("should generate valid formatted angular component source code", () => {
        expect(
            generateSourceCodeAngularComponent(testArgsComponentGenerator)
        ).toMatchSnapshot();
    });

    it("should generate valid formatted angular component source code with children", () => {
        expect(
            generateSourceCodeAngularComponent({
                ...testArgsComponentGenerator,
                args: {
                    _slot: testCopmonentSlot,
                }
            })
        ).toMatchSnapshot();
    });
});

describe("generateSourceCodeAngularHtml", () => {
    it("should generate valid formatted angular html template source code", () => {
        expect(
            generateSourceCodeAngularHtml(testArgsComponentGenerator)
        ).toMatchSnapshot();
    });

    it("should generate valid formatted angular html template source code with children", () => {
        expect(
            generateSourceCodeAngularHtml({
                ...testArgsComponentGenerator,
                args: {
                    _slot: testCopmonentSlot,
                }
            })
        ).toMatchSnapshot();
    });
});
