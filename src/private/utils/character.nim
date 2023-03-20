const NewlineCharacters = {'\c', '\L'}
const IdentifierCharacters = {'a'..'z', '-'}
const WhitespaceCharacters = {' ', '\t'}

proc isNewline*(character: char): bool =
  NewlineCharacters.contains(character)

proc isIdentifierCharacter*(character: char): bool =
  IdentifierCharacters.contains(character)

proc isWhitespaceCharacter*(character: char): bool =
  WhitespaceCharacters.contains(character)
