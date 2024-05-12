import {
    generateSourceAngularComponent,
    generateSourceAngularHtml,
} from "./angular";
import {
    testArgsComponentGenerator,
    testCopmonentSlot,
} from "../test-utils/testArgs";

describe("generateSourceAngularComponent", () => {
    it("should generate valid formatted angular component source code", () => {
        expect(
            generateSourceAngularComponent(testArgsComponentGenerator)
        ).toMatchSnapshot();
    });

    it("should generate valid formatted angular component source code with children", () => {
        expect(
            generateSourceAngularComponent({
                ...testArgsComponentGenerator,
                args: {
                    _slot: testCopmonentSlot,
                },
            })
        ).toMatchSnapshot();
    });
});

describe("generateSourceAngularHtml", () => {
    it("should generate valid formatted angular html template source code", () => {
        expect(
            generateSourceAngularHtml(testArgsComponentGenerator)
        ).toMatchSnapshot();
    });

    it("should generate valid formatted angular html template source code with children", () => {
        expect(
            generateSourceAngularHtml({
                ...testArgsComponentGenerator,
                args: {
                    _slot: testCopmonentSlot,
                },
            })
        ).toMatchSnapshot();
    });
});
