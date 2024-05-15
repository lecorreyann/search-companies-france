import fs from "fs";
import ErrorTexts from "./ErrorTexts";

export default function createConfig(
  configName: string = "config.json",
  payload: { INSEE_API_KEY: string }
): void {
  const keys = Object.keys(payload);
  const pathConfig = `${process.cwd()}/${configName}`;

  if (keys.length !== 1) {
    throw new Error(ErrorTexts.TRY_TO_SET_INVALID_CONFIG);
  }

  if (!keys.includes("INSEE_API_KEY"))
    throw new Error(ErrorTexts.TRY_TO_SET_INVALID_CONFIG);

  if (payload.INSEE_API_KEY.trim() === "")
    throw new Error(ErrorTexts.INSEE_API_KEY_IS_EMPTY);

  if (fs.existsSync(pathConfig)) fs.unlinkSync(pathConfig);

  fs.writeFileSync(pathConfig, JSON.stringify(payload));

  if (!fs.existsSync(pathConfig))
    throw new Error(ErrorTexts.ERROR_CREATING_CONFIG_FILE);

  const config = JSON.parse(fs.readFileSync(pathConfig, "utf8"));
  if (!config.INSEE_API_KEY) {
    throw new Error(
      ErrorTexts.ERROR_CREATING_CONFIG_FILE_INSEE_API_KEY_NOT_SET
    );
  }
}
