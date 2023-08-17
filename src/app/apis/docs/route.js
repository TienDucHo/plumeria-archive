import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
const docs = require("@googleapis/docs");
const { google } = require("googleapis");

export async function GET(request) {
  const path = request.nextUrl.searchParams.get("path");

  //   const auth = new docs.auth.GoogleAuth({
  //     keyFilename: process.env.SERVICE_ACCOUNT_PATH,
  //     // Scopes can be specified either as an array or as a single, space-delimited string.
  //     scopes: ["https://www.googleapis.com/auth/documents"],
  //   });

  const { privateKey } = JSON.parse(
    process.env.GOOGLE_PRIVATE_KEY || "{ privateKey: null }"
  );
  const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/documents"],
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      private_key: privateKey,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
  });
  const authClient = await auth.getClient();

  const client = await docs.docs({
    version: "v1",
    auth: authClient,
  });

  revalidatePath(path);

  const createResponse = await client.documents.get({
    documentId: "1lLftgQFyYo8eAO2hMJ7NUYwMvroF8H-Fi_ExSqNniTE",
  });

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    data: createResponse.data,
  });
}
