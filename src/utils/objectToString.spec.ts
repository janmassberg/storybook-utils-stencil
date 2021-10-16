import { objectToString } from "./objectToString";

describe("objectToString", () => {
    it("returns strings with quotes", () => {
        expect(objectToString("test-string")).toEqual("\"test-string\"");
    });

    it("should convert numbers to strings", () => {
        expect(objectToString(1234)).toEqual("1234");
    });

    it("should convert boolean values to strings", () => {
        expect(objectToString(true)).toEqual("true");
        expect(objectToString(false)).toEqual("false");
    });

    it("should convert functions to strings", () => {
        expect(objectToString((event: Event) => {
            console.log(event);
        })).toMatchSnapshot();
    });

    it("should return empty string for undefined types", () => {
        expect(objectToString(undefined)).toEqual("");
        expect(objectToString(null)).toEqual("");
    });

    it("should convert objects to strings", () => {
        expect(objectToString({
            testString: "test string",
            testNumber: 1234,
            testTrue: true,
            testFalse: false,
        })).toMatchSnapshot();
    });
});
