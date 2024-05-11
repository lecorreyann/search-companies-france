import getNewTokenFromINSEEApi from "@/infrastructure/getNewTokenFromINSEEApi";
import fs from "fs";

export default async function renewINSEEApiAccessToken(): Promise<void> {
  const response = await getNewTokenFromINSEEApi();
  const data = (await response.json()) as AccessToken;
  const accessToken = data.access_token;

  const pathConfig = `${process.cwd()}/config.json`;
  // check if config.json exists
  if (!fs.existsSync(pathConfig)) {
    const config = {
      INSEE_API_KEY: accessToken,
    };
    fs.writeFileSync(pathConfig, JSON.stringify(config));
  } else {
    const config = JSON.parse(fs.readFileSync(pathConfig, "utf8"));
    config.INSEE_API_KEY = accessToken;
    fs.writeFileSync(pathConfig, JSON.stringify(config));
  }
}
