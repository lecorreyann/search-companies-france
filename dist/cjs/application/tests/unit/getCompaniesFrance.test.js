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
var import_getCompaniesFrance = __toESM(require("../../../application/getCompaniesFrance.js"), 1);
describe("getCompaniesFrance", () => {
  it("resolve [] when siret 53805889200013", async () => {
    await expect((0, import_getCompaniesFrance.default)("53805889200013")).resolves.toEqual([]);
  });
  it("resolve [] when siret 53805889200018", async () => {
    await expect((0, import_getCompaniesFrance.default)("53805889200018")).resolves.toEqual([]);
  });
  it("results.length > 0 when query is Planete", async () => {
    const result = await (0, import_getCompaniesFrance.default)("Planete");
    expect(result.length).toBeGreaterThan(0);
  });
  it("results[0] has code, name and address when query is Planete", async () => {
    const result = await (0, import_getCompaniesFrance.default)("Planete");
    expect(result[0]).toHaveProperty("code");
    expect(result[0]).toHaveProperty("name");
    expect(result[0]).toHaveProperty("address");
  });
});
//# sourceMappingURL=getCompaniesFrance.test.js.map
