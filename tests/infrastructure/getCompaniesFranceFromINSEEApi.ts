import getINSEEApiAccessToken from "../../src/application/getINSEEApiAccessToken";
import getCompaniesFranceFromINSEEApi from "../../src/infrastructure/getCompaniesFranceFromINSEEApi";

test("getCompaniesFranceFromINSEEApi", async () => {
  const INSEEApiAccessToken = await getINSEEApiAccessToken();
  const response = await getCompaniesFranceFromINSEEApi(
    "Planète",
    INSEEApiAccessToken
  );
  expect(response.status).toBe(200);
});
