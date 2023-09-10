/**
 * This cleans the raw document object from Docs API to a readable format.
 * Each paragraph will be in an object {type: "paragraph", content: <paragraph content>}
 * Each image will be in an object {type: "image", source: <image file source>}
 * @param {Object} docs: the raw document object from Docs API
 */
export function getCleanDocs({ document }) {
  let cleanDoc = { title: document.title, content: [] };
  let inlineObjects = document.inlineObjects;
  for (let content of document.body.content) {
    if (content.paragraph) {
      let paragraphStyle =
        content.paragraph.paragraphStyle.namedStyleType;
      let documentObject = [];
      for (let element of content.paragraph.elements) {
        let elem = {};
        if (element.textRun && element.textRun.content != "\n") {
          elem.text = element.textRun.content;
          elem.type = "text";
          elem.textStyle = element.textRun.textStyle;
          elem.paragraphStyle = paragraphStyle;
        } else if (element.inlineObjectElement) {
          let imageId = element.inlineObjectElement.inlineObjectId;
          let imageSource =
            inlineObjects[imageId].inlineObjectProperties
              .embeddedObject.imageProperties.contentUri;
          elem.type = "image";
          elem.imageURI = imageSource;
        }
        documentObject.push(elem);
      }
      cleanDoc.content.push(documentObject);
    }
  }
  return cleanDoc;
}
