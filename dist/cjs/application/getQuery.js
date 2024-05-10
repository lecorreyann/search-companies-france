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
var getQuery_exports = {};
__export(getQuery_exports, {
  default: () => getQuery
});
module.exports = __toCommonJS(getQuery_exports);
var import_ErrorTexts = __toESM(require("../application/ErrorTexts.js"), 1);
function getQuery(query) {
  let queryType = "siret";
  query = query.trim();
  if (!isNaN(Number(query))) {
    if (query.length === 9) {
      queryType = "siren";
    } else if (query.length === 14) {
      queryType = "siret";
    } else {
      throw new Error(import_ErrorTexts.default.INVALID_SIREN_SIRET_NUMBER);
    }
  } else {
    queryType = "denominationUniteLegale";
  }
  query = queryType + ":" + query + " AND etatAdministratifUniteLegale:A";
  return query;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=getQuery.js.map
