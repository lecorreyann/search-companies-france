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
var getCompaniesFrance_exports = {};
__export(getCompaniesFrance_exports, {
  default: () => getCompaniesFrance
});
module.exports = __toCommonJS(getCompaniesFrance_exports);
var import_getCompaniesFranceFromINSEEApi = require("../infrastructure/getCompaniesFranceFromINSEEApi.js");
var import_getINSEEApiAccessToken = require("../application/getINSEEApiAccessToken.js");
var import_getQuery = __toESM(require("./getQuery.js"), 1);
var import_renewINSEEApiAccessToken = require("../application/renewINSEEApiAccessToken.js");
var import_ErrorTexts = __toESM(require("../application/ErrorTexts.js"), 1);
async function getCompaniesFrance(query) {
  const INSEE_API_KEY = await (0, import_getINSEEApiAccessToken.getINSEEApiAccessToken)();
  const buildQuery = (0, import_getQuery.default)(query);
  let response = await (0, import_getCompaniesFranceFromINSEEApi.getCompaniesFranceFromINSEEApi)(buildQuery, INSEE_API_KEY);
  if (response.status === 401) {
    await (0, import_renewINSEEApiAccessToken.renewINSEEApiAccessToken)();
    const INSEE_API_KEY2 = await (0, import_getINSEEApiAccessToken.getINSEEApiAccessToken)();
    response = await (0, import_getCompaniesFranceFromINSEEApi.getCompaniesFranceFromINSEEApi)(buildQuery, INSEE_API_KEY2);
  }
  if (response.status === 404) {
    throw new Error(import_ErrorTexts.default.NO_COMPANY_FOUND);
  }
  const data = await response.json();
  const companies = data.etablissements.map((company) => {
    return {
      code: company.siret,
      name: company.uniteLegale.denominationUniteLegale,
      address: `${company.adresseEtablissement.numeroVoieEtablissement} ${company.adresseEtablissement.typeVoieEtablissement} ${company.adresseEtablissement.libelleVoieEtablissement}, ${company.adresseEtablissement.codePostalEtablissement} ${company.adresseEtablissement.libelleCommuneEtablissement}`
    };
  });
  return companies;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=getCompaniesFrance.js.map
