import createConfig from "../../src/application/createConfig";
import fs from "fs";

describe("createConfig", () => {
  const pathConfig = `fakeConfig.json`;

  it("createConfig creates config file", () => {
    createConfig(pathConfig, { INSEE_API_KEY: "test" });
    const config = JSON.parse(fs.readFileSync(pathConfig, "utf8"));
    expect(config).toEqual({ INSEE_API_KEY: "test" });
  });
});
