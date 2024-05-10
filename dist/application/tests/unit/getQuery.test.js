"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getQuery_1 = __importDefault(require("@/application/getQuery"));
const ErrorTexts_1 = __importDefault(require("@/application/ErrorTexts"));
describe("getQuery", () => {
    it("throws an error when the query length is < 9", () => {
        expect(() => (0, getQuery_1.default)("12345678")).toThrow(new Error(ErrorTexts_1.default.INVALID_SIREN_SIRET_NUMBER));
    });
    it("throws an error when the query length is > 9 but < 14", () => {
        expect(() => (0, getQuery_1.default)("1234567891")).toThrow(new Error(ErrorTexts_1.default.INVALID_SIREN_SIRET_NUMBER));
    });
});
