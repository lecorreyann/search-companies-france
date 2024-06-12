"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getQuery(query, active // A => only active companies / C => only closed companies
) {
    let queryType = "siret";
    query = query.trim();
    if ((!isNaN(Number(query)) && query.length === 9) || query.length === 14) {
        if (query.length === 9) {
            queryType = "siren";
        }
        else if (query.length === 14) {
            queryType = "siret";
        }
    }
    else {
        queryType = "denominationUniteLegale";
    }
    if (queryType === "denominationUniteLegale") {
        query = `"${query}"`;
    }
    query = `${queryType} : ${query}`;
    if (active) {
        query += ` AND etatAdministratifUniteLegale:${active}`;
    } //  AND etatAdministratifUniteLegale:A => only active companies / C => only closed companies
    return query;
}
exports.default = getQuery;
