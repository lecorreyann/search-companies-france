import getConfig from "./getConfig";
import renewINSEEApiAccessToken from "./renewINSEEApiAccessToken";

export default async function getINSEEApiAccessToken(): Promise<string> {
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
