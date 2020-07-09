(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"170T":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return m}));var o=t("zLVn"),a=(t("q1tI"),t("7ljp")),c=t("3dLD"),r={},i={_frontmatter:r},s=c.a;function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.mdx)(s,Object.assign({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"adding-a-collection-of-related-links-for-markdown-pages"},"Adding a collection of related links for Markdown pages"),Object(a.mdx)("p",null,"Our current publishing system, Metalsmith, provides a way to group related content using what it calls ",Object(a.mdx)("em",{parentName:"p"},"collections"),". Using collections requires the ",Object(a.mdx)("inlineCode",{parentName:"p"},"metalsmith-collections")," plugin (",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/segmentio/metalsmith-collections"}),"documentation"),")."),Object(a.mdx)("p",null,"Content grouped within a collection is displayed in the sidebar navigation, and the next/previous links. Next and previous links are set based on the sorting order (",Object(a.mdx)("inlineCode",{parentName:"p"},"sortBy")," property of the collection; see below)"),Object(a.mdx)("p",null,"Viewing ",Object(a.mdx)("inlineCode",{parentName:"p"},"src/site/components/navigation-sidebar.html")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"src/site/components/navigation-next-previous.html")," ",Object(a.mdx)("em",{parentName:"p"},"may")," clarify some of what's in this document."),Object(a.mdx)("h2",{id:"add-a-new-collection"},"Add a new collection"),Object(a.mdx)("p",null,Object(a.mdx)("em",{parentName:"p"},Object(a.mdx)("strong",{parentName:"em"},"NOTE"),": Content team, you may wish to file a request with the DevOps team for this task.")),Object(a.mdx)("p",null,"To create a new collection, add a new collection object to ",Object(a.mdx)("inlineCode",{parentName:"p"},"vets-website/script/build.js"),"."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{}),"  smith.use(collections({\n    collectionName: {\n      pattern: 'path/to/the/files/*.md',\n      sortBy: 'order',\n      metadata: {\n        name: 'Title for collection 1'\n      }\n    },\n    secondCollectionName: {\n      pattern: 'path/to/the/files/*.md',\n      sortBy: 'order',\n      metadata: {\n        name: 'Title for collection two'\n      }\n    }\n  }));\n")),Object(a.mdx)("h3",{id:"what-each-field-means"},"What each field means:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"collectionName"),": should be a camel-cased or snake cased string that summarizes the name of the related documents.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"pattern"),": should be a directory a relative to the site root (without a leading slash), and end with ",Object(a.mdx)("inlineCode",{parentName:"p"},"*.md")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"*.html")," (",Object(a.mdx)("inlineCode",{parentName:"p"},"*")," is a ",Object(a.mdx)("em",{parentName:"p"},"wildcard")," character that will match every file with an ",Object(a.mdx)("inlineCode",{parentName:"p"},".md")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"*.html")," extension.)")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"sortBy"),": is any current YAML property used in the front matter metadata (front matter data is the stuff between the ",Object(a.mdx)("inlineCode",{parentName:"p"},"---")," at the beginning of each content file). This should be:"),Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"order")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"title")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"display_title")))),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"metadata"),": must be a JavaScript object that contains a ",Object(a.mdx)("inlineCode",{parentName:"p"},"name")," property. This field is optional. You may add additional properties as here."))),Object(a.mdx)("h3",{id:"adding-files-to-a-collection-even-when-it-is-not-in-the-collection-path"},"Adding files to a collection even when it is not in the collection path"),Object(a.mdx)("p",null,"Collections can also be defined or augmented by adding a ",Object(a.mdx)("inlineCode",{parentName:"p"},"collection")," property to front matter fields. For example:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{}),"---\nlayout: page-breadcrumbs.html\ntitle: Agent Orange\nplainlanguage: 10-21-16 certified in compliance with the Plain Writing Act\ntemplate: detail-page\ncollection: disabilityExposureHazMat\n---\n")),Object(a.mdx)("p",null,"In general you should:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Use a collection objects to configure collections.")," Items within a collection directory will be added to the collection automatically"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Add a collection property to include an index or other file")," in the collection. For example, ",Object(a.mdx)("inlineCode",{parentName:"li"},"exposure-to-hazardous-materials/agent-orange.md")," is also an index page for several Agent Orange-related disability pages and should have a ",Object(a.mdx)("inlineCode",{parentName:"li"},"disabilityExposureHazMat")," property.")),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"NOTE:")," Adding a ",Object(a.mdx)("inlineCode",{parentName:"p"},"collection")," property in YAML will not override a path-based collection value. You'll actually need to move the file."),Object(a.mdx)("h2",{id:"ordering-pages-within-a-collection"},"Ordering pages within a collection"),Object(a.mdx)("p",null,"When defining a collection, you may choose to sort pages by date, or by title. In many cases, however, the desired page order may not use either of those fields."),Object(a.mdx)("p",null,"To control the order of display within a collection, add an ",Object(a.mdx)("inlineCode",{parentName:"p"},"order")," property to the front matter of each page."),Object(a.mdx)("p",null,"The value of ",Object(a.mdx)("inlineCode",{parentName:"p"},"order")," should be a number. Pages will be ordered in ascending order."),Object(a.mdx)("h2",{id:"adding-a-child-collection"},"Adding a child collection"),Object(a.mdx)("p",null,"Collections do not have a hierarchy by default. Create one by adding a ",Object(a.mdx)("inlineCode",{parentName:"p"},"children")," property to the parent page or index page of a child collection."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{}),"---\nlayout: page-breadcrumbs.html\ntitle: Agent Orange\nplainlanguage: 10-21-16 certified in compliance with the Plain Writing Act\ntemplate: detail-page\ncollection: disabilityExposureHazMat\nchildren: disabilityAgentOrange\norder: 1\n---\n")),Object(a.mdx)("p",null,Object(a.mdx)("inlineCode",{parentName:"p"},"children")," should be the identifier for the child collection."),Object(a.mdx)("h2",{id:"current-collections-and-hierarchy"},"Current collections and hierarchy"),Object(a.mdx)("p",null,Object(a.mdx)("em",{parentName:"p"},"See vets-website/script/build.js"),"."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Label"),Object(a.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Path"),Object(a.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Child collection(s)"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"disabilityExposureHazMat")),Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"disability-benefits/conditions/exposure-to-hazardous-materials/*.md"),Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"disabilityAgentOrange"))),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"disabilityAgentOrange")),Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"disability-benefits/conditions/exposure-to-hazardous-materials/agent-orange/*.md"),Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"–")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"education")),Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"education/*.md"),Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"educationGIBill"))),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.mdx)("inlineCode",{parentName:"td"},"educationGIBill")),Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"education/gi-bill/*.md"),Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"–")))))}m.isMDXComponent=!0},"1nT/":function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/telephone/","context":{"source":"component","name":"Telephone"}}}]}}}')},"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var o=t("q1tI"),a=t.n(o),c=t("8FPV"),r=t("1nT/"),i=t("Wbzz");function s(){return a.a.createElement(i.StaticQuery,{query:"4277382034",render:function(e){return a.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:r})}function m(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(i.Link,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(m,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(m,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(s,null)):a.a.createElement(m,{item:e,key:e.name})}))):null}var d=t("MEl4"),p=t.n(d);function u(e){var n=e.location,t=p.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(l,{items:t.items}))):null}var b=t("Z/Vb");function h(e){var n=e.componentToMatch;return a.a.createElement(i.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return n===e.node.context.name.toLowerCase()?a.a.createElement(g,{item:{name:e.node.context.name}}):""}))},data:b})}function g(e){var n=e.item,t="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+n.name+"/"+n.name+".mdx";return a.a.createElement(i.Link,{to:t},"Edit this page on GitHub")}function x(e){var n=e.pathname.split("/");return a.a.createElement(h,{componentToMatch:n[3]})}function O(e){var n=e.location,t="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+n.pathname+function(e){var n=p.a.sections.find((function(n){return e.pathname.includes(n.href)})),t=p.a.sections.find((function(n){return n.href===e.pathname}));if(null==t?void 0:t.indexmdx)return"/index";if((null==n?void 0:n.items)&&n.items.map((function(n){return Array.isArray(n.items)?n.items.find((function(n){return n.href===e.pathname})):null})).map((function(n){if((null==n?void 0:n.href)&&n.href===e.pathname)return!!(null==n?void 0:n.indexmdx)})).find((function(e){return e})))return"/index";return""}(n)+".mdx";return a.a.createElement(i.Link,{to:t},"Edit this page on GitHub")}function v(e){var n=e.location;return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("br",null),a.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){return e.pathname.includes("components")?a.a.createElement(x,{pathname:e.pathname}):a.a.createElement(O,{location:e})}(n)))}function j(e){var n=e.children,t=e.location;return a.a.createElement(c.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(u,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n,a.a.createElement(v,{location:t}))))}},"Z/Vb":function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/telephone/","context":{"source":"component","name":"Telephone"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-static-site-collections-mdx-4d3aa960d82c31939b47.js.map