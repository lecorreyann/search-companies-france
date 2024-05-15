import getCompaniesFranceFromINSEEApi from "../infrastructure/getCompaniesFranceFromINSEEApi.js";
import getINSEEApiAccessToken from "../application/getINSEEApiAccessToken.js";
import getQuery from "./getQuery.js";
import renewINSEEApiAccessToken from "../application/renewINSEEApiAccessToken.js";
function addressFormatter(adresseEtablissement) {
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
export default async function getCompaniesFrance(query) {
    let INSEE_API_KEY;
    try {
        INSEE_API_KEY = await getINSEEApiAccessToken();
    }
    catch (error) {
        await renewINSEEApiAccessToken();
        INSEE_API_KEY = await getINSEEApiAccessToken();
    }
    const buildQuery = getQuery(query);
    let response = await getCompaniesFranceFromINSEEApi(buildQuery, INSEE_API_KEY);
    if (response.status === 401) {
        await renewINSEEApiAccessToken();
        const INSEE_API_KEY = await getINSEEApiAccessToken();
        response = await getCompaniesFranceFromINSEEApi(buildQuery, INSEE_API_KEY);
    }
    const data = (await response.json());
    let companies = [];
    if (response.status === 404) {
        return companies;
    }
    companies = data.etablissements.map((company) => {
        return {
            code: company.siret,
            name: company.uniteLegale.denominationUniteLegale,
            address: addressFormatter(company.adresseEtablissement),
        };
    });
    return companies;
}
