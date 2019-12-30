(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{267:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p"),e._m(1),a("p"),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("The serializability is a concurrency control property that a transaction system guarantees each transaction is getting executed one by one.")]),e._v(" "),a("p",[e._v("The 2PL or Two-Phase Locking is such method to reach serializability.")]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("The 2PL is straightforward like its name - it has two phases.")]),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("Notably, a LOCK POINT is at which phase 1 ends, that is, when the transaction acquires the last lock it needs.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),a("p",[e._v("2PL handles below two locks.")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),a("p",[e._v("The cascading rollback is at when handling multiple transactions a failed transaction leads to all other transaction rollbacked in some cases.")]),e._v(" "),a("p",[e._v("For example, say we have below 3 transactions on 2 resources x and y.")]),e._v(" "),e._m(11),e._v(" "),a("p",[e._v("Note: T1=Transaction 1, T2=Transaction 2, T3=Transaction 3. And so as below example.")]),e._v(" "),a("p",[e._v("The 2PL cannot avoid the cascading failure.")]),e._v(" "),e._m(12),e._v(" "),a("p",[e._v("A deadlock is a state when each operation is waiting for some other operations to take action. However, no operation can proceed at all. When the deadlock happens, the system enters a state called starvation.")]),e._v(" "),a("p",[e._v("For example, say we have below two transactions on two resources x and y.")]),e._v(" "),e._m(13),e._v(" "),a("p",[e._v("The 2PL cannot avoid the deadlock.")]),e._v(" "),e._m(14),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Two-phase_locking",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia - Two-phase locking"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.geeksforgeeks.org/dbms-concurrency-control-protocols-two-phase-locking-2-pl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Two Phase Locking (2-PL)-I"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://vladmihalcea.com/a-beginners-guide-to-the-phantom-read-anomaly-and-how-it-differs-between-2pl-and-mvcc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A beginner’s guide to the Phantom Read anomaly, and how it differs between 2PL and MVCC"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.postgresql.org/docs/6.4/static/sql-beginwork.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Postgres SQL BEGIN"),a("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"_2pl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2pl"}},[this._v("#")]),this._v(" 2PL")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#context"}},[e._v("Context")])]),a("li",[a("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),a("li",[a("a",{attrs:{href:"#solutions"}},[e._v("Solutions")])]),a("li",[a("a",{attrs:{href:"#patterns"}},[e._v("Patterns")]),a("ul",[a("li",[a("a",{attrs:{href:"#shared-lock-v-s-exclusive-lock"}},[e._v("Shared Lock v/s Exclusive Lock")])]),a("li",[a("a",{attrs:{href:"#cascading-rollback"}},[e._v("Cascading Rollback")])]),a("li",[a("a",{attrs:{href:"#deadlocks-and-starvation"}},[e._v("Deadlocks and Starvation")])])])]),a("li",[a("a",{attrs:{href:"#references"}},[e._v("References")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[this._v("#")]),this._v(" Context")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Phase 1, growing phase.\n"),a("ul",[a("li",[e._v("New locks may be acquired.")]),e._v(" "),a("li",[e._v("None of them can be released.")])])]),e._v(" "),a("li",[e._v("Phase 2, shrinking phase.\n"),a("ul",[a("li",[e._v("Existing locks may be released.")]),e._v(" "),a("li",[e._v("No new locks can be acquired.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"solutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[this._v("#")]),this._v(" Solutions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("SQL Server uses 2PL by default.")]),this._v(" "),t("li",[this._v("Postgres uses 2PL for the statement BEGIN.")]),this._v(" "),t("li",[this._v("MySQL InnoDB uses MVCC as its core, however, it uses 2PL for the serializable isolation level. That says MySQL acquires a shared lock on every row or range of rows that are selected in a SQL query.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"patterns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#patterns"}},[this._v("#")]),this._v(" Patterns")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"shared-lock-v-s-exclusive-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shared-lock-v-s-exclusive-lock"}},[this._v("#")]),this._v(" Shared Lock v/s Exclusive Lock")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Shared Lock: nobody can write anything if one or more shared locks already exist.")]),this._v(" "),t("li",[this._v("Exclusive Lock: nobody can read or write anything if an exclusive lock exists.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"cascading-rollback"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cascading-rollback"}},[this._v("#")]),this._v(" Cascading Rollback")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Transaction 1: read(x), write(x), read(y), rollback()")]),this._v(" "),t("li",[this._v("Transaction 2: read(x), write(x), commit()")]),this._v(" "),t("li",[this._v("Transaction 3: read(x), commit()")]),this._v(" "),t("li",[this._v("The scheduler proceeds the operations in below sequence: T1 read(x), T1 write(x), T1 read(y), T2 read(x), T2 write(x), T3 read(x), T1 rollback(), T2 rollback(), T3 rollback(). The dirty read in T2 and T3 causes the rollbacks.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"deadlocks-and-starvation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deadlocks-and-starvation"}},[this._v("#")]),this._v(" Deadlocks and Starvation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Transaction 1: write(x), write(y)")]),this._v(" "),t("li",[this._v("Transaction 2: write(y), write(x)")]),this._v(" "),t("li",[this._v("The scheduler proceeds the operations in below sequence: T1 write(x), T2 write(y), T1 write(y), T2 write(x). You might notice that none of T1 write(y) and T2 write(x) can proceed as for T1 resource y has been locked by T2, and T2 resource x has been locked by T1.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);t.default=r.exports}}]);