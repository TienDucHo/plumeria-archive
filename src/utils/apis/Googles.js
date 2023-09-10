const { google } = require("googleapis");
import { getAuthToken } from "../ServicesConfig";

export let drive = null;

export async function getDrive() {
  if (drive) return drive;
  let authToken = await getAuthToken();
  drive = google.drive({
    version: "v3",
    auth: authToken,
  });
  return drive;
}

export async function getDocs() {}

export async function getSheets() {}

export async function getFolderIDs(query) {
  const urls = JSON.parse(process.env.FOLDER_URLS);
}

export async function getAllFoldersFromURL({ url }) {
  let folderQuery = `"${url}" in parents and mimeType = 'application/vnd.google-apps.folder'`;
  let drive = await getDrive();
  let res = await drive.files.list({
    q: folderQuery,
    orderBy: "modifiedTime",
  });
  if (res.status === 200) return res.data.files;
  else throw new Error("Cannot make request");
}
