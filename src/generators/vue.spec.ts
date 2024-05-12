import { generateSourceVueComponent } from "./vue";
import {
    testArgsComponentGenerator,
    testCopmonentSlot,
} from "../test-utils/testArgs";

describe("generateSourceVueComponent", () => {
    it("should generate valid formatted vue JSX code with args", () => {
        expect(
            generateSourceVueComponent(testArgsComponentGenerator)
        ).toMatchSnapshot();
    });

    it("should generate valid formatted vue JSX code with children", () => {
        expect(
            generateSourceVueComponent({
                ...testArgsComponentGenerator,
                args: {
                    _slot: testCopmonentSlot,
                },
            })
        ).toMatchSnapshot();
    });
});
