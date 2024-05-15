"use strict";
describe("check environment variables", () => {
    it("check if INSEE_API_CONSUMER_KEY is defined on .env", () => {
        expect(process.env.INSEE_API_CONSUMER_KEY).toBeDefined();
    });
    if (typeof process.env.INSEE_API_CONSUMER_KEY === "string") {
        it("check if INSEE_API_CONSUMER_KEY is not empty", () => {
            expect(process.env.INSEE_API_CONSUMER_KEY?.trim()).not.toEqual("");
        });
    }
    it("check if INSEE_API_CONSUMER_SECRET is defined on .env", () => {
        expect(process.env.INSEE_API_CONSUMER_SECRET).toBeDefined();
    });
    if (typeof process.env.INSEE_API_CONSUMER_SECRET === "string") {
        it("check if INSEE_API_CONSUMER_SECRET is not empty", () => {
            expect(process.env.INSEE_API_CONSUMER_SECRET?.trim()).not.toEqual("");
        });
    }
});
