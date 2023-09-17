import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { getAllFiles } from "@/utils/Googles";

const { google } = require("googleapis");
/**
 * USAGE:
 * - /apis/news
 * - /apis/news?org=NAME
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
  const ids = JSON.parse(process.env.FOLDER_IDS);
  let result = null;
  try {
    result = await getAllFiles({ id: ids.news, name: orgName });
    return NextResponse.json({
      message: "OK",
      result: result,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Not OK",
      errors: err.errors,
    });
  }
}
