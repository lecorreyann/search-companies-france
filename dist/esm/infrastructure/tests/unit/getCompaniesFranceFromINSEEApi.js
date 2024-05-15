import getINSEEApiAccessToken from "../../../application/getINSEEApiAccessToken.js";
import getCompaniesFranceFromINSEEApi from "../../../infrastructure/getCompaniesFranceFromINSEEApi.js";
test("getCompaniesFranceFromINSEEApi", async () => {
    const INSEEApiAccessToken = await getINSEEApiAccessToken();
    const response = await getCompaniesFranceFromINSEEApi("Planète", INSEEApiAccessToken);
    expect(response.status).toBe(200);
});
