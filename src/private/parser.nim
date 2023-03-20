import lexer

type NfmlError* = object of IOError

when isMainModule:
  var lexerInst: NfmlLexer
  lexerInst.open("test.nfml")

  echo "The filename: ", lexerInst.filename

  while not lexerInst.isEndOfFile():
    let position = lexerInst.bufpos
    let character = lexerInst.buf[position]

    let line = lexerInst.getCurrentLine()
    echo line

    echo (
      lineNumber: lexerInst.lineNumber,
      columnNumber: lexerInst.columnNumber
    )

    let movedToNextline = lexerInst.moveToNextCharacter()
    # if movedToNextline:
      # echo "Newline was detected, moving to the next line"

  lexerInst.close()
