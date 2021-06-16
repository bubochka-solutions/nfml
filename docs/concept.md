Table of contents

- [NFML](#nfml)
  * [Usage](#usage)
  * [Engine](#engine)
  * [Project hierarchy](#project-hierarchy)
    + [File extensions](#file-extensions)
    + [Folders, files and other stuff](#folders-files-and-other-stuff)
  * [Syntax](#syntax)
  * [Configuration](#configuration)
  * [Themes](#themes)


# NFML

NFML (Novice-Friendly Markup Language) is a interface
layout markup language, aimed to be self-descriptive
(understandable even for those who is not similliar with
this language), easy to learn and use, featured and powerful
language.

In order to have less duplicated pieces, NFML will include
such things, like "common part" and "components". They
will be covered below.

## Usage

Basically, it is intended to be the language for web sites.
But features would allow to make it general interface layout
language.

Triggers for the interface events can be written either in
JavaScript or Nim. If the product should be a web page,
[Nim code will be compiled to JavaScript](https://nim-lang.org/docs/backends.html#backends-the-javascript-target).
If JavaScript code has `import` statements, it will be
packed into one file.


## Engine

The developing environment will consist of these parts:

* Project initializer
* Compiler
* Linter
* IDE addons (syntax highlight, snippets)

Most of parts will be written in Nim, because this language
provides suitable features. And executables have high speed,
which is close to programs written in C or C++.

## Project hierarchy

### File extensions

The page layout files will have extension `*.nfml`.
It is obvious for the page written in NFML.

The component files will have extension `*.ncf`
(NFML Component File).

The file extensions mentioned above are claimed to be
the property of Bubochka Solutions.
If you are an owner of one of these file extensions,
write to mail `rocket111185@gmail.com`.

Other used extensions are properties of their owners.

### Folders, files and other stuff

[According to the source](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files),
an average web page project has the following structure:

```
index.html
images/
  *.jpg
  *.png
scripts/
  *.js
styles/
  *.css
```

In order to simplify the process of development,
NFML will have the flexible structure of the project,
which is described in the `config.yml`.

But the following structure is common for every NFML
project:

```
common.nfml
config.yml
lib/
pages/
themes/
resources/
```

`common.nfml` is the file, which contains the common
part of every page.

`config.yml` is the [configuration of the project](#configuration).

`lib/` folder contains program files, which have global visibility
for every other program file.
It is similar to `node_modules` for Node.JS.

`themes/` folder contains [NFML themes](#themes).

`resources/` folder holds the media, which is included to the
page. Media import method is defined by `config.yml`.

`pages/` folder contains the pages and their hierarchy.
The hierarchy is flexible and defined by `config.yml`.

## Syntax

Write there about NFML syntax.

## Configuration

Write there about NFML project configuration.

## Themes

Write there about NFML themes.

