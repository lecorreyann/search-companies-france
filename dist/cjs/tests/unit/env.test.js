"use strict";
describe("check environment variables", () => {
  it("check if INSEE_API_CONSUMER_KEY is defined on .env", () => {
    expect(process.env.INSEE_API_CONSUMER_KEY).toBeDefined();
  });
  if (typeof process.env.INSEE_API_CONSUMER_KEY === "string") {
    it("check if INSEE_API_CONSUMER_KEY is not empty", () => {
      var _a;
      expect((_a = process.env.INSEE_API_CONSUMER_KEY) == null ? void 0 : _a.trim()).not.toEqual("");
    });
  }
  it("check if INSEE_API_CONSUMER_SECRET is defined on .env", () => {
    expect(process.env.INSEE_API_CONSUMER_SECRET).toBeDefined();
  });
  if (typeof process.env.INSEE_API_CONSUMER_SECRET === "string") {
    it("check if INSEE_API_CONSUMER_SECRET is not empty", () => {
      var _a;
      expect((_a = process.env.INSEE_API_CONSUMER_SECRET) == null ? void 0 : _a.trim()).not.toEqual("");
    });
  }
});
//# sourceMappingURL=env.test.js.map
