import Component from '../src/components/Component';

describe('Component', () => {
    describe('constructor', () => {
        it('should create a new Component instance with valid arguments', () => {
            const data = {
                id: 'test-id',
                title: 'Test Title'
            };
            const targetPlatform = 'HTML';

            const component = new Component(data, targetPlatform);

            expect(component.id).toBe('test-id');
            expect(component.title).toBe('Test Title');
            expect(component.targetPlatform).toBe('HTML');
        });

        it('should throw an error with invalid target platform', () => {
            const data = {
                id: 'test-id',
                title: 'Test Title'
            };
            const targetPlatform = 'invalid-platform';

            expect(() => new Component(data, targetPlatform)).toThrow();
        });
    });

    describe('prepare', () => {
        it('should resolve with undefined', async () => {
            const component = new Component({}, 'HTML');

            await expect(component.prepare()).resolves.toBeUndefined();
        });
    });

    describe('traverseChildren', () => {
        it('should traverse valid child components', () => {
            class ValidComponent extends Component {}

            const componentMap = {
                'valid-component': ValidComponent
            };
            const data = {};
            const component = new Component(data, 'HTML');
            component.children = [
                {
                    _class: 'valid-component',
                    title: 'Child 1'
                },
                {
                    _class: 'valid-component',
                    title: 'Child 2'
                }
            ];

            component.traverseChildren(componentMap);

            expect(component.children.length).toBe(2);
            expect(component.children[0]).toBeInstanceOf(ValidComponent);
            expect(component.children[0].title).toBe('Child 1');
            expect(component.children[1]).toBeInstanceOf(ValidComponent);
            expect(component.children[1].title).toBe('Child 2');
        });

        it('should throw an error with invalid child component', () => {
            const componentMap = {};
            const data = {};
            const component = new Component(data, 'HTML');
            component.children = [
                {
                    _class: 'invalid-component',
                    title: 'Child 1'
                }
            ]

            expect(() => component.traverseChildren(componentMap)).toThrow();
        });
    });

    describe('retrieveIdentificator', () => {
        it('should retrieve existing id', () => {
            const data = {
                id: 'test-id'
            };
            const component = new Component(data, 'HTML');

            expect(component.retrieveIdentificator()).toBe('test-id');
        });

        it('should generate random id', () => {
            const component = new Component({}, 'HTML');

            expect(component.retrieveIdentificator()).toHaveLength(8);
        });
    });

    describe('readTemplateFile', () => {
        it('should read valid template file', async () => {
            const component = new Component({}, 'HTML');
            const absolutePath = import.meta.url;
            const folderName = 'test-folder';
            const filename = 'template.txt';

            await expect(component.readTemplateFile(absolutePath, folderName, filename)).resolves.toContain('Template file content');
        });

        it('should throw an error with invalid template file', async () => {
            const component = new Component({}, 'HTML');
            const absolutePath = import.meta.url;
            const folderName = 'test-folder';
            const filename = 'invalid-template.txt';

            await expect(component.readTemplateFile(absolutePath, folderName, filename)).rejects.toThrow();
        });
    });
});
