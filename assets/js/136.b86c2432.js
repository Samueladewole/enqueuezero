(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{180:function(e,t,a){"use strict";a.r(t);var s=a(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("p",[a("a",{attrs:{href:"https://stressgrid.com/blog/beam_cpu_usage/",target:"_blank",rel:"noopener noreferrer"}},[e._v("stressgrid.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Key takeaway is BEAM’s busy wait settings do have a significant impact on CPU usage. The highest impact was observed on the instance with the most available CPU capacity. When running BEAM on an OS kernel shared with other software, it makes sense to turn off busy waiting, to avoid stealing time from non-BEAM processes. It would also make sense to not use busy waiting when running on burstable performance instances in the cloud.")]),e._v(" "),e._m(2),e._v(" "),a("p",[a("a",{attrs:{href:"https://medium.com/walmartlabs/cloud-native-application-architecture-a84ddf378f82",target:"_blank",rel:"noopener noreferrer"}},[e._v("medium.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Principles:")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),a("p",[a("a",{attrs:{href:"https://levelup.gitconnected.com/will-node-js-forever-be-the-sluggish-golang-f632130e5c7a",target:"_blank",rel:"noopener noreferrer"}},[e._v("levelup.gitconnected.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Express.js is the oldest web framework for Node.js, building on top of out-of-box features Node.js provide, adding a nice App-centered programming interface to manage URL routes, parameters, methods and the like. Though it's very slow.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/uNetworking/uWebSockets.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("uWebSockets.js"),a("OutboundLink")],1),e._v(" is an alternative web framework for JavaScript backends, written in ~6 thousand lines of C and C++, surpassing in performance the best of Golang by a large margin.")]),e._v(" "),e._m(5),e._v(" "),a("p",[a("a",{attrs:{href:"http://antirez.com/news/126",target:"_blank",rel:"noopener noreferrer"}},[e._v("antirez.com"),a("OutboundLink")],1)]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),a("p",[a("a",{attrs:{href:"https://about.gitlab.com/2019/02/13/delayed-replication-for-disaster-recovery-with-postgresql/",target:"_blank",rel:"noopener noreferrer"}},[e._v("about.gitlab.com"),a("OutboundLink")],1)]),e._v(" "),e._m(8),e._v(" "),a("p",[e._v("Delayed replication is the idea of applying time-delayed changes from the WAL. That is, a transaction that is committed at physical time X is only going to be visible on a replica with delay d at time X + d.")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.thoughtworks.com/insights/blog/curse-data-lake-monster",target:"_blank",rel:"noopener noreferrer"}},[e._v("thoughtworks.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Software is best developed in thin, vertical slices that emphasize use cases and user outcomes, and data-intensive projects are no exception.")]),e._v(" "),a("p",[e._v("Data lake often implies a centralized repository of data, or something built and maintained by data engineers so that data scientists can consume data and focus on developing ML use cases etc. Designing a data lake in a top-down fashion, without an eye on the end use cases, will almost inevitably result in a poor problem/solution fit.")]),e._v(" "),a("p",[e._v("The article proposed a more bottom-up approach to realizing the data lake — one that builds one vertical slice at a time. There’s no single, one-size-fits-all definition of a data lake. You need to work on articulated use-cases and measurable business goals.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"enqueuezero-techshack-2019-08"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enqueuezero-techshack-2019-08"}},[this._v("#")]),this._v(" EnqueueZero Techshack 2019-08")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-curious-case-of-beam-cpu-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-curious-case-of-beam-cpu-usage"}},[this._v("#")]),this._v(" The Curious Case of BEAM CPU Usage")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"cloud-native-application-architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloud-native-application-architecture"}},[this._v("#")]),this._v(" Cloud Native Application Architecture")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Designed As Loosely Coupled Microservices;")]),e._v(" "),a("li",[e._v("Developed With Best-of-breed Languages And Frameworks;")]),e._v(" "),a("li",[e._v("Center Around APIs For Interaction And Collaboration;")]),e._v(" "),a("li",[e._v("Stateless And Massively Scalable;")]),e._v(" "),a("li",[e._v("Resiliency At The Core Of the Architecture;")]),e._v(" "),a("li",[e._v("Packaged As Lightweight Containers And Orchestrated;")]),e._v(" "),a("li",[e._v("Agile DevOps & Automation Using CI/CD;")]),e._v(" "),a("li",[e._v("Elastic — Dynamic scale-up/down.")]),e._v(" "),a("li",[e._v("Strategies for implementing resiliency:\n"),a("ul",[a("li",[e._v("Retry transient failures ;")]),e._v(" "),a("li",[e._v("Load balance across instances ;")]),e._v(" "),a("li",[e._v("Degrade gracefully;")]),e._v(" "),a("li",[e._v("Throttle high-volume tenants/users;")]),e._v(" "),a("li",[e._v("Use a circuit breaker;")]),e._v(" "),a("li",[e._v("Apply compensating transactions.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"will-node-js-forever-be-the-sluggish-golang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#will-node-js-forever-be-the-sluggish-golang"}},[this._v("#")]),this._v(" Will Node.js forever be the sluggish Golang?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"an-update-about-redis-developments-in-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-update-about-redis-developments-in-2019"}},[this._v("#")]),this._v(" An update about Redis developments in 2019")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Redis roadmap 2019: RESP3, "),t("strong",[this._v("ACL")]),this._v(", Multi threading, Better persistence, Data structures.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-we-used-delayed-replication-for-disaster-recovery-with-postgresql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-we-used-delayed-replication-for-disaster-recovery-with-postgresql"}},[this._v("#")]),this._v(" How we used delayed replication for disaster recovery with PostgreSQL")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Delayed replication can be used as a first resort to recover from accidental data loss and lends itself perfectly to situations where the loss-inducing event is noticed within the configured delay. However, "),t("strong",[this._v("Replication is not a backup mechanism")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("A cold backup is useful to recover from a disaster.")]),this._v(" "),t("li",[this._v("The purpose of replication is mostly to guard database availability against failures of individual database servers and to distribute load.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-curse-of-the-data-lake-monster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-curse-of-the-data-lake-monster"}},[this._v("#")]),this._v(" The curse of the data lake monster")])}],!1,null,null,null);t.default=i.exports}}]);