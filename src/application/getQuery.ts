export default function getQuery(query: string): string | Error {
  let queryType: "siret" | "siren" | "denominationUniteLegale" = "siret";
  query = query.trim();

  if ((!isNaN(Number(query)) && query.length === 9) || query.length === 14) {
    if (query.length === 9) {
      queryType = "siren";
    } else if (query.length === 14) {
      queryType = "siret";
    }
  } else {
    queryType = "denominationUniteLegale";
  }

  if (queryType === "denominationUniteLegale") {
    query = `"${query}"`;
  }

  query = queryType + ":" + query + " AND etatAdministratifUniteLegale:A"; //  AND etatAdministratifUniteLegale:A => only active companies

  return query;
}
