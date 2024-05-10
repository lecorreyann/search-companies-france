"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCompaniesFrance_1 = __importDefault(require("@/application/getCompaniesFrance"));
const ErrorTexts_1 = __importDefault(require("@/application/ErrorTexts"));
describe("getCompaniesFrance", () => {
    it("reject when siret 53805889200013", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect((0, getCompaniesFrance_1.default)("53805889200013")).rejects.toThrow(new Error(ErrorTexts_1.default.NO_COMPANY_FOUND));
    }));
    it("reject when siret 53805889200018", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect((0, getCompaniesFrance_1.default)("53805889200018")).rejects.toThrow(new Error(ErrorTexts_1.default.NO_COMPANY_FOUND));
    }));
    it("results.length > 0 when query is Planete", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, getCompaniesFrance_1.default)("Planete");
        expect(result.length).toBeGreaterThan(0);
    }));
});
