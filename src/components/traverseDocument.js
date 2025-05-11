import { ComponentMap } from "./ComponentMap.js";

export const traverseDocument = async (document, targetPlatform) => {
    const elementClass = document._class;
    const RootComponent = ComponentMap[elementClass];

    if (!RootComponent) {
        throw new Error(`Component ${elementClass} was not found`);
    }

    const instance = new RootComponent(document, targetPlatform);
    instance.traverseChildren(ComponentMap);
    await instance.prepare();
    const { content, variableName } = instance;
    return { content, variableName };
};
