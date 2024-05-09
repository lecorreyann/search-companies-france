import { getCompaniesFranceFromINSEEApi } from "@/infrastructure/getCompaniesFranceFromINSEEApi";
import { getINSEEApiAccessToken } from "./getINSEEApiAccessToken";
import getQuery from "./getQuery";
import { renewINSEEApiAccessToken } from "./renewINSEEApiAccessToken";
import ErrorTexts from "@/application/ErrorTexts";
import { Response } from "node-fetch";

export default async function getCompaniesFrance(query: string): Promise<any> {
  const INSEE_API_KEY = await getINSEEApiAccessToken();

  const buildQuery = getQuery(query);

  let response: Response = await getCompaniesFranceFromINSEEApi(
    buildQuery as string,
    INSEE_API_KEY
  );

  if (response.status === 401) {
    await renewINSEEApiAccessToken();
    const INSEE_API_KEY = await getINSEEApiAccessToken();
    response = await getCompaniesFranceFromINSEEApi(
      buildQuery as string,
      INSEE_API_KEY
    );
  }
  if (response.status === 404) {
    throw new Error(ErrorTexts.NO_COMPANY_FOUND);
  }
  const data = (await response.json()) as INSEEApiResponse;
  return data.etablissements;
}
