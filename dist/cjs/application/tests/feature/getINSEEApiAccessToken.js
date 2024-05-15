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
var import_fs = __toESM(require("fs"), 1);
var import_getINSEEApiAccessToken = __toESM(require("../../../application/getINSEEApiAccessToken.js"), 1);
describe("getINSEEApiAccessToken", () => {
  it("getINSEEApiAccessToken when config.json does not exist", async () => {
    const pathConfig = `${process.cwd()}/config.json`;
    if (import_fs.default.existsSync(pathConfig)) {
      import_fs.default.unlinkSync(pathConfig);
    }
    expect(import_fs.default.existsSync(pathConfig)).toBe(false);
    const accessToken = await (0, import_getINSEEApiAccessToken.default)();
    expect(accessToken).toBeDefined();
  });
  it("getINSEEApiAccessToken when config.json exists", async () => {
    const accessToken = await (0, import_getINSEEApiAccessToken.default)();
    expect(accessToken).toBeDefined();
  });
});
//# sourceMappingURL=getINSEEApiAccessToken.js.map
