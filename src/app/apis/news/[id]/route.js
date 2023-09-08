import { getAuthToken } from "@/utils/ServicesConfig";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const { google } = require("googleapis");
/**
 * USAGE:
 * - /apis/news/[id]
 * This returns a document content of a news file from an new id
 * @param {NextRequest} request
 * @param {Object} params
 * @returns {message, news}
 */
export async function GET(request, { params }) {
  const path = request.nextUrl.searchParams.get("path");
  revalidatePath(path);
  const id = params.id; // id of the file
  let authToken = await getAuthToken();
  const docs = google.docs({
    version: "v1",
    auth: authToken,
  });
  /**
   *
   */
  try {
    console.log(id);
    let news = await docs.documents.get({
      documentId: id,
    });
    return NextResponse.json({
      message: "OK",
      news: news.data,
    });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
}
