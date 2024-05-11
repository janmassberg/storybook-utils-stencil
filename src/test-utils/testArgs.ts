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
    testFunction: (): void => {
        // do nothing
    },
    onTestEvent: (event: Event): void => {
        console.log(event.type);
    },
    _slot: "Test children",
};
