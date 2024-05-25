"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function getConfig(configName = "config.json") {
    configName = `${process.cwd()}/${configName}`;
    if (!fs_1.default.existsSync(configName))
        throw new Error("No configuration file found");
    return JSON.parse(fs_1.default.readFileSync(configName, "utf8"));
}
exports.default = getConfig;
