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
var getINSEEApiAccessToken_exports = {};
__export(getINSEEApiAccessToken_exports, {
  default: () => getINSEEApiAccessToken
});
module.exports = __toCommonJS(getINSEEApiAccessToken_exports);
var import_getConfig = __toESM(require("./getConfig.js"), 1);
var import_renewINSEEApiAccessToken = __toESM(require("./renewINSEEApiAccessToken.js"), 1);
async function getINSEEApiAccessToken() {
  let config = (0, import_getConfig.default)();
  if (!config) {
    await (0, import_renewINSEEApiAccessToken.default)();
    config = (0, import_getConfig.default)();
  }
  if (config) {
    if (!config.INSEE_API_KEY) {
      throw new Error("INSEE API Key is not defined");
    }
    return config.INSEE_API_KEY;
  }
  throw new Error("INSEE API Key is not defined");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=getINSEEApiAccessToken.js.map
