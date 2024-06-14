export default async function getCompaniesFranceFromINSEEApi(
  query: string,
  INSEE_API_KEY: string
): Promise<Response> {
  const response = await fetch(
    `https://api.insee.fr/entreprises/sirene/V3.11/siret?q=${query}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${INSEE_API_KEY}`,
      },
    }
  );
  return response;
}
