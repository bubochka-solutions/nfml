import { fileURLToPath } from 'url';
import * as fs from 'fs/promises';
import path from 'path';
import Component from '../Component.js';

export default class Link extends Component {
    constructor (data, targetPlatform) {
        super(data, targetPlatform);

        this.title = data.title;
        this.url = data.url;
    }

    async prepare() {
        switch (this.targetPlatform) {
            case this.PLATFORM_MAP.html:
                const directoryPath = path.dirname(fileURLToPath(import.meta.url));
                const filePath = path.resolve(directoryPath, 'html', 'index.html');
                const file = await fs.readFile(filePath, {encoding: 'utf8'});

                const preparedPage = file
                    .replace('{title}', this.title)
                    .replace('{url}', this.url);

                this.content = preparedPage;
                break;
        }
    }
}
