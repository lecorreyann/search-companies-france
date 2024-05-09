type INSEEApiResponse = {
  access_token: string;
  scope: string;
  token_type: string;
  expires_in: number;
};

export const getNewTokenFromINSEEApi = async (): Promise<Response> => {
  const encodedAuthorization = Buffer.from(
    `${process.env.INSEE_API_CONSUMER_KEY}:${process.env.INSEE_API_CONSUMER_SECRET}`
  ).toString("base64");
  const response = await fetch(`https://api.insee.fr/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${encodedAuthorization}`,
    },
    body: "grant_type=client_credentials",
  });
  return response;
};

export default getNewTokenFromINSEEApi;
