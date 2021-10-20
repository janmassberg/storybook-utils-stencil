module.exports = {
    "roots": ["<rootDir>/src"],
    "setupFilesAfterEnv": ['<rootDir>/.jest/jest.setup.js'],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test|e2e).+(ts|tsx|js)",
    ],
    "transform": { "^.+\\.(ts|tsx)$": "ts-jest" },
    "collectCoverage": true,
    "collectCoverageFrom": [
        "src/**/*.tsx?"
    ],
    "coveragePathIgnorePatterns": [
        "node_modules",
        "<rootDir>/src/test-utils"
    ],
    "coverageDirectory": "<rootDir>/coverage/",
    "coverageThreshold": {
        "global": {
            "branches": 90,
            "functions": 90,
            "lines": 75,
            "statements": 90
        }
    },
    "mapCoverage": true
};
