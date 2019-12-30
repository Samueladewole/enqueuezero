(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{212:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("Without delivering code to production environment, code is just a piece of text bytes on the disk. Unlike client-side application distribution, server-side application release requires a lot of cares and attentions.")]),e._v(" "),s("p",[e._v("The article is about every aspects of the release should notice.")]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("A software release is the sum of all steps to deliver software to the production, where the software is serving for customers. Release can have several meanings in different scopes. In particular, we discuss the release of the server side software, which has gone through a continuous integration step.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[s("a",{attrs:{href:"https://redditblog.com/2017/06/02/the-evolution-of-code-deploys-at-reddit/",target:"_blank",rel:"noopener noreferrer"}},[e._v("redditblog.com"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("In the fist three years, the engineers at Reddit connected to hosts via SSH and run bash commands. Below is the code in essence (heavily distilled, not real code):")]),e._v(" "),e._m(5),s("p",[e._v("It's comprised of two steps:")]),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("Such release paradigm is always recommended if you have a very small amount of servers and\nIt's dirty but it works in a simplest way.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("Ansible, Chef.")]),e._v(" "),s("p",[e._v("Terraform.")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),s("p",[e._v("push: ssh\npull: agent+http")]),e._v(" "),e._m(13),e._v(" "),s("p",[e._v("SSH: sudo\nSwitch to app user.\nIn container: run as non-sudo.")]),e._v(" "),e._m(14),e._v(" "),s("p",[e._v("dev\ntesting\nstaging\ncanary\nproduction")]),e._v(" "),s("p",[e._v("blue + green.")]),e._v(" "),e._m(15),e._v(" "),s("p",[e._v("kubernetes")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),s("p",[e._v("stop at the node when error occurs.\nrequires human intervention.")]),e._v(" "),e._m(19),e._v(" "),s("p",[e._v("Quickly rollback when outage occurs or error rates up.\nre-do the release.")]),e._v(" "),e._m(20),e._v(" "),s("p",[e._v("raw machine: system dependencies.\ncontainer environment: container runtime setup.\ncloud computation: create cloud resources.")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),s("p",[e._v("Improve performance with remote cache.")]),e._v(" "),e._m(25),e._v(" "),s("p",[e._v("function hook.")]),e._v(" "),e._m(26),e._v(" "),s("p",[e._v("bash hook.")]),e._v(" "),e._m(27),e._v(" "),s("p",[e._v("http hook.")]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),s("p",[e._v("Release note is a record of document to help understanding what is changed in a designated release. Team members can refer to the document at any time to identify the release time and the release changes.")]),e._v(" "),s("p",[e._v("It could contain below changes.")]),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.testingjournals.com/code-release-document/",target:"_blank",rel:"noopener noreferrer"}},[e._v("What to expect when you re expecting a new code release"),s("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release"}},[this._v("#")]),this._v(" Release")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[this._v("#")]),this._v(" Context")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"solutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[this._v("#")]),this._v(" Solutions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[this._v("#")]),this._v(" SSH")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# build the static files and put them on the static server\n`make -C /home/reddit/reddit static`\n`rsync /home/reddit/reddit/static public:/var/www/`\n\n# iterate through the app servers and update their copy\n# of the code, restarting once done.\nforeach $h (@hostlist) {\n    `git push $h:/home/reddit/reddit master`\n    `ssh $h make -C /home/reddit/reddit`\n    `ssh $h /bin/restart-reddit.sh`\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Build static files and push to a server.")]),this._v(" "),t("li",[this._v("SSH to hosts, update the code, build the code, and restart.")]),this._v(" "),t("li",[this._v("The release went through server hosts one by one, which is a form of canary deploy.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"capistrano"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#capistrano"}},[this._v("#")]),this._v(" Capistrano")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"configuration-tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-tools"}},[this._v("#")]),this._v(" Configuration Tools")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"kubernetes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[this._v("#")]),this._v(" Kubernetes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"patterns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#patterns"}},[this._v("#")]),this._v(" Patterns")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"immutable-release-v-s-mutable-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#immutable-release-v-s-mutable-release"}},[this._v("#")]),this._v(" Immutable Release v/s Mutable Release")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pull-based-v-s-push-based"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull-based-v-s-push-based"}},[this._v("#")]),this._v(" Pull-based v/s Push-based")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"sudo-v-s-non-sudo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sudo-v-s-non-sudo"}},[this._v("#")]),this._v(" Sudo v/s Non-Sudo")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"multiple-stages-v-s-blue-green"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multiple-stages-v-s-blue-green"}},[this._v("#")]),this._v(" Multiple Stages v/s Blue Green")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"rollout-v-s-rollover"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rollout-v-s-rollover"}},[this._v("#")]),this._v(" Rollout v/s Rollover")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"backward-compatible-v-s-backward-incompatible"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backward-compatible-v-s-backward-incompatible"}},[this._v("#")]),this._v(" Backward Compatible v/s Backward Incompatible")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Application code change.")]),this._v(" "),t("li",[this._v("Database Schema Migration")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"fail-fast-rollback"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fail-fast-rollback"}},[this._v("#")]),this._v(" Fail Fast & Rollback")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Insufficient system resource.")]),e._v(" "),s("li",[e._v("Network error\n"),s("ul",[s("li",[e._v("SSH connection error in push-based.")]),e._v(" "),s("li",[e._v("HTTP error in pull-based.")])])]),e._v(" "),s("li",[e._v("Application start timeout.")]),e._v(" "),s("li",[e._v("Application misconfiguration.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"resource-provisioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resource-provisioning"}},[this._v("#")]),this._v(" Resource Provisioning")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"parallel-execution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parallel-execution"}},[this._v("#")]),this._v(" Parallel Execution")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"node-roles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-roles"}},[this._v("#")]),this._v(" Node Roles")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"containerize-applications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#containerize-applications"}},[this._v("#")]),this._v(" Containerize Applications")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"remote-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remote-cache"}},[this._v("#")]),this._v(" Remote Cache")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"deploy-hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-hooks"}},[this._v("#")]),this._v(" Deploy Hooks")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("before task")]),this._v(" "),t("li",[this._v("after task")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("git hook. // heroku")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("send rfc/slack messages.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"scale"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scale"}},[this._v("#")]),this._v(" Scale")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"release-note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-note"}},[this._v("#")]),this._v(" Release Note")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Versions. It could be the version of the software, or the version of the build.")]),this._v(" "),t("li",[this._v("The target audiences. Most of the time, they're project managers, QA testers, engineers, and stakeholders.")]),this._v(" "),t("li",[this._v('The ticket (or task) references. Since the release note should not be too long, it\'s wise to place a link reference to the ticket, for example, "Enqueuezero 2019-02 updated. https://jira.example.com/browse/DEV-2019".')]),this._v(" "),t("li",[this._v("The work has done. The type of the work could be bug fixes, new features, refactors, security patches, functional changes, and etc.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"conclusions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[this._v("#")]),this._v(" Conclusions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);t.default=a.exports}}]);