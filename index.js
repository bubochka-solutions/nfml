import * as fs from 'fs/promises';
import { compile } from './src/nfml.js';
import { HELP_MODE, ARGUMENT_MAP, MODE_MAP, HELP_TEXT } from './constants.js';

const parsedArguments = {
    platform: 'HTML'
};

const fileSystemOptions = {
    encoding: 'utf8'
};

let argumentMode = '';
let foundHelpArgument = false;

// Ignore first two arguments, since they are "node" and "index.js"
const inputArguments = process.argv.slice(2);

for (const argument of inputArguments) {
    if (argumentMode) {
        if (argumentMode === HELP_MODE) {
            foundHelpArgument = true;
            break;
        }

        const argumentProperty = MODE_MAP[argumentMode];
        parsedArguments[argumentProperty] = argument;
        argumentMode = '';
    } else {
        argumentMode = ARGUMENT_MAP[argument];

        if (!argumentMode) {
            throw new Error(`Argument ${argument} is not expectable`);
        }
    }
}

if (foundHelpArgument || !parsedArguments.filename) {
    console.log(HELP_TEXT);
    process.exit();
}

const { filename, platform, outputFile } = parsedArguments;
const input = await fs.readFile(filename, fileSystemOptions);

const { error, compiledOutput } = await compile(input, platform);

if (error) {
    console.error(`${filename} contains errors. Please, see above.`);
    process.exitCode = 1;
} else if (outputFile) {
    await fs.writeFile(outputFile, compiledOutput, fileSystemOptions);
    console.log(`The result has been written to file ${outputFile}`);
} else {
    console.log(compiledOutput);
}
