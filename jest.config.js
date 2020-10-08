// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: ['/node_modules/', '/server/'],

    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],

    // A set of global variables that need to be available in all test environments
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json'
        }
    },

    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    moduleNameMapper: {
        '^@local/config/(.+)$': '<rootDir>/config/$1',
        '^@local/(.+)$': '<rootDir>/src/$1'
    },

    // A preset that is used as a base for Jest's configuration
    preset: 'ts-jest',

    // A list of paths to directories that Jest should use to search for files in
    roots: ['<rootDir>/src', '<rootDir>/tests'],

    // Whether to use watchman for file crawling
    watchman: false
}
