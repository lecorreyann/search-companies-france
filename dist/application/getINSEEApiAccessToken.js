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
const getConfig_1 = __importDefault(require("./getConfig"));
const renewINSEEApiAccessToken_1 = __importDefault(require("./renewINSEEApiAccessToken"));
function getINSEEApiAccessToken() {
    return __awaiter(this, void 0, void 0, function* () {
        let config = (0, getConfig_1.default)();
        if (!config) {
            yield (0, renewINSEEApiAccessToken_1.default)();
            config = (0, getConfig_1.default)();
        }
        if (config) {
            if (!config.INSEE_API_KEY) {
                throw new Error("INSEE API Key is not defined");
            }
            return config.INSEE_API_KEY;
        }
        throw new Error("INSEE API Key is not defined");
    });
}
exports.default = getINSEEApiAccessToken;
