(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"3HE+":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m})),t.d(n,"_frontmatter",(function(){return p}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/");var o=t("q1tI"),a=t.n(o),r=t("6qfE"),s=t("3dLD");var c={},m=function(e){var n,t;function o(n){var t;return(t=e.call(this,n)||this).layout=s.a,t}return t=e,(n=o).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,o.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,t),components:n},a.a.createElement("h1",{id:"summary-of-documented-decisions"},"Summary of documented decisions"),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"May 2016 - ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/platform/front-end-standards/documented-decisions/language-and-tech-stack"}},"Why we build with Ruby, rails, React, and Metalsmith")),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"August 2016 - ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/platform/front-end-standards/documented-decisions/redux"}},"Why we use Redux")),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Fall 2016 - ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/platform/front-end-standards/documented-decisions/browser-support"}},"Browsers supported")),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"May 2017 - ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/platform/front-end-standards/documented-decisions/uswds-foundation"}},"Remove USWDS and Foundation grid")),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"January 2017 - ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/platform/front-end-standards/documented-decisions/building-forms"}},"Why we use react-jsonschema-form to build forms")),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Feb 2017 - ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/platform/front-end-standards/documented-decisions/SOCKS-proxy"}},"Why we use SOCKS proxy to connect to internal tools")),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"March 2018 - ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/platform/front-end-standards/documented-decisions/rjsf-fork"}},"Why we forked react-jsonschema-form")),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"November 2018 - ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/platform/front-end-standards/documented-decisions/teamsite-signin"}},"Why we omit the signin from Teamsite pages")),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"December 2018 - ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/platform/front-end-standards/documented-decisions/jest"}},"Why we use Mocha instead of Jest")),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"December 2019 - ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/platform/front-end-standards/documented-decisions/web-fonts"}},"Reducing site performance impact of web fonts"))))},o}(a.a.Component),p={}},"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var o=t("q1tI"),a=t.n(o),r=t("8FPV"),s=(t("gu/5"),t("eoYm"),t("v9g0"),t("pJf4"),t("Yk4M")),c=t("Wbzz");function m(){return a.a.createElement(c.StaticQuery,{query:"157057713",render:function(e){return a.a.createElement(i,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:s})}function p(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(c.Link,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function i(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(i,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(m,null)):a.a.createElement(p,{item:e,key:e.name})}))):null}var l=t("MEl4"),d=t.n(l);function u(e){var n=e.location,t=d.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(i,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return a.a.createElement(r.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(u,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}},Yk4M:function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-summary-mdx-1a51de73cd08b5d73d3f.js.map