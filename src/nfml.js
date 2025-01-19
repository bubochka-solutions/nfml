import path from 'path';
import * as fs from 'fs/promises';

import antlr from 'antlr4';

import NfmlLexer from './antlr/nfmlLexer.js';
import NfmlParser from './antlr/nfmlParser.js'
import Listener from './listener.js';
import Visitor from './visitor.js';
import { traverseDocument } from './components/traverseDocument.js';
import { capitalize, findMultipleElements } from '../utils.js';

export const compile = async (input, workingDirectory, targetPlatform) => {
    const chars = new antlr.InputStream(input);
    const lexer = new NfmlLexer(chars);
    const tokens = new antlr.CommonTokenStream(lexer);
    const parser = new NfmlParser(tokens);
    parser.buildParseTrees = true;

    const tree = parser.nfml();
    tree.accept(new Visitor());

    if (tree.parser._syntaxErrors > 0) {
        return { error: true };
    }

    const listener = new Listener();
    antlr.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

    const document = listener.getDocument();

    const importPaths = document.importPaths
        .map((module) => module.endsWith('.nfml') ? module : `${module}.nfml`)
        .map((module) => path.resolve(workingDirectory, module));

    for (const importPath of importPaths) {
        const subfile = await fs.readFile(importPath, { encoding: 'utf8' });
        const workDir = path.dirname(subfile);
        const { compiledOutput } = await compile(subfile, workDir, targetPlatform);

        const elementFilename = importPath.split('/').pop();
        const elementClass = capitalize(elementFilename.replace('.nfml', ''));
        const placesToInject = findMultipleElements(document, {
            including: {
                _class: elementClass
            }
        });

        for (const placeToInject of placesToInject) {
            placeToInject.compiledOutput = compiledOutput;
        }
    }

    const contents = await traverseDocument(document, targetPlatform);
    return { compiledOutput: contents };
};
