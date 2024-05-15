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
var import_createConfig = __toESM(require("../../../application/createConfig.js"), 1);
var import_ErrorTexts = __toESM(require("../../../application/ErrorTexts.js"), 1);
var import_fs = __toESM(require("fs"), 1);
describe("createConfig", () => {
  const pathConfig = `fakeConfig.json`;
  it("createConfig with invalid configuration payload", () => {
    expect(() => (0, import_createConfig.default)(pathConfig, { TEST: "test" })).toThrow(import_ErrorTexts.default.TRY_TO_SET_INVALID_CONFIG);
  });
  it("createConfig with empty INSEE_API_KEY", () => {
    expect(() => (0, import_createConfig.default)(pathConfig, { INSEE_API_KEY: "" })).toThrow(import_ErrorTexts.default.INSEE_API_KEY_IS_EMPTY);
  });
  it("createConfig creates config file", () => {
    (0, import_createConfig.default)(pathConfig, { INSEE_API_KEY: "test" });
    const config = JSON.parse(import_fs.default.readFileSync(pathConfig, "utf8"));
    expect(config).toEqual({ INSEE_API_KEY: "test" });
  });
});
//# sourceMappingURL=createConfig.test.js.map
