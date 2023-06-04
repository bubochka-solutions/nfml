import { traverseDocument } from '../src/components/traverseDocument';

const targetPlatformList = ['HTML', 'Java'];

describe.each(targetPlatformList)('traverseDocument', (targetPlatform) => {
  it(`should return content for valid document, target platform ${targetPlatform}`, async () => {
    const document = {
      _class: 'Document',
      children: [
        {
          _class: 'Label',
          title: 'Hello World',
        },
      ],
    };

    const expectedContent = 'Hello World';
    const content = await traverseDocument(document, targetPlatform);
    expect(content).toContain(expectedContent);
  });

  it('should throw an error for invalid document', async () => {
    const document = {
      _class: 'InvalidDocument',
    };

    await expect(traverseDocument(document, targetPlatform)).rejects.toThrow();
  });

  it('should throw an error for invalid target platform', async () => {
    const document = {
      _class: 'Document',
      children: [
        {
          _class: 'Label',
          title: 'Hello World',
        },
      ],
    };

    const targetPlatform = 'invalid';
    await expect(traverseDocument(document, targetPlatform)).rejects.toThrow();
  });

  it(`should return content for multiple children, target platform: ${targetPlatform}`, async () => {
    const document = {
      _class: 'Document',
      children: [
        {
          _class: 'Label',
          title: 'Hello',
        },
        {
          _class: 'Label',
          title: 'World',
        },
      ],
    };

    const expectedHelloContent = 'Hello';
    const expectedWorldContent = 'World';

    const content = await traverseDocument(document, targetPlatform);
    expect(content).toContain(expectedHelloContent);
    expect(content).toContain(expectedWorldContent);
  });
});
