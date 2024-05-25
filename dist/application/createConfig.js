"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function createConfig(configName = "config.json", payload) {
    const keys = Object.keys(payload);
    const pathConfig = `${process.cwd()}/${configName}`;
    if (keys.length !== 1) {
        throw new Error("Invalid config payload. Only one key is allowed : INSEE_API_KEY");
    }
    if (!keys.includes("INSEE_API_KEY"))
        throw new Error("INSEE_API_KEY property is missing to config file");
    if (payload.INSEE_API_KEY.trim() === "")
        throw new Error("INSEE_API_KEY property is empty");
    if (fs_1.default.existsSync(pathConfig))
        fs_1.default.unlinkSync(pathConfig);
    fs_1.default.writeFileSync(pathConfig, JSON.stringify(payload));
    if (!fs_1.default.existsSync(pathConfig))
        throw new Error("Error creating config file");
    const config = JSON.parse(fs_1.default.readFileSync(pathConfig, "utf8"));
    if (!config.INSEE_API_KEY) {
        throw new Error("Error creating config file. INSEE_API_KEY property is missing");
    }
}
exports.default = createConfig;
