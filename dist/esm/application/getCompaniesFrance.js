import getCompaniesFranceFromINSEEApi from "../infrastructure/getCompaniesFranceFromINSEEApi.js";
import getINSEEApiAccessToken from "../application/getINSEEApiAccessToken.js";
import getQuery from "./getQuery.js";
import renewINSEEApiAccessToken from "../application/renewINSEEApiAccessToken.js";
export default async function getCompaniesFrance(query) {
    const INSEE_API_KEY = await getINSEEApiAccessToken();
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
            address: `${company.adresseEtablissement.numeroVoieEtablissement} ${company.adresseEtablissement.typeVoieEtablissement} ${company.adresseEtablissement.libelleVoieEtablissement}, ${company.adresseEtablissement.codePostalEtablissement} ${company.adresseEtablissement.libelleCommuneEtablissement}`,
        };
    });
    return companies;
}
