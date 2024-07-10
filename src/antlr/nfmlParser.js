// Generated from nfml.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import nfmlListener from './nfmlListener.js';
const serializedATN = [4,1,21,181,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,5,0,26,
8,0,10,0,12,0,29,9,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,4,1,38,8,1,11,1,12,1,39,
1,2,4,2,43,8,2,11,2,12,2,44,1,2,1,2,4,2,49,8,2,11,2,12,2,50,5,2,53,8,2,10,
2,12,2,56,9,2,1,3,1,3,1,3,1,3,1,3,3,3,63,8,3,1,4,1,4,1,4,4,4,68,8,4,11,4,
12,4,69,1,5,5,5,73,8,5,10,5,12,5,76,9,5,1,6,1,6,4,6,80,8,6,11,6,12,6,81,
1,6,1,6,1,6,4,6,87,8,6,11,6,12,6,88,1,6,1,6,1,7,1,7,4,7,95,8,7,11,7,12,7,
96,1,7,1,7,4,7,101,8,7,11,7,12,7,102,5,7,105,8,7,10,7,12,7,108,9,7,1,7,1,
7,1,8,1,8,4,8,114,8,8,11,8,12,8,115,1,8,1,8,4,8,120,8,8,11,8,12,8,121,5,
8,124,8,8,10,8,12,8,127,9,8,1,8,1,8,1,9,5,9,132,8,9,10,9,12,9,135,9,9,1,
9,1,9,1,9,4,9,140,8,9,11,9,12,9,141,1,9,5,9,145,8,9,10,9,12,9,148,9,9,1,
9,1,9,5,9,152,8,9,10,9,12,9,155,9,9,1,10,1,10,1,10,3,10,160,8,10,1,10,1,
10,1,10,5,10,165,8,10,10,10,12,10,168,9,10,1,10,1,10,3,10,172,8,10,1,10,
1,10,1,11,4,11,177,8,11,11,11,12,11,178,1,11,3,44,50,88,0,12,0,2,4,6,8,10,
12,14,16,18,20,22,0,2,1,0,12,12,2,0,2,2,16,16,195,0,27,1,0,0,0,2,33,1,0,
0,0,4,42,1,0,0,0,6,62,1,0,0,0,8,64,1,0,0,0,10,74,1,0,0,0,12,77,1,0,0,0,14,
92,1,0,0,0,16,111,1,0,0,0,18,133,1,0,0,0,20,156,1,0,0,0,22,176,1,0,0,0,24,
26,3,8,4,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,30,
1,0,0,0,29,27,1,0,0,0,30,31,3,18,9,0,31,32,5,0,0,1,32,1,1,0,0,0,33,34,3,
4,2,0,34,35,5,4,0,0,35,37,3,6,3,0,36,38,5,12,0,0,37,36,1,0,0,0,38,39,1,0,
0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,3,1,0,0,0,41,43,5,2,0,0,42,41,1,0,0,0,
43,44,1,0,0,0,44,45,1,0,0,0,44,42,1,0,0,0,45,54,1,0,0,0,46,48,5,3,0,0,47,
49,5,2,0,0,48,47,1,0,0,0,49,50,1,0,0,0,50,51,1,0,0,0,50,48,1,0,0,0,51,53,
1,0,0,0,52,46,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,5,1,0,
0,0,56,54,1,0,0,0,57,63,3,18,9,0,58,63,3,10,5,0,59,63,3,12,6,0,60,63,3,14,
7,0,61,63,3,16,8,0,62,57,1,0,0,0,62,58,1,0,0,0,62,59,1,0,0,0,62,60,1,0,0,
0,62,61,1,0,0,0,63,7,1,0,0,0,64,65,5,1,0,0,65,67,3,20,10,0,66,68,5,12,0,
0,67,66,1,0,0,0,68,69,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,9,1,0,0,0,71,
73,8,0,0,0,72,71,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,11,
1,0,0,0,76,74,1,0,0,0,77,79,5,5,0,0,78,80,5,12,0,0,79,78,1,0,0,0,80,81,1,
0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,86,1,0,0,0,83,84,3,10,5,0,84,85,5,12,
0,0,85,87,1,0,0,0,86,83,1,0,0,0,87,88,1,0,0,0,88,89,1,0,0,0,88,86,1,0,0,
0,89,90,1,0,0,0,90,91,5,5,0,0,91,13,1,0,0,0,92,94,5,8,0,0,93,95,5,12,0,0,
94,93,1,0,0,0,95,96,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,106,1,0,0,0,98,
100,3,10,5,0,99,101,5,12,0,0,100,99,1,0,0,0,101,102,1,0,0,0,102,100,1,0,
0,0,102,103,1,0,0,0,103,105,1,0,0,0,104,98,1,0,0,0,105,108,1,0,0,0,106,104,
1,0,0,0,106,107,1,0,0,0,107,109,1,0,0,0,108,106,1,0,0,0,109,110,5,9,0,0,
110,15,1,0,0,0,111,113,5,10,0,0,112,114,5,12,0,0,113,112,1,0,0,0,114,115,
1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,125,1,0,0,0,117,119,3,18,9,0,
118,120,5,12,0,0,119,118,1,0,0,0,120,121,1,0,0,0,121,119,1,0,0,0,121,122,
1,0,0,0,122,124,1,0,0,0,123,117,1,0,0,0,124,127,1,0,0,0,125,123,1,0,0,0,
125,126,1,0,0,0,126,128,1,0,0,0,127,125,1,0,0,0,128,129,5,11,0,0,129,17,
1,0,0,0,130,132,5,12,0,0,131,130,1,0,0,0,132,135,1,0,0,0,133,131,1,0,0,0,
133,134,1,0,0,0,134,136,1,0,0,0,135,133,1,0,0,0,136,137,3,4,2,0,137,139,
5,6,0,0,138,140,5,12,0,0,139,138,1,0,0,0,140,141,1,0,0,0,141,139,1,0,0,0,
141,142,1,0,0,0,142,146,1,0,0,0,143,145,3,2,1,0,144,143,1,0,0,0,145,148,
1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,149,1,0,0,0,148,146,1,0,0,0,
149,153,5,7,0,0,150,152,5,12,0,0,151,150,1,0,0,0,152,155,1,0,0,0,153,151,
1,0,0,0,153,154,1,0,0,0,154,19,1,0,0,0,155,153,1,0,0,0,156,159,5,15,0,0,
157,158,5,13,0,0,158,160,5,14,0,0,159,157,1,0,0,0,159,160,1,0,0,0,160,166,
1,0,0,0,161,162,3,22,11,0,162,163,5,14,0,0,163,165,1,0,0,0,164,161,1,0,0,
0,165,168,1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,0,167,169,1,0,0,0,168,166,
1,0,0,0,169,171,3,22,11,0,170,172,5,17,0,0,171,170,1,0,0,0,171,172,1,0,0,
0,172,173,1,0,0,0,173,174,5,15,0,0,174,21,1,0,0,0,175,177,7,1,0,0,176,175,
1,0,0,0,177,178,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,23,1,0,0,0,24,
27,39,44,50,54,62,69,74,81,88,96,102,106,115,121,125,133,141,146,153,159,
166,171,178];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class nfmlParser extends antlr4.Parser {

    static grammarFileName = "nfml.g4";
    static literalNames = [ null, "'import'", null, "'-'", "':'", "'---'", 
                            "'{'", "'}'", "'['", "']'", "'[['", "']]'", 
                            null, null, null, "'''", null, "'.nfml'" ];
    static symbolicNames = [ null, null, "ID_LETTER", "ID_SEPARATOR", "COLON", 
                             "MULTILINE_STRING_DELIMETER", "OBJECT_OPEN", 
                             "OBJECT_CLOSE", "LIST_OPEN", "LIST_CLOSE", 
                             "ARRAY_OPEN", "ARRAY_CLOSE", "NEWLINE", "DOT_SEGMENT", 
                             "PATH_SEPARATOR", "SINGLE_QUOTE", "FILENAME_CHAR", 
                             "EXTENSION", "COMMENT", "COMMENT_AT_BEGINNING_OF_FILE", 
                             "WHITESPACE", "UNICODE_SET" ];
    static ruleNames = [ "nfml", "pair", "identifier", "value", "importStatement", 
                         "string", "multiline_string", "list", "array", 
                         "object", "path", "filename" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = nfmlParser.ruleNames;
        this.literalNames = nfmlParser.literalNames;
        this.symbolicNames = nfmlParser.symbolicNames;
    }



	nfml() {
	    let localctx = new NfmlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, nfmlParser.RULE_nfml);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 24;
	            this.importStatement();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 30;
	        this.object();
	        this.state = 31;
	        this.match(nfmlParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pair() {
	    let localctx = new PairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, nfmlParser.RULE_pair);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.identifier();
	        this.state = 34;
	        this.match(nfmlParser.COLON);
	        this.state = 35;
	        this.value();
	        this.state = 37; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 36;
	            this.match(nfmlParser.NEWLINE);
	            this.state = 39; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===12);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, nfmlParser.RULE_identifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 41;
	        		this.match(nfmlParser.ID_LETTER);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 44; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 46;
	            this.match(nfmlParser.ID_SEPARATOR);
	            this.state = 48; 
	            this._errHandler.sync(this);
	            var _alt = 1+1;
	            do {
	            	switch (_alt) {
	            	case 1+1:
	            		this.state = 47;
	            		this.match(nfmlParser.ID_LETTER);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 50; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	            } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, nfmlParser.RULE_value);
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.object();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.string();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 59;
	            this.multiline_string();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 60;
	            this.list();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 61;
	            this.array();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importStatement() {
	    let localctx = new ImportStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, nfmlParser.RULE_importStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(nfmlParser.T__0);
	        this.state = 65;
	        this.path();
	        this.state = 67; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 66;
	        		this.match(nfmlParser.NEWLINE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 69; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, nfmlParser.RULE_string);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4190206) !== 0)) {
	            this.state = 71;
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===12) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiline_string() {
	    let localctx = new Multiline_stringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, nfmlParser.RULE_multiline_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(nfmlParser.MULTILINE_STRING_DELIMETER);
	        this.state = 79; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 78;
	        		this.match(nfmlParser.NEWLINE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 81; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 86; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 83;
	        		this.string();
	        		this.state = 84;
	        		this.match(nfmlParser.NEWLINE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 88; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 90;
	        this.match(nfmlParser.MULTILINE_STRING_DELIMETER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, nfmlParser.RULE_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(nfmlParser.LIST_OPEN);
	        this.state = 94; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 93;
	        		this.match(nfmlParser.NEWLINE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 96; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 106;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 98;
	                this.string();
	                this.state = 100; 
	                this._errHandler.sync(this);
	                var _alt = 1;
	                do {
	                	switch (_alt) {
	                	case 1:
	                		this.state = 99;
	                		this.match(nfmlParser.NEWLINE);
	                		break;
	                	default:
	                		throw new antlr4.error.NoViableAltException(this);
	                	}
	                	this.state = 102; 
	                	this._errHandler.sync(this);
	                	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
	                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER ); 
	            }
	            this.state = 108;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	        this.state = 109;
	        this.match(nfmlParser.LIST_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, nfmlParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(nfmlParser.ARRAY_OPEN);
	        this.state = 113; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 112;
	        		this.match(nfmlParser.NEWLINE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 115; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2 || _la===12) {
	            this.state = 117;
	            this.object();
	            this.state = 119; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 118;
	            		this.match(nfmlParser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 121; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 128;
	        this.match(nfmlParser.ARRAY_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, nfmlParser.RULE_object);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 130;
	            this.match(nfmlParser.NEWLINE);
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 136;
	        this.identifier();
	        this.state = 137;
	        this.match(nfmlParser.OBJECT_OPEN);
	        this.state = 139; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 138;
	            this.match(nfmlParser.NEWLINE);
	            this.state = 141; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===12);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 143;
	            this.pair();
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 149;
	        this.match(nfmlParser.OBJECT_CLOSE);
	        this.state = 153;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 150;
	                this.match(nfmlParser.NEWLINE); 
	            }
	            this.state = 155;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	path() {
	    let localctx = new PathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, nfmlParser.RULE_path);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(nfmlParser.SINGLE_QUOTE);
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 157;
	            this.match(nfmlParser.DOT_SEGMENT);
	            this.state = 158;
	            this.match(nfmlParser.PATH_SEPARATOR);
	        }

	        this.state = 166;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 161;
	                this.filename();
	                this.state = 162;
	                this.match(nfmlParser.PATH_SEPARATOR); 
	            }
	            this.state = 168;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	        this.state = 169;
	        this.filename();
	        this.state = 171;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 170;
	            this.match(nfmlParser.EXTENSION);
	        }

	        this.state = 173;
	        this.match(nfmlParser.SINGLE_QUOTE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	filename() {
	    let localctx = new FilenameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, nfmlParser.RULE_filename);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 175;
	            _la = this._input.LA(1);
	            if(!(_la===2 || _la===16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 178; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2 || _la===16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

nfmlParser.EOF = antlr4.Token.EOF;
nfmlParser.T__0 = 1;
nfmlParser.ID_LETTER = 2;
nfmlParser.ID_SEPARATOR = 3;
nfmlParser.COLON = 4;
nfmlParser.MULTILINE_STRING_DELIMETER = 5;
nfmlParser.OBJECT_OPEN = 6;
nfmlParser.OBJECT_CLOSE = 7;
nfmlParser.LIST_OPEN = 8;
nfmlParser.LIST_CLOSE = 9;
nfmlParser.ARRAY_OPEN = 10;
nfmlParser.ARRAY_CLOSE = 11;
nfmlParser.NEWLINE = 12;
nfmlParser.DOT_SEGMENT = 13;
nfmlParser.PATH_SEPARATOR = 14;
nfmlParser.SINGLE_QUOTE = 15;
nfmlParser.FILENAME_CHAR = 16;
nfmlParser.EXTENSION = 17;
nfmlParser.COMMENT = 18;
nfmlParser.COMMENT_AT_BEGINNING_OF_FILE = 19;
nfmlParser.WHITESPACE = 20;
nfmlParser.UNICODE_SET = 21;

nfmlParser.RULE_nfml = 0;
nfmlParser.RULE_pair = 1;
nfmlParser.RULE_identifier = 2;
nfmlParser.RULE_value = 3;
nfmlParser.RULE_importStatement = 4;
nfmlParser.RULE_string = 5;
nfmlParser.RULE_multiline_string = 6;
nfmlParser.RULE_list = 7;
nfmlParser.RULE_array = 8;
nfmlParser.RULE_object = 9;
nfmlParser.RULE_path = 10;
nfmlParser.RULE_filename = 11;

class NfmlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = nfmlParser.RULE_nfml;
    }

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	EOF() {
	    return this.getToken(nfmlParser.EOF, 0);
	};

	importStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportStatementContext);
	    } else {
	        return this.getTypedRuleContext(ImportStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.enterNfml(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.exitNfml(this);
		}
	}


}



class PairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = nfmlParser.RULE_pair;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	COLON() {
	    return this.getToken(nfmlParser.COLON, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.NEWLINE);
	    } else {
	        return this.getToken(nfmlParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.enterPair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.exitPair(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = nfmlParser.RULE_identifier;
    }

	ID_LETTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.ID_LETTER);
	    } else {
	        return this.getToken(nfmlParser.ID_LETTER, i);
	    }
	};


	ID_SEPARATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.ID_SEPARATOR);
	    } else {
	        return this.getToken(nfmlParser.ID_SEPARATOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = nfmlParser.RULE_value;
    }

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	multiline_string() {
	    return this.getTypedRuleContext(Multiline_stringContext,0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.exitValue(this);
		}
	}


}



class ImportStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = nfmlParser.RULE_importStatement;
    }

	path() {
	    return this.getTypedRuleContext(PathContext,0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.NEWLINE);
	    } else {
	        return this.getToken(nfmlParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.enterImportStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.exitImportStatement(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = nfmlParser.RULE_string;
    }

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.NEWLINE);
	    } else {
	        return this.getToken(nfmlParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.exitString(this);
		}
	}


}



class Multiline_stringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = nfmlParser.RULE_multiline_string;
    }

	MULTILINE_STRING_DELIMETER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.MULTILINE_STRING_DELIMETER);
	    } else {
	        return this.getToken(nfmlParser.MULTILINE_STRING_DELIMETER, i);
	    }
	};


	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.NEWLINE);
	    } else {
	        return this.getToken(nfmlParser.NEWLINE, i);
	    }
	};


	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.enterMultiline_string(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.exitMultiline_string(this);
		}
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = nfmlParser.RULE_list;
    }

	LIST_OPEN() {
	    return this.getToken(nfmlParser.LIST_OPEN, 0);
	};

	LIST_CLOSE() {
	    return this.getToken(nfmlParser.LIST_CLOSE, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.NEWLINE);
	    } else {
	        return this.getToken(nfmlParser.NEWLINE, i);
	    }
	};


	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.exitList(this);
		}
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = nfmlParser.RULE_array;
    }

	ARRAY_OPEN() {
	    return this.getToken(nfmlParser.ARRAY_OPEN, 0);
	};

	ARRAY_CLOSE() {
	    return this.getToken(nfmlParser.ARRAY_CLOSE, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.NEWLINE);
	    } else {
	        return this.getToken(nfmlParser.NEWLINE, i);
	    }
	};


	object = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectContext);
	    } else {
	        return this.getTypedRuleContext(ObjectContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.exitArray(this);
		}
	}


}



class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = nfmlParser.RULE_object;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OBJECT_OPEN() {
	    return this.getToken(nfmlParser.OBJECT_OPEN, 0);
	};

	OBJECT_CLOSE() {
	    return this.getToken(nfmlParser.OBJECT_CLOSE, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.NEWLINE);
	    } else {
	        return this.getToken(nfmlParser.NEWLINE, i);
	    }
	};


	pair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PairContext);
	    } else {
	        return this.getTypedRuleContext(PairContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.exitObject(this);
		}
	}


}



class PathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = nfmlParser.RULE_path;
    }

	SINGLE_QUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.SINGLE_QUOTE);
	    } else {
	        return this.getToken(nfmlParser.SINGLE_QUOTE, i);
	    }
	};


	filename = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FilenameContext);
	    } else {
	        return this.getTypedRuleContext(FilenameContext,i);
	    }
	};

	DOT_SEGMENT() {
	    return this.getToken(nfmlParser.DOT_SEGMENT, 0);
	};

	PATH_SEPARATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.PATH_SEPARATOR);
	    } else {
	        return this.getToken(nfmlParser.PATH_SEPARATOR, i);
	    }
	};


	EXTENSION() {
	    return this.getToken(nfmlParser.EXTENSION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.enterPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.exitPath(this);
		}
	}


}



class FilenameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = nfmlParser.RULE_filename;
    }

	ID_LETTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.ID_LETTER);
	    } else {
	        return this.getToken(nfmlParser.ID_LETTER, i);
	    }
	};


	FILENAME_CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(nfmlParser.FILENAME_CHAR);
	    } else {
	        return this.getToken(nfmlParser.FILENAME_CHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.enterFilename(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nfmlListener ) {
	        listener.exitFilename(this);
		}
	}


}




nfmlParser.NfmlContext = NfmlContext; 
nfmlParser.PairContext = PairContext; 
nfmlParser.IdentifierContext = IdentifierContext; 
nfmlParser.ValueContext = ValueContext; 
nfmlParser.ImportStatementContext = ImportStatementContext; 
nfmlParser.StringContext = StringContext; 
nfmlParser.Multiline_stringContext = Multiline_stringContext; 
nfmlParser.ListContext = ListContext; 
nfmlParser.ArrayContext = ArrayContext; 
nfmlParser.ObjectContext = ObjectContext; 
nfmlParser.PathContext = PathContext; 
nfmlParser.FilenameContext = FilenameContext; 
