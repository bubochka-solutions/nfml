export default class Component {
    content = '';
    PLATFORM_MAP = {
        html: 'HTML',
        java: 'Java'
    };
    AVAILABLE_PLATFORMS = Object.values(this.PLATFORM_MAP);

    constructor (data, targetPlatform) {
        if (!this.AVAILABLE_PLATFORMS.includes(targetPlatform)) {
            throw new Error(`Element Document does not support ${targetPlatform}`);
        }

        this.targetPlatform = targetPlatform;
    }

    async prepare () {}

    traverseChildren(componentMap) {
        if (this.children) {
            const result = [];

            for (const child of this.children) {
                const {_class, ...data} = child;
                const CurrentComponent = componentMap[_class];

                if (!CurrentComponent) {
                    throw new Error(`Component ${_class} was not found`);
                }

                const instance = new CurrentComponent(data, this.targetPlatform);
                instance.traverseChildren(componentMap);

                result.push(instance);
            }

            this.children = result;
        }
    }
}
