import getCompaniesFrance from "@/application/getCompaniesFrance";
import ErrorTexts from "@/application/ErrorTexts";

describe("getCompaniesFrance", () => {
  it("reject when siret 53805889200013", async () => {
    await expect(getCompaniesFrance("53805889200013")).rejects.toThrow(
      new Error(ErrorTexts.NO_COMPANY_FOUND)
    );
  });
  it("reject when siret 53805889200018", async () => {
    await expect(getCompaniesFrance("53805889200018")).rejects.toThrow(
      new Error(ErrorTexts.NO_COMPANY_FOUND)
    );
  });
  it("results.length > 0 when query is Planete", async () => {
    const result = await getCompaniesFrance("Planete");
    expect(result.length).toBeGreaterThan(0);
  });
  it("results[0] has code, name and address when query is Planete", async () => {
    const result = await getCompaniesFrance("Planete");
    expect(result[0]).toHaveProperty("code");
    expect(result[0]).toHaveProperty("name");
    expect(result[0]).toHaveProperty("address");
  });
});
