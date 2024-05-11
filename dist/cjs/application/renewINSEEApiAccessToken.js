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
var renewINSEEApiAccessToken_exports = {};
__export(renewINSEEApiAccessToken_exports, {
  default: () => renewINSEEApiAccessToken
});
module.exports = __toCommonJS(renewINSEEApiAccessToken_exports);
var import_getNewTokenFromINSEEApi = __toESM(require("../infrastructure/getNewTokenFromINSEEApi.js"), 1);
var import_fs = __toESM(require("fs"), 1);
async function renewINSEEApiAccessToken() {
  const response = await (0, import_getNewTokenFromINSEEApi.default)();
  const data = await response.json();
  const accessToken = data.access_token;
  const pathConfig = `${process.cwd()}/config.json`;
  if (!import_fs.default.existsSync(pathConfig)) {
    const config = {
      INSEE_API_KEY: accessToken
    };
    import_fs.default.writeFileSync(pathConfig, JSON.stringify(config));
  } else {
    const config = JSON.parse(import_fs.default.readFileSync(pathConfig, "utf8"));
    config.INSEE_API_KEY = accessToken;
    import_fs.default.writeFileSync(pathConfig, JSON.stringify(config));
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=renewINSEEApiAccessToken.js.map
