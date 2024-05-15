import fs from "fs";
import getINSEEApiAccessToken from "../../../application/getINSEEApiAccessToken.js";
describe("getINSEEApiAccessToken", () => {
    it("getINSEEApiAccessToken when config.json does not exist", async () => {
        const pathConfig = `${process.cwd()}/config.json`;
        if (fs.existsSync(pathConfig)) {
            fs.unlinkSync(pathConfig);
        }
        expect(fs.existsSync(pathConfig)).toBe(false);
        const accessToken = await getINSEEApiAccessToken();
        expect(accessToken).toBeDefined();
    });
    it("getINSEEApiAccessToken when config.json exists", async () => {
        const accessToken = await getINSEEApiAccessToken();
        expect(accessToken).toBeDefined();
    });
});
