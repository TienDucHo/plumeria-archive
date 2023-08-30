import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const google = require("googleapis");
const drive = require("@googleapis/drive");
const docs = require("@googleapis/docs");

export async function GET(request) {
  const path = request.nextUrl.searchParams.get("path");
  revalidatePath(path);
  return NextResponse.json({ message: "OK" });
}
