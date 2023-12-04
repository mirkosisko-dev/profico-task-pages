// jest.config.js
const nextJest = require("next/jest");

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: "./" });

// Any custom config you want to pass to Jest
const customJestConfig = {
  testMatch: ["<rootDir>/__tests__/**/*.test.tsx"],
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^features/(.*)$": "<rootDir>/src/features/$1",
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^api/(.*)$": "<rootDir>/src/api/$1",
    "^config": "<rootDir>/src/config",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "^.+\\.(svg)$": "<rootDir>/__mocks__/utils/svg.ts",
  },
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
