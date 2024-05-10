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
var import_getNewTokenFromINSEEApi = __toESM(require("../../../infrastructure/getNewTokenFromINSEEApi.js"), 1);
test("getNewTokenFromINSEEApi", async () => {
  const response = await (0, import_getNewTokenFromINSEEApi.default)();
  expect(response.status).toBe(200);
  const data = await response.json();
  if (response.status === 200) {
    expect(data).toHaveProperty("access_token");
    expect(data).toHaveProperty("scope");
    expect(data).toHaveProperty("token_type");
    expect(data).toHaveProperty("expires_in");
  }
});
//# sourceMappingURL=getNewTokenFromINSEEApi.test.js.map
