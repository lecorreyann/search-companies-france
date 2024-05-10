import { getINSEEApiAccessToken } from "../../../application/getINSEEApiAccessToken.js";
import { renewINSEEApiAccessToken } from "../../../application/renewINSEEApiAccessToken.js";
test("renewINSEEApiAccessToken", async () => {
    await renewINSEEApiAccessToken();
    // expect the new access token to be different from the old access token
    const accessToken = await getINSEEApiAccessToken();
    expect(accessToken).toBeDefined();
});
