describe("check environment variables", () => {
  it("check if INSEE_API_CONSUMER_KEY is defined on .env", () => {
    expect(process.env.INSEE_API_CONSUMER_KEY).toBeDefined();
  });

  it("check if INSEE_API_CONSUMER_SECRET is defined on .env", () => {
    expect(process.env.INSEE_API_CONSUMER_SECRET).toBeDefined();
  });
});
