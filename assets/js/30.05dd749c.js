(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{316:function(e,n,o){"use strict";o.r(n);var t=o(0),s=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"content"},[o("p",[e._v("Pipe. Pipe provides unidirectional data stream from one component to the other component. Usually one component produces data to one end of the pipe, and the other component consumes them from the other end. It models a very simple producer-consumer interaction.")]),e._v(" "),o("p",[e._v("UNIX pipe has existed for a very long time and is one of the most elegantly designed connectors. Below program is an example of using UNIX pipe.")]),e._v(" "),o("pre",[o("code",[e._v('# producer.py\nimport sys\nfor i in range(100):\n    sys.stdout.write("%d\\n" % i)\n\n# consumer.py\nimport sys\nfor i in sys.stdin.readlines():\n    print(i)\n\n$ python producer.py | python consumer.py\n')])]),e._v(" "),o("p",[e._v("Pipe is not just an inter-process communication (IPC), such a connector has evolved in the cloud-computing era. For example, AWS SQS FIFO queues guarantee that data are processed exactly once in the exact order that they are sent. Despite of the API difference, below programs do the same thing as the UNIX pipe example.")]),e._v(" "),o("pre",[o("code",[e._v("# producer.py\nimport boto3\nsqs = boto3.resource('sqs')\nqueue = sqs.get_queue_by_name(QueueName='Example.fifo')\nfor i in range(100):\n    queue.send_message(\n        MessageBody=str(i),\n        MessageGroupId='Example'\n    )\n\n# consumer.py\nimport boto3\nsqs = boto3.resource('sqs')\nqueue = sqs.get_queue_by_name(QueueName='Example.fifo')\nfor message in queue.receive_messages():\n    print(message.body)\n    message.delete()\n\n$ python producer.py\n$ python consumer.py\n")])]),e._v(" "),o("p",[e._v("(We don't use | operator here since the cloud vendor has move it to the cloud.)")])])}],!1,null,null,null);n.default=s.exports}}]);