import { generateSourceCodeReact } from "./generateSourceCodeReact";
import { testArgs } from "../test-utils/testArgs";

describe("generateSourceCodeReact", () => {
    it("should generate valid and formatted react JSX code", () => {
        expect(
            generateSourceCodeReact("my-component", testArgs)
        ).toMatchSnapshot();
    });
});
