(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{179:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[s("a",{attrs:{href:"http://highscalability.com/blog/2019/2/19/intro-to-redis-cluster-sharding-advantages-limitations-deplo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("highscalability.com"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Redis Cluster is the native sharding implementation available within Redis that allows you to automatically distribute your data across multiple nodes without having to rely on external tools and utilities.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("The benefits of Redis Cluster are high performance, high availability, horizontal scalability, and as a native solution. The downside is that it requires client support, limited multi-key operation support, and only supports one database.")]),t._v(" "),s("p",[t._v("The Redis Cluster solution can be a good fit for you if you need a sharded Redis solution. Typically, people start looking at sharding their Redis deployments when they’ve started to saturate a standalone Redis node with writes and want to spread writes out to multiple nodes.")]),t._v(" "),t._m(3),t._v(" "),s("p",[s("a",{attrs:{href:"https://twitter.com/dabeaz/status/1101912161117528064",target:"_blank",rel:"noopener noreferrer"}},[t._v("twitter.com"),s("OutboundLink")],1)]),t._v(" "),t._m(4),s("p",[t._v("Usage:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[s("a",{attrs:{href:"https://medium.com/@asyncmax/the-right-way-to-bundle-your-assets-for-faster-sites-over-http-2-437c37efe3ff",target:"_blank",rel:"noopener noreferrer"}},[t._v("medium.com"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("This article goes over the basics of HTTP/2 and shows benchmark data to support some simple development guidelines to ensure that your site is optimized for HTTP/2.")]),t._v(" "),s("p",[t._v("Though concatenation has been considered to be bad in a HTTP/2 environment because HTTP/2 is designed to transfer multiple small files simultaneously without much overhead. The benchmark test showed that asset concatenation is still good for improving loading performance in HTTP/2.")]),t._v(" "),s("p",[t._v("Key Takeaways:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.openssl.org/docs/OpenSSLStrategicArchitecture.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.openssl.org"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("This document outlines the OpenSSL strategic architecture. Below is the as-is architecture.")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("Below is the to-be architecture.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[s("a",{attrs:{href:"https://songlh.github.io/paper/go-study.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("songlh.github.com"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The paper conducts the first comprehensive, empirical study on 171 real-world Go concurrency bugs from two orthogonal dimensions.")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.floydhub.com/best-deep-learning-books-updated-for-2019/",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog.floydhub.com"),s("OutboundLink")],1)]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[s("a",{attrs:{href:"https://djrobstep.com/talks/your-migrations-are-bad-and-you-should-feel-bad",target:"_blank",rel:"noopener noreferrer"}},[t._v("djrobstep.com"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("People invented versioned migrations to handle database schema changes, such as Rails migrations, Django migrations, Alembic migrations, Go migrations, etc etc, although nobody really cares about old versions. We can simplify it to:")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.discordapp.com/scaling-elixir-f9b8e1e7c29b",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog.discordapp.com"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("While Discord is rich with features, most of it boils down to pub/sub. Users connect to a WebSocket and spin up a session process (a GenServer), which then communicates with remote Erlang nodes that contain guild (internal for a “Discord Server”) processes (also GenServers). When anything is published in a guild, it is fanned out to every session connected to it. When meet scaling problem, Erlang processes are effectively single threaded, and the only way to parallelize the work is to shard them. "),s("a",{attrs:{href:"https://github.com/hammerandchisel/manifold",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manifold"),s("OutboundLink")],1),t._v(" distributes the work of sending messages to the remote nodes of the PIDs (Erlang process identifier), which guarantees that the sending processes at most only calls send/2 equal to the number of involved remote nodes.")]),t._v(" "),s("li",[t._v("When using consistent hashing, the Erlang process responsible for controlling the ring would start to get so busy that it would fail to keep up with requests to the ring, and the whole system would become overloaded. The solution was to introduce "),s("a",{attrs:{href:"https://github.com/mochi/mochiweb/blob/master/src/mochiglobal.erl",target:"_blank",rel:"noopener noreferrer"}},[t._v("mochiglobal"),s("OutboundLink")],1),t._v(", a module that exploits a feature of the VM: if Erlang sees a function that always returns the same constant data, it puts that data into a read-only shared heap that processes can access without copying the data.")]),t._v(" "),t._m(19)]),t._v(" "),t._m(20),t._v(" "),s("p",[s("a",{attrs:{href:"https://medium.com/walmartlabs/cloud-native-application-architecture-a84ddf378f82",target:"_blank",rel:"noopener noreferrer"}},[t._v("medium.com"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Cloud Native Design Principles")]),t._v(" "),t._m(21)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"enqueuezero-techshack-2019-09"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enqueuezero-techshack-2019-09"}},[this._v("#")]),this._v(" EnqueueZero Techshack 2019-09")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"intro-to-redis-cluster-sharding-–-advantages-limitations-deploying-client-connections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intro-to-redis-cluster-sharding-–-advantages-limitations-deploying-client-connections"}},[this._v("#")]),this._v(" Intro to Redis Cluster Sharding – Advantages, Limitations, Deploying & Client Connections")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The entire keyspace in Redis Clusters is divided in 16384 slots (called hash slots) and these slots are assigned to multiple Redis nodes. A given key is mapped to one of these slots, and the hash slot for a key is computed as: "),e("code",[this._v("HASH_SLOT = CRC16(key) mod 16384")]),this._v(". Multi-key operations are supported on Redis Clusters as long as all the keys involved in a single command execution belong to the same hash slot.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"an-async-framework-within-a-single-tweet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-async-framework-within-a-single-tweet"}},[this._v("#")]),this._v(' An async "framework" within a single Tweet')])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" select "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" select\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" collections "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" deque\n\nR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("W"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("deque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("select"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("W"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("W"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" Q "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("popleft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("t\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" StopIteration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"the-right-way-to-bundle-your-assets-for-faster-sites-over-http-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-right-way-to-bundle-your-assets-for-faster-sites-over-http-2"}},[this._v("#")]),this._v(" The Right Way to Bundle Your Assets for Faster Sites over HTTP/2")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Always concatenate files into several bundles.")]),this._v(" "),e("li",[this._v("Consider HTTP/1.1 compatibility.")]),this._v(" "),e("li",[this._v("Use image sprites.")]),this._v(" "),e("li",[this._v("Carefully use data URIs.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"openssl-strategic-architecture"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#openssl-strategic-architecture"}},[this._v("#")]),this._v(" OpenSSL Strategic Architecture")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://www.openssl.org/docs/images/AsIsComponent.png",alt:"openssl components"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://www.openssl.org/docs/images/ToBeComponent.png",alt:"openssl components"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"understanding-real-world-concurrency-bugs-in-go"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#understanding-real-world-concurrency-bugs-in-go"}},[this._v("#")]),this._v(" Understanding Real-World Concurrency Bugs in Go")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Root Causes of Blocking Bugs:\n"),s("ul",[s("li",[t._v("(mis)Protection of Shared Memory.")]),t._v(" "),s("li",[t._v("Misuse of Message Passing.")])])]),t._v(" "),s("li",[t._v("Root Causes of Non-blocking Bugs:")]),t._v(" "),s("li",[t._v("Failing to Protect Shared Memory.")]),t._v(" "),s("li",[t._v("Errors during Message Passing.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"best-deep-learning-books-updated-for-2019"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#best-deep-learning-books-updated-for-2019"}},[this._v("#")]),this._v(" Best Deep Learning Books: Updated for 2019")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Deep Learning by Ian Goodfellow, Yoshua Bengio, Aaron Courville")]),t._v(" "),s("li",[t._v("Grokking Deep Learning by Andrew W. Trask")]),t._v(" "),s("li",[t._v("Deep Learning with Python by Francois Chollet")]),t._v(" "),s("li",[t._v("Hands-On Machine Learning with Scikit-Learn and TensorFlow by Aurélien Géron")]),t._v(" "),s("li",[t._v("The Hundred-Page Machine Learning Book by Andriy Burkov")]),t._v(" "),s("li",[t._v("Reinforcement Learning: An Introduction (2nd Edition) by Richard S. Sutton, Andrew G. Barto")]),t._v(" "),s("li",[t._v("Deep Reinforcement Learning Hands-On by Maxim Lapan")]),t._v(" "),s("li",[t._v("Learning From Data by Yaser S. Abu-Mostafa, Malik Magdon-Ismail, Hsuan-Tien Lin.")]),t._v(" "),s("li",[t._v("The Book of Why by Judea Pearl, Dana Mackenzie.")]),t._v(" "),s("li",[t._v("Machine Learning Yearning by Andrew Ng.")]),t._v(" "),s("li",[t._v("Interpretable Machine Learning by Christoph Molnar.")]),t._v(" "),s("li",[t._v("Neural Networks and Deep Learning by Michael Nielsen.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"your-migrations-are-bad-and-you-should-feel-bad"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#your-migrations-are-bad-and-you-should-feel-bad"}},[this._v("#")]),this._v(" Your migrations are bad, and you should feel bad")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Empty schema → Dev schema → Live schema\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The author introduced a tool "),e("code",[this._v("migra")]),this._v(" that can generate diffs for your database schemas. Every time there is a change, use the tool generate a diff and apply that to the database. No files, no version numbers: One operation.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"how-discord-scaled-elixir-to-5-000-000-concurrent-users"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-discord-scaled-elixir-to-5-000-000-concurrent-users"}},[this._v("#")]),this._v(" How Discord Scaled Elixir to 5,000,000 Concurrent Users")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Use "),e("code",[this._v(":ets.update_counter/4")]),this._v(", which performs atomic conditional increment operations on a number inside an ETS key.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"cloud-native-application-architecture"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cloud-native-application-architecture"}},[this._v("#")]),this._v(" Cloud Native Application Architecture")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Designed As Loosely Coupled Microservices")]),t._v(" "),s("li",[t._v("Developed With Best-of-breed Languages And Frameworks")]),t._v(" "),s("li",[t._v("Centred Around APIs For Interaction And Collaboration")]),t._v(" "),s("li",[t._v("Stateless And Massively Scalable")]),t._v(" "),s("li",[t._v("Resiliency At The Core Of the Architecture")]),t._v(" "),s("li",[t._v("Packaged As Lightweight Containers And Orchestrated")]),t._v(" "),s("li",[t._v("Elastic — Dynamic scale-up/down")])])}],!1,null,null,null);e.default=n.exports}}]);