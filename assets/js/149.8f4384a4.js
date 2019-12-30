(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{244:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Compose"),s("OutboundLink")],1),e._v(", or docker-compose, Compose, is a tool for defining and running multi-container Docker applications.")]),e._v(" "),s("p"),e._m(1),s("p"),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("For macOS users,")]),e._v(" "),e._m(3),e._m(4),e._v(" "),s("p",[e._v("Below commands covers 95% cases.")]),e._v(" "),e._m(5),s("p",[e._v("Any further usage can refer to "),s("a",{attrs:{href:"https://docs.docker.com/compose/reference/overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Overview of docker-compose CLI"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),s("p",[e._v("It's probably the top#1 choice for local application development.")]),e._v(" "),s("p",[e._v("In general, you need both "),s("code",[e._v("Dockerfile")]),e._v(" and "),s("code",[e._v("docker-compose.yaml")]),e._v(" files simultaneously. "),s("a",{attrs:{href:"https://stackoverflow.com/questions/29480099/docker-compose-vs-dockerfile-which-is-better",target:"_blank",rel:"noopener noreferrer"}},[e._v("^caveat-1"),s("OutboundLink")],1)]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),s("p",[e._v("Depending on the case, it can be used in production only when you have one server and have no SLA requirement. "),s("a",{attrs:{href:"https://docs.docker.com/compose/production/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Use Compose in production"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("People mix Compose with Kubernetes, so there comes "),s("a",{attrs:{href:"http://kompose.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kompose"),s("OutboundLink")],1),e._v(".")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[this._v("#")]),this._v(" Docker Compose")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#install"}},[this._v("Install")])]),t("li",[t("a",{attrs:{href:"#commands"}},[this._v("Commands")])]),t("li",[t("a",{attrs:{href:"#composefile"}},[this._v("Composefile")])]),t("li",[t("a",{attrs:{href:"#caveats"}},[this._v("Caveats")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[this._v("#")]),this._v(" Install")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ brew "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" docker-compose\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[this._v("#")]),this._v(" Commands")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker-compose up\n$ docker-compose up -d "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# run as daemons")]),e._v("\n$ docker-compose up -d some-service\n\n$ docker-compose stop\n$ docker-compose down\n\n$ docker-compose restart some-service\n\n$ docker-compose "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# check all running processes in container")]),e._v("\n\n$ docker-compose "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" some-service\n$ docker-compose build some-service\n\n$ docker-compose logs\n$ docker-compose logs -f "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# like `tail -f`")]),e._v("\n$ docker-compose logs -f --tail"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# only concern latest logs")]),e._v("\n\n$ docker-compose "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it some-service "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"composefile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#composefile"}},[this._v("#")]),this._v(" Composefile")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Place a "),t("code",[this._v("docker-compose.yaml")]),this._v(" in project root as a normal convention.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The content of minimal "),t("code",[this._v("docker-compose.yaml")]),this._v(" example:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"3"')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("redis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" redis\n\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" .\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("dockerfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Dockerfile\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"8000:8000"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".:/app"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./data:/data"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" DEBUG=false\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /app/bin/entrypoint.sh\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("links")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" redis\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("depends_on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" redis\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"caveats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#caveats"}},[this._v("#")]),this._v(" Caveats")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("It's okay to have "),t("code",[this._v("runit")]),this._v(" / "),t("code",[this._v("supervisor")]),this._v(" installed in Docker image when doing local development, in which you can have multiple processes running.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("It's recommended mounting "),t("code",[this._v("volumes")]),this._v(" for data persistence, especially like MySQL, etc. The data is preserved even you type "),t("code",[this._v("docker-compose stop")]),this._v(".")])}],!1,null,null,null);t.default=n.exports}}]);