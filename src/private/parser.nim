# Import npeg (library for describing PEG parsers)
import npeg

# Import local modules
import utils/string
import grammar/nfmlToken

var value = ""
var lines: seq[string]

let parser = peg "nfml":
  # Multiline part rules
  nfmlMultilineStringLineBeginning <- nfmlToken.lineFeed * *Space *
    !(nfmlToken.multilineStringDelimeter * nfmlToken.lineFeed)

  nfmlMultilineEnd <- nfmlToken.lineFeed * *Space *
    nfmlToken.multilineStringDelimeter

  # Multiline string rule
  nfmlMultilineString <- nfmlToken.multilineStringDelimeter * *nfmlToken.spaceButLineFeed *
    +(nfmlMultilineStringLineBeginning * (nfmlToken.comment | >nfmlToken.line)) *
    nfmlMultilineEnd:
    # Rule handler
    value = ""
    for i, line in capture.capList:
      if i == 0: continue
      value.add parseLine(line.s, multilineMode = true)

  # String rule
  nfmlString <- >nfmlToken.line:
    value = parseLine($1)

  # List part rules
  nfmlListLineBeginning <- nfmlToken.lineFeed * *Space *
    !(nfmlToken.listEnd * nfmlToken.lineFeed)

  # List rule
  nfmlList <- nfmlToken.listBegin * *nfmlToken.spaceButLineFeed *
    +(nfmlListLineBeginning * (nfmlToken.comment | >nfmlToken.line)) * *Space *
    nfmlToken.listEnd:
    # Rule handler
    lines = @[]
    for i, line in capture.capList:
      if i == 0: continue
      lines.add parseLine(line.s)
    value = $lines

  # NFML value rule
  nfmlValue <- nfmlList | nfmlMultilineString | nfmlString
  nfmlPair <- >nfmlToken.identifier * nfmlToken.keyValueDelimeter *
    *(Space - nfmlToken.lineFeed) * nfmlValue:
    # The handler views parsed values
    # This solution is temporary and should be replaced 
    echo $1, ":\n", value

  # Common NFML language rule
  nfml <- *Space * +((nfmlToken.comment | nfmlPair) * *Space) * !1


# This code is executed only in the case if you compile this code
when isMainModule:
  # Parse the data and print the resulting table
  var data = """

           
  test:       just fine!

  kuda-duda:  --- 
    fff \
    \    kkkk абаба галамага ідододлаофівдлаоівдалофі
    # this shouldn't be seen
    \
    ф влдаофідалоіфвждоафж
    ----ddd
    ---

    #just a comment
    #### another comment

    list-test: [       
      kuka
      ruka
      le chuka
      \       owwie

      # comment here

      I love it!
    ]

    button-click: true # included in string
    # not seen
    krwa: \           l
  """

  let res = parser.match(data)

  echo "--------------------------------"
  echo "OK: ", res.ok
  echo "Length of matched string: ", res.matchLen
  echo "Position of last matched character: ", res.matchMax
