"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_getINSEEApiAccessToken = __toESM(require("../../../application/getINSEEApiAccessToken.js"), 1);
var import_getCompaniesFranceFromINSEEApi = __toESM(require("../../../infrastructure/getCompaniesFranceFromINSEEApi.js"), 1);
test("getCompaniesFranceFromINSEEApi", async () => {
  const INSEEApiAccessToken = await (0, import_getINSEEApiAccessToken.default)();
  const response = await (0, import_getCompaniesFranceFromINSEEApi.default)("Plan\xE8te", INSEEApiAccessToken);
  expect(response.status).toBe(200);
});
//# sourceMappingURL=getCompaniesFranceFromINSEEApi.js.map
