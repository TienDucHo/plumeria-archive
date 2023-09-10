import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { getDocumentFromId } from "@/utils/Googles";

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
  try {
    const res = await getDocumentFromId({ id: id });
    return NextResponse.json({ message: "OK", result: res });
  } catch (err) {
    return NextResponse.json({ message: err.errors });
  }
}
