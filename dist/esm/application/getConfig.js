import fs from "fs";
import ErrorTexts from "./ErrorTexts.js";
export default function getConfig(configName = "config.json") {
    configName = `${process.cwd()}/${configName}`;
    if (!fs.existsSync(configName))
        throw new Error(ErrorTexts.NO_CONFIGURATION_FILE_FOUND);
    return JSON.parse(fs.readFileSync(configName, "utf8"));
}
