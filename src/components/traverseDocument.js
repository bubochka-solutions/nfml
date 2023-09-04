import { ComponentMap } from "./ComponentMap.js";

export const traverseDocument = async (document, targetPlatform) => {
    const RootComponent = ComponentMap[document._class];
    const instance = new RootComponent(document, targetPlatform);
    instance.traverseChildren(ComponentMap);
    await instance.prepare();
    return instance.content;
};
