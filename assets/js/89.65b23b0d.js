(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{227:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p"),t._m(1),a("p"),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("There are growing number of programming languages. Each specific domain of problem might eventually derive a dedicated optimized programming language. We have below nontrivial languages that has been well adopted in programming world.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Not to mention there are hundreds of LISP dialects.")]),t._v(" "),a("p",[t._v("One thing we should aware of is that it's the syntax that shapes programming languages. It leads to different code when expressing same algorithm.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Grammar defines a language. Most programming languages are defined in context-free grammar.")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Grammar is basically a set of RULES.")]),t._v(" "),a("p",[t._v("A RULE has two parts:")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("Backus-Naur form, or BNF, is a notation of language grammar.")]),t._v(" "),a("p",[t._v("Below snippet is interesting. It describes BNF in BNF:")]),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("Extended Backus-Naur form, or EBNF, has more advancing features than BNF.")]),t._v(" "),a("p",[t._v("EBNF has below features that BNF doesn't have (based on ISO/IEC 14977):")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("Let's see EBNF describing in EBNF:")]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("Augmented Backus-Naur Form, or ABNF, is very similar to EBNF except the notation is different. It's being described in RFC 5234 specification.")]),t._v(" "),a("p",[t._v("Comparison:")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("Functional programming languages provide combinators for implementing parser easier.")]),t._v(" "),a("p",[t._v("The definition of the new language is as the same form of the implementation languages. Such languages have strong type inference, such as Haskell, F#.")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.python.org/3/reference/grammar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python Full Grammar specification"),a("OutboundLink")],1),t._v(" in EBNF.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://golang.org/ref/spec",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go Programming Language Specification"),a("OutboundLink")],1),t._v(" in EBNF.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://rpython.readthedocs.io/en/latest/rlib.html#ebnf",target:"_blank",rel:"noopener noreferrer"}},[t._v("rPython EBNF Module"),a("OutboundLink")],1),t._v(". Note that rPython provides a modified EBNF notations. In particular, a JSON format can be described as below:")])]),t._v(" "),t._m(19),t._m(20),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc5322#section-1.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Internet Message Format"),a("OutboundLink")],1)])]),t._v(" "),t._m(21),t._v(" "),a("ul",[a("li",[t._v("Go package "),a("code",[t._v("ebnf")]),t._v(" is ready to use. Go check "),a("a",{attrs:{href:"https://godoc.org/golang.org/x/exp/ebnf",target:"_blank",rel:"noopener noreferrer"}},[t._v("package ebnf"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[t._v("rPython is a good library to start implementing your own language.")]),t._v(" "),a("li",[a("code",[t._v("instaparse")]),t._v(" has well designed API. Go check "),a("a",{attrs:{href:"https://github.com/Engelberg/instaparse",target:"_blank",rel:"noopener noreferrer"}},[t._v("Engelberg/instaparse"),a("OutboundLink")],1)])]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("Step 1, we need to define a number.")]),t._v(" "),t._m(24),a("p",[t._v("Step 2, we expand operators:")]),t._v(" "),t._m(25),a("p",[t._v("Step 3, we define print statement as entry:")]),t._v(" "),t._m(26),a("p",[t._v("Now we have all syntax defined. We only need to write an interpreter to turn the tokens into values.")]),t._v(" "),t._m(27),a("p",[t._v("Full source code is hosted in "),a("a",{attrs:{href:"https://gist.github.com/soasme/9cf367101f5fe34494b1a3b388f3edf4",target:"_blank",rel:"noopener noreferrer"}},[t._v("gist"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(28),t._m(29),t._v(" "),a("p",[t._v("Check out this awesome tutorial series: "),a("a",{attrs:{href:"https://fsharpforfunandprofit.com/posts/understanding-parser-combinators/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://fsharpforfunandprofit.com/posts/understanding-parser-combinators-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("2"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://fsharpforfunandprofit.com/posts/understanding-parser-combinators-3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("3"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://fsharpforfunandprofit.com/posts/understanding-parser-combinators-4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("4"),a("OutboundLink")],1),t._v(" written in F#.")]),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("Implement your own language might sound crazy but it's very doable. With these mature libraries, you don't necessarily need to understand complicated parser theory but still can create something! If you're interested in create a grammar syntax of specification and protocols, learn these libraries and try to build a tiny prototype to demonstrate your ideas.")]),t._v(" "),a("p",[t._v("Go check "),a("a",{attrs:{href:"https://github.com/soasme/ao",target:"_blank",rel:"noopener noreferrer"}},[t._v("ao"),a("OutboundLink")],1),t._v(" language I wrote. It's a minimal interpreter language with its runtime implemented in only 500+ lines of code. 😃")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"language-grammar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#language-grammar"}},[this._v("#")]),this._v(" Language Grammar")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#context"}},[t._v("Context")])]),a("li",[a("a",{attrs:{href:"#patterns"}},[t._v("Patterns")]),a("ul",[a("li",[a("a",{attrs:{href:"#context-free-grammar"}},[t._v("Context-free Grammar")])]),a("li",[a("a",{attrs:{href:"#bnf"}},[t._v("BNF")])]),a("li",[a("a",{attrs:{href:"#ebnf"}},[t._v("EBNF")])]),a("li",[a("a",{attrs:{href:"#abnf"}},[t._v("ABNF")])]),a("li",[a("a",{attrs:{href:"#combinators"}},[t._v("Combinators")])])])]),a("li",[a("a",{attrs:{href:"#solutions"}},[t._v("Solutions")]),a("ul",[a("li",[a("a",{attrs:{href:"#ebnf-specification-examples"}},[t._v("EBNF Specification Examples")])]),a("li",[a("a",{attrs:{href:"#abnf-specification-examples"}},[t._v("ABNF Specification Examples")])]),a("li",[a("a",{attrs:{href:"#tools"}},[t._v("Tools")])]),a("li",[a("a",{attrs:{href:"#tutorial"}},[t._v("Tutorial")])])])]),a("li",[a("a",{attrs:{href:"#combinator-examples"}},[t._v("Combinator Examples")])]),a("li",[a("a",{attrs:{href:"#conclusions"}},[t._v("Conclusions")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[this._v("#")]),this._v(" Context")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Assembly Languages.")]),t._v(" "),a("li",[t._v("System Programming Languages, such as C, C++, Rust, Go, Pony, etc.")]),t._v(" "),a("li",[t._v("Scripting Languages, such as Bash, Python, Ruby, Perl, PHP, etc.")]),t._v(" "),a("li",[t._v("Browser Scripting Languages, such as Javascript, Typescript, Coffescript, etc.")]),t._v(" "),a("li",[t._v("Markup Languages, such as HTML, XML, Markdown, reStructuredText, etc.")]),t._v(" "),a("li",[t._v("Query Languages, such as SQL, GraghQL.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"patterns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#patterns"}},[this._v("#")]),this._v(" Patterns")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"context-free-grammar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context-free-grammar"}},[this._v("#")]),this._v(" Context-free Grammar")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Name.")]),this._v(" "),e("li",[this._v("Expansion.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('IDENTIFIER: "[a-zA-Z_][a-zA-Z0-9_]*"\n')])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("This rule defines its name as IDENTIFIER, and expansion should match the given regex. Code "),a("code",[t._v("tmp")]),t._v(", "),a("code",[t._v("array1")]),t._v(", "),a("code",[t._v("_private_field")]),t._v(", "),a("code",[t._v("Resolver")]),t._v(" are valid IDENTIFIER, while "),a("code",[t._v("1f")]),t._v(", "),a("code",[t._v("for-loop")]),t._v(" are not valid.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bnf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bnf"}},[this._v("#")]),this._v(" BNF")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(' <syntax>         ::= <rule> | <rule> <syntax>\n <rule>           ::= <opt-whitespace> "<" <rule-name> ">" <opt-whitespace> "::=" <opt-whitespace> <expression> <line-end>\n <opt-whitespace> ::= " " <opt-whitespace> | ""\n <expression>     ::= <list> | <list> <opt-whitespace> "|" <opt-whitespace> <expression>\n <line-end>       ::= <opt-whitespace> <EOL> | <line-end> <line-end>\n <list>           ::= <term> | <term> <opt-whitespace> <list>\n <term>           ::= <literal> | "<" <rule-name> ">"\n <literal>        ::= \'"\' <text1> \'"\' | "\'" <text2> "\'"\n <text1>          ::= "" | <character1> <text1>\n <text2>          ::= "" | <character2> <text2>\n <character>      ::= <letter> | <digit> | <symbol>\n <letter>         ::= "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z"\n <digit>          ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"\n <symbol>         ::=  "|" | " " | "!" | "#" | "$" | "%" | "&" | "(" | ")" | "*" | "+" | "," | "-" | "." | "/" | ":" | ";" | ">" | "=" | "<" | "?" | "@" | "[" | "\\" | "]" | "^" | "_" | "`" | "{" | "}" | "~"\n <character1>     ::= <character> | "\'"\n <character2>     ::= <character> | \'"\'\n <rule-name>      ::= <letter> | <rule-name> <rule-char>\n <rule-char>      ::= <letter> | <digit> | "-"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"ebnf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ebnf"}},[this._v("#")]),this._v(" EBNF")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Repeat: "),a("code",[t._v("{ ... }")]),t._v(".")]),t._v(" "),a("li",[t._v("Optional: "),a("code",[t._v("[ ... ]")]),t._v(".")]),t._v(" "),a("li",[t._v("Grouping "),a("code",[t._v("( ... )")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('letter = "A" | "B" | "C" | "D" | "E" | "F" | "G"\n       | "H" | "I" | "J" | "K" | "L" | "M" | "N"\n       | "O" | "P" | "Q" | "R" | "S" | "T" | "U"\n       | "V" | "W" | "X" | "Y" | "Z" | "a" | "b"\n       | "c" | "d" | "e" | "f" | "g" | "h" | "i"\n       | "j" | "k" | "l" | "m" | "n" | "o" | "p"\n       | "q" | "r" | "s" | "t" | "u" | "v" | "w"\n       | "x" | "y" | "z" ;\ndigit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;\nsymbol = "[" | "]" | "{" | "}" | "(" | ")" | "<" | ">"\n       | "\'" | \'"\' | "=" | "|" | "." | "," | ";" ;\ncharacter = letter | digit | symbol | "_" ;\n \nidentifier = letter , { letter | digit | "_" } ;\nterminal = "\'" , character , { character } , "\'" \n         | \'"\' , character , { character } , \'"\' ;\n \nlhs = identifier ;\nrhs = identifier\n     | terminal\n     | "[" , rhs , "]"\n     | "{" , rhs , "}"\n     | "(" , rhs , ")"\n     | rhs , "|" , rhs\n     | rhs , "," , rhs ;\n\nrule = lhs , "=" , rhs , ";" ;\ngrammar = { rule } ;\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"abnf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abnf"}},[this._v("#")]),this._v(" ABNF")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("BNF: Simple rules.")]),this._v(" "),e("li",[this._v("EBNF: BNF + a few additional rules.")]),this._v(" "),e("li",[this._v("ABNF: BNF + a few additional rules.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"combinators"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#combinators"}},[this._v("#")]),this._v(" Combinators")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"solutions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[this._v("#")]),this._v(" Solutions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"ebnf-specification-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ebnf-specification-examples"}},[this._v("#")]),this._v(" EBNF Specification Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('STRING: "\\\\"[^\\\\\\\\"]*\\\\"";\nNUMBER: "\\-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][\\+\\-]?[0-9]+)?";\nIGNORE: " |\\n";\nvalue: <STRING> | <NUMBER> | <object> | <array> | <"null"> |\n       <"true"> | <"false">;\nobject: ["{"] (entry [","])* entry ["}"];\narray: ["["] (value [","])* value ["]"];\nentry: STRING [":"] value;\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"abnf-specification-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abnf-specification-examples"}},[this._v("#")]),this._v(" ABNF Specification Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[this._v("#")]),this._v(" Tools")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"tutorial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[this._v("#")]),this._v(" Tutorial")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Let's starting implementing something in rPython! In this demo, we will create a simple syntax that can print values in the form like "),e("code",[this._v("print 1 + 1;")]),this._v(", etc.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('NUMBER: "\\-?(0|[1-9][0-9]*)(\\.[0-9]+)?";\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('expr : NUMBER >(arith_op NUMBER)+< | <NUMBER>;\narith_op: <"+"> | <"-">;\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('IGNORE: " |\\n";\nmain: <expr> [EOF];\n')])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("symbol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        expr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("symbol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'expr'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        term "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" term_i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("additional_info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                term "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" term "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" term_i\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("additional_info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                term "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" term "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" term_i\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" term\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("symbol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NUMBER'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("additional_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startswith"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("additional_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("additional_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" ValueError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unknown ast.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("$ pip install rpython\n$ python ebnf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("C\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"combinator-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#combinator-examples"}},[this._v("#")]),this._v(" Combinator Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"conclusions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[this._v("#")]),this._v(" Conclusions")])}],!1,null,null,null);e.default=r.exports}}]);