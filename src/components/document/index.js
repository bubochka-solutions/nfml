import { fileURLToPath } from 'url';
import * as fs from 'fs/promises';
import path from 'path';
import Component from '../Component.js';

export default class Document extends Component {
    constructor (data, targetPlatform) {
        super(data, targetPlatform);

        this.title = data.title;
        this.children = data.children;
    }

    async prepare() {
        const children = this.children;
        let childrenContent = '';

        for (const child of children) {
            await child.prepare();
            childrenContent += child.content;
        }

        switch (this.targetPlatform) {
            case this.PLATFORM_MAP.html:
                const directoryPath = path.dirname(fileURLToPath(import.meta.url));
                const filePath = path.resolve(directoryPath, 'html', 'index.html');
                const file = await fs.readFile(filePath, {encoding: 'utf8'});

                const preparedPage = file
                    .replace('{title}', this.title)
                    .replace('{children}', childrenContent);

                this.content = preparedPage;
                break;
        }
    }

}
