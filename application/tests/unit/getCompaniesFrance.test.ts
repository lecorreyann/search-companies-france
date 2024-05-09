import getCompaniesFrance from "@/application/getCompaniesFrance";
import ErrorTexts from "@/application/ErrorTexts";

describe("getCompaniesFrance", () => {
  it("reject when siret 53805889200013", async () => {
    await expect(getCompaniesFrance("53805889200013")).rejects.toThrow(
      new Error(ErrorTexts.NO_COMPANY_FOUND)
    );
  }, 10000);
  it("reject when siret 53805889200018", async () => {
    await expect(getCompaniesFrance("53805889200018")).rejects.toThrow(
      new Error(ErrorTexts.NO_COMPANY_FOUND)
    );
  }, 10000);
  it("results.length > 0 when query is Martin", async () => {
    const result = await getCompaniesFrance("Martin");
    expect(result.length).toBeGreaterThan(0);
  }, 10000);
});
