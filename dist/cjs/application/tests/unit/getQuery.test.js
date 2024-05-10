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
var import_getQuery = __toESM(require("../../../application/getQuery.js"), 1);
var import_ErrorTexts = __toESM(require("../../../application/ErrorTexts.js"), 1);
describe("getQuery", () => {
  it("throws an error when the query length is < 9", () => {
    expect(() => (0, import_getQuery.default)("12345678")).toThrow(new Error(import_ErrorTexts.default.INVALID_SIREN_SIRET_NUMBER));
  });
  it("throws an error when the query length is > 9 but < 14", () => {
    expect(() => (0, import_getQuery.default)("1234567891")).toThrow(new Error(import_ErrorTexts.default.INVALID_SIREN_SIRET_NUMBER));
  });
});
//# sourceMappingURL=getQuery.test.js.map
