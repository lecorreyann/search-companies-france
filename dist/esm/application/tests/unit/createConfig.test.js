import createConfig from "../../../application/createConfig.js";
import ErrorTexts from "../../../application/ErrorTexts.js";
import fs from "fs";
describe("createConfig", () => {
    const pathConfig = `fakeConfig.json`;
    it("createConfig with invalid configuration payload", () => {
        // @ts-ignore
        expect(() => createConfig(pathConfig, { TEST: "test" })).toThrow(ErrorTexts.TRY_TO_SET_INVALID_CONFIG);
    });
    it("createConfig with empty INSEE_API_KEY", () => {
        expect(() => createConfig(pathConfig, { INSEE_API_KEY: "" })).toThrow(ErrorTexts.INSEE_API_KEY_IS_EMPTY);
    });
    it("createConfig creates config file", () => {
        createConfig(pathConfig, { INSEE_API_KEY: "test" });
        const config = JSON.parse(fs.readFileSync(pathConfig, "utf8"));
        expect(config).toEqual({ INSEE_API_KEY: "test" });
    });
});
