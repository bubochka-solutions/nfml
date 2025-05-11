import path from 'path';
import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { compile } from './src/nfml.js';
import { enableWatcher } from './src/watcher.js';
import { HELP_MODE, ARGUMENT_MAP, MODE_MAP, HELP_TEXT, WATCH_MODE } from './constants.js';

const fileSystemOptions = {
    encoding: 'utf8'
};

const parseArguments = (...inputArguments) => {
    const parsedArguments = {
        platform: 'HTML',
        foundHelpArgument: false
    };

    let argumentMode = '';

    for (const argument of inputArguments) {
        if (argumentMode) {
            if (ARGUMENT_MAP[argument]) {
                throw new Error(`Parameter ${argument} is not expectable`);
            }

            const argumentProperty = MODE_MAP[argumentMode];
            parsedArguments[argumentProperty] = argument;
            argumentMode = '';
        } else {
            argumentMode = ARGUMENT_MAP[argument];

            if (!argumentMode) {
                throw new Error(`Argument ${argument} is not expectable`);
            } else if (argumentMode === WATCH_MODE) {
                parsedArguments.watchMode = true;
            } else if (argumentMode === HELP_MODE) {
                parsedArguments.foundHelpArgument = true;
                break;
            }
        }
    }

    return parsedArguments;
};

export const processNfml = async ({
    filename,
    platform,
    outputFile,
    currentDirectory
}) => {
    const result = {
        error: false
    };

    const requiredArguments = Object.entries({ filename, platform });

    for (const [key, value] of requiredArguments) {
        if (typeof value === 'undefined') {
            result.error = true;
            result.message = `The argument ${key} is missing`;
            return result;
        }
    }

    const fallbackWorkDir = currentDirectory || process.cwd();
    const fullFilePath = path.isAbsolute(filename) ? filename :
        path.resolve(fallbackWorkDir, filename);
    const submoduleWorkDir = path.dirname(fullFilePath);

    const input = await fs.readFile(fullFilePath, fileSystemOptions);

    const { error, compiledOutput, usedFilePaths } = await compile(
        input,
        submoduleWorkDir,
        platform
    );
    result.usedFilePaths = [fullFilePath, ...usedFilePaths];

    if (error) {
        result.error = true;
        result.message = `${filename} (full path: ${fullFilePath})` +
            ` contains errors. Please, see above.`;
    } else if (outputFile) {
        const outputFilePath = path.isAbsolute(outputFile) ? outputFile :
            path.resolve(fallbackWorkDir, outputFile);

        await fs.writeFile(outputFilePath, compiledOutput, fileSystemOptions);
        result.message = `The result has been written to file ${outputFile},` +
            ` path: ${outputFilePath}`;
    } else {
        result.output = compiledOutput;
    }

    return result;
};

const currentModulePath = fileURLToPath(import.meta.url);

// If this is loaded as a main file
if (currentModulePath.endsWith(process.argv[1])) {
    // Ignore first two arguments, since they are "node" and "index.js"
    const inputArguments = process.argv.slice(2);

    const parsedArguments = parseArguments(...inputArguments);
    const { foundHelpArgument, watchMode, filename } = parsedArguments;

    const compilationLogic = async (ignoreError) => {
        const result = await processNfml(parsedArguments);
        const { usedFilePaths } = result;

        if (result.error) {
            console.error(result.message);

            if (!ignoreError) {
                process.exit(1);
            }
        } else if (result.message) {
            console.log(result.message);
        } else if (result.output) {
            console.log(result.output);
        }

        return { usedFilePaths };
    };

    if (foundHelpArgument || !filename) {
        console.log(HELP_TEXT);
    } else if (watchMode) {
        const { usedFilePaths } = await compilationLogic();

        enableWatcher(usedFilePaths, () => {
            compilationLogic(true);
        });
    } else {
        compilationLogic();
    }
}
