const { google } = require("googleapis");

export async function getDrive() {
  let authToken = await getAuthToken();
  const drive = google.drive({
    version: "v3",
    auth: authToken,
  });
}

export async function getDocs() {}

export async function getSheets() {}

export async function getFolderIDs(query) {
  const urls = JSON.parse(process.env.FOLDER_URLS);
}
