import { getINSEEApiAccessToken } from "../../../application/getINSEEApiAccessToken.js";
import fs from "fs";
describe("getINSEEApiAccessToken", () => {
    it("remove config.json and getINSEEApiAccessToken", async () => {
        const pathConfig = `${process.cwd()}/config.json`;
        if (fs.existsSync(pathConfig)) {
            fs.unlinkSync(pathConfig);
        }
        expect(fs.existsSync(pathConfig)).toBe(false);
        const accessToken = await getINSEEApiAccessToken();
        expect(accessToken).toBeDefined();
    });
    it("getINSEEApiAccessToken", async () => {
        const accessToken = await getINSEEApiAccessToken();
        expect(accessToken).toBeDefined();
    });
});
