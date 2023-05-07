import Component from '../Component.js';

export default class Label extends Component {
    constructor (data, targetPlatform) {
        super(data, targetPlatform);

        this.title = data.title;
    }

    async prepare() {
        switch (this.targetPlatform) {
            case this.PLATFORM_MAP.html:
                const htmlFile = await this.readTemplateFile(import.meta.url, 'html', 'index.html');

                const preparedPage = htmlFile
                    .replace('{title}', this.title);

                this.content = preparedPage;
                break;
            case this.PLATFORM_MAP.java:
                const javaFile = await this.readTemplateFile(import.meta.url, 'java', 'template.txt');
                const variableName = this.generateIdentificator();

                this.variableName = variableName;

                const preparedComponent = javaFile
                    .replace('{title}', this.title)
                    .replace('{identifier}', variableName);

                this.content = preparedComponent;
        }
    }
}
