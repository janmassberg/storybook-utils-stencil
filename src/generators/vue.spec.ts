import { generateSourceCodeVue } from "./vue";
import { testArgsComponentGenerator, testCopmonentSlot } from "../test-utils/testArgs";

describe("generateSourceCodeVue", () => {
    it("should generate valid formatted vue JSX code with args", () => {
        expect(
            generateSourceCodeVue(testArgsComponentGenerator)
        ).toMatchSnapshot();
    });

    it("should generate valid formatted vue JSX code with children", () => {
        expect(
            generateSourceCodeVue({
                ...testArgsComponentGenerator,
                args: {
                    _slot: testCopmonentSlot,
                }
            })
        ).toMatchSnapshot();
    });
});
