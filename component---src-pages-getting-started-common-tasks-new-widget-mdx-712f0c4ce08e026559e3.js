(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n("q1tI"),i=n.n(a),o=n("8FPV"),r=n("Wbzz");function s(){return i.a.createElement(r.StaticQuery,{query:"4277382034",render:function(e){return i.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function c(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(r.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(c,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},a&&i.a.createElement(c,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(s,null)):i.a.createElement(c,{item:e,key:e.name})}))):null}var d=n("MEl4"),m=n.n(d);function u(e){var t=e.location,n=m.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(l,{items:n.items}))):null}function p(e){var t=e.componentToMatch;return i.a.createElement(r.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?i.a.createElement(g,{item:{name:e.node.context.name}}):""}))}})}function g(e){var t=e.item,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return i.a.createElement(r.Link,{to:n},"Edit this page on GitHub")}function h(e){var t=e.pathname.split("/");return i.a.createElement(p,{componentToMatch:t[3]})}var f=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function w(e){var t=e.location,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+f(t)+function(e){var t=f(e),n=m.a.sections.find((function(e){return t.includes(e.href)})),a=m.a.sections.find((function(e){return e.href===t}));if(null==a?void 0:a.indexmdx)return"/index";if((null==n?void 0:n.items)&&n.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return i.a.createElement(r.Link,{to:n},"Edit this page on GitHub")}function b(e){var t=e.location;return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("br",null),i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return i.a.createElement(h,{pathname:t})}return i.a.createElement(w,{location:e})}(t)))}function j(e){var t=e.children,n=e.location;return i.a.createElement(o.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(u,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(b,{location:n}))))}},EO9e:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return l}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("3dLD"),r={},s={_frontmatter:r},c=o.a;function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(c,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"creating-a-new-react-widget"},"Creating a new React widget"),Object(i.mdx)("p",null,"Note: Check out the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/getting-started/common-tasks/new-feature"}),"Adding a new feature")," doc to make sure you're trying to add the right type of feature to VA.gov."),Object(i.mdx)("h2",{id:"adding-a-new-widget"},"Adding a new widget"),Object(i.mdx)("p",null,"All the static pages use the ",Object(i.mdx)("inlineCode",{parentName:"p"},"static-pages")," entry bundle, so any JS code included from that file will be on all static pages. In order to add a widget, you'll want to create a function that loads your desired React components (or plain JS) asynchronously, and mounts to an element on the page with your widget id."),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"Ensure your page includes the ",Object(i.mdx)("inlineCode",{parentName:"li"},"static-pages")," bundle:")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-markdown"}),"title: My awesome widget page\nlayout: page.html\n---\n")),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Note:")," The ",Object(i.mdx)("inlineCode",{parentName:"p"},"entryname")," must be absent from the markdown file's front matter or the resulting HTML file will include ",Object(i.mdx)("inlineCode",{parentName:"p"},"${entryname}.js")," instead of ",Object(i.mdx)("inlineCode",{parentName:"p"},"static-pages.js"),"."),Object(i.mdx)("ol",{start:2},Object(i.mdx)("li",{parentName:"ol"},"Add a mount point element in the static content page your widget will live on:")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<div data-widget-type="my-new-widget" id="someId"></div>\n')),Object(i.mdx)("ol",{start:3},Object(i.mdx)("li",{parentName:"ol"},"Add a start up function to: ",Object(i.mdx)("inlineCode",{parentName:"li"},"src/applications/static-pages/static-pages-entry.js"),":")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"...\ncreateMyWidget(store, widgetTypes.MY_NEW_WIDGET);\n...\n")),Object(i.mdx)("p",null,"You should also add a constant for your widget type in ",Object(i.mdx)("inlineCode",{parentName:"p"},"src/applications/static-pages/widgetTypes.js"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"export default {\n  ...\n  MY_NEW_WIDGET: 'my-new-widget',\n  ...\n}\n")),Object(i.mdx)("ol",{start:4},Object(i.mdx)("li",{parentName:"ol"},"Write your create widget function:")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'export default async function createMyWidget(store, widgetType) {\n  const widget = document.querySelector(`[data-widget-type="${widgetType}"]`);\n\n  if (widget) {\n    // Load widget if there\'s a mount point for it\n    const {\n      default: MyNewWidget,\n    } = await import(/* webpackChunkName: "my-new-widget" */ \'../../platform/site-wide/my-new-widget\');\n\n    // Do whatever you need to do to start up your widget\n    ReactDOM.render(<MyNewWidget>, widget);\n  }\n}\n')),Object(i.mdx)("p",null,"Note that we don't import the widget code unless there's a mount point in the DOM. This function will run on every page, so we want to make sure we only download the bulk of the widget code when we're actually going to use it."),Object(i.mdx)("h2",{id:"guidelines-for-using-react-on-a-static-page"},"Guidelines for using React on a static page"),Object(i.mdx)("p",null,"We should be careful to not create a bad user experience when using React on static pages. Here are some guidelines you should follow:"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"JS and React take time to download, parse, and render. Make sure you are providing the appropriate feedback to users while that is happening, with a spinner or another method from the UX team."),Object(i.mdx)("li",{parentName:"ol"},"Make sure the page is still usable if your React code fails to work. This can mean it fails to download, an error occurs, or just handling the different login states a user can be in."),Object(i.mdx)("li",{parentName:"ol"},"Be aware of how much weight you're adding to the static-pages bundle and code-split/lazy load when it makes sense.")),Object(i.mdx)("h2",{id:"common-widget-code"},"Common widget code"),Object(i.mdx)("p",null,"There's a simple static page widget feature that you can use to help with the first two points above. The code is in ",Object(i.mdx)("inlineCode",{parentName:"p"},"src/applications/static-pages/static-page-widgets.js"),". Using this will inline some JS that can handle displaying a loading spinner and showing an error message if something goes wrong before the React code can take over rendering. Several pension pages use this functionality (",Object(i.mdx)("inlineCode",{parentName:"p"},"pages/pension/index.md"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"pages/pension/apply.md")," in ",Object(i.mdx)("inlineCode",{parentName:"p"},"vagov-content"),"). It's controlled by defining a widgets list in the front matter for the static content page you're on. The options are:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"- widgets\n  - root: someId \n    timeout: 20\n    showSpinnerUnauthed: false\n    slowLoadingThreshold: 6\n    loadingMessage: Loading\n    slowMessage: Sorry, this is taking longer than expected.\n    errorMessage: Sorry, something went wrong.\n")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"root: The id of the div where the React component will mount."),Object(i.mdx)("li",{parentName:"ul"},"timeout: The amount of time in seconds before the error message is shown."),Object(i.mdx)("li",{parentName:"ul"},"showSpinnerUnauthed: By default, a spinner is shown only if a user has a session token. This will override that and show it always."),Object(i.mdx)("li",{parentName:"ul"},"slowLoadingThreshold: The amount of time in seconds before the slow loading message is shown. This is skipped if the threshold is greater than the overall timeout. Defaulted to 6 seconds."),Object(i.mdx)("li",{parentName:"ul"},"slowMessage: Message shown when the slowThreshold is passed. Defaulted to message above."),Object(i.mdx)("li",{parentName:"ul"},"loadingMessage: Message shown while the JS code is loading. This should probably match any loading message in your React code."),Object(i.mdx)("li",{parentName:"ul"},"errorMessage: Message shown when the JS code fails or times out.")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-widget-mdx-712f0c4ce08e026559e3.js.map