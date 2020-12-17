(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"0x4Y":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("3dLD"),r={},s={_frontmatter:r},l=o.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(l,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"socks-proxy-design"},"SOCKS proxy design"),Object(i.mdx)("p",null,"Some utilities, such as metrics dashboards, error reporting, and deployment\ntools should not be made available to the public. While such a utility may lock\nfunctionality behind a user login system, these vary among implementations and\nmay be vulnerable to exploits. Additionally, due to the difficulty of creating\nsubdomains for vets.gov, it may be problematic to host some of these utilities\nwhen they do not support relative path installations."),Object(i.mdx)("p",null,"The preferred solution is to host these systems on an internal network that\nprevents public access. While the VA maintains an internal network, the vets.gov\nteam operates within the AWS environment. Installation of a utility like this on\nthe VA network would require additional authority to operate extensions,\na server within the VA, and mapping new connections from AWS to the VA. Since\nthese tools are for use exclusively by the vets.gov services installed within\nAWS, utilizing the VA's internal network is both unnecessary, more complex,\ntime intensive, and would likely impact performance of the utility and\napplication requiring it."),Object(i.mdx)("p",null,"To address this issue we've configured an internal DNS server which can be\naccessed via a SOCKS proxy. The SOCKS proxy is a server on your local system\nwhich tunnels HTTP and DNS traffic to a jumpbox on the vets.gov AWS network.\nOnce connected, a developer will have access to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"*.vetsgov-internal")," TLD,\nand can use their browser to connect to tools such as Sentry."),Object(i.mdx)("p",null,"Internal systems will not require any modification to connectivity, and should\ncommunicate with the utilities directly. They may use a ",Object(i.mdx)("inlineCode",{parentName:"p"},"/etc/hosts")," entry for\nthe corresponding ",Object(i.mdx)("inlineCode",{parentName:"p"},"*.vetsgov-internal")," address when necessary."))}c.isMDXComponent=!0},"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),i=n.n(a),o=n("Wbzz");function r(){return i.a.createElement(o.StaticQuery,{query:"68798663",render:function(e){return i.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function s(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(o.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(s,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},a&&i.a.createElement(s,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(r,null)):i.a.createElement(s,{item:e,key:e.name})}))):null}var c=n("MEl4"),m=n.n(c);function u(e){var t=e.location,n=m.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(l,{items:n.items}))):null}function d(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var h=n("8FPV");function p(e){var t=e.children,n=e.location,a=e.pageContext;return i.a.createElement(h.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(u,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(d,{sourceUrl:a.sourceUrl}))))}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-socks-proxy-mdx-60353797b37595a7d863.js.map