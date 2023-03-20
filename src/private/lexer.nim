import std/lexbase
import std/streams
import ./utils/character

type
  NfmlLexer* = object of BaseLexer
    filename*: string
    # BaseLexer has a lineNumber, but no columnNumber
    columnNumber*: int

  NfmlTokenType = enum
    tkIdentifier,
    tkString,
    tkMultilineString,
    tkMultilineStringEnd,
    tkObject,
    tkObjectEnd,
    tkList,
    tkListEnd,
    tkArray,
    tkArrayEnd

  NfmlToken* = ref object
    case tokenType: NfmlTokenType
    of tkIdentifier, tkString, tkMultilineString:
      value: string
    of tkObject:
      class: string
    else: discard



## This template inputs boilerplate in place of call.
## Used for newline handling
template handleNewlineTemplate(lexer: var NfmlLexer, handleType: untyped): untyped =
  discard lexer.handleType(position)
  inc lexer.bufpos
  lexer.columnNumber = 1


## Handles newline character
proc handleNewline*(lexer: var NfmlLexer, position: int) =
  case lexer.buf[position]
  # Handles CRLF (Windows)
  of '\c': lexer.handleNewlineTemplate(handleCR)
  # Handles LF (Linux)
  of '\L': lexer.handleNewlineTemplate(handleLF)
  # Not a newline - do nothing
  else: discard


## Checks if there's the end of file (EOL)
proc isEndOfFile*(lexer: NfmlLexer): bool =
  let position = lexer.bufpos
  let currentCharacter = lexer.buf[position]
  return currentCharacter == EndOfFile


## Opens the lexer. Implemented in order not to import lexbase explicitly
proc open*(lexer: var NfmlLexer, input: Stream) =
  lexbase.open(lexer, input)
  lexer.columnNumber = 1


## Opens the lexer based on the filename
proc open*(lexer: var NfmlLexer, filename: string) =
  var fileStream = openFileStream(filename)
  lexer.open(fileStream)
  lexer.filename = filename


## Closes the lexer. Implemented in order not to import lexbase explicitly
proc close*(lexer: var NfmlLexer) = lexbase.close(lexer)


## Gets the current line. Implemented in order not to import lexbase explicitly
proc getCurrentLine*(lexer: var NfmlLexer, marker = true): string =
  lexbase.getCurrentLine(lexer, marker)


## Move bufpos. If the newline occured - handle newline
## Returns true if the newline occured
proc moveToNextCharacter*(lexer: var NfmlLexer): bool =
  inc lexer.bufpos
  inc lexer.columnNumber

  let position = lexer.bufpos
  let character = lexer.buf[position]

  if character.isNewline():
    lexer.handleNewline(position)
    result = true

proc getCurrentCharacter*(lexer: var NfmlLexer): char =
  let position = lexer.bufpos
  let character = lexer.buf[position]
  return character

proc tokenize*(lexer: var NfmlLexer): seq[NfmlToken] =
  var idPlaceholder = ""
  var valuePlaceholder = ""
  var idReached = false
  var onlyWhitespace = false

  while not lexer.isEndOfFile():
    let character = lexer.getCurrentCharacter()

    if not idReached:
      if character.isIdentifierCharacter():
        idPlaceholder &= $character
      elif (character == ':' or character == '{'):
        let token = NfmlToken(tokenType: tkIdentifier, value: idPlaceholder)
        result.add token
        idPlaceholder = ""
        idReached = true
    else:
      valuePlaceholder &= $character

    if lexer.moveToNextCharacter():
      echo "hello buddy"
      if idReached:
        let token = NfmlToken(tokenType: tkString, value: valuePlaceholder)
        result.add token
        valuePlaceholder = ""
        idReached = false

when isMainModule:
  var lexer: NfmlLexer
  lexer.open("test.nfml")

  echo "The filename: ", lexer.filename

  let tokens = lexer.tokenize()

  echo "Tokens:"
  for token in tokens:
    echo token[]

  lexer.close()
