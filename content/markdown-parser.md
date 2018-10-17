---
title: Markdown Parser
summary: How to implement a Markdown Parser from scratch?
category: Programming
tags: markdown, html, parser
date: 2018-10-17
status: Draft
---

Many people, when confronted writing HTML document, think "Well, HTML is tedious, I'll go with Markdown." Then they'll face two problems. For programming zealots, they certainly will introduce a third problem: why not write a Markdown parser?

In practice, most Markdown parser programs are often regular expression, or regex, based. There are some more options like PEG, BNF, etc. In this post, we'll write a simple but extensive piece of code that performs basic Markdown parsing task. Beyond that, we'll also discuss how to improve the code to support more and more Markdown notations and dialects.

## Initial Implementation

### Tokenize

It's clear that our goal is to convert a markdown document into an HTML document.
By introducing an extra tokenizing step as shown in below flow,
we can make separate of concerns: parsing and rendering.

```
+-------------------+    +--------+    +---------------+
| Markdown Document +--> | Tokens +--> | HTML Document |
+-------------------+    +--------+    +---------------+
```

The source code below is self-explanatory.

```nim
proc markdown*(doc: string): string =
  for token in parseTokens(doc):
      result &= renderToken(ctx, token)
```

### Parse

When programming from scratch, people choose to start from small. So let's just pickup
the very feature only - converting `# Header` into `<h1>Header</h1>`. We start from
defining a token type and a token object, as you might also do by yourself in any
programming language.

The token parsing is a complete iteration through the Markdown string `doc`.
We find token from the first character of the `doc` and then move to
the nth character, and on and on until the end. We'll cover the implementation
of `findToken` later.

```nim
iterator parseTokens(doc: string): MarkdownTokenRef =
  var n = 0
  while n < len(doc):
    var token: MarkdownTokenRef = nil
    for type in [
        MarkdownTokenType.Header,
        ]:
      token = findToken(doc, n, type)
      if token != nil:
        yield token
        break
    if token == nil:
      raise newException(MarkdownError, fmt"unknown block rule at position {n}.")
```

### Render

Given the structured data structure, it's easier to generate HTML documents by
constructing strings.

```nim
proc renderToken(ctx: MarkdownContext, token: MarkdownTokenRef): string =
  case token.type
  of MarkdownTokenType.Header:
    let header = token.headerVal
    result = fmt"<h{header.level}>{header.doc}</h{header.level}>"
```

### Find Token

Embed in the heart zone of `parseTokens`, the function `findToken` is in the center
of the Markdown parser program.

* We defines a table of token regex rules.
* We check if the given `doc` from a specific position `start` matches the given rule.
* If so, we construct a container object as the token, otherwise, ignore the check.

```nim
let blockRules = {
  MarkdownTokenType.Header: re"^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)",
}.toTable

proc findToken(doc: string, start: var int, ruleType: MarkdownTokenType): MarkdownTokenRef =
  let regex = blockRules[ruleType]
  var matches: array[5, string]

  let size = doc[start .. doc.len - 1].matchLen(regex, matches=matches)
  if size == -1:
    return nil

  case ruleType
  of MarkdownTokenType.Header:
    val.level = matches[0].len
    val.doc = matches[1]
    result = MarkdownTokenRef(type: MarkdownTokenType.Header, headerVal: val) 

  start += size
```

### Essential Definitions

Below are some essential definitions for above code to work.

* We defines a `Header` container object for storing header level and its content.
* We defines an enum `MarkdownTokenType` which has only one choice - `Header`.
* We also defines a reference `MarkdownTokenRef` to a `MarkdownToken` object.

```nim
type
  Header* = object
    doc: string
    level: int

  MarkdownTokenType* {.pure.} = enum
    Header

  MarkdownTokenRef* = ref MarkdownToken
  MarkdownToken* = object
    case type*: MarkdownTokenType
    of MarkdownTokenType.Header: headerVal*: Header
```