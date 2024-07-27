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
    outputFile
}) => {
    const result = {
        error: false
    };

    const input = await fs.readFile(filename, fileSystemOptions);
    const workDir = path.dirname(path.resolve(filename));

    const { error, compiledOutput } = await compile(input, workDir, platform);

    if (error) {
        result.error = true;
        result.message = `${filename} contains errors. Please, see above.`;
    } else if (outputFile) {
        await fs.writeFile(outputFile, compiledOutput, fileSystemOptions);
        result.message = `The result has been written to file ${outputFile}`;
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
