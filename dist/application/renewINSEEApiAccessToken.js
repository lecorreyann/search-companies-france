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
exports.renewINSEEApiAccessToken = void 0;
const getNewTokenFromINSEEApi_1 = __importDefault(require("@/infrastructure/getNewTokenFromINSEEApi"));
const fs_1 = __importDefault(require("fs"));
const renewINSEEApiAccessToken = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, getNewTokenFromINSEEApi_1.default)();
    const data = (yield response.json());
    const accessToken = data.access_token;
    const pathConfig = `${process.cwd()}/config.json`;
    // check if config.json exists
    if (!fs_1.default.existsSync(pathConfig)) {
        const config = {
            INSEE_API_KEY: accessToken,
        };
        fs_1.default.writeFileSync(pathConfig, JSON.stringify(config));
    }
    else {
        const config = JSON.parse(fs_1.default.readFileSync(pathConfig, "utf8"));
        config.INSEE_API_KEY = accessToken;
        fs_1.default.writeFileSync(pathConfig, JSON.stringify(config));
    }
});
exports.renewINSEEApiAccessToken = renewINSEEApiAccessToken;
