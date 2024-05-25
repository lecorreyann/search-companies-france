import fs from "fs";

export default function getConfig(
  configName: string = "config.json"
): { INSEE_API_KEY: string } | undefined {
  configName = `${process.cwd()}/${configName}`;

  if (!fs.existsSync(configName))
    throw new Error("No configuration file found");

  return JSON.parse(fs.readFileSync(configName, "utf8"));
}
