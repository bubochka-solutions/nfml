// Generated from nfml.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import nfmlListener from './nfmlListener.js';
const serializedATN = [4,1,14,132,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,1,1,1,1,1,1,1,4,1,26,8,1,
11,1,12,1,27,1,2,4,2,31,8,2,11,2,12,2,32,1,2,1,2,4,2,37,8,2,11,2,12,2,38,
5,2,41,8,2,10,2,12,2,44,9,2,1,3,1,3,1,3,1,3,1,3,3,3,51,8,3,1,4,5,4,54,8,
4,10,4,12,4,57,9,4,1,5,1,5,4,5,61,8,5,11,5,12,5,62,1,5,1,5,1,5,4,5,68,8,
5,11,5,12,5,69,1,5,1,5,1,6,1,6,4,6,76,8,6,11,6,12,6,77,1,6,1,6,4,6,82,8,
6,11,6,12,6,83,5,6,86,8,6,10,6,12,6,89,9,6,1,6,1,6,1,7,1,7,4,7,95,8,7,11,
7,12,7,96,1,7,1,7,4,7,101,8,7,11,7,12,7,102,5,7,105,8,7,10,7,12,7,108,9,
7,1,7,1,7,1,8,1,8,1,8,4,8,115,8,8,11,8,12,8,116,1,8,5,8,120,8,8,10,8,12,
8,123,9,8,1,8,1,8,5,8,127,8,8,10,8,12,8,130,9,8,1,8,3,32,38,69,0,9,0,2,4,
6,8,10,12,14,16,0,1,1,0,12,12,142,0,18,1,0,0,0,2,21,1,0,0,0,4,30,1,0,0,0,
6,50,1,0,0,0,8,55,1,0,0,0,10,58,1,0,0,0,12,73,1,0,0,0,14,92,1,0,0,0,16,111,
1,0,0,0,18,19,3,16,8,0,19,20,5,0,0,1,20,1,1,0,0,0,21,22,3,4,2,0,22,23,5,
4,0,0,23,25,3,6,3,0,24,26,5,12,0,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,
0,0,27,28,1,0,0,0,28,3,1,0,0,0,29,31,5,2,0,0,30,29,1,0,0,0,31,32,1,0,0,0,
32,33,1,0,0,0,32,30,1,0,0,0,33,42,1,0,0,0,34,36,5,3,0,0,35,37,5,2,0,0,36,
35,1,0,0,0,37,38,1,0,0,0,38,39,1,0,0,0,38,36,1,0,0,0,39,41,1,0,0,0,40,34,
1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,5,1,0,0,0,44,42,1,0,
0,0,45,51,3,16,8,0,46,51,3,8,4,0,47,51,3,10,5,0,48,51,3,12,6,0,49,51,3,14,
7,0,50,45,1,0,0,0,50,46,1,0,0,0,50,47,1,0,0,0,50,48,1,0,0,0,50,49,1,0,0,
0,51,7,1,0,0,0,52,54,8,0,0,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,
56,1,0,0,0,56,9,1,0,0,0,57,55,1,0,0,0,58,60,5,5,0,0,59,61,5,12,0,0,60,59,
1,0,0,0,61,62,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,67,1,0,0,0,64,65,3,
8,4,0,65,66,5,12,0,0,66,68,1,0,0,0,67,64,1,0,0,0,68,69,1,0,0,0,69,70,1,0,
0,0,69,67,1,0,0,0,70,71,1,0,0,0,71,72,5,5,0,0,72,11,1,0,0,0,73,75,5,8,0,
0,74,76,5,12,0,0,75,74,1,0,0,0,76,77,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,
78,87,1,0,0,0,79,81,3,8,4,0,80,82,5,12,0,0,81,80,1,0,0,0,82,83,1,0,0,0,83,
81,1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,79,1,0,0,0,86,89,1,0,0,0,87,85,
1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,90,91,5,9,0,0,91,13,1,
0,0,0,92,94,5,10,0,0,93,95,5,12,0,0,94,93,1,0,0,0,95,96,1,0,0,0,96,94,1,
0,0,0,96,97,1,0,0,0,97,106,1,0,0,0,98,100,3,16,8,0,99,101,5,12,0,0,100,99,
1,0,0,0,101,102,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,105,1,0,0,0,
104,98,1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,109,1,
0,0,0,108,106,1,0,0,0,109,110,5,11,0,0,110,15,1,0,0,0,111,112,3,4,2,0,112,
114,5,6,0,0,113,115,5,12,0,0,114,113,1,0,0,0,115,116,1,0,0,0,116,114,1,0,
0,0,116,117,1,0,0,0,117,121,1,0,0,0,118,120,3,2,1,0,119,118,1,0,0,0,120,
123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,124,1,0,0,0,123,121,1,0,
0,0,124,128,5,7,0,0,125,127,5,12,0,0,126,125,1,0,0,0,127,130,1,0,0,0,128,
126,1,0,0,0,128,129,1,0,0,0,129,17,1,0,0,0,130,128,1,0,0,0,17,27,32,38,42,
50,55,62,69,77,83,87,96,102,106,116,121,128];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class nfmlParser extends antlr4.Parser {

    static grammarFileName = "nfml.g4";
    static literalNames = [ null, null, null, "'-'", "':'", "'---'", "'{'", 
                            "'}'", "'['", "']'", "'[['", "']]'" ];
    static symbolicNames = [ null, "COMMENT", "ID_LETTER", "ID_SEPARATOR", 
                             "COLON", "MULTILINE_STRING_DELIMETER", "OBJECT_OPEN", 
                             "OBJECT_CLOSE", "LIST_OPEN", "LIST_CLOSE", 
                             "ARRAY_OPEN", "ARRAY_CLOSE", "NEWLINE", "WHITESPACE", 
                             "UNICODE_SET" ];
    static ruleNames = [ "nfml", "pair", "identifier", "value", "string", 
                         "multiline_string", "list", "array", "object" ];

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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.object();
	        this.state = 19;
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
	        this.state = 21;
	        this.identifier();
	        this.state = 22;
	        this.match(nfmlParser.COLON);
	        this.state = 23;
	        this.value();
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.match(nfmlParser.NEWLINE);
	            this.state = 27; 
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
	        this.state = 30; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 29;
	        		this.match(nfmlParser.ID_LETTER);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 32; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 34;
	            this.match(nfmlParser.ID_SEPARATOR);
	            this.state = 36; 
	            this._errHandler.sync(this);
	            var _alt = 1+1;
	            do {
	            	switch (_alt) {
	            	case 1+1:
	            		this.state = 35;
	            		this.match(nfmlParser.ID_LETTER);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 38; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	            } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 44;
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
	        this.state = 50;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.object();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.string();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.multiline_string();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.list();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 49;
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, nfmlParser.RULE_string);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 28670) !== 0)) {
	            this.state = 52;
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===12) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 57;
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
	    this.enterRule(localctx, 10, nfmlParser.RULE_multiline_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(nfmlParser.MULTILINE_STRING_DELIMETER);
	        this.state = 60; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 59;
	        		this.match(nfmlParser.NEWLINE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 62; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 67; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 64;
	        		this.string();
	        		this.state = 65;
	        		this.match(nfmlParser.NEWLINE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 69; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 71;
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
	    this.enterRule(localctx, 12, nfmlParser.RULE_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(nfmlParser.LIST_OPEN);
	        this.state = 75; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 74;
	        		this.match(nfmlParser.NEWLINE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 77; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 87;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 79;
	                this.string();
	                this.state = 81; 
	                this._errHandler.sync(this);
	                var _alt = 1;
	                do {
	                	switch (_alt) {
	                	case 1:
	                		this.state = 80;
	                		this.match(nfmlParser.NEWLINE);
	                		break;
	                	default:
	                		throw new antlr4.error.NoViableAltException(this);
	                	}
	                	this.state = 83; 
	                	this._errHandler.sync(this);
	                	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
	                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER ); 
	            }
	            this.state = 89;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	        this.state = 90;
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
	    this.enterRule(localctx, 14, nfmlParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(nfmlParser.ARRAY_OPEN);
	        this.state = 94; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 93;
	            this.match(nfmlParser.NEWLINE);
	            this.state = 96; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===12);
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 98;
	            this.object();
	            this.state = 100; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 99;
	                this.match(nfmlParser.NEWLINE);
	                this.state = 102; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===12);
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 109;
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
	    this.enterRule(localctx, 16, nfmlParser.RULE_object);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.identifier();
	        this.state = 112;
	        this.match(nfmlParser.OBJECT_OPEN);
	        this.state = 114; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 113;
	            this.match(nfmlParser.NEWLINE);
	            this.state = 116; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===12);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 118;
	            this.pair();
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 124;
	        this.match(nfmlParser.OBJECT_CLOSE);
	        this.state = 128;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 125;
	                this.match(nfmlParser.NEWLINE); 
	            }
	            this.state = 130;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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


}

nfmlParser.EOF = antlr4.Token.EOF;
nfmlParser.COMMENT = 1;
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
nfmlParser.WHITESPACE = 13;
nfmlParser.UNICODE_SET = 14;

nfmlParser.RULE_nfml = 0;
nfmlParser.RULE_pair = 1;
nfmlParser.RULE_identifier = 2;
nfmlParser.RULE_value = 3;
nfmlParser.RULE_string = 4;
nfmlParser.RULE_multiline_string = 5;
nfmlParser.RULE_list = 6;
nfmlParser.RULE_array = 7;
nfmlParser.RULE_object = 8;

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




nfmlParser.NfmlContext = NfmlContext; 
nfmlParser.PairContext = PairContext; 
nfmlParser.IdentifierContext = IdentifierContext; 
nfmlParser.ValueContext = ValueContext; 
nfmlParser.StringContext = StringContext; 
nfmlParser.Multiline_stringContext = Multiline_stringContext; 
nfmlParser.ListContext = ListContext; 
nfmlParser.ArrayContext = ArrayContext; 
nfmlParser.ObjectContext = ObjectContext; 
