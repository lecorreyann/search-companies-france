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
var import_renewINSEEApiAccessToken = __toESM(require("../../../application/renewINSEEApiAccessToken.js"), 1);
var import_fs = __toESM(require("fs"), 1);
afterAll(() => {
  const pathConfig = `fakeConfig.json`;
  if (import_fs.default.existsSync(pathConfig)) {
    import_fs.default.unlinkSync(pathConfig);
  }
});
describe("renewINSEEApiAccessToken", () => {
  it("renewINSEEApiAccessToken when fakeConfig.json does not exist", async () => {
    const pathConfig = `fakeConfig.json`;
    if (import_fs.default.existsSync(pathConfig)) {
      import_fs.default.unlinkSync(pathConfig);
    }
    expect(import_fs.default.existsSync(pathConfig)).toBe(false);
    await (0, import_renewINSEEApiAccessToken.default)();
    const accessToken = await (0, import_getINSEEApiAccessToken.default)();
    expect(accessToken).toBeDefined();
  });
  it("renewINSEEApiAccessToken when config.json exists", async () => {
    await (0, import_renewINSEEApiAccessToken.default)();
    const accessToken = await (0, import_getINSEEApiAccessToken.default)();
    expect(accessToken).toBeDefined();
  });
});
//# sourceMappingURL=renewINSEEApiAccessToken.test.js.map
