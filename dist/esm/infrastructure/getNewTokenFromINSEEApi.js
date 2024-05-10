import fetch from "node-fetch";
export const getNewTokenFromINSEEApi = async () => {
    if (!process.env.INSEE_API_CONSUMER_KEY)
        throw new Error("INSEE_API_CONSUMER_KEY is not defined on .env");
    if (!process.env.INSEE_API_CONSUMER_SECRET)
        throw new Error("INSEE_API_CONSUMER_SECRET is not defined on .env");
    const encodedAuthorization = Buffer.from(`${process.env.INSEE_API_CONSUMER_KEY}:${process.env.INSEE_API_CONSUMER_SECRET}`).toString("base64");
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
