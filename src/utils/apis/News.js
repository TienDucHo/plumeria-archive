const { google } = require("googleapis");

export async function getAllNewsIDs() {
  let authToken = await getAuthToken();
  const urls = JSON.parse(process.env.FOLDER_URLS);
  const drive = google.drive({
    version: "v3",
    auth: authToken,
  });
  try {
    let folderQuery = `"${urls.news}" in parents and mimeType = 'application/vnd.google-apps.folder'`;
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
    /**
     * News will be listed in this array follows these convention [{kind, mimeType, id, name}]
     */
    return news.data.files;
  } catch (err) {
    throw err;
  }
}

export async function getAllNewsFromIDs() {}

export async function getNewsFromID() {}

export async function getAllNewsIDsFromOrganization(orgName) {
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
    let folderQuery = `name = '${orgName}' and mimeType = 'application/vnd.google-apps.folder'`;
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
