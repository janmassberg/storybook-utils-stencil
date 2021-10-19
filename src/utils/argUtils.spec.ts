import {
    filterHtmlAttributes,
    filterJsxProperties,
    filterEventHandlers,
} from "./argUtils";
import { testArgs } from "../test-utils/testArgs";

describe("filterHtmlAttributes", () => {
    it("should return an array of key/value pairs with valid HTML attributes", () => {
        expect(filterHtmlAttributes(testArgs)).toMatchSnapshot();
    });
});

describe("filterJsxProperties", () => {
    it("should return an array of key/value pairs with valid JSX properties", () => {
        expect(filterJsxProperties(testArgs)).toMatchSnapshot();
    });
});

describe("filterEventHandlers", () => {
    it("should return an array of key/value pairs with valid event handlers", () => {
        expect(filterEventHandlers(testArgs)).toMatchSnapshot();
    });
});
