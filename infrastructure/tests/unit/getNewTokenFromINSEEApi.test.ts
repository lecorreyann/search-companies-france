import getNewTokenFromINSEEApi from "@/infrastructure/getNewTokenFromINSEEApi";
import { Response } from "node-fetch";

test("getNewTokenFromINSEEApi", async () => {
  const response: Response = await getNewTokenFromINSEEApi();
  expect(response.status).toBe(200);
  const data = await response.json();
  if (response.status === 200) {
    expect(data).toHaveProperty("access_token");
    expect(data).toHaveProperty("scope");
    expect(data).toHaveProperty("token_type");
    expect(data).toHaveProperty("expires_in");
  }
});
