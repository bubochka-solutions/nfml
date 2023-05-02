// Generated from nfml.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,14,83,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,
1,6,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,3,10,55,8,10,1,10,1,10,1,11,1,11,
5,11,61,8,11,10,11,12,11,64,9,11,1,11,1,11,5,11,68,8,11,10,11,12,11,71,9,
11,1,11,1,11,1,12,4,12,76,8,12,11,12,12,12,77,1,12,1,12,1,13,1,13,0,0,14,
1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,1,
0,4,1,0,97,122,2,0,9,9,32,32,2,0,10,10,13,13,1,0,0,65535,86,0,1,1,0,0,0,
0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,
1,0,0,0,0,27,1,0,0,0,1,29,1,0,0,0,3,31,1,0,0,0,5,33,1,0,0,0,7,35,1,0,0,0,
9,39,1,0,0,0,11,41,1,0,0,0,13,43,1,0,0,0,15,45,1,0,0,0,17,47,1,0,0,0,19,
50,1,0,0,0,21,54,1,0,0,0,23,58,1,0,0,0,25,75,1,0,0,0,27,81,1,0,0,0,29,30,
7,0,0,0,30,2,1,0,0,0,31,32,5,45,0,0,32,4,1,0,0,0,33,34,5,58,0,0,34,6,1,0,
0,0,35,36,5,45,0,0,36,37,5,45,0,0,37,38,5,45,0,0,38,8,1,0,0,0,39,40,5,123,
0,0,40,10,1,0,0,0,41,42,5,125,0,0,42,12,1,0,0,0,43,44,5,91,0,0,44,14,1,0,
0,0,45,46,5,93,0,0,46,16,1,0,0,0,47,48,5,91,0,0,48,49,5,91,0,0,49,18,1,0,
0,0,50,51,5,93,0,0,51,52,5,93,0,0,52,20,1,0,0,0,53,55,5,13,0,0,54,53,1,0,
0,0,54,55,1,0,0,0,55,56,1,0,0,0,56,57,5,10,0,0,57,22,1,0,0,0,58,62,3,21,
10,0,59,61,7,1,0,0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,
0,63,65,1,0,0,0,64,62,1,0,0,0,65,69,5,35,0,0,66,68,8,2,0,0,67,66,1,0,0,0,
68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,69,1,0,0,0,72,
73,6,11,0,0,73,24,1,0,0,0,74,76,7,1,0,0,75,74,1,0,0,0,76,77,1,0,0,0,77,75,
1,0,0,0,77,78,1,0,0,0,78,79,1,0,0,0,79,80,6,12,1,0,80,26,1,0,0,0,81,82,7,
3,0,0,82,28,1,0,0,0,5,0,54,62,69,77,2,6,0,0,0,1,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class nfmlLexer extends antlr4.Lexer {

    static grammarFileName = "nfml.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, "'-'", "':'", "'---'", "'{'", "'}'", 
                         "'['", "']'", "'[['", "']]'" ];
	static symbolicNames = [ null, "ID_LETTER", "ID_SEPARATOR", "COLON", "MULTILINE_STRING_DELIMETER", 
                          "OBJECT_OPEN", "OBJECT_CLOSE", "LIST_OPEN", "LIST_CLOSE", 
                          "ARRAY_OPEN", "ARRAY_CLOSE", "NEWLINE", "COMMENT", 
                          "WHITESPACE", "UNICODE_SET" ];
	static ruleNames = [ "ID_LETTER", "ID_SEPARATOR", "COLON", "MULTILINE_STRING_DELIMETER", 
                      "OBJECT_OPEN", "OBJECT_CLOSE", "LIST_OPEN", "LIST_CLOSE", 
                      "ARRAY_OPEN", "ARRAY_CLOSE", "NEWLINE", "COMMENT", 
                      "WHITESPACE", "UNICODE_SET" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

nfmlLexer.EOF = antlr4.Token.EOF;
nfmlLexer.ID_LETTER = 1;
nfmlLexer.ID_SEPARATOR = 2;
nfmlLexer.COLON = 3;
nfmlLexer.MULTILINE_STRING_DELIMETER = 4;
nfmlLexer.OBJECT_OPEN = 5;
nfmlLexer.OBJECT_CLOSE = 6;
nfmlLexer.LIST_OPEN = 7;
nfmlLexer.LIST_CLOSE = 8;
nfmlLexer.ARRAY_OPEN = 9;
nfmlLexer.ARRAY_CLOSE = 10;
nfmlLexer.NEWLINE = 11;
nfmlLexer.COMMENT = 12;
nfmlLexer.WHITESPACE = 13;
nfmlLexer.UNICODE_SET = 14;



