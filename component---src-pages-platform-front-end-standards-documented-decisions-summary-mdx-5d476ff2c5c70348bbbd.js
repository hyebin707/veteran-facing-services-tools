(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"3HE+":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("3dLD"),c={},o={_frontmatter:c},s=i.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.mdx)(s,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"summary-of-documented-decisions"},"Summary of documented decisions"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"May 2016 - ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"/platform/front-end-standards/documented-decisions/language-and-tech-stack"}),"Why we build with Ruby, rails, React, and Metalsmith")),Object(r.mdx)("li",{parentName:"ul"},"August 2016 - ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"/platform/front-end-standards/documented-decisions/redux"}),"Why we use Redux")),Object(r.mdx)("li",{parentName:"ul"},"Fall 2016 - ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"/platform/front-end-standards/documented-decisions/browser-support"}),"Browsers supported")),Object(r.mdx)("li",{parentName:"ul"},"May 2017 - ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"/platform/front-end-standards/documented-decisions/uswds-foundation"}),"Remove USWDS and Foundation grid")),Object(r.mdx)("li",{parentName:"ul"},"January 2017 - ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"/platform/front-end-standards/documented-decisions/building-forms"}),"Why we use react-jsonschema-form to build forms")),Object(r.mdx)("li",{parentName:"ul"},"Feb 2017 - ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"/platform/front-end-standards/documented-decisions/SOCKS-proxy"}),"Why we use SOCKS proxy to connect to internal tools")),Object(r.mdx)("li",{parentName:"ul"},"March 2018 - ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"/platform/front-end-standards/documented-decisions/rjsf-fork"}),"Why we forked react-jsonschema-form")),Object(r.mdx)("li",{parentName:"ul"},"November 2018 - ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"/platform/front-end-standards/documented-decisions/teamsite-signin"}),"Why we omit the signin from Teamsite pages")),Object(r.mdx)("li",{parentName:"ul"},"December 2018 - ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"/platform/front-end-standards/documented-decisions/jest"}),"Why we use Mocha instead of Jest")),Object(r.mdx)("li",{parentName:"ul"},"December 2019 - ","[Reducing site performance impact of web fonts]"," (/platform/front-end-standards/documented-decisions/web-fonts)")))}m.isMDXComponent=!0},"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n("q1tI"),r=n.n(a),i=n("8FPV"),c=n("Wbzz");function o(){return r.a.createElement(c.StaticQuery,{query:"4277382034",render:function(e){return r.a.createElement(m,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function s(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(c.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function m(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},a&&r.a.createElement(s,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(m,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},a&&r.a.createElement(s,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(o,null)):r.a.createElement(s,{item:e,key:e.name})}))):null}var d=n("MEl4"),l=n.n(d);function u(e){var t=e.location,n=l.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(m,{items:n.items}))):null}function f(e){var t=e.componentToMatch;return r.a.createElement(c.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?r.a.createElement(p,{item:{name:e.node.context.name}}):""}))}})}function p(e){var t=e.item,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return r.a.createElement(c.Link,{to:n},"Edit this page on GitHub")}function h(e){var t=e.pathname.split("/");return r.a.createElement(f,{componentToMatch:t[3]})}var b=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function v(e){var t=e.location,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+b(t)+function(e){var t=b(e),n=l.a.sections.find((function(e){return t.includes(e.href)})),a=l.a.sections.find((function(e){return e.href===t}));if(null==a?void 0:a.indexmdx)return"/index";if((null==n?void 0:n.items)&&n.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return r.a.createElement(c.Link,{to:n},"Edit this page on GitHub")}function g(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return r.a.createElement(h,{pathname:t})}return r.a.createElement(v,{location:e})}(t)))}function j(e){var t=e.children,n=e.location;return r.a.createElement(i.a,{location:n},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(u,{location:n}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(g,{location:n}))))}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-summary-mdx-5d476ff2c5c70348bbbd.js.map