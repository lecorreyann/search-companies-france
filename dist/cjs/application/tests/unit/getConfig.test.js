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
var import_getConfig = __toESM(require("../../../application/getConfig.js"), 1);
var import_createConfig = __toESM(require("../../../application/createConfig.js"), 1);
var import_ErrorTexts = __toESM(require("../../../application/ErrorTexts.js"), 1);
const configName = "fakeConfig.json";
beforeAll(() => {
  (0, import_createConfig.default)(configName, { INSEE_API_KEY: "test" });
});
afterAll(() => {
  import_fs.default.unlinkSync(`${process.cwd()}/${configName}`);
});
describe("getConfig", () => {
  it("config has INSEE_API_KEY property", () => {
    const config = (0, import_getConfig.default)(configName);
    expect(config).toHaveProperty("INSEE_API_KEY");
  });
  it("get unexisting config", () => {
    expect(() => (0, import_getConfig.default)("unexistingConfig.json")).toThrow(import_ErrorTexts.default.NO_CONFIGURATION_FILE_FOUND);
  });
});
//# sourceMappingURL=getConfig.test.js.map
