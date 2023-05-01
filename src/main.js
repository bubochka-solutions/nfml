'use strict';

import * as fs from 'fs';
import antlr from 'antlr4';
import NfmlLexer from './antlr/nfmlLexer.js';
import NfmlParser from './antlr/nfmlParser.js'
import Listener from './listener.js';
import Visitor from './visitor.js';

const filename = process.argv[2];
const input = fs.readFileSync(filename, {
    encoding: 'utf8'
});

const chars = new antlr.InputStream(input);
const lexer = new NfmlLexer(chars);
const tokens = new antlr.CommonTokenStream(lexer);
const parser = new NfmlParser(tokens);
parser.buildParseTrees = true;
const tree = parser.nfml();

tree.accept(new Visitor());

const listener = new Listener();
antlr.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
console.log(listener.getDocument());
