import Component from '../Component.js';

export default class Link extends Component {
    constructor (data, targetPlatform) {
        super(data, targetPlatform);

        this.url = data.url;
    }

    async prepare() {
        switch (this.targetPlatform) {
            case this.PLATFORM_MAP.html:
                const htmlFile = await this.readTemplateFile(import.meta.url, 'html', 'index.html');

                const preparedPage = htmlFile
                    .replace('{title}', this.title)
                    .replace('{url}', this.url);

                this.content = preparedPage;
                break;
            case this.PLATFORM_MAP.java:
                const javaFile = await this.readTemplateFile(import.meta.url, 'java', 'template.txt');
                const variableName = this.retrieveIdentificator();

                this.variableName = variableName;

                const preparedComponent = javaFile
                    .replace('{title}', this.title)
                    .replaceAll('{identifier}', variableName)
                    .replace('{url}', this.url);

                this.content = preparedComponent;
        }
    }
}
