import { fileURLToPath } from 'url';
import path from 'path';

import { processNfml } from '../index.js';

describe('processNfml', () => {
    it('should return error result when the arguments are missing', async () => {
        const result = await processNfml({});

        expect(result.error).toBeTruthy();
        expect(result.message).toBeDefined();
    });

    it('should return error result when the filename argument is missing', async () => {
        const result = await processNfml({
            platform: 'test',
            outputFile: 'test'
        });

        expect(result.error).toBeTruthy();
        expect(result.message).toBeDefined();
    });

    it('should return error result when the platform argument is missing', async () => {
        const result = await processNfml({
            filename: 'test',
            outputFile: 'test'
        });

        expect(result.error).toBeTruthy();
        expect(result.message).toBeDefined();
    });

    it('should not return error result when the outputFile argument is missing', async () => {
        const dirname = path.dirname(fileURLToPath(import.meta.url));

        const result = await processNfml({
            currentDirectory: dirname,
            filename: 'test-file.nfml',
            platform: 'HTML'
        });

        expect(result.error).not.toBeTruthy();
        expect(result.message).not.toBeDefined();
    });

    it('should compile the input and return the compiled output', async () => {
        const dirname = path.dirname(fileURLToPath(import.meta.url));

        const result = await processNfml({
            currentDirectory: dirname,
            filename: 'test-file.nfml',
            platform: 'HTML'
        });

        expect(result.error).not.toBeTruthy();
        expect(result.message).not.toBeDefined();

        expect(result.output).toEqual(expect.stringContaining('html'));
    });
});
