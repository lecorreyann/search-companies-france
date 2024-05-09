type Header = {
  statut: number;
};

type Etablissement = {
  siret: string;
  uniteLegale: {
    denominationUniteLegale: string;
  };
  adresseEtablissement: {
    numeroVoieEtablissement: string;
    typeVoieEtablissement: string;
    libelleVoieEtablissement: string;
    codePostalEtablissement: string;
    libelleCommuneEtablissement: string;
  };
};

export const getCompaniesFranceFromINSEEApi = async (
  query: string,
  INSEE_API_KEY: string
): Promise<Response> => {
  const response = await fetch(
    `https://api.insee.fr/entreprises/sirene/V3.11/siret?${new URLSearchParams({
      q: query,
    }).toString()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${INSEE_API_KEY}`,
      },
    }
  );
  return response;
};

export default getCompaniesFranceFromINSEEApi;
