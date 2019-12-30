(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{230:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p"),e._m(1),s("p"),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("In request-response model server usually has  very short time to run transactions, and thus it doesn't have enough time to handle time-consuming jobs. For example, the web server needs to respond in less than 30 seconds, while an API importing his/her data might need to take 5 minutes.")]),e._v(" "),s("p",[e._v("Job Queue is a general solution to solve the problem.")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("A Job queue, sometimes task queue or batch queue, is a data structure containing jobs to run outside the common request-response cycle.")]),e._v(" "),s("p",[e._v("A job is a data structure containing running context, and usually encoded as strings or byte streams in job queue.")]),e._v(" "),s("p",[e._v("A job producer initializes jobs, serializes them and sends them out. The producer can be the HTTP process, desktop GUI main process, or anything that is required to be responsive.")]),e._v(" "),s("p",[e._v("A job consumer receives jobs from the job queue, deserializes them and runs jobs in isolated environment.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("Below involves a set of popular job queue frameworks like Python-RQ, Celery, and Sidekiq. By comparing their APIs and design philosophies, we could have a deeper understanding of job queue.")]),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("First, run a Message Queue software. It can be Redis, RabbitMQ, ZeroMQ, Disque, etc. Without the Message Queue running, the publisher can't publish jobs and the consumer would very likely crash. However, Job Queue won't launch Message Queue for you usually, meaning you need to manually bring up Message Queue instance before running a Job Queue.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),s("p",[e._v("For example, in Python-RQ,")]),e._v(" "),e._m(10),s("p",[e._v("For example, in Celery,")]),e._v(" "),e._m(11),s("p",[e._v("Note that some frameworks many have already created a Job Queue so you only need to configure it. For example, in Sidekiq,")]),e._v(" "),e._m(12),e._m(13),e._v(" "),s("p",[e._v("Almost all framework try to simplify the effort of publishing the job. The API has two common kinds:")]),e._v(" "),e._m(14),e._v(" "),s("p",[e._v("###! Enqueue Plain Function")]),e._v(" "),s("p",[e._v("Define plain function, and use the queue to enqueue function call.")]),e._v(" "),s("p",[e._v("For example, in Python-RQ,")]),e._v(" "),e._m(15),s("p",[e._v("###! Make Plain Function Asynchronous")]),e._v(" "),s("p",[e._v("Decorate plain function with the queue to make it asynchronous.")]),e._v(" "),s("p",[e._v("For example, in Celery,")]),e._v(" "),e._m(16),s("p",[e._v("For example, in Sidekiq,")]),e._v(" "),e._m(17),e._m(18),e._v(" "),s("p",[e._v("Most Job Queue softwares take over the worker completely, meaning you only need to start the workers and let them run. The worker will start executing the job in the background on fetching one from MQ. You might want to run it as a daemon or under process supervisors.")]),e._v(" "),s("p",[e._v("For example, in Python-RQ,")]),e._v(" "),e._m(19),s("p",[e._v("For example, in Celery,")]),e._v(" "),e._m(20),s("p",[e._v("For example, in Sidekiq,")]),e._v(" "),e._m(21),e._m(22),e._v(" "),s("p",[e._v("Since Job Queue process runs in the background, so monitoring is a battery-included feature. It often provides you some job statistics like below:")]),e._v(" "),e._m(23),e._v(" "),s("p",[e._v("The Job Queue framework often provides two kinds of interfaces:")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),s("p",[e._v("Below lists some common seen job context data:")]),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),s("p",[e._v("Job functions may return values. Some Job Queue frameworks support storing results into a backend. Some frameworks simply have no support for result storage for it might increase the complexity of implementation. Anyway, since we have the job id in the context, it's quite easy to store the id-result into key-value database for the Job Queue. It requires setting a storage backend when the Job Queue is setup.")]),e._v(" "),e._m(28),e._v(" "),s("p",[e._v("Job Queue has below solutions for failed jobs usually:")]),e._v(" "),e._m(29),e._v(" "),s("p",[e._v("When job failed, it's unrealistic to keep trying running the job. It's usually the maintainer's responsibility to intervene, either to purge the job or fix the code and re-run the job.")]),e._v(" "),e._m(30),e._v(" "),s("p",[e._v("Below lists popular Job Queue frameworks.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.celeryproject.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Celery"),s("OutboundLink")],1),e._v(" "),e._m(31)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://python-rq.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python-RQ"),s("OutboundLink")],1),e._v(" "),e._m(32)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://dramatiq.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dramatiq"),s("OutboundLink")],1),e._v(" "),e._m(33)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/dcramer/taskmaster",target:"_blank",rel:"noopener noreferrer"}},[e._v("Taskmaster"),s("OutboundLink")],1),e._v(" "),e._m(34)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://sidekiq.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sidekiq"),s("OutboundLink")],1),e._v(" "),e._m(35)]),e._v(" "),s("li",[s("a",{attrs:{href:"http://resque.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Resque"),s("OutboundLink")],1),e._v(" "),e._m(36)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/collectiveidea/delayed_job",target:"_blank",rel:"noopener noreferrer"}},[e._v("DelayedJob"),s("OutboundLink")],1),e._v(" "),e._m(37)])]),e._v(" "),s("p",[e._v("Other solutions:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/brandonhilkert/sucker_punch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sucker Punch"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/mperham/girl_friday",target:"_blank",rel:"noopener noreferrer"}},[e._v("Girl Friday"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"http://jqm.readthedocs.io/en/master/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JQM"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/bee-queue/bee-queue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bee-Queue"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/OptimalBits/bull",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bull"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/Automattic/kue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kue"),s("OutboundLink")],1)])]),e._v(" "),e._m(38),e._v(" "),s("p",[e._v("Job queue is an essential component to extend request-response model for handling time-consuming jobs. Choose a Job Queue framework that has API and features you like, and make sure that you have solutions to overcome the disadvantages.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"job-queue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#job-queue"}},[this._v("#")]),this._v(" Job Queue")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#context"}},[e._v("Context")])]),s("li",[s("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),s("li",[s("a",{attrs:{href:"#use"}},[e._v("Use")])]),s("li",[s("a",{attrs:{href:"#common-pattern"}},[e._v("Common Pattern")]),s("ul",[s("li",[s("a",{attrs:{href:"#setup-message-queue"}},[e._v("Setup Message Queue")])]),s("li",[s("a",{attrs:{href:"#setup-queue-and-connection"}},[e._v("Setup Queue and Connection")])]),s("li",[s("a",{attrs:{href:"#publish-the-job"}},[e._v("Publish the job")])]),s("li",[s("a",{attrs:{href:"#dedicated-worker-as-consumer"}},[e._v("Dedicated Worker as Consumer")])]),s("li",[s("a",{attrs:{href:"#monitoring"}},[e._v("Monitoring")])]),s("li",[s("a",{attrs:{href:"#job-context"}},[e._v("Job Context")])]),s("li",[s("a",{attrs:{href:"#result-storage"}},[e._v("Result Storage")])]),s("li",[s("a",{attrs:{href:"#error-handling"}},[e._v("Error Handling")])])])]),s("li",[s("a",{attrs:{href:"#comparisons"}},[e._v("Comparisons")])]),s("li",[s("a",{attrs:{href:"#conclusion"}},[e._v("Conclusion")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[this._v("#")]),this._v(" Context")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use"}},[this._v("#")]),this._v(" Use")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Do offline calculations, for example, training machine learning models, updating loads of records in database, etc.")]),this._v(" "),t("li",[this._v("Interact with third-party services, for example, sending emails or text messages.")]),this._v(" "),t("li",[this._v("Let backup system do actual work without idling the compute resources.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"common-pattern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-pattern"}},[this._v("#")]),this._v(" Common Pattern")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"setup-message-queue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-message-queue"}},[this._v("#")]),this._v(" Setup Message Queue")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"setup-queue-and-connection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-queue-and-connection"}},[this._v("#")]),this._v(" Setup Queue and Connection")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Job Queue usually requires you to define a "),t("code",[this._v("queue")]),this._v(" object. The setup function usually needs the connection parameters of Message Queue and return the job queue object. This queue object encapsulates all functionalities a producer needs.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" redis "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Redis\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" rq "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Queue\n\nrq "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("connection"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" celery "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Celery\n\ncelery "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Celery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'tasks'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" broker"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'pyamqp://guest@localhost//'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("require")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'sidekiq'")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Sidekiq")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("configure_server "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("config"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n  config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("redis "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'redis://redis.svc:6379/0'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"publish-the-job"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publish-the-job"}},[this._v("#")]),this._v(" Publish the job")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Enqueue Plain Function")]),this._v(" "),t("li",[this._v("Make Plain Function Asynchronous")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("count_words_at_url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("requests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nrq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("enqueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("count_words_at_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://enqueuezero.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[e._v("@celery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("task")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("count_words_at_url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("requests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\ncount_words_at_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://enqueuezero.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("CountWordsAtURLWorker")]),e._v("\n  include Sidekiq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("Worker\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("perform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" do "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("r"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n        r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("size\n    end\n  end\nend\n\nCountWordsAtURLWorker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("perform_async"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://enqueuezero.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"dedicated-worker-as-consumer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dedicated-worker-as-consumer"}},[this._v("#")]),this._v(" Dedicated Worker as Consumer")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ pipenv run rq worker\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ pipenv run celery -A tasks worker\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ bundle "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[this._v("exec")]),this._v(" sidekiq\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"monitoring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[this._v("#")]),this._v(" Monitoring")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("How many jobs in progress, or failed.")]),this._v(" "),t("li",[this._v("How many workers in idle, or busy.")]),this._v(" "),t("li",[this._v("How many jobs it has handled.")]),this._v(" "),t("li",[this._v("etc.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("A command-line interface that can show job statistics, often with color bars.")]),this._v(" "),t("li",[this._v("A web dashboard running in parallel with worker processes. This also requires to run an extra admin web process alongside with the Job Queue. The basic theory is to let the admin web process connect to Message Queue for statistics.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"job-context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#job-context"}},[this._v("#")]),this._v(" Job Context")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("job.id")]),e._v(" is a reference. We use it to query job context from Message Queue as well. UUID is usually to be the ID generator.")]),e._v(" "),s("li",[s("code",[e._v("job.function")]),e._v(" is a reference of object that tells consumer how to run the job. It can be an import string, or a code object.")]),e._v(" "),s("li",[s("code",[e._v("job.args")]),e._v(" are a list of parameters to be passed into Job functions.")]),e._v(" "),s("li",[s("code",[e._v("job.ttl")]),e._v(", or time-to-live, is the maximum time of job presenting. The job will be dropped or raise error if the TTL is exceeded. This is mainly to prevent job stuck in the queue.")]),e._v(" "),s("li",[s("code",[e._v("job.timeout")]),e._v(" is the maximum time of job execution in worker.")]),e._v(" "),s("li",[s("code",[e._v("job.status")]),e._v(" describes if the job is in running, or has run successfully, or failed, etc. The field status reflects the life cycle of a job.")]),e._v(" "),s("li",[s("code",[e._v("job.result")]),e._v(" stores the return value of job function call.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"result-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#result-storage"}},[this._v("#")]),this._v(" Result Storage")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"error-handling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-handling"}},[this._v("#")]),this._v(" Error Handling")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Customize error hook function.")]),this._v(" "),t("li",[this._v("Log error tracebacks or integrate with Error Tracing system.")]),this._v(" "),t("li",[this._v("Backoff and retry the job if necessary.")]),this._v(" "),t("li",[this._v("Move dead jobs to a failed queue.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"comparisons"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comparisons"}},[this._v("#")]),this._v(" Comparisons")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Advantages\n"),s("ul",[s("li",[e._v("Popular.")])])]),e._v(" "),s("li",[e._v("Disadvantages\n"),s("ul",[s("li",[e._v("Over-engineering. Do you really need Celery? Give Python-RQ a look.")]),e._v(" "),s("li",[e._v("Complex dependencies and code layers.")]),e._v(" "),s("li",[e._v("Hard to debug.")]),e._v(" "),s("li",[e._v("Complicated configuration.")]),e._v(" "),s("li",[e._v("Can build an async call hell if you wish.")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Advantages\n"),s("ul",[s("li",[e._v("Simple, all document read through in 15min.")]),e._v(" "),s("li",[e._v("Easy to debug.")])])]),e._v(" "),s("li",[e._v("Disadvantages\n"),s("ul",[s("li",[e._v("Support only Redis as broker.")]),e._v(" "),s("li",[e._v("No delayed jobs. Do you think RQ is enough for you? Give celery a look.")]),e._v(" "),s("li",[e._v("Unreliable delivery.")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Advantages\n"),s("ul",[s("li",[e._v("Simple.")]),e._v(" "),s("li",[e._v("Kinda in the middle of Python-RQ and Celery.")]),e._v(" "),s("li",[e._v("Task prioritization.")]),e._v(" "),s("li",[e._v("Rate limiting.")]),e._v(" "),s("li",[e._v("Can retry.")])])]),e._v(" "),s("li",[e._v("Disadvantages\n"),s("ul",[s("li",[e._v("Limited Message Queue broker choices.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Advantages\n"),t("ul",[t("li",[this._v("designed for handling one-off tasks with large sets of tasks")])])]),this._v(" "),t("li",[this._v("Disadvantages\n"),t("ul",[t("li",[this._v("Poor document")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Advantages\n"),t("ul",[t("li",[this._v("Popular")]),this._v(" "),t("li",[this._v("Rich document")])])]),this._v(" "),t("li",[this._v("Disadvantages\n"),t("ul",[t("li",[this._v("thread unsafety")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Advantages\n"),t("ul",[t("li",[this._v("Beautiful web dashboard")]),this._v(" "),t("li",[this._v("Simple")])])]),this._v(" "),t("li",[this._v("Disadvantages\n"),t("ul",[t("li",[this._v("Support only Redis as broker.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Advantages\n"),t("ul",[t("li",[this._v("Easy to use")]),this._v(" "),t("li",[this._v("Good Rails integration")])])]),this._v(" "),t("li",[this._v("Disadvantages\n"),t("ul",[t("li",[this._v("Performance")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[this._v("#")]),this._v(" Conclusion")])}],!1,null,null,null);t.default=n.exports}}]);