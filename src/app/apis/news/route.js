import { GOOGLE_SCOPES, getAuthToken } from "@/utils/ServicesConfig";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const { google } = require("googleapis");
/**
 * This returns all news, ordered by time descended (meaning latest new first) by modified Time
 * If the search params has a key call 'org', it will instead get a list of news ordered by
 * time descended from an organization
 * @param {NextRequest} request
 * @returns {message, news}
 */
export async function GET(request) {
  const path = request.nextUrl.searchParams.get("path");
  revalidatePath(path);
  const { searchParams } = new URL(request.url);
  const orgName = searchParams.get("org");
  let authToken = await getAuthToken();
  const urls = JSON.parse(process.env.FOLDER_URLS);
  const drive = google.drive({
    version: "v3",
    auth: authToken,
  });
  /**
   * News ID will be listed in this array follows these convention [{kind, mimeType, id, name}]
   */
  try {
    let folderQuery = orgName
      ? `name = '${orgName}' and mimeType = 'application/vnd.google-apps.folder'`
      : `"${urls.news}" in parents and mimeType = 'application/vnd.google-apps.folder'`;
    let res = await drive.files.list({
      q: folderQuery,
      orderBy: "modifiedTime",
    });
    let orgs = res.data.files;
    let customQueries = [];
    for (const org of orgs) {
      customQueries.push(`"${org.id}" in parents`);
    }
    let customQuery =
      customQueries.join(" or ") +
      ` and mimeType = 'application/vnd.google-apps.document'`;
    let news = await drive.files.list({
      q: customQuery,
      orderBy: "modifiedTime desc",
    });
    return NextResponse.json({
      message: "OK",
      news: news.data.files,
    });
  } catch (err) {
    return NextResponse.json({ message: err.response.data.error });
  }
}
