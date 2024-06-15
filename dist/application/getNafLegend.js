"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// read json file
const naf_1 = __importDefault(require("../common/naf"));
// import file
// const fs = require("fs");
// const path = require("path");
// const nafJSON = JSON.parse(
//   fs.readFileSync(path.resolve(__dirname, "../common/naf.json"), "utf8")
// );
function getNafLegend(code) {
    const now = new Date();
    // wait for 1 second
    const nafElement = naf_1.default.find((naf) => naf.code === code);
    if (nafElement) {
        const end = new Date();
        // console.log(`getNafLegend took ${end.getTime() - now.getTime()}ms`);
        return nafElement.legend;
    }
    const end = new Date();
    // console.log(`getNafLegend took ${end.getTime() - now.getTime()}ms`);
}
exports.default = getNafLegend;
// export default function getNafLegend(code: string): string | undefined {
//   const now = new Date();
//   // wait for 1 second
//   const nafElement = nafJSON.find(
//     (naf: { code: string; legend: string }) => naf.code === code
//   );
//   if (nafElement) {
//     const end = new Date();
//     console.log(`getNafLegend took ${end.getTime() - now.getTime()}ms`);
//     return nafElement.legend;
//   }
//   const end = new Date();
//   console.log(`getNafLegend took ${end.getTime() - now.getTime()}ms`);
// }
