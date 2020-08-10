(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("q1tI"),r=n.n(a),i=n("8FPV"),l=n("Wbzz");function m(){return r.a.createElement(l.StaticQuery,{query:"4277382034",render:function(e){return r.a.createElement(d,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function c(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(l.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function d(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},a&&r.a.createElement(c,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},a&&r.a.createElement(c,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(m,null)):r.a.createElement(c,{item:e,key:e.name})}))):null}var o=n("MEl4"),s=n.n(o);function p(e){var t=e.location,n=s.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(d,{items:n.items}))):null}function u(e){var t=e.componentToMatch;return r.a.createElement(l.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?r.a.createElement(b,{item:{name:e.node.context.name}}):""}))}})}function b(e){var t=e.item,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return r.a.createElement(l.Link,{to:n},"Edit this page on GitHub")}function O(e){var t=e.pathname.split("/");return r.a.createElement(u,{componentToMatch:t[3]})}var j=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function g(e){var t=e.location,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+j(t)+function(e){var t=j(e),n=s.a.sections.find((function(e){return t.includes(e.href)})),a=s.a.sections.find((function(e){return e.href===t}));if(null==a?void 0:a.indexmdx)return"/index";if((null==n?void 0:n.items)&&n.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return r.a.createElement(l.Link,{to:n},"Edit this page on GitHub")}function x(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return r.a.createElement(O,{pathname:t})}return r.a.createElement(g,{location:e})}(t)))}function h(e){var t=e.children,n=e.location;return r.a.createElement(i.a,{location:n},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(p,{location:n}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(x,{location:n}))))}},bAeu:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("3dLD"),l={},m={_frontmatter:l},c=i.a;function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.mdx)(c,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"run-and-build-vagov"},"Run and build VA.gov"),Object(r.mdx)("h2",{id:"prerequisite"},"Prerequisite"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Complete the ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"/veteran-facing-services-tools/getting-started"}),"first")," step in ",Object(r.mdx)("em",{parentName:"li"},"Start up guide"),".")),Object(r.mdx)("h2",{id:"locally-run-vagov"},"Locally run VA.gov"),Object(r.mdx)("p",null,"Start the watch task:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yarn watch\n")),Object(r.mdx)("h3",{id:"build"},"Build"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"Metalsmith")," manages this build pipeline. At a high level, this process:",Object(r.mdx)("ol",{parentName:"li"},Object(r.mdx)("li",{parentName:"ol"},"retrieves and ",Object(r.mdx)("strong",{parentName:"li"},"builds")," all of the ",Object(r.mdx)("strong",{parentName:"li"},"static pages")," sourced from ",Object(r.mdx)("inlineCode",{parentName:"li"},"vagov-content")," or Drupal"),Object(r.mdx)("li",{parentName:"ol"},"starts ",Object(r.mdx)("strong",{parentName:"li"},"Webpack"),"'s devevelopment server which",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"builds")," the ",Object(r.mdx)("strong",{parentName:"li"},"JavaScript")," and ",Object(r.mdx)("strong",{parentName:"li"},"CSS")," bundles, and"),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"serves")," the ",Object(r.mdx)("strong",{parentName:"li"},"JavaScript")," and ",Object(r.mdx)("strong",{parentName:"li"},"CSS")," bundles and the ",Object(r.mdx)("strong",{parentName:"li"},"static content")," built by Metalsmith at ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"http://localhost:3000"}),"http://localhost:3000"))))))),Object(r.mdx)("h3",{id:"output"},"Output"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"Metalsmith")," outputs ",Object(r.mdx)("strong",{parentName:"li"},"static pages")," to",Object(r.mdx)("inlineCode",{parentName:"li"},"build/localhost")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"Webpack")," development server has ",Object(r.mdx)("strong",{parentName:"li"},"no output"),". ",Object(r.mdx)("strong",{parentName:"li"},"JavaScript")," and ",Object(r.mdx)("strong",{parentName:"li"},"CSS")," are kept in memory.")),Object(r.mdx)("h3",{id:"watch-and-rebuild"},"Watch and rebuild"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"Metalsmith")," will rebuild ",Object(r.mdx)("strong",{parentName:"li"},"static pages")," when changes are saved to ",Object(r.mdx)("strong",{parentName:"li"},"templates")," or content in ",Object(r.mdx)("inlineCode",{parentName:"li"},"vagov-content")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"Webpack")," development server will rebuild when changes are saved to ",Object(r.mdx)("strong",{parentName:"li"},"JavaScript")," or ",Object(r.mdx)("strong",{parentName:"li"},"SCSS")),Object(r.mdx)("li",{parentName:"ul"},"Both updates require a browser refresh to see changes."),Object(r.mdx)("li",{parentName:"ul"},"Changes to build process or configuration files are typically not picked up, and require a restart of the watch task to become active.")),Object(r.mdx)("h2",{id:"locally-build-and-run-for-specific-environment"},"Locally build and run for specific environment"),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Note: most of the time, it's better to use the ",Object(r.mdx)("inlineCode",{parentName:"em"},"watch")," task to build the site locally since it is the most developer-friendly experience.")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Environment"),Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Build Command"),Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Output directory"),Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Run Command"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"localhost"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"yarn build")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"build/localhost")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"npx http-server -p 3001 build/localhost"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"dev.va.gov"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"yarn build --buildtype=vagovdev")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"build/vagovdev")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"npx http-server -p 3001 build/vagovdev"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"staging.va.gov"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"NODE_ENV=production yarn build --buildtype=vagovstaging")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"build/vagovstaging")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"npx http-server -p 3001 build/vagovstaging"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("a",Object.assign({parentName:"td"},{href:"http://www.va.gov"}),"www.va.gov")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"NODE_ENV=production yarn build --buildtype=vagovprod")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"build/vagovprod")),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"npx http-server -p 3001 build/vagovprod"))))),Object(r.mdx)("h3",{id:"build-commands"},"Build commands"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"create")," the ",Object(r.mdx)("strong",{parentName:"li"},"static pages")," from the markdown content in the ",Object(r.mdx)("inlineCode",{parentName:"li"},"vagov-content")," repository and data queried from the Drupal API into their ",Object(r.mdx)("strong",{parentName:"li"},"output directory")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"create")," the ",Object(r.mdx)("strong",{parentName:"li"},"JavaScript")," and ",Object(r.mdx)("strong",{parentName:"li"},"CSS")," files with Webpack into ",Object(r.mdx)("inlineCode",{parentName:"li"},"/generated")," folder in their ",Object(r.mdx)("strong",{parentName:"li"},"output directory")," with Webpack")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Production like builds are required for staging and production environments. ",Object(r.mdx)("strong",{parentName:"em"},"NODE_ENV=production")," environment variable is required to be set when running these build commands")),Object(r.mdx)("h3",{id:"run-commands"},"Run commands"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"start")," an ",Object(r.mdx)("inlineCode",{parentName:"li"},"http-server")," that ",Object(r.mdx)("strong",{parentName:"li"},"serves")," the ",Object(r.mdx)("strong",{parentName:"li"},"static pages")," from the ",Object(r.mdx)("strong",{parentName:"li"},"output directory")," at ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://localhost:3001"}),"http://localhost:3001"))),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Typically, the reason for building the site locally like this is to build it in production mode and check that it is behaving as you'd expect.")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},Object(r.mdx)("strong",{parentName:"em"},"Deep-linking")," to urls that are rendered by ",Object(r.mdx)("strong",{parentName:"em"},"React")," apps on VA.gov ",Object(r.mdx)("strong",{parentName:"em"},"will not work")," when you run the site this way, as that relies on some server-side routing that is handled in nginx (or the Webpack dev server when running the ",Object(r.mdx)("inlineCode",{parentName:"em"},"watch")," task)")),Object(r.mdx)("h2",{id:"related-source"},"Related source"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/devops"}),"Metalsmith build script")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/config/webpack.dev.config.js"}),"Webpack development server config"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-run-build-mdx-760856cd3a23c7c12027.js.map