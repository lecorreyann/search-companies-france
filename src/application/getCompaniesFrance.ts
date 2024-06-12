import getCompaniesFranceFromINSEEApi from "../infrastructure/getCompaniesFranceFromINSEEApi";
import getINSEEApiAccessToken from "./getINSEEApiAccessToken";
import getQuery from "./getQuery";
import renewINSEEApiAccessToken from "./renewINSEEApiAccessToken";
import { Company } from "../domain/Company";

function addressFormatter(adresseEtablissement: {
  numeroVoieEtablissement?: string;
  typeVoieEtablissement?: string;
  libelleVoieEtablissement?: string;
  codePostalEtablissement?: string;
  libelleCommuneEtablissement?: string;
}): string {
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
  query: string,
  active?: "A" | "C" // A => only active companies / C => only closed companies
): Promise<Company[]> {
  let INSEE_API_KEY: string;

  try {
    INSEE_API_KEY = await getINSEEApiAccessToken();
  } catch (error) {
    await renewINSEEApiAccessToken();
    INSEE_API_KEY = await getINSEEApiAccessToken();
  }

  const buildQuery = getQuery(query, active);

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

  const data = await response.json();

  let companies: Company[] = [];

  if (response.status === 404) {
    return companies;
  }

  companies = data.etablissements.map((company: unknown): Company => {
    return {
      code:
        typeof company === "object" &&
        company !== null &&
        Object.keys(company).includes("siret")
          ? (company as any).siret
          : "",
      name:
        typeof company === "object" &&
        company !== null &&
        Object.keys(company).includes("uniteLegale") &&
        typeof (company as any).uniteLegale === "object" &&
        Object((company as any).uniteLegale) !== null &&
        Object.keys(Object((company as any).uniteLegale)).includes(
          "denominationUniteLegale"
        )
          ? (company as any).uniteLegale.denominationUniteLegale
          : "",
      address:
        typeof company === "object" &&
        company !== null &&
        Object.keys(company).includes("uniteLegale") &&
        typeof (company as any).adresseEtablissement === "object" &&
        Object((company as any).adresseEtablissement) !== null
          ? addressFormatter((company as any).adresseEtablissement)
          : "",
      active:
        typeof company === "object" &&
        company !== null &&
        Object.keys(company).includes("uniteLegale") &&
        typeof (company as any).uniteLegale === "object" &&
        Object((company as any).uniteLegale) !== null &&
        Object.keys(Object((company as any).uniteLegale)).includes(
          "etatAdministratifUniteLegale"
        ) &&
        (company as any).uniteLegale.etatAdministratifUniteLegale === "A"
          ? true
          : false,
    };
  });
  return companies;
}
