import Component from '../Component.js';

export default class Document extends Component {
    constructor (data, targetPlatform) {
        super(data, targetPlatform);

        this.title = data.title;
        this.children = data.children;
        this.rootName = "root";
    }

    async prepare() {
        const children = this.children;
        let childrenContent = '';

        // Let all the childs to be prepared
        await Promise.allSettled(children.map((child) => child.prepare()));

        switch (this.targetPlatform) {
            case this.PLATFORM_MAP.html:
                for (const child of children) {
                    childrenContent += child.content;
                }

                const htmlFile = await this.readTemplateFile(import.meta.url, 'html', 'index.html');

                const preparedPage = htmlFile
                    .replace('{title}', this.title)
                    .replace('{children}', childrenContent);

                this.content = preparedPage;
                break;
            case this.PLATFORM_MAP.java:
                let childrenAssignment = '';

                const rootAssignment = (childName) =>
                    `${this.rootName}.getChildren().add(${childName});\n`;

                for (const child of children) {
                    childrenContent += child.content;
                    childrenAssignment += rootAssignment(child.variableName);
                }

                const javaFile = await this.readTemplateFile(import.meta.url, 'java', 'Example.java');

                const preparedApp = javaFile
                    .replace('{title}', this.title)
                    .replaceAll('DOCUMENT_ROOT_NAME', this.rootName)
                    .replace('//children', childrenContent)
                    .replace('//childrenAssignment', childrenAssignment);

                this.content = preparedApp
                break;
        }
    }
}
