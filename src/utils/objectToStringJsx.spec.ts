import { objectToStringJsx } from "./objectToStringJsx";

describe("objectToStringJsx", () => {
    it("returns strings with quotes", () => {
        expect(objectToStringJsx("test-string")).toEqual("\"test-string\"");
    });

    it("should convert numbers correctly", () => {
        expect(objectToStringJsx(1234)).toEqual("{1234}");
    });

    it("should convert boolean values correctly", () => {
        expect(objectToStringJsx(true)).toEqual("{true}");
        expect(objectToStringJsx(false)).toEqual("{false}");
    });

    it("should convert functions correctly", () => {
        expect(objectToStringJsx((event: Event) => {
            console.log(event);
        })).toMatchSnapshot();
    });

    it("should correctly convert objects to jsx", () => {
        expect(objectToStringJsx({
            testString: "test string",
            testNumber: 1234,
            testTrue: true,
            testFalse: false,
        })).toMatchSnapshot();
    });
});
