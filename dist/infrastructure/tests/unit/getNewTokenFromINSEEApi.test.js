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
const getNewTokenFromINSEEApi_1 = __importDefault(require("@/infrastructure/getNewTokenFromINSEEApi"));
test("getNewTokenFromINSEEApi", () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, getNewTokenFromINSEEApi_1.default)();
    expect(response.status).toBe(200);
    const data = yield response.json();
    if (response.status === 200) {
        expect(data).toHaveProperty("access_token");
        expect(data).toHaveProperty("scope");
        expect(data).toHaveProperty("token_type");
        expect(data).toHaveProperty("expires_in");
    }
}));
