(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n("q1tI"),i=n.n(a),r=n("8FPV"),o=n("Wbzz");function l(){return i.a.createElement(o.StaticQuery,{query:"4277382034",render:function(e){return i.a.createElement(m,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function s(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(o.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function m(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(s,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(m,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},a&&i.a.createElement(s,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,null)):i.a.createElement(s,{item:e,key:e.name})}))):null}var c=n("MEl4"),d=n.n(c);function u(e){var t=e.location,n=d.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(m,{items:n.items}))):null}function h(e){var t=e.componentToMatch;return i.a.createElement(o.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?i.a.createElement(p,{item:{name:e.node.context.name}}):""}))}})}function p(e){var t=e.item,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return i.a.createElement(o.Link,{to:n},"Edit this page on GitHub")}function f(e){var t=e.pathname.split("/");return i.a.createElement(h,{componentToMatch:t[3]})}var b=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function g(e){var t=e.location,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+b(t)+function(e){var t=b(e),n=d.a.sections.find((function(e){return t.includes(e.href)})),a=d.a.sections.find((function(e){return e.href===t}));if(null==a?void 0:a.indexmdx)return"/index";if((null==n?void 0:n.items)&&n.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return i.a.createElement(o.Link,{to:n},"Edit this page on GitHub")}function v(e){var t=e.location;return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("br",null),i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return i.a.createElement(f,{pathname:t})}return i.a.createElement(g,{location:e})}(t)))}function x(e){var t=e.children,n=e.location;return i.a.createElement(r.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(u,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(v,{location:n}))))}},I3UB:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),r=n("3dLD"),o={},l={_frontmatter:o},s=r.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(s,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"visual-regression-testing"},"Visual Regression Testing"),Object(i.mdx)("p",null,"This is the first iteration of visual regression testing. It is useful to detect side effects or scope of visual changes."),Object(i.mdx)("p",null,"It works by gathering the links for the site using the sitemap, then opening an chromium instance using Puppeteer to navigate throughout the site, capturing an image of each page. The developer must first create the baseline image set for comparisons (sometimes called the golden set), then after making their changes, run an additional task to make the comparison."),Object(i.mdx)("h1",{id:"how-to-use"},"How to use"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("strong",{parentName:"li"},"Start the local website instance")),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("strong",{parentName:"li"},"Generate your baseline/golden image set for desktop with the following command"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"npm run test:visual:baseline")),Object(i.mdx)("li",{parentName:"ul"},"Note - These images should be generated before your changes, so you may want to switch to the master branch before running this command. This will create the directory ",Object(i.mdx)("inlineCode",{parentName:"li"},"site-root/logs/visual-regression/baseline/desktop")," with all of the website images."))),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("strong",{parentName:"li"},"Generate your baseline/golden image set for mobile with the following command"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"npm run test:visual:baseline -- --mobile")),Object(i.mdx)("li",{parentName:"ul"},"Note - These images should be generated before your changes, so you may want to switch to the master branch before running this command. This will create the directory ",Object(i.mdx)("inlineCode",{parentName:"li"},"site-root/logs/visual-regression/baseline/mobile")," with all of the website images."))),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("strong",{parentName:"li"},"Make your changes")),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("strong",{parentName:"li"},"Run the visual regression test for desktop"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"npm run test:visual")),Object(i.mdx)("li",{parentName:"ul"},'Screenshots of the website (updated to have your changes) will be stored in memory and compared to the baseline images created in step 3. If the images are different, a "diff" image will be generated and stored in the ',Object(i.mdx)("inlineCode",{parentName:"li"},"site-root/logs/visual-regression/diffs/desktop")," directory"),Object(i.mdx)("li",{parentName:"ul"},"All pages that have changed will be outputted as test case failures"))),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("strong",{parentName:"li"},"Run the visual regression test for mobile"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"npm run test:visual -- mobile")),Object(i.mdx)("li",{parentName:"ul"},'Screenshots of the website (updated to have your changes) will be stored in memory and compared to the baseline images created in step 3. If the images are different, a "diff" image will be generated and stored in the ',Object(i.mdx)("inlineCode",{parentName:"li"},"site-root/logs/visual-regression/diffs/mobile")," directory"),Object(i.mdx)("li",{parentName:"ul"},"All pages that have changed will be outputted as test case failures")))),Object(i.mdx)("h1",{id:"limitationsideas-going-forward"},"Limitations/ideas going forward"),Object(i.mdx)("p",null,"Right now this is really limited to being useful for the developer, which I think is a good foundation if we decide to expand on it. Some thoughts -"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"All screenshots are stored in a git-ignored directory",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"All images are stored in ",Object(i.mdx)("inlineCode",{parentName:"li"},"logs/visual-regression"),", with two subdirectories, one being for the baseline and the other for diffs. This was the minimal implementation and what I considered to be a good stopping point for the first iteration."),Object(i.mdx)("li",{parentName:"ul"},"Do we want to include them in version control? And if so, will we store images using the commit SHA?"))),Object(i.mdx)("li",{parentName:"ol"},"Tests fail on all pages that don't match the baseline",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"This means that intentionally-changed pages are detected as test failures the same as pages that may have been changed visually as an unintended side affect."),Object(i.mdx)("li",{parentName:"ul"},"If we want to plug this into our build pipeline, this will have to be addressed, meaning that we'll need a way for developers to sign off on pages that were intentionally changed."))),Object(i.mdx)("li",{parentName:"ol"},"Does not scroll or resize the browser window",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"This means that with this current implementation, we're only testing it on the desktop viewport. It wouldn't be very difficult to change the window size and take new screenshots as part of the automated tests but I wanted to avoid overkill on the first iteration."))),Object(i.mdx)("li",{parentName:"ol"},"Uses the sitemap to navigate throughout the site",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Pages not included in the sitemap will not be evaluated by this tool."))),Object(i.mdx)("li",{parentName:"ol"},"Does not interact with the page at all",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"This means that style for elements that are visible only after certain user interactions will not be evaluated.")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-platform-tools-visual-regression-testing-mdx-cb547aac07b89196dcf4.js.map