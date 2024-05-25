import fs from "fs";
import getConfig from "../../src/application/getConfig";
import createConfig from "../../src/application/createConfig";

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
});
