"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorTexts_1 = __importDefault(require("@/application/ErrorTexts"));
function getQuery(query) {
    let queryType = "siret";
    query = query.trim();
    if (!isNaN(Number(query))) {
        if (query.length === 9) {
            queryType = "siren";
        }
        else if (query.length === 14) {
            queryType = "siret";
        }
        else {
            throw new Error(ErrorTexts_1.default.INVALID_SIREN_SIRET_NUMBER);
        }
    }
    else {
        queryType = "denominationUniteLegale";
    }
    query = queryType + ":" + query + " AND etatAdministratifUniteLegale:A"; //  AND etatAdministratifUniteLegale:A => only active companies
    return query;
}
exports.default = getQuery;
