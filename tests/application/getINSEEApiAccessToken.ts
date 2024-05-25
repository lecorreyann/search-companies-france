import fs from "fs";
import getINSEEApiAccessToken from "../../src/application/getINSEEApiAccessToken";

describe("getINSEEApiAccessToken", () => {
  it("getINSEEApiAccessToken when config.json does not exist", async () => {
    const pathConfig = `${process.cwd()}/config.json`;
    if (fs.existsSync(pathConfig)) {
      fs.unlinkSync(pathConfig);
    }
    expect(fs.existsSync(pathConfig)).toBe(false);
    const accessToken: string = await getINSEEApiAccessToken();
    expect(accessToken).toBeDefined();
  });

  it("getINSEEApiAccessToken when config.json exists", async () => {
    const accessToken: string = await getINSEEApiAccessToken();
    expect(accessToken).toBeDefined();
  });
});
