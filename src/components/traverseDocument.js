import Document from "./document/index.js";
import { ComponentMap } from "./ComponentMap.js";

export const traverseDocument = async (document, targetPlatform) => {
    const instance = new Document(document, targetPlatform);
    instance.traverseChildren(ComponentMap);
    await instance.prepare();
    return instance.content;
};
