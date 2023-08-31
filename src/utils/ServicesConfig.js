export const GOOGLE_SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/documents",
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/drive.file",
];

const { google } = require("googleapis");

export async function getAuthToken() {
  if (typeof window !== "undefined") {
    throw new Error("NO SECRETS ON CLIENT!");
  }

  const { privateKey } = JSON.parse(
    process.env.GOOGLE_PRIVATE_KEY || "{ privateKey: null }"
  );

  const auth = new google.auth.GoogleAuth({
    scopes: GOOGLE_SCOPES,
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      private_key: privateKey,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
  });
  const authToken = await auth.getClient();
  return authToken;
}
