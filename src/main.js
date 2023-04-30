'use strict';

import * as fs from 'fs';
import antlr from 'antlr4';
import NfmlLexer from './antlr/nfmlLexer.js';
import NfmlParser from './antlr/nfmlParser.js'
import NfmlListener from './antlr/nfmlListener.js'

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

class Visitor {
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }

    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          return child.accept(this);
        } else {
          return child.getText();
        }
      });
    }
  }
}

tree.accept(new Visitor());
