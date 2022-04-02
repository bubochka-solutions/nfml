##################################
# This file contains NFML tokens #
##################################

import npeg

# This interesting construction was found in `npeg` repository
when defined(nimHasUsed): {.used.}

grammar "nfmlToken":
  # identifier-name: value
  identifier        <- +Lower * *('-' * +Lower)
  keyValueDelimeter <- ':'

  # Object tokens
  objectBegin <- '{'
  objectEnd   <- '}'

  # Array tokens
  arrayBegin  <- "[["
  arrayEnd    <- "]]"

  # List tokens
  listBegin   <- '['
  listEnd     <- ']'

  # String-oriented tokens
  multilineStringDelimeter <- "---"
  lineFeed                 <- ?'\r' * '\n'
  line                     <- ?('\\' * +' ') * +(!lineFeed * 1)

  # Comment token
  comment <- '#' * +(!lineFeed * 1)
