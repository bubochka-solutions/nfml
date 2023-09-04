const FILENAME_MODE = 'mode:file';
const PLATFORM_MODE = 'mode:platform';
const OUTPUT_MODE = 'mode:output';
export const HELP_MODE = 'mode:help';

export const ARGUMENT_MAP = {
    '--file': FILENAME_MODE,
    '-f': FILENAME_MODE,
    '--platform': PLATFORM_MODE,
    '-p': PLATFORM_MODE,
    '--output': OUTPUT_MODE,
    '-o': OUTPUT_MODE,
    '--help': HELP_MODE,
    '-h': HELP_MODE
};

export const MODE_MAP = {
    [FILENAME_MODE]: 'filename',
    [PLATFORM_MODE]: 'platform',
    [OUTPUT_MODE]: 'outputFile'
};

export const HELP_TEXT = `
NFML (Novice-Friendly Markup Language) compiler
Usage: node index.js [options]

    -f, --file          Input NFML file. Mandatory parameter
    -p, --platform      Target platform.
                        If not specified, the target platform is HTML
    -o, --output        Output file.
                        If not specified, outputs to stdin.
    -h, --help          Show help.

Author: Dmytro Rekechynskyi
`;
