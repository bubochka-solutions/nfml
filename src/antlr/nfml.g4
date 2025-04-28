// Grammar for NFML
grammar nfml;

/********************
* Fundamental rules
*********************/

nfml: importStatement* object EOF;

pair: identifier COLON value NEWLINE+;

identifier: ID_LETTER+? (ID_SEPARATOR ID_LETTER+?)*;

value: string | multiline_string | list | array;

importStatement: 'import' path NEWLINE+;

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

path: SINGLE_QUOTE
    (DOT_SEGMENT PATH_SEPARATOR)? ((filename | DOT_SEGMENT) PATH_SEPARATOR)* filename EXTENSION?
    SINGLE_QUOTE;

filename: (ID_LETTER | FILENAME_CHAR)+;

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

DOT_SEGMENT: '.' | '..';
PATH_SEPARATOR: '/' | '\\';
SINGLE_QUOTE: '\'';
FILENAME_CHAR: [A-Z_-];
EXTENSION: '.nfml';

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
