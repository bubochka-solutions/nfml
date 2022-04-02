######################################################
# This file contains utilities for string processing #
######################################################

import strutils

const NEWLINE_CHARACTER = "\n"
const RAW_STRING_PREFIX = "\\"

# Procs below are exported and ready for usage

proc parseLine*(line: string): string =
  result = line
  result.removePrefix(RAW_STRING_PREFIX)
  result &= NEWLINE_CHARACTER
