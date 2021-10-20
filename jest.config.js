module.exports = {
    roots: ["<rootDir>/src"],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test|e2e).+(ts|tsx|js)",
    ],
    transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts"],
    coveragePathIgnorePatterns: [
        "node_modules",
        "<rootDir>/src/test-utils",
        "/index.(ts|tsx)$",
    ],
    coverageDirectory: "<rootDir>/coverage/",
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 75,
            lines: 75,
            statements: 75,
        },
    },
};
