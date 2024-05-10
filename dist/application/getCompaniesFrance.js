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
const getCompaniesFranceFromINSEEApi_1 = require("@/infrastructure/getCompaniesFranceFromINSEEApi");
const getINSEEApiAccessToken_1 = require("./getINSEEApiAccessToken");
const getQuery_1 = __importDefault(require("./getQuery"));
const renewINSEEApiAccessToken_1 = require("./renewINSEEApiAccessToken");
const ErrorTexts_1 = __importDefault(require("@/application/ErrorTexts"));
function getCompaniesFrance(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const INSEE_API_KEY = yield (0, getINSEEApiAccessToken_1.getINSEEApiAccessToken)();
        const buildQuery = (0, getQuery_1.default)(query);
        let response = yield (0, getCompaniesFranceFromINSEEApi_1.getCompaniesFranceFromINSEEApi)(buildQuery, INSEE_API_KEY);
        if (response.status === 401) {
            yield (0, renewINSEEApiAccessToken_1.renewINSEEApiAccessToken)();
            const INSEE_API_KEY = yield (0, getINSEEApiAccessToken_1.getINSEEApiAccessToken)();
            response = yield (0, getCompaniesFranceFromINSEEApi_1.getCompaniesFranceFromINSEEApi)(buildQuery, INSEE_API_KEY);
        }
        if (response.status === 404) {
            throw new Error(ErrorTexts_1.default.NO_COMPANY_FOUND);
        }
        const data = (yield response.json());
        return data.etablissements;
    });
}
exports.default = getCompaniesFrance;
