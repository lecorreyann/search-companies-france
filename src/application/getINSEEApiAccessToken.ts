import getNewTokenFromINSEEApi from "@/infrastructure/getNewTokenFromINSEEApi";
import fs from "fs";

export const getINSEEApiAccessToken = async (): Promise<string> => {
  const pathConfig = `${process.cwd()}/config.json`;

  if (!fs.existsSync(pathConfig)) {
    // call getNewTokenFromINSEEApi
    const response = await getNewTokenFromINSEEApi();
    const data = (await response.json()) as AccessToken;
    const accessToken = data.access_token;
    const config = {
      INSEE_API_KEY: accessToken,
    };
    // save the access token in a config file
    fs.writeFileSync(pathConfig, JSON.stringify(config));
    return accessToken;
  } else if (!fs.readFileSync(pathConfig, "utf8")) {
    throw new Error(`${pathConfig} is empty`);
  } else if (!JSON.parse(fs.readFileSync(pathConfig, "utf8")).INSEE_API_KEY) {
    throw new Error(`${pathConfig} is missing INSEE_API_KEY`);
  } else {
    const config = JSON.parse(fs.readFileSync(pathConfig, "utf8"));
    const accessToken = config.INSEE_API_KEY;
    return accessToken;
  }
};
