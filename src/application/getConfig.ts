import fs from "fs";
import ErrorTexts from "./ErrorTexts";

export default function getConfig(
  configName: string = "config.json"
): { INSEE_API_KEY: string } | undefined {
  configName = `${process.cwd()}/${configName}`;

  if (!fs.existsSync(configName))
    throw new Error(ErrorTexts.NO_CONFIGURATION_FILE_FOUND);

  return JSON.parse(fs.readFileSync(configName, "utf8"));
}
