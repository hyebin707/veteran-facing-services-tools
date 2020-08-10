(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n("q1tI"),r=n.n(a),i=n("8FPV"),c=n("Wbzz");function o(){return r.a.createElement(c.StaticQuery,{query:"4277382034",render:function(e){return r.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function s(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(c.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},a&&r.a.createElement(s,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},a&&r.a.createElement(s,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(o,null)):r.a.createElement(s,{item:e,key:e.name})}))):null}var m=n("MEl4"),u=n.n(m);function d(e){var t=e.location,n=u.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(l,{items:n.items}))):null}function p(e){var t=e.componentToMatch;return r.a.createElement(c.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?r.a.createElement(g,{item:{name:e.node.context.name}}):""}))}})}function g(e){var t=e.item,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return r.a.createElement(c.Link,{to:n},"Edit this page on GitHub")}function f(e){var t=e.pathname.split("/");return r.a.createElement(p,{componentToMatch:t[3]})}var b=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function v(e){var t=e.location,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+b(t)+function(e){var t=b(e),n=u.a.sections.find((function(e){return t.includes(e.href)})),a=u.a.sections.find((function(e){return e.href===t}));if(null==a?void 0:a.indexmdx)return"/index";if((null==n?void 0:n.items)&&n.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return r.a.createElement(c.Link,{to:n},"Edit this page on GitHub")}function h(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return r.a.createElement(f,{pathname:t})}return r.a.createElement(v,{location:e})}(t)))}function j(e){var t=e.children,n=e.location;return r.a.createElement(i.a,{location:n},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(d,{location:n}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(h,{location:n}))))}},WrJp:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("3dLD"),c={},o={_frontmatter:c},s=i.a;function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.mdx)(s,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h2",{id:"how-to-create-a-gatsby-plugin"},"How to Create a Gatsby Plugin"),Object(r.mdx)("h3",{id:"creating-a-local-gatsby-plugin"},"Creating a Local Gatsby Plugin"),Object(r.mdx)("p",null,"Here we are going to show you how to create a local plugin for Gatsby."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Create a plugin folder in ",Object(r.mdx)("strong",{parentName:"p"},"/plugins")),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"$ mkdir gatsby-example-plugin\n"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"CD into the folder"),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"$ cd gatsby-example-plugin\n"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Initialize Node.js using npm. Plugins need to be a Node project."),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"$ npm init --yes\n"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Now you can add the Gatsby specific files like gatsby-node.js, gatsby-browser, etc. in your plugin folder."),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{}),"gatsby-example-plugin\n  - gatsby-node.js\n  - gatsby-browser.js\n"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"To use the plugin you need to add it to the ",Object(r.mdx)("strong",{parentName:"p"},"gatsby-config.js")," file."),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// gatsby-config.js\n\nmodule.exports = {\n  siteMetadata: {\n    description: `Resources and documention for the Development within the VA.gov project`,\n    siteUrl: `https://department-of-veterans-affairs.github.io/veteran-facing-services-tools`,\n    title: `VA.gov Developer's Documentations`,\n    sidebar: require('./src/sidebar.js')\n  },\n  pathPrefix: '/veteran-facing-services-tools',\n  plugins: [\n    `gatsby-plugin-react-helmet`,\n    {\n      resolve: `gatsby-source-filesystem`,\n      options: {\n        name: `images`,\n        path: `${__dirname}/src/images`,\n      },\n    },\n    `gatsby-transformer-sharp`,\n    `gatsby-plugin-sharp`,\n    {\n      resolve: `gatsby-plugin-manifest`,\n      options: {\n        name: `vagov-documentation`,\n        short_name: `vagov-documentation`,\n        start_url: `/`,\n      },\n    },\n    `gatsby-example-plugin`,\n  ],\n}\n"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"If you would like to debug your build process code, you can run"),Object(r.mdx)("pre",{parentName:"li"},Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"$ yarn develop:inspect\n")))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-creating-gatsby-plugins-mdx-4c0e3c6639238f23708e.js.map