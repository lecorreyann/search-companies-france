"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const getCompaniesFrance_1 = __importDefault(require("./application/getCompaniesFrance"));
exports.default = getCompaniesFrance_1.default;
