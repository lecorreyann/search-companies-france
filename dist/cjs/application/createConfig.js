"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createConfig_exports = {};
__export(createConfig_exports, {
  default: () => createConfig
});
module.exports = __toCommonJS(createConfig_exports);
var import_fs = __toESM(require("fs"), 1);
var import_ErrorTexts = __toESM(require("./ErrorTexts.js"), 1);
function createConfig(configName = "config.json", payload) {
  const keys = Object.keys(payload);
  const pathConfig = `${process.cwd()}/${configName}`;
  if (keys.length !== 1) {
    throw new Error(import_ErrorTexts.default.TRY_TO_SET_INVALID_CONFIG);
  }
  if (!keys.includes("INSEE_API_KEY"))
    throw new Error(import_ErrorTexts.default.TRY_TO_SET_INVALID_CONFIG);
  if (payload.INSEE_API_KEY.trim() === "")
    throw new Error(import_ErrorTexts.default.INSEE_API_KEY_IS_EMPTY);
  if (import_fs.default.existsSync(pathConfig))
    import_fs.default.unlinkSync(pathConfig);
  import_fs.default.writeFileSync(pathConfig, JSON.stringify(payload));
  if (!import_fs.default.existsSync(pathConfig))
    throw new Error(import_ErrorTexts.default.ERROR_CREATING_CONFIG_FILE);
  const config = JSON.parse(import_fs.default.readFileSync(pathConfig, "utf8"));
  if (!config.INSEE_API_KEY) {
    throw new Error(import_ErrorTexts.default.ERROR_CREATING_CONFIG_FILE_INSEE_API_KEY_NOT_SET);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=createConfig.js.map
