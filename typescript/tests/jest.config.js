/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
    },
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    moduleNameMapper: {
        // Map only your project files, exclude node_modules
        "^(\\.{1,2}/.*)\\.js$": "$1.ts",
    },
    transformIgnorePatterns: [
        "/node_modules/(?!react-is)", // Allow Jest to transform `react-is` if needed
    ],
    resolver: undefined, // Ensure Jest uses the default resolver
};