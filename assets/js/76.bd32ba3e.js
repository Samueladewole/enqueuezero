(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{240:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("GraphQL is an open-source data query language for APIs, and a runtime for executing queries for existing data. It provides an efficient, powerful and flexible approach to developing web APIs. Just like any other API styles defining how client load data from a server, GraphQL enables the client explicitly declare what type and fields it needs from a server.")]),t._v(" "),a("p",[t._v("GraphQL is transport agnostic, meaning you could potentially use any network protocol to send data, such as TCP, HTTP, WebSockets, etc. GraphQL is not tied to any specific database technology. Therefore, you could use a SQL database, a NoSQL database, or even a microservice as backend.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("Both GraphQL and RESTful are API design architectures for develop data-driven applications. They are two ways of sending data over HTTP. RESTful API is the standard way for designing APIs and has gained a very wide popularity in many applications. GraphQL is often seen as a revolutionary of RESTful to overcome the shortages of RESTful.")]),t._v(" "),a("p",[t._v('A RESTful API uses GET, POST, PUT and DELETE as operations over a basic concept "Resource". A typical RESTful API has below form:')]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("RESTful API often causes over fetching or under fetching. Each resource has relatively limit set of data as defined in schema. You need to call another API to get other data, which requires more network calls. The most important difference between RESTful API and GraphQL is GraphQL deal with data as a graph and therefore every piece of data can be connected. As a result, there is no over fetching or under fetching.  By using GraphQL, it'll yield to less round trips between clients and servers. We'll explain this advantage in later chapter.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("One of the most common downside of RESTful API is over-fetching and under-fetching.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),a("p",[t._v("Though you don't necessarily need every fields every time, you still need to fetch data. It's not an easy ting to design a RESTful API that can provide clients with the exact data they need.")]),t._v(" "),a("p",[t._v("With GraphQL, you can specify just enough data as needed. For example,")]),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("As mentioned earlier, With a REST API, typically you need to gather enough data by accessing various endpoints. For example, in order to build a user profile page, you would possibly need to call below endpoints:")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("It needs at least four network calls! In GraphQL, you'd simply send one single query to GraphQL server, in which you specifies all the data you need. The GraphQL server aggregates all data needed and then responds with a JSON object where the requirements are fulfilled.")]),t._v(" "),t._m(11),t._m(12),t._v(" "),a("p",[t._v("GraphQL enables writing schema with a strong type system called GraphQL Schema Definition Language (SDL).")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("The syntax for defining GraphQL schemas is called Schema Definition Language (SDL). The schema is a contract of how the data structure should be.")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("Below is an example of how we can use a query to fetch data")]),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),a("p",[t._v("In this example, the GraphQL server would only return my last five links.")]),t._v(" "),t._m(29),t._v(" "),a("p",[t._v("Mutations are for making changes. There are generally three kinds of mutations:")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),a("p",[t._v("To support query arguments, we need to add argument to the field.")]),t._v(" "),t._m(39),t._m(40),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),a("ul",[a("li",[t._v("Clients: Apollo "),a("a",{attrs:{href:"https://www.apollographql.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.apollographql.com/"),a("OutboundLink")],1),t._v(", Relay "),a("a",{attrs:{href:"https://facebook.github.io/relay/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://facebook.github.io/relay/"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[t._v("Servers: graphql-js (Node.js) "),a("a",{attrs:{href:"https://github.com/graphql/graphql-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/graphql/graphql-js"),a("OutboundLink")],1),t._v(", graphql-ruby (Ruby) "),a("a",{attrs:{href:"https://github.com/rmosolgo/graphql-ruby",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/rmosolgo/graphql-ruby"),a("OutboundLink")],1),t._v(", graphql-java (Java) "),a("a",{attrs:{href:"https://github.com/graphql-java/graphql-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/graphql-java/graphql-java"),a("OutboundLink")],1),t._v(", Graphene (Python) "),a("a",{attrs:{href:"https://github.com/graphql-python/graphene",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/graphql-python/graphene"),a("OutboundLink")],1),t._v(", Sangria (Scala) "),a("a",{attrs:{href:"https://github.com/sangria-graphql/sangria",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/sangria-graphql/sangria"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),a("p",[t._v("REST vs. GraphQL, "),a("a",{attrs:{href:"https://medium.com/codingthesmartway-com-blog/rest-vs-graphql-418eac2e3083",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://medium.com/codingthesmartway-com-blog/rest-vs-graphql-418eac2e3083"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("How To GraphQL, "),a("a",{attrs:{href:"https://www.howtographql.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.howtographql.com"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("GraphQL, "),a("a",{attrs:{href:"https://graphql.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://graphql.org/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("json-graphql-server, "),a("a",{attrs:{href:"https://github.com/marmelab/json-graphql-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/marmelab/json-graphql-server"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"play-around-with-graphql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#play-around-with-graphql"}},[this._v("#")]),this._v(" Play around with GraphQL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"what-is-graphql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-graphql"}},[this._v("#")]),this._v(" What is GraphQL?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"graphql-v-s-restful"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#graphql-v-s-restful"}},[this._v("#")]),this._v(" GraphQL v/s RESTful")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Create a post, "),a("code",[t._v("POST /api/v1/posts")]),t._v(".")]),t._v(" "),a("li",[t._v("Get a post list, "),a("code",[t._v("GET /api/v1/posts")]),t._v(".")]),t._v(" "),a("li",[t._v("Get a post, "),a("code",[t._v("GET /api/v1/posts/:id")]),t._v(".")]),t._v(" "),a("li",[t._v("Update a post, "),a("code",[t._v("PUT /api/v1/posts/:id")]),t._v(".")]),t._v(" "),a("li",[t._v("Delete a post, "),a("code",[t._v("DELETE /api/v1/posts/:id")]),t._v(".")]),t._v(" "),a("li",[t._v("Add a post comment, "),a("code",[t._v("POST /api/v1/posts/:id/comment")]),t._v(".")]),t._v(" "),a("li",[t._v("Like a post, "),a("code",[t._v("POST /api/v1/posts/:id/like")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"why-use-graphql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-use-graphql"}},[this._v("#")]),this._v(" Why use GraphQL?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"no-over-fetching"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#no-over-fetching"}},[this._v("#")]),this._v(" No Over-Fetching")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In RESTful API, an endpoint usually returns a fixed data structure of a resource. For example, after you send a request "),e("code",[this._v("GET /posts/:id")]),this._v(", it would return data like below:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hands-On Cloud Native Application"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--To be continue--"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1551432089")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('query {\n    Post(id: "1000001") {\n        title\n    }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"no-under-fetching"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#no-under-fetching"}},[this._v("#")]),this._v(" No Under-Fetching")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Get user basic information, "),a("code",[t._v("GET /users/:id")]),t._v(".")]),t._v(" "),a("li",[t._v("Get user latest liked posts, "),a("code",[t._v("GET /users/:id/likes")]),t._v(".")]),t._v(" "),a("li",[t._v("Get user latest followers, "),a("code",[t._v("GET /users/:id/followers")]),t._v(".")]),t._v(" "),a("li",[t._v("Get user latest followees, "),a("code",[t._v("GET /users/:id/followees")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('query {\n    User(id: "1000001") {\n        name\n        likes {\n            id\n            title\n        }\n        followers(last: 3) {\n            name\n        }\n        followees(last: 3) {\n            name\n        }\n    }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"strongly-typed-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#strongly-typed-schema"}},[this._v("#")]),this._v(" Strongly Typed Schema")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"challenges"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#challenges"}},[this._v("#")]),this._v(" Challenges")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"server-side-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server-side-cache"}},[this._v("#")]),this._v(" Server-side Cache")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Since GraphQL server doesn't know what the query will come next, it's a challenge to maintain server-side cache. One of the common pattern is to reserve an "),e("code",[this._v("id")]),this._v(" field always.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"essential-knowledge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#essential-knowledge"}},[this._v("#")]),this._v(" Essential Knowledge")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"schema-definition-language"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schema-definition-language"}},[this._v("#")]),this._v(" Schema Definition Language")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Below is an example of how we can use the SDL to define a data structure called "),e("code",[this._v("Link")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("type Link {\n    url: String!\n    tags: [String!]\n}\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The type has two fields; they are "),a("code",[t._v("url")]),t._v(" and "),a("code",[t._v("tags")]),t._v(" with type "),a("code",[t._v("String")]),t._v(" and "),a("code",[t._v("[String]")]),t._v(". The "),a("code",[t._v("!")]),t._v(" indicates that the field is required. The "),a("code",[t._v("[]")]),t._v(" indicates the field is an array of values, for example, "),a("code",[t._v("[String]")]),t._v(" means a list of "),a("code",[t._v("String")]),t._v(" values.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"fetch-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fetch-data"}},[this._v("#")]),this._v(" Fetch Data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("GraphQL server exposes only one endpoint to clients. All data will be fetched through this endpoint. What makes the endpoint send different data out is called a "),e("em",[this._v("query")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("{\n    myLinks {\n        url\n        tags\n    }\n}\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The "),a("code",[t._v("myLinks")]),t._v(" field in this query is a "),a("em",[t._v("root field")]),t._v(", in which includes the "),a("em",[t._v("payload")]),t._v(" of the query. In this example, the payload has "),a("code",[t._v("url")]),t._v(" and "),a("code",[t._v("tags")]),t._v(" fields. The query would return a list of user's links in the database. For example,")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myLinks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://enqueuezero.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tags"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ez"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://enqueuezero.com/hands-on-cloud-native"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tags"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ez"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"query-arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-arguments"}},[this._v("#")]),this._v(" Query Arguments")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In GraphQL, each "),e("em",[this._v("field")]),this._v(" can have zero to more query arguments. For example,")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("{\n    myLinks(last: 5) {\n        url\n        tags\n    }\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"apply-mutations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apply-mutations"}},[this._v("#")]),this._v(" Apply Mutations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Create data")]),this._v(" "),e("li",[this._v("Update data")]),this._v(" "),e("li",[this._v("Delete data")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The query for applying mutations are similar, except they start with keyword "),e("code",[this._v("mutation")]),this._v(". Below is an example of how we create a new "),e("code",[this._v("Link")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('mutation {\n    createLink(url: "https://enqueuezero.com", tags: ["ez"]) {\n        id\n        created_at\n    }\n}\n')])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("As you can see, the mutation also has a "),a("em",[t._v("root field")]),t._v(", "),a("code",[t._v("createLink")]),t._v(" in this example. We also ask for data "),a("code",[t._v("id")]),t._v(" and "),a("code",[t._v("created_at")]),t._v(" from GraphQL server after the "),a("code",[t._v("Link")]),t._v(" is created. The GraphQL server might respond below data:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"createLink"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-03-01T09:21:29+00:00"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"define-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#define-schema"}},[this._v("#")]),this._v(" Define Schema")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The schema is a contract that specifies what data clients can request. Generally, a schema is a set of GraphQL types. Every GraphQL type has a "),e("em",[this._v("root")]),this._v(" type, for example "),e("code",[this._v("Query")]),this._v(", "),e("code",[this._v("Mutation")]),this._v(", etc.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To support handling queries, we need to define a "),e("code",[this._v("Query")]),this._v(" type.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("type Query {\n    myLinks: [Link!]!\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("type Query {\n    myLinks(last: Int): [Link!]!\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Similarly, to support creating Links, we'll need to define a "),e("code",[this._v("Mutation")]),this._v(" type.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("type Mutation {\n    createLink(url: String!, tags: [String!]): Link!\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("And of course, we need to put "),e("code",[this._v("Link")]),this._v(" type as well. Below is the full definition putting everything together.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("type Query {\n    myLinks(last: Int): [Link!]!\n}\n\ntype Mutation {\n    createLink(url: String!, tags: [String!]): Link!\n}\n\ntype Link {\n    id: String!\n    url: String!\n    tags: [String!]!\n    created_at: String!\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"resolvers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resolvers"}},[this._v("#")]),this._v(" Resolvers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When GraphQL server receives a query, it'll call functions that corresponding to each field in the query to resolve data. They are called "),e("em",[this._v("resolver")]),this._v(" functions. Once all resolver functions return value, the server will assemble all data up in the format that is required by the query and send back to client.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"solutions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[this._v("#")]),this._v(" Solutions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"play-around-with-graphql-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#play-around-with-graphql-2"}},[this._v("#")]),this._v(" Play around with GraphQL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[this._v("#")]),this._v(" Summary")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);e.default=r.exports}}]);