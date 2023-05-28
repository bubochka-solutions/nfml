// Generated from nfml.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,15,101,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,
5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,3,10,57,8,10,1,10,1,10,
1,11,1,11,5,11,63,8,11,10,11,12,11,66,9,11,1,11,1,11,5,11,70,8,11,10,11,
12,11,73,9,11,1,11,1,11,1,12,1,12,5,12,79,8,12,10,12,12,12,82,9,12,1,12,
1,12,5,12,86,8,12,10,12,12,12,89,9,12,1,12,1,12,1,13,4,13,94,8,13,11,13,
12,13,95,1,13,1,13,1,14,1,14,0,0,15,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,
9,19,10,21,11,23,12,25,13,27,14,29,15,1,0,4,1,0,97,122,2,0,9,9,32,32,2,0,
10,10,13,13,1,0,0,65535,106,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,
0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,
1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,
1,31,1,0,0,0,3,33,1,0,0,0,5,35,1,0,0,0,7,37,1,0,0,0,9,41,1,0,0,0,11,43,1,
0,0,0,13,45,1,0,0,0,15,47,1,0,0,0,17,49,1,0,0,0,19,52,1,0,0,0,21,56,1,0,
0,0,23,60,1,0,0,0,25,76,1,0,0,0,27,93,1,0,0,0,29,99,1,0,0,0,31,32,7,0,0,
0,32,2,1,0,0,0,33,34,5,45,0,0,34,4,1,0,0,0,35,36,5,58,0,0,36,6,1,0,0,0,37,
38,5,45,0,0,38,39,5,45,0,0,39,40,5,45,0,0,40,8,1,0,0,0,41,42,5,123,0,0,42,
10,1,0,0,0,43,44,5,125,0,0,44,12,1,0,0,0,45,46,5,91,0,0,46,14,1,0,0,0,47,
48,5,93,0,0,48,16,1,0,0,0,49,50,5,91,0,0,50,51,5,91,0,0,51,18,1,0,0,0,52,
53,5,93,0,0,53,54,5,93,0,0,54,20,1,0,0,0,55,57,5,13,0,0,56,55,1,0,0,0,56,
57,1,0,0,0,57,58,1,0,0,0,58,59,5,10,0,0,59,22,1,0,0,0,60,64,3,21,10,0,61,
63,7,1,0,0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,67,
1,0,0,0,66,64,1,0,0,0,67,71,5,35,0,0,68,70,8,2,0,0,69,68,1,0,0,0,70,73,1,
0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,75,6,11,
0,0,75,24,1,0,0,0,76,80,4,12,0,0,77,79,7,1,0,0,78,77,1,0,0,0,79,82,1,0,0,
0,80,78,1,0,0,0,80,81,1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,87,5,35,0,0,
84,86,8,2,0,0,85,84,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,
90,1,0,0,0,89,87,1,0,0,0,90,91,6,12,0,0,91,26,1,0,0,0,92,94,7,1,0,0,93,92,
1,0,0,0,94,95,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,97,1,0,0,0,97,98,6,
13,1,0,98,28,1,0,0,0,99,100,7,3,0,0,100,30,1,0,0,0,7,0,56,64,71,80,87,95,
2,6,0,0,0,1,0];


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
                          "COMMENT_AT_BEGINNING_OF_FILE", "WHITESPACE", 
                          "UNICODE_SET" ];
	static ruleNames = [ "ID_LETTER", "ID_SEPARATOR", "COLON", "MULTILINE_STRING_DELIMETER", 
                      "OBJECT_OPEN", "OBJECT_CLOSE", "LIST_OPEN", "LIST_CLOSE", 
                      "ARRAY_OPEN", "ARRAY_CLOSE", "NEWLINE", "COMMENT", 
                      "COMMENT_AT_BEGINNING_OF_FILE", "WHITESPACE", "UNICODE_SET" ];

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
nfmlLexer.COMMENT_AT_BEGINNING_OF_FILE = 13;
nfmlLexer.WHITESPACE = 14;
nfmlLexer.UNICODE_SET = 15;

nfmlLexer.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch (ruleIndex) {
		case 12:
			return this.COMMENT_AT_BEGINNING_OF_FILE_sempred(localctx, predIndex);
    	default:
    		throw "No registered predicate for:" + ruleIndex;
    }
};

nfmlLexer.prototype.COMMENT_AT_BEGINNING_OF_FILE_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.column === 0;
		default:
			throw "No predicate with index:" + predIndex;
	}
};




