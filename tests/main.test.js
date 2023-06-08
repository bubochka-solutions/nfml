import { jest } from '@jest/globals';
import { main } from '../index.js';

// Spy on console.log
const consoleLog = jest.spyOn(global.console, 'log').mockImplementation(() => {});

afterEach(() => {
    consoleLog.mockClear();
});

describe('Main file', () => {
    it('should display the help text when the filename argument is missing', async () => {
        process.argv = ['node', 'index.js'];
        await expect(main()).resolves.not.toThrow();

        expect(consoleLog).toHaveBeenCalledWith(expect.stringContaining('Usage:'));
    });

    it('should compile the input and return the compiled output', async () => {
        process.argv = ['node', 'index.js', '--file', 'my-file.nfml'];
        await expect(main()).resolves.not.toThrow();

        expect(consoleLog).toHaveBeenCalledWith(expect.stringContaining('html'));
    });

    it('should throw an error when an invalid argument is provided', async () => {
        process.argv = ['node', 'index.js', '--invalid-argument'];
        await expect(main()).rejects.toThrow();
    });

    it('should display the help text when the help argument is provided', async () => {
        process.argv = ['node', 'index.js', '--help'];
        await expect(main()).resolves.not.toThrow();

        expect(consoleLog).toHaveBeenCalledWith(expect.stringContaining('Usage:'));
    });
});
