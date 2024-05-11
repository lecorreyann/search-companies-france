import getINSEEApiAccessToken from "@/application/getINSEEApiAccessToken";
import renewINSEEApiAccessToken from "@/application/renewINSEEApiAccessToken";

test("renewINSEEApiAccessToken", async () => {
  await renewINSEEApiAccessToken();
  // expect the new access token to be different from the old access token
  const accessToken: string = await getINSEEApiAccessToken();
  expect(accessToken).toBeDefined();
});
