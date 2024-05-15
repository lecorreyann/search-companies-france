import getConfig from "./getConfig.js";
import renewINSEEApiAccessToken from "./renewINSEEApiAccessToken.js";
export default async function getINSEEApiAccessToken() {
    let config = getConfig();
    if (!config) {
        await renewINSEEApiAccessToken();
        config = getConfig();
    }
    if (config) {
        if (!config.INSEE_API_KEY) {
            throw new Error("INSEE API Key is not defined");
        }
        return config.INSEE_API_KEY;
    }
    throw new Error("INSEE API Key is not defined");
}
