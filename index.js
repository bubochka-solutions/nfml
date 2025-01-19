import path from 'path';
import * as fs from 'fs/promises';
import { compile } from './src/nfml.js';
import { HELP_MODE, ARGUMENT_MAP, MODE_MAP, HELP_TEXT } from './constants.js';

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
    const workDir = path.isAbsolute(filename) ? path.dirname(filename) :
        fallbackWorkDir;

    const fullFilePath = path.isAbsolute(filename) ? filename :
        path.resolve(workDir, filename);

    const input = await fs.readFile(fullFilePath, fileSystemOptions);

    const { error, compiledOutput } = await compile(input, workDir, platform);

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

// If this is loaded as a main file
if (import.meta.url.endsWith(process.argv[1])) {
    // Ignore first two arguments, since they are "node" and "index.js"
    const inputArguments = process.argv.slice(2);

    const parsedArguments = parseArguments(...inputArguments);
    const { foundHelpArgument, filename } = parsedArguments;

    if (foundHelpArgument || !filename) {
        console.log(HELP_TEXT);
    } else {
        const result = await processNfml(parsedArguments);

        if (result.error) {
            console.error(result.message);
            process.exitCode = 1;
        } else if (result.message) {
            console.log(result.message);
        } else if (result.output) {
            console.log(result.output);
        }
    }
}
