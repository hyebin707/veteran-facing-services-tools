(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var a=t("q1tI"),o=t.n(a),r=t("8FPV"),s=(t("Z2Ku"),t("L9s1"),t("dRSK"),t("f3/d"),t("Yk4M")),m=t("Wbzz");function c(){return o.a.createElement(m.StaticQuery,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:s})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(m.Link,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function p(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(c,null)):o.a.createElement(i,{item:e,key:e.name})}))):null}var l=t("MEl4"),u=t.n(l);function d(e){var n=e.location,t=u.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return o.a.createElement(r.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(d,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}},JCEx:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c})),t.d(n,"_frontmatter",(function(){return i}));t("rGqo"),t("yt8O"),t("RW0V"),t("a1Th"),t("Btvt"),t("I5cv"),t("91GP");var a=t("q1tI"),o=t.n(a),r=t("6qfE"),s=t("3dLD");var m={},c=function(e){var n,t;t=e,(n=c).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var a;a=c;function c(n){var t;return(t=e.call(this,n)||this).layout=s.a,t}return c.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,t),components:n},o.a.createElement("h1",{id:"switching-to-jest"},"Switching to Jest"),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"td"},"Decision Made:")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"No, but open to revisiting"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"td"},"Decision Date:")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"12/2018")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"td"},"Revisit Decision:")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Yes"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"td"},"Revisit Date:")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"July 2019")))),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Revisit Criteria:")," If a developer is interested in Jest and has time or suggestions for fixing the speed issues, we should revisit this."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Decision Makers:")," @rianfowler @jbalboni"),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement("h2",{id:"tldr"},"tl;dr"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Jest is probably the most common testing framework in the React ecosystem and has some nice benefits, so we evaluated switching to it from our Mocha-based stack. However, we found that it made our tests twice as slow and were unable to address this in a reasonable amount of time."),o.a.createElement("h2",{id:"history"},"History"),o.a.createElement(r.MDXTag,{name:"p",components:n},"See ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12874"}},"#12874")," for the full history. A Jest RFC was started by Ryan McAuliffe and some exploratory work was done by him and Claire Hsu. The overall consensus of developers here was that Jest has some nice features and is typically faster than Mocha based tests, so it seemed like a good improvement for us. However, during our evaluation we found that our tests were significantly slower than our current approach. Rian Fowler did some further testing around this issue and was unable to resolve it."),o.a.createElement("h2",{id:"pros"},"Pros"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Jest is widely supported in the React community"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"It has easy to use extensions for aXe and snapshot testing that we could use"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"It supports parallelization, and makes better use of all resources available to it")),o.a.createElement("h2",{id:"cons"},"Cons"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"It's approximately ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12874#issuecomment-448280502"}},"2x slower than our current tests")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Some of the useful features (snapshots) could be adopted without switching to Jest")),o.a.createElement("h2",{id:"decision"},"Decision"),o.a.createElement(r.MDXTag,{name:"p",components:n},"We're putting the switch to Jest on hold for the time being. The slowdown is the primary reason for this, since the consensus otherwise was that Jest was an improvement. Any developer with time or ideas should feel free to attempt to address the performance issue and we will re-evaluate."))},c}(o.a.Component),i={}},Yk4M:function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-jest-mdx-eee25e3d41d0e418aa06.js.map