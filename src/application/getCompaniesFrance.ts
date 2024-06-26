import getCompaniesFranceFromINSEEApi from "../infrastructure/getCompaniesFranceFromINSEEApi";
import getINSEEApiAccessToken from "./getINSEEApiAccessToken";
import getQuery from "./getQuery";
import renewINSEEApiAccessToken from "./renewINSEEApiAccessToken";
import { Company, CompanyPaginate } from "../domain/Company";
import getNafLegend from "./getNafLegend";

function addressFormatter(adresseEtablissement: {
  numeroVoieEtablissement?: string;
  typeVoieEtablissement?: string;
  libelleVoieEtablissement?: string;
  codePostalEtablissement?: string;
  libelleCommuneEtablissement?: string;
  libellePaysEtrangerEtablissement?: string;
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

  if (address === "") {
    if (adresseEtablissement.libellePaysEtrangerEtablissement) {
      address += adresseEtablissement.libellePaysEtrangerEtablissement;
    }
  }

  return address;
}

function nameFormatter(uniteLegale: unknown): string {
  let name = "";

  if (
    (uniteLegale as { denominationUniteLegale: string }).denominationUniteLegale
  ) {
    return (uniteLegale as { denominationUniteLegale: string })
      .denominationUniteLegale;
  }
  // else if prenomUsuelUniteLegale, nomUniteLegale
  if (
    (uniteLegale as { prenomUsuelUniteLegale: string }).prenomUsuelUniteLegale
  ) {
    name +=
      (uniteLegale as { prenomUsuelUniteLegale: string })
        .prenomUsuelUniteLegale + " ";
  }

  if ((uniteLegale as { prenom2UniteLegale: string })?.prenom2UniteLegale) {
    name +=
      (uniteLegale as { prenom2UniteLegale: string })?.prenom2UniteLegale + " ";
  }

  if ((uniteLegale as { nomUniteLegale: string })?.nomUniteLegale) {
    name += (uniteLegale as { nomUniteLegale: string })?.nomUniteLegale + " ";
  }

  return name;
}

export default async function getCompaniesFrance(
  query: string
): Promise<CompanyPaginate> {
  let INSEE_API_KEY: string;

  try {
    INSEE_API_KEY = await getINSEEApiAccessToken();
  } catch (error) {
    await renewINSEEApiAccessToken();
    INSEE_API_KEY = await getINSEEApiAccessToken();
  }

  const buildQuery = getQuery(query);

  const params = new URLSearchParams(query);
  let q = params.get("q");
  const perPage = params.get("perPage") ? Number(params.get("perPage")) : 20;

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
    return {
      companies: [],
      total: 0,
      page: 0,
      perPage: 0,
      totalPage: 0,
      nbElements: 0,
    };
  }

  companies = data.etablissements.map(
    (company: unknown): Company | undefined => {
      if (typeof company === "object" && company !== null) {
        const naf =
          Object.keys(company).includes("uniteLegale") &&
          typeof (company as any).uniteLegale === "object" &&
          Object((company as any).uniteLegale) !== null &&
          Object.keys(Object((company as any).uniteLegale)).includes(
            "activitePrincipaleUniteLegale"
          )
            ? (company as any).uniteLegale.activitePrincipaleUniteLegale
            : "";
        const nafLegend = naf ? getNafLegend(naf) : "";

        return {
          code: Object.keys(company).includes("siret")
            ? (company as any).siret
            : "",
          name:
            Object.keys(company).includes("uniteLegale") &&
            typeof (company as any).uniteLegale === "object" &&
            Object((company as any).uniteLegale) !== null
              ? nameFormatter((company as any).uniteLegale)
              : "",
          address:
            Object.keys(company).includes("uniteLegale") &&
            typeof (company as any).adresseEtablissement === "object" &&
            Object((company as any).adresseEtablissement) !== null
              ? addressFormatter((company as any).adresseEtablissement)
              : "",
          active:
            Object.keys(company).includes("uniteLegale") &&
            typeof (company as any).uniteLegale === "object" &&
            Object((company as any).uniteLegale) !== null &&
            Object.keys(Object((company as any).uniteLegale)).includes(
              "etatAdministratifUniteLegale"
            ) &&
            (company as any).uniteLegale.etatAdministratifUniteLegale === "A"
              ? true
              : false,
          naf: naf,
          activity: nafLegend ? nafLegend : "",
        };
      }
    }
  );

  // 21
  // 20
  // 200

  //

  return {
    companies,
    total: data.header.total,
    page: Math.ceil((data.header.debut + 1) / perPage),
    perPage: perPage,
    totalPage: Math.ceil(data.header.total / perPage),
    nbElements: data.header.nombre,
  };
}
