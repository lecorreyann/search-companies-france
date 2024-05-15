import getNewTokenFromINSEEApi from "../infrastructure/getNewTokenFromINSEEApi.js";
import fs from "fs";
import createConfig from "./createConfig.js";
export default async function renewINSEEApiAccessToken() {
    const response = await getNewTokenFromINSEEApi();
    const data = (await response.json());
    const accessToken = data.access_token;
    const pathConfig = `${process.cwd()}/config.json`;
    // check if config.json exists
    if (!fs.existsSync(pathConfig)) {
        createConfig("config.json", { INSEE_API_KEY: accessToken });
    }
    else {
        const config = JSON.parse(fs.readFileSync(pathConfig, "utf8"));
        config.INSEE_API_KEY = accessToken;
        fs.writeFileSync(pathConfig, JSON.stringify(config));
    }
}
