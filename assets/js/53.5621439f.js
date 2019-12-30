(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{281:function(e,a,s){"use strict";s.r(a);var n=s(0),t=Object(n.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("The namespace has various kinds. You have seen PID namespace. There are some more: IPC namespace, Network namespace, Mount namespace, User namespace, UTS namespace. Each type isolates different system resources.")]),e._v(" "),s("p",[e._v("It's worth noting that namespace doesn't limit access to physical resources such as CPU, Memory, and disk I/O. We'll introduce another tool cgroup for this specific use case.")]),e._v(" "),s("p",[e._v("One major use case of the namespace is to isolate processes belonging to a container from other containers or the system namespace.")]),e._v(" "),s("p",[e._v("Each process has a "),s("code",[e._v("/proc/[pid]/ns/")]),e._v(" subdirectory. Go and check one in your Linux system! And also check the man page of "),s("a",{attrs:{href:"http://man7.org/linux/man-pages/man7/namespaces.7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("namespaces.7"),s("OutboundLink")],1),e._v(".")])])},[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"container-and-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-and-namespace"}},[this._v("#")]),this._v(" Container and Namespace")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Namespace enables us having the same name for some global system resources. For example, A PID namespace empowers the process inside the namespace running with 1 as PID, which at the same time, "),a("code",[this._v("init")]),this._v(" is running with 1 as PID in the regular namespace.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("img",{attrs:{src:"/static/images/container-PID-namespace.png",alt:"Container PID namespace"}})])}],!1,null,null,null);a.default=t.exports}}]);