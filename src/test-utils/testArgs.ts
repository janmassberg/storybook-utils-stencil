const testArgFunction = function (): void {
    // do nothing
};

const testArgEventHandler = function (event: Event): void {
    console.log(event.type);
};

export const testArgs = {
    testNull: null,
    testUndefined: undefined,
    testFalse: false,
    testTrue: true,
    testString: "test-string",
    testNumber: 12345,
    testArray: [1, 2, 3],
    testObject: {
        foo: "bar",
    },
    testFunction: testArgFunction,
    onTestEvent: testArgEventHandler,
    _children: "Test children",
};
