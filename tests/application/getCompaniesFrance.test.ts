import getCompaniesFrance from "../../src/application/getCompaniesFrance";

describe("getCompaniesFrance", () => {
  it("resolve [] when siret 53805889200013", async () => {
    await expect(getCompaniesFrance("53805889200013")).resolves.toEqual([]);
  });
  it("results.length > 0 when siret 53805889200018", async () => {
    const result = await getCompaniesFrance("53805889200018");
    expect(result.length).toBeGreaterThan(0);
  });
  it("results.length > 0 when query is Planete", async () => {
    const result = await getCompaniesFrance("Planete");
    expect(result.length).toBeGreaterThan(0);
  });
  it("results[0] has code, name and address when query is Planete", async () => {
    const result = await getCompaniesFrance("Planete");
    expect(result[0]).toHaveProperty("code");
    expect(result[0].code).toBeDefined();
    expect(result[0].code).toMatch(/^\d{14}$/);
    expect(result[0]).toHaveProperty("name");
    expect(result[0].name).toBeDefined();
    expect(result[0].name).not.toEqual("");
    expect(result[0]).toHaveProperty("address");
    expect(result[0].address).toBeDefined();
    expect(result[0].address).not.toEqual("");
  });
});
