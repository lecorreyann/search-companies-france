import getINSEEApiAccessToken from "@/application/getINSEEApiAccessToken";
import getCompaniesFranceFromINSEEApi from "@/infrastructure/getCompaniesFranceFromINSEEApi";
import { Response } from "node-fetch";

test("getCompaniesFranceFromINSEEApi", async () => {
  const INSEEApiAccessToken = await getINSEEApiAccessToken();
  const response: Response = await getCompaniesFranceFromINSEEApi(
    "Planète",
    INSEEApiAccessToken
  );
  expect(response.status).toBe(200);
});
