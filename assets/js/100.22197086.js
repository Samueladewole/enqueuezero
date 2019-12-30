(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{216:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p"),e._m(1),r("p"),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("PRNG or Pseudo-random number generators are used for generating numbers distributed randomly.")]),e._v(" "),r("p",[e._v("The reason of being pseudo-random is that the PRNG algorithm doesn't generate true-random information actually.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("We will cover PRNG in this post.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),r("p",[e._v("Note: for security reason, please don't use the above method for getting pseudo-random numbers, for example, for cryptography usage. You don't to be hacked, right?")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),r("p",[e._v("The PRNGs have a period of number recurring.")]),e._v(" "),e._m(12),e._v(" "),r("p",[e._v("The big picture behind the PRNG is like a fixed table of such similar sequence.")]),e._v(" "),e._m(13),e._v(" "),r("p",[e._v("You might be wondering why do people still want pseudo-random numbers anyway?")]),e._v(" "),r("p",[e._v("The answer is as long as the period is large enough and you start from different positions in the sequence, you're almost unable to get a same set of random numbers during the life cycle of your application. If it happens, oh poor man, please restart your computer periodically and issue resolved.")]),e._v(" "),r("p",[e._v("From the engineering perspective, we don't need things absolutely correct but good enough. As a side quote, below is from the bash.git repo "),r("a",{attrs:{href:"https://git.savannah.gnu.org/cgit/bash.git/tree/variables.c#n1304",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),r("OutboundLink")],1),e._v(":")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),r("p",[e._v("When using the PRNG libraries, you need to set the initial state as a seed.")]),e._v(" "),r("p",[e._v("If you didn't set the seed for the random call, it's up to language or library designer on how to assign one for you.\nThe current system time will probably be used.")]),e._v(" "),r("p",[e._v("Once you call a random function, the PRNG libraries will update their internal state for the generator so that you won't get a same number next time.")]),e._v(" "),e._m(16),e._v(" "),r("p",[e._v("As long as you provide the same seed again, the PRNG libraries will reproduce the same random results for you.")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),r("p",[e._v("It's recommended to read "),r("a",{attrs:{href:"https://www.2uo.de/myths-about-urandom",target:"_blank",rel:"noopener noreferrer"}},[e._v("Myths about /dev/urandom"),r("OutboundLink")],1),e._v(". TL;DR, just use "),r("code",[e._v("/dev/urandom")]),e._v(" on UNIX platform or "),r("code",[e._v("CryptGenRandom")]),e._v(" on Windows.")]),e._v(" "),e._m(19),e._v(" "),r("p",[e._v("There are several variants of random APIs:")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),r("p",[e._v("Mersenne Twister algorithm is a PRNG that produces 53-bit precision floats in a period of 2^19937-1. It's one of the most extensively tested RNGs.")]),e._v(" "),r("p",[e._v("People like it because it's fast, thread-safe, and efficient. The extensive period reduces the probability of causing issues.")]),e._v(" "),r("p",[e._v("The disadvantage of Mersenne Twister is that it uses relatively larger buffer than other PRNG algorithms.")]),e._v(" "),r("p",[e._v("The Mersenne Twister is used in below systems or libraries: Python, Ruby, R, PHP, Common Lisp, C++ Boost, Julia, Octave, Excel, Mathematica, etc.")]),e._v(" "),e._m(23),e._v(" "),r("p",[e._v("The LCG or linear congruential generator is yet another pseudo-random number generator calculated with a discontinuous piecewise linear equation. It's one of the oldest and best-known RNGs. People like it because it's easy to understand and easily implemented.")]),e._v(" "),r("p",[e._v("The period of LCG depends on the parameter. If the parameters are too small, it tends to be problematic. Otherwise, it creates known and long periods. For performance consideration, the periods of LCG are usually between 2^32 to 2^64.")]),e._v(" "),r("p",[e._v("The advantage of LCG is that it uses minimal RAM. The disadvantage of LCG is its relatively small period.")]),e._v(" "),r("p",[e._v("The LCG is used in below systems or libraries: ANSI C, C99, C11, POSIX, glibc, muslc, bash,  Java(modified version of LCG).")]),e._v(" "),e._m(24),e._v(" "),r("p",[e._v("A typical implementation of PRNG comprised of the two PRNG algorithm introduced above:")]),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),r("p",[e._v('Please read "The Art of Computer Programming, Volume 2". In this book, Knuth has in-depth research on generating random numbers.')]),e._v(" "),e._m(27),e._v(" "),r("p",[e._v("Oh, TRNG? With the help of some magic device, you might be able to get random numbers. For example, since the weather system is a chaos system, meaning no one can accurately predict it, you can generate random numbers based on the history of temperature, humidity, wind speed or things like that. You can find many more good indicators in natural world or in the universe.")]),e._v(" "),r("p",[e._v("Since the start of the Big Bang, everything seems just move in their own way. It's still a mystery whether everything is deterministic or not. If so, then all TRNG turns into PRNG! However, no one can prove that.")]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://reddit.com/u/whetu",target:"_blank",rel:"noopener noreferrer"}},[e._v("/u/whetu"),r("OutboundLink")],1),e._v(": Thanks for providing so much corrections.")])]),e._v(" "),e._m(31),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Random_number_generation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Random number generation"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://softwareengineering.stackexchange.com/questions/109724/how-do-random-number-generators-work",target:"_blank",rel:"noopener noreferrer"}},[e._v("How do random number generators work"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Linear_congruential_generator",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linear congruential generator"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.python.org/3/library/random.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python random"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://cryptography.io/en/latest/random-numbers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cryptography"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Mersenne_Twister",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mersenne Twister"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.reddit.com/r/bash/comments/9ewljx/pseudorandom_numbers/e5s75iz/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reddit Discussion"),r("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"pseudo-random-numbers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pseudo-random-numbers"}},[this._v("#")]),this._v(" Pseudo-Random Numbers")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),r("li",[r("a",{attrs:{href:"#terms"}},[e._v("Terms")])]),r("li",[r("a",{attrs:{href:"#use"}},[e._v("Use")])]),r("li",[r("a",{attrs:{href:"#patterns"}},[e._v("Patterns")]),r("ul",[r("li",[r("a",{attrs:{href:"#pseudo-means-recurring"}},[e._v("Pseudo means recurring")])]),r("li",[r("a",{attrs:{href:"#large-period-is-safer"}},[e._v("Large period is safer")])]),r("li",[r("a",{attrs:{href:"#seed-determines-the-rest"}},[e._v("Seed determines the rest")])]),r("li",[r("a",{attrs:{href:"#reproduce-by-resetting-a-known-seed"}},[e._v("Reproduce by resetting a known seed")])]),r("li",[r("a",{attrs:{href:"#insecure"}},[e._v("Insecure")])]),r("li",[r("a",{attrs:{href:"#extend-apis"}},[e._v("Extend APIs")])])])]),r("li",[r("a",{attrs:{href:"#solutions"}},[e._v("Solutions")]),r("ul",[r("li",[r("a",{attrs:{href:"#mersenne-twister"}},[e._v("Mersenne Twister")])]),r("li",[r("a",{attrs:{href:"#linear-congruential-generator"}},[e._v("Linear Congruential Generator")])])])]),r("li",[r("a",{attrs:{href:"#mix"}},[e._v("Mix")])]),r("li",[r("a",{attrs:{href:"#what-else"}},[e._v("What else?")])]),r("li",[r("a",{attrs:{href:"#thoughts"}},[e._v("Thoughts")])]),r("li",[r("a",{attrs:{href:"#conclusion"}},[e._v("Conclusion")])]),r("li",[r("a",{attrs:{href:"#credit"}},[e._v("Credit")])]),r("li",[r("a",{attrs:{href:"#references"}},[e._v("References")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"terms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terms"}},[this._v("#")]),this._v(" Terms")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("RNG: Random Number Generators. It's a general classification regardless of generating psuedo-random or true-random numbers.")]),e._v(" "),r("li",[e._v("PRNG: Pseudo-Random Number Generators. The "),r("code",[e._v("pseudo")]),e._v(" here means the generator would eventually repeating a same sequence of numbers over a certain period.")]),e._v(" "),r("li",[e._v("TRNG: True-Random Number Generators. The "),r("code",[e._v("true")]),e._v(" here means we have no way to truly detect the next number being generated at any given time.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use"}},[this._v("#")]),this._v(" Use")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In Python, "),t("code",[this._v("random.random()")]),this._v(" returns the next random floating point number in the range "),t("code",[this._v("[0.0, 1.0)")]),this._v(". It's an example of Mersenne Twister algorithm we'll cover later.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ python -c "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"import random; print(random.random())"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.9997071591954676")]),e._v("\n\n$ python -c "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"import random; print(random.random())"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.7442605999548604")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In Bash, you can use the environ variable "),t("code",[this._v("$RANDOM")]),this._v(" for a random integer between 0 and 32767 (2^15-1). It's an example of Linear Congruential Generator algorithm we'll cover later as well.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$RANDOM")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("16857")]),e._v("\n\n$ "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$RANDOM")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("12485")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"patterns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#patterns"}},[this._v("#")]),this._v(" Patterns")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pseudo-means-recurring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pseudo-means-recurring"}},[this._v("#")]),this._v(" Pseudo means recurring")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("For example, in sequence "),r("code",[e._v("1 4 3 2 5 1 4 3 2 5 1 4 3 2 5")]),e._v(", the "),r("code",[e._v("1 4 3 2 5")]),e._v(" recurs every 5 numbers.\nFor a PRNG based on such sequence, whenever you see "),r("code",[e._v("1")]),e._v(" as random number, "),r("code",[e._v("4")]),e._v(" will always be the next number.\nThe recurring numbers determine that the order of numbers is fixed rather than randomized.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"large-period-is-safer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#large-period-is-safer"}},[this._v("#")]),this._v(" Large period is safer")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("This one isn't very good, but a more complicated one is overkill.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"seed-determines-the-rest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seed-determines-the-rest"}},[this._v("#")]),this._v(" Seed determines the rest")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"reproduce-by-resetting-a-known-seed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reproduce-by-resetting-a-known-seed"}},[this._v("#")]),this._v(" Reproduce by resetting a known seed")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"insecure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#insecure"}},[this._v("#")]),this._v(" Insecure")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Usually, you do not want to use the standard "),t("code",[this._v("random")]),this._v(" module for cryptographic operations, since the PRNG algorithms are cryptographically insecure.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"extend-apis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extend-apis"}},[this._v("#")]),this._v(" Extend APIs")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Get a sequence of random bits.")]),e._v(" "),r("li",[e._v("Get a random character.")]),e._v(" "),r("li",[e._v("Get a random string.")]),e._v(" "),r("li",[e._v("Get a random integer.")]),e._v(" "),r("li",[e._v("Get a random floating number.")]),e._v(" "),r("li",[e._v("Choose an element from an array.")]),e._v(" "),r("li",[e._v("Shuffle the array.")]),e._v(" "),r("li",[e._v("Get a sample from an array.")]),e._v(" "),r("li",[e._v("Get a random number in designated distribution, for example, Beta distribution, Exponential distribution, Gamma Distribution, etc.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"solutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[this._v("#")]),this._v(" Solutions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"mersenne-twister"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mersenne-twister"}},[this._v("#")]),this._v(" Mersenne Twister")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"linear-congruential-generator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linear-congruential-generator"}},[this._v("#")]),this._v(" Linear Congruential Generator")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"mix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mix"}},[this._v("#")]),this._v(" Mix")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Use LCG for seed data.")]),this._v(" "),t("li",[this._v("Use Mersenne Twister for generating a pseudo-random number.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"what-else"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-else"}},[this._v("#")]),this._v(" What else?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"thoughts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thoughts"}},[this._v("#")]),this._v(" Thoughts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[this._v("#")]),this._v(" Conclusion")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v('The PRNG generates "random" numbers which would recur eventually over a period.')]),this._v(" "),t("li",[this._v("The Mersenne Twister and LCG are the two popular PRNG algorithms.")]),this._v(" "),t("li",[this._v("Don't use PRNG for cryptographic operations.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"credit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#credit"}},[this._v("#")]),this._v(" Credit")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);t.default=a.exports}}]);