Table of contents

- [NFML](#nfml)
  * [Usage](#usage)
  * [Syntax](#syntax)

# NFML

NFML (Novice-Friendly Markup Language) is a interface
layout markup language, aimed to be self-descriptive
(understandable even for those who is not similliar with
this language), easy to learn and use, featured and powerful
language.

The serializer and deserializer will be implemented as a
Nim modules. Later it can be easily implemented for any other
language.

## Usage

Basically, it is intended to be the language for web sites.
But features would allow to make it general interface layout
language.

## Syntax

### Types

NFML provides these types of data:

* [Object](#object)
* [String](#string)
* [List](#list)
* [Array](#array)

#### Object

The object is the set of keys and appropriate values:

```
{
  key_one: value one
  key_two: The second value
}
```

The key is always the string, which may contain only latin
characters, underscores, dashes and numbers.
The set of permitted keys is defined by NFML component rules.

The value type is one of any NFML type.

The named objects are written like this:

```
named-object {
  key: value
  inner-object {
    wow: nice
  }
}
```

#### String

The string is set of characters:

```
Ababa gala maga. Some unicode: доброго дня
```

Strings are not enclosed with a special character.
The whole string is contained between the key and a newline:

```
{
  key: This is a one string. Don't you believe? ", `, ' -- nothing can stop it)
  other_key: oops... this is another string...
}
```

But sometimes we need to write a long, long, long, long, long...

long, long, long...

long...

string. Multiline string is invented for this case:

```
{
  key: ---
  This is a one string. Don't you believe? ", `, ' -- nothing can stop it)
  Even a newline)
    The space before the line is not shown in the final product.
    But if you need it, append \ character at the beginning.
  \   This line has 3 spaces at the beginning.
  The string ends with ---. But the line
  must contain just ---, nothing more.
  ---
}
```

The result is:

```
This is a one string. Don't you believe? ", `, ' -- nothing can stop it)
Even a newline)
The space before the line is not shown in the final product.
But if you need it, append `\` character at the beginning.
   This line has 3 spaces at the beginning.
The string ends with ---. But the line
must contain just ---, nothing more.
```

But what if the string should be just an opening bracket `{`?

It's OK:

```
{
  key: {
}
```

It's because the objects start after the character, which is not
a colon `:`.

But lists start from `[`, and arrays start from `[[`.
In this case, you can indicate the value is the string
with a `\` character:

```
{
  key: \[
  other-key: \[[ well)
}
```

#### List

The list is the container of values:

```
[
  value1
  String number two
  3
  4. Great
]
```

The list elements can be only strings.
Each element ends on the newline.

If the element contains only whitespace, it is
considered to be a void space and it is omitted.
If you want to create an element, which contains
only whitespace, start it from `\` character.

This type is useful only for simple elements, for
example, dropbox:

```
dropbox {
  name: animals
  class: primary
  variants: [
    Rabbit
    Dog
    Pig
  ]
  default: none
}
```

Programmers used to fact that array indices start from 0.
So the list elements are counted from 0 (so it's easier to
write scripts).

#### Arrays

Arrays are containers for complex mulitline elements:

```
[[

  button {
    name: button-example
    class: disabled

    label: You can't press me(
  }

  This is a
  one element.
  Still the part of this element

  Oh, it's another element

]]
```

If the element is a container (object, list or array),
it's ended of it's closing character.

If the element is a string, it is ended on a void line
(line, which may contain only whitespace).

A multiline string can be a part of array.


#### Comment

Comment is not a type of data, but a useful part of NFML.

It is started from a single character `#`:

```
{
  key: Key value
  # This is not a part of the code.

  other-key: # Well, this is a string, not a comment. This is because the line should start from # character.

  multiline-text: ---
  # This is a comment
  \# This is not a comment. This is a part of the string.
  ---
}
```
