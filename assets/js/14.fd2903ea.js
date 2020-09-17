(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{363:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dag-pb-spec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dag-pb-spec"}},[t._v("#")]),t._v(" DAG-PB Spec")]),t._v(" "),a("p",[a("strong",[t._v("Status: Descriptive - Draft")])]),t._v(" "),a("p",[t._v("DAG-PB does not support the full "),a("RouterLink",{attrs:{to:"/data-model-layer/data-model.html"}},[t._v('"IPLD Data Model."')])],1),t._v(" "),a("h2",{attrs:{id:"serial-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-format"}},[t._v("#")]),t._v(" Serial Format")]),t._v(" "),a("p",[t._v("The DAG-PB IPLD serial format is described with a single protobuf:")]),t._v(" "),a("div",{staticClass:"language-protobuf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-protobuf"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An IPFS MerkleDAG Link")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PBLink")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// binary CID (with no multibase prefix) of the target object")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("optional")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" Hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// UTF-8 string name.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("optional")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" Name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cumulative size of target object")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("optional")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" Tsize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An IPFS MerkleDAG Node")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PBNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// refs to other objects")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[t._v("PBLink")]),t._v(" Links "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// opaque user data")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("optional")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" Data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The objects link names are specified in the 'Name' field of the PBLink object.\nAll link names in an object must either be omitted or unique within the object.")]),t._v(" "),a("h2",{attrs:{id:"logical-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logical-format"}},[t._v("#")]),t._v(" Logical Format")]),t._v(" "),a("p",[t._v("When we handle DAG-PB content at the Data Model level, we treat these objects as maps.")]),t._v(" "),a("p",[t._v("This layout can be expressed with "),a("RouterLink",{attrs:{to:"/schemas/"}},[t._v("IPLD Schemas")]),t._v(" as:")],1),t._v(" "),a("div",{staticClass:"language-ipldsch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PBLink")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Hash Bytes\n  Name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("optional")]),t._v(" String\n  Tsize "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("optional")]),t._v(" Int\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PBNode")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Links "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("optional")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PBLink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Data "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("optional")]),t._v(" Bytes\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The first node in a block of DAG-PB data will match the "),a("code",[t._v("PBNode")]),t._v(" type.")]),t._v(" "),a("p",[t._v("When decoding data with the DAG-PB codec, maps with exactly these fields will result.")]),t._v(" "),a("p",[t._v("When creating data, you can create maps using the standard Data Model concepts,\nand as long as they have exactly these fields, the DAG-PB codec can encode them.\nIf additional fields are present, the DAG-PB codec will error, because there is no way to encode them.")]),t._v(" "),a("h2",{attrs:{id:"alternative-pathing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-pathing"}},[t._v("#")]),t._v(" Alternative Pathing")]),t._v(" "),a("p",[t._v("While the "),a("a",{attrs:{href:"#logical-format"}},[t._v("logical format")]),t._v(" implicitly describes a set of mechanisms for pathing over and through DAG-PB data,\nDAG-PB also enjoys some other special forms of pathing in addition to the Data Model norms, and these are supported by most major applications that use DAG-PB.")]),t._v(" "),a("p",[t._v("This alternative pathing is covered here as part of this descriptive spec, but was developed independently of the Data Model and is thus not well standardized.\nIt currently differs between implementations. Please see "),a("a",{attrs:{href:"https://github.com/ipld/specs/issues/55",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue #55"),a("OutboundLink")],1),t._v(" for more information about the harmonization effort. This section describes the current implementations as of September 2019.")]),t._v(" "),a("p",[t._v("The Go and JavaScript implementation both support pathing with link names: "),a("code",[t._v("/<name1>/<name2>/…")]),t._v(".")]),t._v(" "),a("p",[t._v("In Go, this is the only way, which implies that is is impossible to path through nodes that don't name their links. Also neither the Data section nor the Links section/metadata are accessible through paths.")]),t._v(" "),a("p",[t._v("In the JavaScript implementation, there is an additional way to path through the data. It's based purely on the structure of object, i.e. "),a("code",[t._v("/Links/<index>/Hash/…")]),t._v(". This way you have direct access to the "),a("code",[t._v("Data")]),t._v(", "),a("code",[t._v("Links")]),t._v(", and "),a("code",[t._v("size")]),t._v(" fields, e.g. "),a("code",[t._v("/Links/<index>/Hash/Data")]),t._v(".")]),t._v(" "),a("p",[t._v("These two ways of pathing can be combined, so you can access e.g. the "),a("code",[t._v("Data")]),t._v(" field of a named link via "),a("code",[t._v("/<name/Data")]),t._v(". You can also use both approaches within a single path, e.g. "),a("code",[t._v("/<name1>/Links/0/Hash/Data")]),t._v(" or "),a("code",[t._v("/Links/<index>/Hash/<name>/Data")]),t._v(". When using the DAG API in js-ipfs, then the pathing over the structure has precedence, so you won't be able to use named pathing on a named link called "),a("code",[t._v("Links")]),t._v(", you would need to use the index of the link instead.")]),t._v(" "),a("h2",{attrs:{id:"canonical-dag-pb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canonical-dag-pb"}},[t._v("#")]),t._v(" Canonical DAG-PB")]),t._v(" "),a("p",[t._v("Canonical DAG-PB must:")]),t._v(" "),a("ol",[a("li",[t._v("Contain only the specified protobuf fields.")]),t._v(" "),a("li",[t._v("Use standard protobuf encoding, with the following field orders:")])]),t._v(" "),a("ul",[a("li",[t._v("PBNode: Links, Data")]),t._v(" "),a("li",[t._v("PBLink: Hash, Name, Tsize")])]),t._v(" "),a("p",[t._v("Historical Note: The ordering (Links then Data) of the PBNode message is due to\na bug in the initial protobuf encoder that was used in the first implementation\nof ipfs. Take care to maintain this ordering for full compatibility.")])])}),[],!1,null,null,null);e.default=n.exports}}]);