import { jest } from '@jest/globals';
import { compile } from '../src/nfml.js';

// Mute console.error()
global.console.error = jest.fn();

describe('compile', () => {
    it('should return compiled output for valid input', async () => {
        const title = 'Hello, world!';
        const input = `
            document {
                title: ${title}
                children: [[
                ]]
            }
        `;
        const targetPlatform = 'HTML';

        const result = await compile(input, targetPlatform);
        expect(result.compiledOutput).toContain(title);
        expect(result.error).toBeUndefined();
    });

    it('should return error for incorrect identifiers', async () => {
        const input = `
            document {
                titLe: Hello, world!
                children: [[
                ]]
            }
        `;
        const targetPlatform = 'HTML';

        const result = await compile(input, targetPlatform);
        expect(result.error).toBeTruthy();
    });
});

