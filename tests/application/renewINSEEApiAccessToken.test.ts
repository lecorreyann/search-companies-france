import getINSEEApiAccessToken from "../../src/application/getINSEEApiAccessToken";
import renewINSEEApiAccessToken from "../../src/application/renewINSEEApiAccessToken";
import fs from "fs";

afterAll(() => {
  const pathConfig = `fakeConfig.json`;
  if (fs.existsSync(pathConfig)) {
    fs.unlinkSync(pathConfig);
  }
});

describe("renewINSEEApiAccessToken", () => {
  it("renewINSEEApiAccessToken when fakeConfig.json does not exist", async () => {
    const pathConfig = `fakeConfig.json`;
    if (fs.existsSync(pathConfig)) {
      fs.unlinkSync(pathConfig);
    }
    expect(fs.existsSync(pathConfig)).toBe(false);
    await renewINSEEApiAccessToken();
    const accessToken: string = await getINSEEApiAccessToken();
    expect(accessToken).toBeDefined();
  });

  it("renewINSEEApiAccessToken when config.json exists", async () => {
    await renewINSEEApiAccessToken();
    const accessToken: string = await getINSEEApiAccessToken();
    expect(accessToken).toBeDefined();
  });
});
