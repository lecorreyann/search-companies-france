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
exports.getNewTokenFromINSEEApi = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const getNewTokenFromINSEEApi = () => __awaiter(void 0, void 0, void 0, function* () {
    const encodedAuthorization = Buffer.from(`${process.env.INSEE_API_CONSUMER_KEY}:${process.env.INSEE_API_CONSUMER_SECRET}`).toString("base64");
    const response = yield (0, node_fetch_1.default)(`https://api.insee.fr/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${encodedAuthorization}`,
        },
        body: "grant_type=client_credentials",
    });
    return response;
});
exports.getNewTokenFromINSEEApi = getNewTokenFromINSEEApi;
exports.default = exports.getNewTokenFromINSEEApi;
