(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{272:function(e,t,s){"use strict";s.r(t);var r=s(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p"),e._m(1),s("p"),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("Although thread is much more lightweight than process, people still think it's too heavy. In Linux kernel,  creating a thread still need to assign same amount of memory like process. Therefore, a more lightweight solution needs to reduce memory usage.")]),e._v(" "),s("p",[e._v("Micro-threads, or usually named as coroutine, is such kind of technology.")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("Coroutines, or cooperative routines, are routines running in non-preemptive multitasking system. In human word, coroutines are just special functions. We can temporarily suspend running a coroutine function. And when we resume the function, it continues running.")]),e._v(" "),s("p",[e._v("Basically the code can be paused and resumed, pretty much like threads, except that it's not VM or OS scheduling coroutines. Programmer needs to make sure a coroutine must never preempted.")]),e._v(" "),s("p",[e._v("Coroutines can be used to implement cooperative tasks, event loop, generators, lazy evaluation.")]),e._v(" "),s("p",[e._v("Check below code and running sequence in Lua:")]),e._v(" "),e._m(4),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("Preemptive means we don't care how to schedule when to run which thread or process. In non-preemptive multi-tasking system, it's programmers' responsibility to tell VM when to suspend coroutine and when to resume.")]),e._v(" "),e._m(9),e._v(" "),s("p",[e._v('Yield is very intuitive - a coroutine tells to the system "hey I\'m gonna yield for now" and the system simply suspend it.')]),e._v(" "),s("p",[e._v("Resume is similar - when someone calls resume, the system rerun the coroutine until it's completed or another yielding.")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),s("p",[e._v("Symmetric coroutines introduce less code. It can build on top of asymmetric coroutines: each transfer is equal to a yield followed by a resume.")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),s("p",[e._v("Lua has builtin coroutine support.")]),e._v(" "),s("p",[e._v("You can create coroutine like this:")]),e._v(" "),e._m(15),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),s("p",[e._v("Coroutines in Python are mainly used in async. You can create a coroutine like this:")]),e._v(" "),e._m(19),s("p",[e._v("Python uses symmetric coroutine, so you don't need to worry about resume, just need to TRANSFER control to another coroutine:")]),e._v(" "),e._m(20),e._m(21),e._v(" "),s("p",[e._v("Fibers are coroutine equivalent in Ruby. You can create Fiber like below code:")]),e._v(" "),e._m(22),s("p",[e._v("Fiber also support transferring control. The API allows you resume another fiber from where it last stopped or start it if it was not resumed before:")]),e._v(" "),e._m(23),e._m(24),e._v(" "),s("p",[e._v("Coroutines implement multi-tasking by consuming less resource. The downside is that it introduces yield / resume into your code. If thread or process cannot meet your multi-tasking requirements, try coroutine, although it also means rewrite you application very likely.")]),e._v(" "),e._m(25),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.lua.org/pil/9.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lua - Coroutine Basics"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://docs.python.org/3/library/asyncio-task.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python - Tasks and coroutines"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://ruby-doc.org/core-2.1.1/Fiber.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ruby - Fiber"),s("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"coroutine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coroutine"}},[this._v("#")]),this._v(" Coroutine")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#context"}},[e._v("Context")])]),s("li",[s("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),s("li",[s("a",{attrs:{href:"#patterns"}},[e._v("Patterns")]),s("ul",[s("li",[s("a",{attrs:{href:"#non-preemptive-multi-tasking-system"}},[e._v("Non-preemptive multi-tasking system")])]),s("li",[s("a",{attrs:{href:"#yield-resume"}},[e._v("Yield / Resume")])]),s("li",[s("a",{attrs:{href:"#symmetric-coroutines-v-s-asymmetric-coroutines"}},[e._v("Symmetric Coroutines v/s Asymmetric Coroutines")])])])]),s("li",[s("a",{attrs:{href:"#solutions"}},[e._v("Solutions")]),s("ul",[s("li",[s("a",{attrs:{href:"#lua"}},[e._v("Lua")])]),s("li",[s("a",{attrs:{href:"#python"}},[e._v("Python")])]),s("li",[s("a",{attrs:{href:"#ruby"}},[e._v("Ruby")])])])]),s("li",[s("a",{attrs:{href:"#conclusions"}},[e._v("Conclusions")])]),s("li",[s("a",{attrs:{href:"#references"}},[e._v("References")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[this._v("#")]),this._v(" Context")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("co = coroutine.create(function () \n  for i = 1, 10 do\n    print(i)\n    coroutine.yield()\n  end\nend)\n\ncoroutine.resume(co) # --\x3e 1\ncoroutine.resume(co) # --\x3e 2\ncoroutine.resume(co) # --\x3e 3\ncoroutine.resume(co) # --\x3e 4\ncoroutine.resume(co) # --\x3e 5\ncoroutine.resume(co) # --\x3e 6\ncoroutine.resume(co) # --\x3e 7\ncoroutine.resume(co) # --\x3e 8\ncoroutine.resume(co) # --\x3e 9\ncoroutine.resume(co) # --\x3e 10\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("coroutine.create")]),e._v(" create a new coroutine.")]),e._v(" "),s("li",[s("code",[e._v("coroutine.yield")]),e._v(" suspend coroutine from running.")]),e._v(" "),s("li",[s("code",[e._v("coroutine.resume")]),e._v(" resume running coroutine.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In this example, the first time we call "),t("code",[this._v("coroutine.resume(co)")]),this._v(" starts its execution and runs until the first yield. For the rest of calls they basically do the same thing until the final one.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"patterns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#patterns"}},[this._v("#")]),this._v(" Patterns")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"non-preemptive-multi-tasking-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#non-preemptive-multi-tasking-system"}},[this._v("#")]),this._v(" Non-preemptive multi-tasking system")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"yield-resume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yield-resume"}},[this._v("#")]),this._v(" Yield / Resume")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In previous example, lua has "),t("code",[this._v("coroutine.yield()")]),this._v(" and "),t("code",[this._v("coroutine_object.resume()")]),this._v(" for the two interfaces.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"symmetric-coroutines-v-s-asymmetric-coroutines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symmetric-coroutines-v-s-asymmetric-coroutines"}},[this._v("#")]),this._v(" Symmetric Coroutines v/s Asymmetric Coroutines")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Asymmetric coroutines\n"),t("ul",[t("li",[this._v("Needs a function to suspend itself.")]),this._v(" "),t("li",[this._v("Needs a function to resume coroutine.")])])]),this._v(" "),t("li",[this._v("Symmetric coroutines\n"),t("ul",[t("li",[this._v("Needs a function to transfer control to other coroutines.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"solutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[this._v("#")]),this._v(" Solutions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"lua"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lua"}},[this._v("#")]),this._v(" Lua")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('co = coroutine.create(function()\n    print("hi")\nend\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Any coroutine is in one of three states: suspended, running, and dead. You can check status by "),t("code",[this._v("coroutine.status(co)")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To start or restart the execution of a coroutine, run "),t("code",[this._v("coroutine.resume(co)")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"python"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[this._v("#")]),this._v(" Python")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('async def co():\n    print("hi")\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('async def compute(x, y):\n    return x + y\n\nasync def co():\n    result = await compute(0, 42)\n    print("%d + %d = %d", (0, 42, result))\n\nimport asyncio\nasyncio.get_event_loop().run_until_complte(co())\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"ruby"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ruby"}},[this._v("#")]),this._v(" Ruby")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("fiber = Fiber.new do\n  Fiber.yield 1\nend\n\nputs fiber.resume\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('f1 = Fiber.new do\n  puts "f1"\n  Fiber.yield\nend\n\nf2 = Fiber.new do\n  puts "start"\n  f1.transfer\nend\n\nf2.resume\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"conclusions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[this._v("#")]),this._v(" Conclusions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);t.default=n.exports}}]);