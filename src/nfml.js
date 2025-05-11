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
        return {
            error: true,
            usedFilePaths: []
        };
    }

    const listener = new Listener();
    antlr.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

    const document = listener.getDocument();

    const importPaths = document.importPaths
        .map((module) => module.endsWith('.nfml') ? module : `${module}.nfml`)
        .map((module) => path.resolve(workingDirectory, module));

    let compiledFilePaths = new Set(importPaths);

    for (const importPath of importPaths) {
        let subfile;

        try {
            subfile = await fs.readFile(importPath, { encoding: 'utf8' });
        } catch (error) {
            console.error(`This file is inaccessible: ${importPath}`);
            return {
                error: true,
                usedFilePaths: compiledFilePaths
            };
        }

        const workDir = path.dirname(importPath);
        const {
            compiledOutput,
            usedFilePaths,
            variableName,
            error
        } = await compile(subfile, workDir, targetPlatform);

        compiledFilePaths = new Set([...compiledFilePaths, ...usedFilePaths]);

        if (error) {
            return {
                error: true,
                usedFilePaths: compiledFilePaths
            };
        }

        const elementFilename = path.basename(importPath);
        const elementClass = capitalize(elementFilename.replace('.nfml', ''));
        const placesToInject = findMultipleElements(document, {
            including: {
                _class: elementClass
            }
        });

        for (const placeToInject of placesToInject) {
            placeToInject.compiledOutput = compiledOutput;
            placeToInject.variableName = variableName;
        }
    }

    try {
        const { content, variableName } =
            await traverseDocument(document, targetPlatform);

        return {
            compiledOutput: content,
            usedFilePaths: compiledFilePaths,
            variableName: variableName
        };
    } catch (error) {
        console.error(error);
        return {
            error: true,
            usedFilePaths: compiledFilePaths
        }
    }
};
