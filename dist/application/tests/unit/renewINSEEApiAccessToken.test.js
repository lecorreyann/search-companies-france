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
Object.defineProperty(exports, "__esModule", { value: true });
const getINSEEApiAccessToken_1 = require("@/application/getINSEEApiAccessToken");
const renewINSEEApiAccessToken_1 = require("@/application/renewINSEEApiAccessToken");
test("renewINSEEApiAccessToken", () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, renewINSEEApiAccessToken_1.renewINSEEApiAccessToken)();
    // expect the new access token to be different from the old access token
    const accessToken = yield (0, getINSEEApiAccessToken_1.getINSEEApiAccessToken)();
    expect(accessToken).toBeDefined();
}));
