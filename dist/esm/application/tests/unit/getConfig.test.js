import fs from "fs";
import getConfig from "../../../application/getConfig.js";
import createConfig from "../../../application/createConfig.js";
import ErrorTexts from "../../../application/ErrorTexts.js";
const configName = "fakeConfig.json";
beforeAll(() => {
    createConfig(configName, { INSEE_API_KEY: "test" });
});
afterAll(() => {
    fs.unlinkSync(`${process.cwd()}/${configName}`);
});
describe("getConfig", () => {
    it("config has INSEE_API_KEY property", () => {
        const config = getConfig(configName);
        expect(config).toHaveProperty("INSEE_API_KEY");
    });
    it("get unexisting config", () => {
        expect(() => getConfig("unexistingConfig.json")).toThrow(ErrorTexts.NO_CONFIGURATION_FILE_FOUND);
    });
});
