Table of contents

- [NFML](#nfml)
  * [Usage](#usage)
  * [Syntax](#syntax)
    - [Types](#types)
      + [Object](#object)
      + [String](#string)
      + [List](#list)
      + [Array](#array)
    - [Components](#components)
      + [Component file structure](#component-file-structure)
      + [Import statement](#import-statement)
  * [NFML language restrictions](#nfml-language-restrictions)
  * [Examples](#examples)

# NFML

NFML (Novice-Friendly Markup Language) is a interface
layout markup language, aimed to be self-descriptive
(understandable even for those who is not similliar with
this language), easy to learn and use, strict and powerful
language, which has not so much features, but enough to create
perfect UI.

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
  key-one: value one
  key-two: The second value
}
```

Objects in NFML always have classes:

```
class-name {

}
```

Both class and key names may contain only lowercase
letters and dashes between the letters (no more than
one dash in row).

The value type is one of any NFML type.

Another example of object:

```
class-name {
  key: value

  another-key: inner-object {
    key: value
  }

  inner-object {
    wow: nice
  }
}
```

In the example above, `class-name` is the top-level object.
It contains 2 objects, which are instances of `inner-object` class.

Note that part
```
class-name {

  ...

  inner-object {
    wow: nice
  }
}
```

is a shorthand for:

```
class-name {

  ...

  inner-object: inner-object {
    wow: nice
  }
}
```

##### Implementation details

In languages with strict typing, named objects
are class instances (classes should be predefined).

In languages with weak typing,
named objects after deserializarion have additional
property `_class`.

Also: the parser will handle conversion of
class names from kebab-case to PascalCase and
properties from kebab-case to camelCase
automatically.

#### String

The string is set of characters:

```
Ababa gala maga. Some unicode: доброго дня
```

Strings are not enclosed with a special character.
The whole string is contained between the key and a newline:

```
class-name {
  key: This is a one string. Don't you believe? ", `, ' -- nothing can stop it)
  other_key: oops... this is another string...
}
```

But sometimes we need to write a long, long, long, long, long...

long, long, long...

long...

string. Multiline string is invented for this case:

```
class-name {
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

Sometimes we need to start string from `{`, `[` or `[[`.
In this case, you can indicate the value is the string
with a `\` character:

```
class-name {
  key: \[
  other-key: \[[ well)
}
```

In other words, it's a raw string.

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

#### Array

Array is a container for complex mulitline elements:

```
[[

  button {
    name: button-example
    class: disabled

    label: You can't press me(
  }

  ---
  This is
  one element.
  Still the part of this element
  ---

  This is another element
  Oh, it's another one element

]]
```

If the element is a container (object, list or array),
it's ended of it's closing character.

If the element is a string, elements are serparated with a newline
unless this element is not a multiline string.


#### Comment

Comment is not a type of data, but a useful part of NFML.

It is started from a single character `#`:

```
class-name {
  key: Key value
  # This is not a part of the code.

  other-key: # Well, this is a string, not a comment. This is because the line should start from # character.

  multiline-text: ---
  # This is a comment
  \# This is not a comment. This is a part of the string.
  ---
}
```

### Components

This language would be not so useful if there wouldn't
be an out-of-the-box feature to divide complex files into several.

For example, you use menu panel, which is included into every webpage
except several (normal situation, isn't it?)

Well, it may look like this:

```
import components/menu-panel

document {
  menu-bar {
    # an object may hold no properties
    # unless it's necessary
  }
}
```

Looks clean, as for me.

#### Component file structure

Component file contains element which will be
placed into file which imports the component:

```
### components/my-button.isml

button {
  id: button
  class: working
  label: Why are you starting? Push me!
}
```

If you need to override a property in the file
that import the compoment, place directive `@external`:

```
### components/my-button.isml

button {
  id: button
  class: working
  label: @external
}
```

#### Import statement

Import statement includes a component into NFML
document:

```
### testfile.isml

import components/my-button

my-button {
  # It will work if property `label` exists
  # and it has `@external` directive
  label: Hey, buddies! Guess, who has cool button? Yeah, it's me)
}
```

Note that using a component does not require class implementation
with the same name. Moreover, it's restricted.

## NFML language restrictions

* On the top level NFML may contain only one object (just like in JSON)
* Object may be initialized only if class or component with the following name exist
* Lists may contain only single-line strings
* Object and key identifiers may be only kebab-case
* You cannot create a class which has the same name as a component

Actually, the language itself has not so much features.
But it's intended for UI description, not for bustiness-logic)

These restrictions will help to write more clean code, I hope.
But! If you need more useful features - write issues on the repository,
and authors will review them with pleasure.

## Examples

It would be hard to imagine why do we need the
language that slightly resembles KDL but contains
less features... without examples.

As it was already mentioned, this language is intentioned
for describing UI, no more.

So...

```
### menu/menu.isml

navigation {
  class: @external
  entries: [[
    # Settings section
    section {
      id: settings
      label: Settings
      entries: [[

        # Theme settings
        radio-group: {
          id: color-theme
          label: Color Theme
          selections: [
            Dark
            Black
            Another Theme For Developer
          ]
        }
      ]]
    }
  ]]
}


### main.isml

# Import statements
import menu/menu

# Main element holder
document {

  # Menu bar section
  menu {
    class: menu-bar navigation-menu adaptive
  }

  body {
    entries: [[
      ---
      Hello everyone!

      # Comments are allowed to write here, lol
      Welcome to this craze code example!
      It holds much text, but parts should be separated
      and everything should be constructed so that
      \               it will be
      \           easy
      \         to
      \     read
      \this!      
      ---
    ]]
  }
}
```
