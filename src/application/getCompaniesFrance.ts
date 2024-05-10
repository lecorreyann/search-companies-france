import { getCompaniesFranceFromINSEEApi } from "@/infrastructure/getCompaniesFranceFromINSEEApi";
import { getINSEEApiAccessToken } from "@/application/getINSEEApiAccessToken";
import getQuery from "./getQuery";
import { renewINSEEApiAccessToken } from "@/application/renewINSEEApiAccessToken";
import ErrorTexts from "@/application/ErrorTexts";
import { Response } from "node-fetch";

export default async function getCompaniesFrance(query: string): Promise<any> {
  const INSEE_API_KEY = await getINSEEApiAccessToken();

  const buildQuery = getQuery(query);

  let response: Response = await getCompaniesFranceFromINSEEApi(
    buildQuery as string,
    INSEE_API_KEY
  );

  if (response.status === 401) {
    await renewINSEEApiAccessToken();
    const INSEE_API_KEY = await getINSEEApiAccessToken();
    response = await getCompaniesFranceFromINSEEApi(
      buildQuery as string,
      INSEE_API_KEY
    );
  }
  if (response.status === 404) {
    throw new Error(ErrorTexts.NO_COMPANY_FOUND);
  }
  const data = (await response.json()) as INSEEApiResponse;
  const companies = data.etablissements.map((company: Etablissement) => {
    return {
      code: company.siret,
      name: company.uniteLegale.denominationUniteLegale,
      address: `${company.adresseEtablissement.numeroVoieEtablissement} ${company.adresseEtablissement.typeVoieEtablissement} ${company.adresseEtablissement.libelleVoieEtablissement}, ${company.adresseEtablissement.codePostalEtablissement} ${company.adresseEtablissement.libelleCommuneEtablissement}`,
    };
  });
  return companies;
}
