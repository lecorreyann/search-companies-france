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
var getCompaniesFranceFromINSEEApi_exports = {};
__export(getCompaniesFranceFromINSEEApi_exports, {
  default: () => getCompaniesFranceFromINSEEApi
});
module.exports = __toCommonJS(getCompaniesFranceFromINSEEApi_exports);
var import_node_fetch = __toESM(require("node-fetch"), 1);
async function getCompaniesFranceFromINSEEApi(query, INSEE_API_KEY) {
  const response = await (0, import_node_fetch.default)(`https://api.insee.fr/entreprises/sirene/V3.11/siret?${new URLSearchParams({
    q: query
  }).toString()}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${INSEE_API_KEY}`
    }
  });
  return response;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=getCompaniesFranceFromINSEEApi.js.map
