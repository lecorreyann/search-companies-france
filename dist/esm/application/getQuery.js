import ErrorTexts from "../application/ErrorTexts.js";
export default function getQuery(query) {
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
            throw new Error(ErrorTexts.INVALID_SIREN_SIRET_NUMBER);
        }
    }
    else {
        queryType = "denominationUniteLegale";
    }
    query = queryType + ":" + query + " AND etatAdministratifUniteLegale:A"; //  AND etatAdministratifUniteLegale:A => only active companies
    return query;
}
