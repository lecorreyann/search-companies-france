"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getQuery(query // A => only active companies / C => only closed companies
) {
    let queryType = "siret";
    query = query.trim();
    const params = new URLSearchParams(query);
    let q = params.get("q");
    if (q === null) {
        return new Error("Invalid query");
    }
    if (!isNaN(Number(q)) && (q.length === 9 || q.length === 14)) {
        if (q.length === 9) {
            queryType = "siren";
        }
        else if (q.length === 14) {
            queryType = "siret";
        }
    }
    else {
        queryType = "denominationUniteLegale";
    }
    if (queryType === "denominationUniteLegale") {
        q = `"${q}"`;
    }
    query = `${queryType}:${q}`;
    let active;
    if (params.get("active") !== null) {
        if (["true", "false"].includes(params.get("active"))) {
            active = params.get("active") === "true" ? ":A" : ":C";
        }
        query += ` AND etatAdministratifUniteLegale${active}`;
    } //  AND etatAdministratifUniteLegale:A => only active companies / C => only closed companies
    let page = 1;
    if (params.get("page") !== null) {
        if (!isNaN(Number(params.get("page"))) && Number(params.get("page")) > 0) {
            page = Number(params.get("page"));
        }
    }
    // page = 1 -> start = 0
    // page = 2 -> start = 20
    query += `&debut=${(page - 1) * 20}`;
    let limit = 20;
    if (params.get("limit") !== null) {
        if (!isNaN(Number(params.get("limit"))) &&
            Number(params.get("limit")) > 0) {
            limit = Number(params.get("limit"));
        }
    }
    query += `&nombre=${limit}`;
    return query;
}
exports.default = getQuery;
