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
        // Handle event
        console.log(event.type);
    },
    _slot: "Test children",
};

export const testArgsButton = {
    required: true,
    variant: "primary",
    onClick: (event: Event) => {
        // Handle click event
        console.log(event.target);
    },
    _slot: "Label",
};
