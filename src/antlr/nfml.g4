// Grammar for NFML
grammar nfml;

/********************
* Fundamental rules
*********************/

nfml: object EOF;

pair: identifier COLON value NEWLINE+;

identifier: ID_LETTER+? (ID_SEPARATOR ID_LETTER+?)*;

value: object | string | multiline_string | list | array;

/********************
* Types of data
*********************/

string: (~NEWLINE)*;

multiline_string
    : MULTILINE_STRING_DELIMETER NEWLINE+ (string NEWLINE)+? MULTILINE_STRING_DELIMETER
    ;

list: LIST_OPEN NEWLINE+ (string NEWLINE+)* LIST_CLOSE;

array: ARRAY_OPEN NEWLINE+ (object NEWLINE+)* ARRAY_CLOSE;

object: identifier OBJECT_OPEN NEWLINE+ pair* OBJECT_CLOSE NEWLINE*;

/********************
* Lexer rules
*********************/

// Comment rule
COMMENT: '#' .*? (NEWLINE | EOF) -> skip;

// Literal values
ID_LETTER: 'a'..'z';
ID_SEPARATOR: '-';
COLON: ':';

MULTILINE_STRING_DELIMETER: '---';

OBJECT_OPEN: '{';
OBJECT_CLOSE: '}';

LIST_OPEN: '[';
LIST_CLOSE: ']';

ARRAY_OPEN: '[[';
ARRAY_CLOSE: ']]';

NEWLINE: ('\r'? '\n');

// Ignore indentation whitespace
WHITESPACE: [ \t]+ -> channel(HIDDEN);

// Enable Unicode support
UNICODE_SET: [\u0000-\uFFFF];
