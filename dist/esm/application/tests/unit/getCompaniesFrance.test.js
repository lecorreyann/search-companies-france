import getCompaniesFrance from "../../../application/getCompaniesFrance.js";
describe("getCompaniesFrance", () => {
    it("resolve [] when siret 53805889200013", async () => {
        await expect(getCompaniesFrance("53805889200013")).resolves.toEqual([]);
    });
    it("resolve [] when siret 53805889200018", async () => {
        await expect(getCompaniesFrance("53805889200018")).resolves.toEqual([]);
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
