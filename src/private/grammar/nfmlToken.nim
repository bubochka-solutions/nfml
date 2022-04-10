##################################
# This file contains NFML tokens #
##################################

import npeg

# `grammar` is a macro, which generates plenty of procedures.
# It might be some of them are not used, which causes a warning "not used".
# This pragma prevents the warning from being displayed.
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
  spaceButLineFeed         <- !nfmlToken.lineFeed * Space

  # Comment token
  comment <- '#' * +(!lineFeed * 1)
