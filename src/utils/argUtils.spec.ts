import {
    filterHtmlAttributes,
    filterJsxProperties,
    filterEventHandlers,
} from "./argUtils";

const testArgs = {
    testString: "test-string",
    testNumber: 12345,
    testTrue: true,
    testFalse: false,
    testArray: [1, 2, 3],
    testObject: {
        foo: "bar",
    },
    testFunction: () => {},
    testNull: null,
    testUndefined: undefined,
};

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