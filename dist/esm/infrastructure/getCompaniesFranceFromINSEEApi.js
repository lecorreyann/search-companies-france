import fetch from "node-fetch";
export const getCompaniesFranceFromINSEEApi = async (query, INSEE_API_KEY) => {
    const response = await fetch(`https://api.insee.fr/entreprises/sirene/V3.11/siret?${new URLSearchParams({
        q: query,
    }).toString()}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${INSEE_API_KEY}`,
        },
    });
    return response;
};
export default getCompaniesFranceFromINSEEApi;
