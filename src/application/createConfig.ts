import fs from "fs";

export default function createConfig(
  configName: string = "config.json",
  payload: { INSEE_API_KEY: string }
): void {
  const keys = Object.keys(payload);
  const pathConfig = `${process.cwd()}/${configName}`;

  if (keys.length !== 1) {
    throw new Error(
      "Invalid config payload. Only one key is allowed : INSEE_API_KEY"
    );
  }

  if (!keys.includes("INSEE_API_KEY"))
    throw new Error("INSEE_API_KEY property is missing to config file");

  if (payload.INSEE_API_KEY.trim() === "")
    throw new Error("INSEE_API_KEY property is empty");

  if (fs.existsSync(pathConfig)) fs.unlinkSync(pathConfig);

  fs.writeFileSync(pathConfig, JSON.stringify(payload));

  if (!fs.existsSync(pathConfig)) throw new Error("Error creating config file");

  const config = JSON.parse(fs.readFileSync(pathConfig, "utf8"));
  if (!config.INSEE_API_KEY) {
    throw new Error(
      "Error creating config file. INSEE_API_KEY property is missing"
    );
  }
}
