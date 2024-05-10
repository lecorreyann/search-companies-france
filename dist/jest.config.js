"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
/** @type {import('ts-jest').JestConfigWithTsJest} */
exports.default = {
    preset: "ts-jest/presets/js-with-ts-esm",
    testEnvironment: "node",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    transformIgnorePatterns: ["node_modules/\\.pnpm/(?!node-fetch|fetch-blob)"],
    testTimeout: 30000,
};
