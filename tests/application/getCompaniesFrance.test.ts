import getCompaniesFrance from "../../src/application/getCompaniesFrance";
import { CompanyPaginate } from "../../src/domain/Company";

describe("getCompaniesFrance", () => {
  it("resolve [] when siret 53805889200013", async () => {
    await expect(getCompaniesFrance("q=53805889200013")).resolves.toEqual({
      companies: [],
      total: 0,
      page: 0,
      perPage: 0,
      totalPage: 0,
      nbElements: 0,
    });
  });
  it("results.length > 0 when siret 53805889200018", async () => {
    const result: CompanyPaginate = await getCompaniesFrance(
      "q=53805889200018"
    );
    expect(result.total).toBeGreaterThan(0);
  });
  it("results.length > 0 when query is Planete", async () => {
    const result: CompanyPaginate = await getCompaniesFrance("q=Planete");
    expect(result.total).toBeGreaterThan(0);
  });
  it("results[0] has code, name and address when query is Planete", async () => {
    const result: CompanyPaginate = await getCompaniesFrance("q=Planete");
    expect(result.companies[0]).toHaveProperty("code");
    expect(result.companies[0].code).toBeDefined();
    expect(result.companies[0].code).toMatch(/^\d{14}$/);
    expect(result.companies[0]).toHaveProperty("name");
    expect(result.companies[0].name).toBeDefined();
    expect(result.companies[0].name).not.toEqual("");
    expect(result.companies[0]).toHaveProperty("address");
    expect(result.companies[0].address).toBeDefined();
    expect(result.companies[0].address).not.toEqual("");
  });
});
