import type { JestConfigWithTsJest } from "ts-jest";
// dotenv is required to load environment variables from .env files
import "dotenv/config";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["node_modules/\\.pnpm/(?!node-fetch|fetch-blob)"],
  testTimeout: 30000,
  testPathIgnorePatterns: ["<rootDir>/dist/"],
};

export default jestConfig;
