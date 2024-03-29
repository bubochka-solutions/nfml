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

object: NEWLINE* identifier OBJECT_OPEN NEWLINE+ pair* OBJECT_CLOSE NEWLINE*;

/********************
* Lexer rules
*********************/

// Literal values
ID_LETTER: [a-z];
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

// Comment rule
COMMENT: NEWLINE [ \t]* '#' ~('\r' | '\n')* -> skip;

// Comment at the beginning of file hack
COMMENT_AT_BEGINNING_OF_FILE:
    {this.column === 0}? [ \t]* '#' ~('\r' | '\n')* -> skip
    ;

// Ignore indentation whitespace
WHITESPACE: [ \t]+ -> channel(HIDDEN);

// Enable Unicode support
UNICODE_SET: [\u0000-\uFFFF];
