(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{200:function(e,t,n){"use strict";n.r(t);var o=n(0),s=Object(o.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("p",[e._v('Single-Assignment Store is a set of variables that are initially unbound and that can be bound to ONE AND ONLY ONE value in their lifetime. In book "'),n("a",{attrs:{href:"https://www.goodreads.com/book/show/772585.Concepts_Techniques_and_Models_of_Computer_Programming",target:"_blank",rel:"noopener noreferrer"}},[e._v("Concepts, Techniques, and Models of Computer Programming"),n("OutboundLink")],1),e._v("\", it's the fundamental element in the declarative model. We call it "),n("code",[e._v("store")]),e._v(" in the rest of the article. Below thoughts are about implementing single-assignment store that introduced in the book chapter 2.")]),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("To implement such store, we first need to design basic data structure of variables. Then, we need to create container data structures. Next, we need to implement unification and entailment. Once all of these are implemented, we'll get a working single-assignment store. Garbage collection is an optional add-on. We'll use "),n("a",{attrs:{href:"https://github.com/orangeduck/tgc",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/orangeduck/tgc"),n("OutboundLink")],1),e._v(" for memory management.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),n("p",[e._v("Then, since it's impossible to store a string on a "),n("code",[e._v("store_node_value_t")]),e._v(" field, we need to allocate a string somewhere else and store the pointer to the string to "),n("code",[e._v("store_node_value_t")]),e._v(". Below is an example implementation using "),n("a",{attrs:{href:"https://github.com/antirez/sds",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/antirez/sds"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(20),e._v(" "),n("p",[e._v("By introducing the pointer into store_node_t, we need to somehow automatically do garbage collection.")]),e._v(" "),n("p",[e._v("Such design leaves us a problem; what if two store nodes point to two string but with same value?")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),n("p",[e._v("It's getting more and more complicated, but so far, the strategy is just the same as the implementation of str store node.")]),e._v(" "),e._m(24),e._v(" "),n("p",[e._v("Based on the tuple store node, we can turn it into various types, such as list! A list can be a linked-list tuple, the element of which has two sub-element: car and cdr, and such element is so called cons. "),n("a",{attrs:{href:"https://www.math.utah.edu/docs/info/emacs-lisp-intro_8.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.math.utah.edu/docs/info/emacs-lisp-intro_8.html"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("We don't need to implement anything yet since the underlying data structure of list store node is the same as tuple store node.")]),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),n("p",[e._v("Still though, there is nothing we need to implement so far as partial store node is just a vanilla tuple store node with some unbound store node elements.")]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),n("p",[e._v("Each store node's type is still UNBOUND_TYPE, but the value will point to a same ES (equivalence set) linked list. Each ES node point to a store node. When any one of store node is bound to a value, then we can find out all the other store nodes and bind them to the same value.")]),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),n("p",[e._v("The rule of unification is simple: if either store_node is unbound, we unify them. If both store nodes are unbound, we create an equivalence set for them.")]),e._v(" "),e._m(34),e._v(" "),n("p",[e._v("Creating equivalence set is by iterating through the double linked-list.")]),e._v(" "),e._m(35),e._v(" "),n("p",[e._v("Unifying values in the equivalence set is by pointing node values to the determined node.")]),e._v(" "),e._m(36),e._v(" "),n("p",[e._v("Note that we didn't free the nodes explicitly, as we'll introduce garbage collection later.")]),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),n("p",[e._v("Below is an example translation of declarative code to C code.")]),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),n("p",[e._v('The implementation of store needs to clean "garbage" values periodically, otherwise, the increasing memory would crash the process.')]),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._v(" "),n("p",[e._v("By the way, the reason I set str store node value pointer to -1 of sds address is due to the nature of tgc. Sds returns us the pointer of const char *, which is the string part, it leaves the header of the string unpointed by any pointer. From tgc perspective, the entire sds is not pointed by any pointer, so it will be marked as garbage and sweep later. By setting value to -1, we set the pointer to the real head of sds string, so that the string will be retained until the store node is garbage collected.")]),e._v(" "),e._m(45),e._v(" "),e._m(46),e._v(" "),n("p",[e._v("When transmit a store node over network, how to build node on another host or even another process on the same host? All pointers are different as nodes reside in a complete different address space! The solution can be sending serialized full copy of data! It’s impossible to copy a node to another host without some form of translation.")]),e._v(" "),e._m(47),e._v(" "),n("p",[e._v("Virtual machine approach is a supplement to kernel language approach when understanding the atomic data values. The single-assignment store is the fundamental concept in declarative model. By translating data types from kernel language to C language, we can gain a better understanding of them in memory and hence produce more efficient code.")]),e._v(" "),n("p",[e._v("The full source code is hosted on GitHub Gist: "),n("a",{attrs:{href:"https://gist.github.com/soasme/e9beeae434f5c691e4776765306f3d58",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gist.github.com/soasme/e9beeae434f5c691e4776765306f3d58"),n("OutboundLink")],1)]),e._v(" "),e._m(48),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/mozart/mozart2/wiki/Manipulating-Nodes",target:"_blank",rel:"noopener noreferrer"}},[e._v("mozart/mozart2"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://mozart.github.io/mozart-v1/doc-1.4.0/tutorial/node4.html#label25",target:"_blank",rel:"noopener noreferrer"}},[e._v("4 Equality and the Equality Test Operator"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.notion.so/57ccd84f6a6d4a4aa84e1c83fff9fbc4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Single-Assignment Store"),n("OutboundLink")],1)]),e._v(" "),e._m(49),e._v(" "),n("ul",[n("li",[e._v("2019-04-15: Published at "),n("a",{attrs:{href:"https://enqueuezero.com/single-assignment-store.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("enqueuezero.com"),n("OutboundLink")],1),e._v(".")])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"data-structures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-structures"}},[this._v("#")]),this._v(" Data Structures")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"store-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#store-node"}},[this._v("#")]),this._v(" Store Node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A "),t("code",[this._v("store_node_t")]),this._v(" is a two-elements struct. The first element indicates its type. The second element is a pointer to its real value. Such struct represents a variable in a single-assignment store, or as known as dataflow variable or declarative variable.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("typedef enum {\n  UNBOUND_TYPE,\n  // ... (other types)\n} store_node_type_t;\n\ntypedef void* store_node_value_t; \n\ntypedef struct store_node_t {\n  store_node_type_t type;\n  store_node_value_t value;\n} store_node_t;\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"unbound-store-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unbound-store-node"}},[this._v("#")]),this._v(" Unbound Store Node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Once initialized with "),t("code",[this._v("type=UNBOUND_TYPE")]),this._v(" by "),t("code",[this._v("malloc")]),this._v(" , it can be bound to any other types.  Once bound to one of the other types, it cannot bound to other types; otherwise, an error occurs. The given two rules satisfy an important property of the store: once bound, a declarative variable stays bound throughout the computation and is indistinguishable from its value.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Assume we have a type "),n("code",[e._v("store_error_t")]),e._v(" for capturing errors, and function "),n("code",[e._v("store_bind_intval")]),e._v(" for binding integer values. Below examples shows the first "),n("code",[e._v("store_bind_intval")]),e._v(" call sets node type to INT_TYPE and node value to 1, while the second "),n("code",[e._v("store_bind_intval")]),e._v(" call does nothing except setting an error.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('store_node_t* node = (store_not_t)*malloc(sizeof(store_not_t))\nnode->type = UNBOUND_TYPE;\nnode->value = NULL;\n\nstore_error_t error = STORE_NO_ERROR;\n\nstore_bind_intval(node, 1, &error);\nprintf("%ld\\n", (long)(node->value)); // should print 1.\n\nstore_bind_intval(node, 2, &error);\nprintf("%ld %ld\\n", error, (long)(node->value)); // should still print 1.\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To sum up, in out implementation, an unbound store node has below information in the "),t("code",[this._v("store_node_t")]),this._v(" struct:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Its type is "),t("code",[this._v("UNBOUND_TYPE")]),this._v(".")]),this._v(" "),t("li",[this._v("Its value is "),t("code",[this._v("NULL")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"int-store-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#int-store-node"}},[this._v("#")]),this._v(" Int Store Node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Without the integer type, we are unable to perform basic calculations (or at least, very hard). We can extend "),t("code",[this._v("store_node_type_t")]),this._v(" by adding one more type: "),t("code",[this._v("INT_TYPE")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("typedef enum {\n  UNBOUND_TYPE,\n  INT_TYPE, /* This is the new type we just added. */\n  // ... (other types)\n} store_node_type_t;\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("One more thing, we need "),t("code",[this._v("store_error_t")]),this._v(" to indicate an error occurring on binding. It can also be an enum.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("typedef enum {\n  STORE_NO_ERROR,\n  STORE_ALREADY_BOUND_ERROR,\n} store_error_t;\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Binding a integer can be quite simple - change the type to "),t("code",[this._v("INT_TYPE")]),this._v(" and modify the value. We could have allocated a new memory and set the "),t("code",[this._v("value")]),this._v(" to the pointer of the new address. However, it's insufficient; the value field can fit in a long value. This also means we added an upper bound to the maximum value we can have; it's 2^32 on a 32bit machine and 2^64 one a 64bit machine.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"str-store-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#str-store-node"}},[this._v("#")]),this._v(" Str Store Node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Similarly, to support str store node, we add a new type "),t("code",[this._v("STR_TYPE")]),this._v(" .")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("typedef enum {\n  UNBOUND_TYPE,\n  INT_TYPE,\n  STR_TYPE, /* This is the new type we just added. */\n  // ... (other types)\n} store_node_type_t;\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('store_node_t* node = (store_node_t)*malloc(sizeof(store_node_t));\nsds s = sdsnew("hello world")\nnode->type = STR_TYPE;\nnode->value = s[-1];\n\nunsigned char sds_header = node->value;\nsds p = node->value[1];\nprintf("size=%ld, str=%s\\n", sdslen(p), p);\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"tuple-store-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tuple-store-node"}},[this._v("#")]),this._v(" Tuple Store Node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Tuple is a container store node that has a fixed number of pointers to other store nodes. Similar to str store node, we add a new type "),t("code",[this._v("TUPLE_TYPE")]),this._v(" , allocate a tuple struct, and point value to the tuple.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('typedef struct tuple_t {\n  size_t size;\n  store_node_t** elements;\n} tuple_t;\n\ntypedef enum {\n  UNBOUND_TYPE,\n  INT_TYPE,\n  STR_TYPE,\n  TUPLE_TYPE, /* This is the new type we just added. */\n  // ... (other types)\n} store_node_type_t;\n\nprintf(">>> let T = tuple(I S)\\n");\nstore_node_error_t merr_tuple_word = WORD_NO_ERROR;\nstore_node_t* tuple_node = new_store_node(UNBOUND_WORD, NULL);\nstore_node_t* tuple_elements[] = { int_word, str_node };\nset_store_node_tupleval(\n    tuple_node,\n    2,\n    tuple_elements,\n    &merr_tuple_word\n);\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"list-store-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-store-node"}},[this._v("#")]),this._v(" List Store Node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("store_node_t* node = (store_node_t)*malloc(sizeof(store_node_t));\nnode->type = TUPLE_TYPE,\nsize_t size = 2;\nnode->value = (void*)malloc(sizeof(tuple_t)+sizeof(store_node_t)*size);\ntuple_t* tuple = (tuple_t*)node->value;\ntuple->size = size;\n// the first tuple element becomes car, or head.\ntuple->nodes[0]->type = INT_TYPE;\ntuple->nodes[0]->value = 0;\n// the second tuple element becomes cdr, or tail.\ntuple->nodes[1]->type = TUPLE_TYPE;\n// ...\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"partial-store-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#partial-store-node"}},[this._v("#")]),this._v(" Partial Store Node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Inside the tuple store node, it's possible that one of the tuple element is still an unbound store node, meaning the tuple element has UNBOUND_TYPE as its type. It's completely legitimate in our case. In declarative model, this tuple is so called partial variable. The afterward code will use "),t("code",[this._v("=")]),this._v(" operator unifying two variables, making all partial variables inside a tuple being bound to a deterministic type. For example, "),t("code",[this._v("X = (1 2); Y = (1 Z); X = Y")]),this._v(" makes Z=2 and Y=(1 2).")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Considering two variables point to each other: "),n("code",[e._v("X = (Y); Y = (Z)")]),e._v(" , the unification "),n("code",[e._v("X = Y")]),e._v(" makes the variable y and z to be the same, yet they're still partial values. Previously, we define "),n("code",[e._v("node->value = NULL")]),e._v(" when "),n("code",[e._v("node->type == UNBOUND_TYPE")]),e._v(" . But we need to add some adjustments to this behavior. It's clear that when the type is unbound, it makes sense to point the value to something so that we can tell the identity of the value. Such thing is called an equivalence set in declarative model. To implement it, we need a new data structure "),n("code",[e._v("store_equivalence_set_t")]),e._v(", which can be a linked-list.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("typedef struct store_equivalence_node_t {\n    store_node_t* node;\n    struct store_equivalence_node_t* prev;\n    struct store_equivalence_node_t* next;\n} store_equivalence_node_t;\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The pointers between multiple store nodes in the equivalence set has below shape ( "),t("code",[this._v("X = Y = Z")]),this._v(").")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"unification-and-entailment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unification-and-entailment"}},[this._v("#")]),this._v(" Unification and Entailment")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("As shown in above example, "),t("code",[this._v("X = Y")]),this._v(" is called unification. It's also an important operation in logical programming.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The goal of unification, as stated in Partial Store Node section, is to set types and values for unbound store node. A special case is, an error will occur when two variables are not match, for example, "),t("code",[this._v("X = (1, 2); Y = (1, Z, 3); X = Y")]),this._v(" is wrong.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("void\nstore_bind(store_node_t* left, store_node_t* right, store_node_error_t* error) {\n    if (left->type == UNBOUND_WORD && right->type == UNBOUND_WORD) {\n        store_bind_equivalence_set_nodes(left, right, error);\n    } else if (left->type == UNBOUND_WORD && right->type != UNBOUND_WORD) {\n        store_unify_unbound_node(left, right);\n    } else if (left->type != UNBOUND_WORD && right->type == UNBOUND_WORD) {\n        store_unify_unbound_node(right, left);\n    } else if (left->type != UNBOUND_WORD && right->type != UNBOUND_WORD) {\n        *error = WORD_CONFLICT_ERROR;\n    }\n}\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("void\nstore_bind_equivalence_set_nodes(store_node_t* left,\n        store_node_t* right,\n        store_node_error_t* error) {\n\n    store_equivalence_node_t* resn = (store_equivalence_node_t*) right->value;\n    store_equivalence_node_t* resn_leftmost = resn;\n    while(resn_leftmost->prev != NULL) {\n        resn_leftmost = resn_leftmost->prev;\n    }\n\n    store_equivalence_node_t* lesn = (store_equivalence_node_t*) left->value;\n    store_equivalence_node_t* lesn_rightmost = lesn;\n    while(resn_leftmost->next != NULL) {\n        resn_leftmost = resn_leftmost->next;\n    }\n\n    resn_leftmost->prev = lesn_rightmost;\n    lesn_rightmost->next = resn_leftmost;\n}\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("void\nstore_unify_unbound_node(store_node_t* unbound, store_node_t* bound) {\n    store_equivalence_node_t* es = (store_equivalence_node_t*) unbound->value;\n    es = es->prev;\n    while (es != NULL) {\n        es->node->type = bound->type;\n        es->node->value = bound->value;\n        es = es->prev;\n    }\n\n    es = (store_equivalence_node_t*) unbound->value;\n    while (es != NULL) {\n        es->node->type = bound->type;\n        es->node->value = bound->value;\n        es = es->next;\n    }\n}\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"bind-operation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bind-operation"}},[this._v("#")]),this._v(" Bind operation")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("code",[e._v("store_bind(ES, v)")]),e._v(" binds all variables in the equivalence set ES to the number or record v. For example, the operation "),n("code",[e._v("store_bind({v1, v2}, node)")]),e._v(" adds two variables "),n("code",[e._v("v1")]),e._v(" and "),n("code",[e._v("v2")]),e._v(" to an equivalence set (create an ES if not exists).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("store_merge(ES1, ES2)")]),this._v(" merge ES2 into ES1. It points the nodes' values to the head of ES1, and makes each newly added element pointing back to nodes.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('printf(">>> declare X Z\\n");\nstore_node_error_t bind_err = WORD_NO_ERROR;\nstore_node_t* x_node = new_store_node(UNBOUND_WORD, NULL);\nstore_node_t* z_node = new_store_node(UNBOUND_WORD, NULL);\n\nprintf(">>> X = Z\\n");\nstore_bind(x_node, z_node, &bind_err);\n\nprintf(">>> X = S\\n");\nstore_bind(str_node, x_node, &bind_err);\n\nprintf(">>> echo(tuple(X Z))\\n");\nprintf("{\\"%s\\", \\"%s\\"}\\n", get_store_node_strval(x_node, &merr_str_node), get_store_node_strval(z_node, &merr_str_node));\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"store-memory-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#store-memory-management"}},[this._v("#")]),this._v(" Store Memory Management")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("We can use a gc library for memory management. Below is an demo implementation of gc using "),t("code",[this._v("tgc")]),this._v(". By replacing all malloc to "),t("code",[this._v("gc_malloc")]),this._v(" calls, we can  benefit from an auto-free style garbage collection. It uses the simplest mark and sweep algorithm. Though it's not the fastest, it works.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('#include "tgc.h"\n\nstatic tgc_t gc;\nvoid gc_start(void* stk) { tgc_start(&gc, stk); }\nvoid gc_run() { tgc_run(&gc); }\nvoid gc_stop() { tgc_stop(&gc); }\nvoid* gc_alloc(size_t size) { return tgc_alloc(&gc, size); }\nvoid* gc_realloc(void* ptr, size_t size) { return tgc_realloc(&gc, ptr, size); }\nvoid gc_free(void* ptr) { tgc_free(&gc, ptr); }\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When there is no pointer pointing to a "),t("code",[this._v("store_node_t")]),this._v(" , it'll be swept by gc library and hence the memory won't go up forever.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("sds\nnew_strval(const char* value) {\n    void* s = (void*)sdsnew(value);\n    return s-1;\n}\n\nvoid\nset_store_node_strval(store_node_t* node, const char* value, store_node_error_t* error) {\n    if (node->type != UNBOUND_WORD) {\n        *error = WORD_CONFLICT_ERROR; return;\n    }\n\n    node->type = STR_WORD;\n    node->value = new_strval(value);\n}\n\nsds\nget_store_node_strval(store_node_t* word, store_node_error_t* error) {\n    if (word->type != STR_WORD) {\n        *error = WORD_TYPE_ERROR; return NULL;\n    }\n\n    return (sds)(word->value+1);\n}\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"network-transmition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-transmition"}},[this._v("#")]),this._v(" Network Transmition")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[this._v("#")]),this._v(" Conclusion")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[this._v("#")]),this._v(" References")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updates"}},[this._v("#")]),this._v(" Updates")])}],!1,null,null,null);t.default=s.exports}}]);