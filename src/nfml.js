import antlr from 'antlr4';
import NfmlLexer from './antlr/nfmlLexer.js';
import NfmlParser from './antlr/nfmlParser.js'
import Listener from './listener.js';
import Visitor from './visitor.js';
import { traverseDocument } from './components/traverseDocument.js';

export const compile = async (input, targetPlatform) => {
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

    const contents = await traverseDocument(document, targetPlatform);
    return { compiledOutput: contents };
};
