import { fileURLToPath } from 'url';
import * as fs from 'fs/promises';
import path from 'path';

export default class Component {
    content = '';
    PLATFORM_MAP = {
        html: 'HTML',
        java: 'Java'
    };
    AVAILABLE_PLATFORMS = Object.values(this.PLATFORM_MAP);

    constructor (data, targetPlatform) {
        if (!this.AVAILABLE_PLATFORMS.includes(targetPlatform)) {
            throw new Error(`The system does not support ${targetPlatform}`);
        }

        this.id = data.id;
        this.title = data.title || '';
        this.targetPlatform = targetPlatform;
    }

    async prepare () {}

    traverseChildren(componentMap) {
        if (this.children) {
            const result = [];

            for (const child of this.children) {
                const {_class, compiledOutput, ...data} = child;

                if (compiledOutput) {
                    const element = new Component({}, this.targetPlatform);
                    element.content = compiledOutput;
                    element.variableName = data.variableName;

                    result.push(element);
                    continue;
                }

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

    retrieveIdentificator(identificatorLength = 8) {
        if (this.id) {
            return this.id;
        }

        const FIRST_LETTER_CODE = 97;
        const LETTER_AMOUNT = 25;

        const randomCharacter = () => {
            const letterPosition = Math.round(LETTER_AMOUNT * Math.random());
            return String.fromCharCode(FIRST_LETTER_CODE + letterPosition);
        }

        let identificator = '';

        for (let i = 0; i < identificatorLength; i++) {
            identificator += randomCharacter();
        }

        return identificator;
    }

    async readTemplateFile(absolutePath, folderName, filename) {
        const directoryPath = path.dirname(fileURLToPath(absolutePath));
        const filePath = path.resolve(directoryPath, folderName, filename);
        const file = await fs.readFile(filePath, {encoding: 'utf8'});

        return file;
    }
}
