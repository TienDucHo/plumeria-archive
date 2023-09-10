const { google } = require("googleapis");
import { getAuthToken } from "./ServicesConfig";

export let drive = null;
export let docs = null;
export let sheet = null;

export async function getDrive() {
  if (drive) return drive;
  let authToken = await getAuthToken();
  drive = google.drive({
    version: "v3",
    auth: authToken,
  });
  return drive;
}

export async function getDocs() {
  if (docs) return docs;
  let authToken = await getAuthToken();
  docs = google.docs({
    version: "v1",
    auth: authToken,
  });
  return docs;
}

export async function getSheets() {}

export async function getFolders({ id, name }) {
  let folderQuery = [
    `"${id}" in parents`,
    name ? `name = "${name}"` : null,
    `mimeType = 'application/vnd.google-apps.folder'`,
  ]
    .filter((n) => n) // Filter all the null values out
    .join(" and ");
  let drive = await getDrive();
  let res = await drive.files.list({
    q: folderQuery,
    orderBy: "modifiedTime desc",
  });
  if (res.status === 200) return res.data.files;
  else return res.errors;
}

/**
 *  Must have an array of files return from Drive API
 * @param {Array} folders
 */
export async function getAllFilesInFolders({ folders }) {
  let customQueries = [];
  let drive = await getDrive();
  folders.forEach((folder) => {
    customQueries.push(`"${folder.id}" in parents`);
  });
  let customQuery =
    customQueries.join(" or ") +
    ` and mimeType = 'application/vnd.google-apps.document'`;
  let files = await drive.files.list({
    q: customQuery,
    orderBy: "modifiedTime desc",
  });
  /**
   * News will be listed in this array follows these convention [{kind, mimeType, id, name}]
   */
  if (files.status === 200) return files.data.files;
  else return files.errors;
}

export async function getDocumentFromId({ id }) {
  let docs = await getDocs();
  let document = await docs.documents.get({
    documentId: id,
  });
  if (document.status === 200) return document.data;
  else return document.errors;
}

export async function getAllFiles({ id, name }) {
  try {
    const folders = await getFolders({ id: id, name: name });
    const res = await getAllFilesInFolders({ folders: folders });
    return res;
  } catch (err) {
    throw err;
  }
}
