import getCompaniesFranceFromINSEEApi from "@/infrastructure/getCompaniesFranceFromINSEEApi";
import getINSEEApiAccessToken from "@/application/getINSEEApiAccessToken";
import getQuery from "./getQuery";
import renewINSEEApiAccessToken from "@/application/renewINSEEApiAccessToken";
import ErrorTexts from "@/application/ErrorTexts";
import { Response } from "node-fetch";
import { Company } from "@/domain/Company";

export default async function getCompaniesFrance(
  query: string
): Promise<Company[]> {
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

  const data = (await response.json()) as INSEEApiResponse;

  let companies: Company[] = [];

  if (response.status === 404) {
    return companies;
  }

  companies = data.etablissements.map((company: Etablissement) => {
    return {
      code: company.siret,
      name: company.uniteLegale.denominationUniteLegale,
      address: `${company.adresseEtablissement.numeroVoieEtablissement} ${company.adresseEtablissement.typeVoieEtablissement} ${company.adresseEtablissement.libelleVoieEtablissement}, ${company.adresseEtablissement.codePostalEtablissement} ${company.adresseEtablissement.libelleCommuneEtablissement}`,
    };
  });
  return companies;
}
