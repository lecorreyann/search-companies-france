import getCompaniesFranceFromINSEEApi from "@/infrastructure/getCompaniesFranceFromINSEEApi";
import getINSEEApiAccessToken from "@/application/getINSEEApiAccessToken";
import getQuery from "./getQuery";
import renewINSEEApiAccessToken from "@/application/renewINSEEApiAccessToken";
import { Response } from "node-fetch";
import { Company } from "@/domain/Company";

function addressFormatter(adresseEtablissement: AdressEtablissement): string {
  let address = "";
  if (adresseEtablissement.numeroVoieEtablissement) {
    address += adresseEtablissement.numeroVoieEtablissement + " ";
  }
  if (adresseEtablissement.typeVoieEtablissement) {
    address += adresseEtablissement.typeVoieEtablissement + " ";
  }
  if (adresseEtablissement.libelleVoieEtablissement) {
    address += adresseEtablissement.libelleVoieEtablissement + " ";
  }
  if (adresseEtablissement.codePostalEtablissement) {
    address += adresseEtablissement.codePostalEtablissement + " ";
  }
  if (adresseEtablissement.libelleCommuneEtablissement) {
    address += adresseEtablissement.libelleCommuneEtablissement;
  }

  return address;
}

export default async function getCompaniesFrance(
  query: string
): Promise<Company[]> {
  let INSEE_API_KEY: string;

  try {
    INSEE_API_KEY = await getINSEEApiAccessToken();
  } catch (error) {
    await renewINSEEApiAccessToken();
    INSEE_API_KEY = await getINSEEApiAccessToken();
  }

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
      address: addressFormatter(company.adresseEtablissement),
    };
  });
  return companies;
}
