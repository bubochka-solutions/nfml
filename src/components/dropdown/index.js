import Component from '../Component.js';

export default class Dropdown extends Component {
    constructor (data, targetPlatform) {
        super(data, targetPlatform);
        this.values = data.values;
    }

    async prepare() {
        const identifierName = this.retrieveIdentificator();

        switch (this.targetPlatform) {
            case this.PLATFORM_MAP.html:
                const htmlFile = await this.readTemplateFile(import.meta.url, 'html', 'index.html');
                const processedPage = this.processRepeatedComponent(htmlFile);

                const preparedPage = processedPage
                    .replace('{title}', this.title)
                    .replaceAll('{identifier}', identifierName);

                this.content = preparedPage;
                break;
            case this.PLATFORM_MAP.java:
                const javaFile = await this.readTemplateFile(import.meta.url, 'java', 'template.txt');
                const variableName = identifierName.replace(/\W/g, '');
                this.variableName = variableName;
                const processedFile = this.processRepeatedComponent(javaFile);

                const preparedComponent = processedFile
                    .replace('{title}', this.title)
                    .replaceAll('{identifier}', variableName);

                this.content = preparedComponent;
        }
    }

    processRepeatedComponent(inputContent) {
        const repeatedComponent = inputContent.match(/[ ]*\{{([\s\S]+?)\}}/g)?.[0];
        let processedContent = inputContent;

        if (repeatedComponent) {
            const coreComponent = repeatedComponent.replace('{{', '').replace('}}', '');
            const processedValues = [];

            for (const value of this.values) {
                const dropdownValue = value
                    .replace(/[^\w\s]+/g, '')
                    .replace(/\s+/g, '-')
                    .toLowerCase();

                processedValues.push(coreComponent
                    .replace('{value}', dropdownValue)
                    .replace('{label}', value)
                );
            }

            processedContent = processedContent.replace(repeatedComponent, processedValues.join("\n"));
        }

        return processedContent;
    }
}
