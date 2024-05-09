import getQuery from "@/application/getQuery";
import ErrorTexts from "@/application/ErrorTexts";

describe("getQuery", () => {
  it("throws an error when the query length is < 9", () => {
    expect(() => getQuery("12345678")).toThrow(
      new Error(ErrorTexts.INVALID_SIREN_SIRET_NUMBER)
    );
  });

  it("throws an error when the query length is > 9 but < 14", () => {
    expect(() => getQuery("1234567891")).toThrow(
      new Error(ErrorTexts.INVALID_SIREN_SIRET_NUMBER)
    );
  });
});
