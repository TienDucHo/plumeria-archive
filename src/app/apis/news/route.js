import { getAuthToken } from "@/utils/ServicesConfig";
import {
  getAllNewsFromOrganization,
  getAllNewsIDs,
} from "@/utils/apis/News";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

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
  let result = null;
  result = orgName
    ? await getAllNewsIDsFromOrganization(orgName)
    : await getAllNewsIDs();
  return NextResponse.json({
    message: "OK",
    result: result,
  });
}
