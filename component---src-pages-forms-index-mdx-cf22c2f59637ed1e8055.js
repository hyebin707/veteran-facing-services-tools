(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var o=t("q1tI"),a=t.n(o),r=t("8FPV"),s=(t("Z2Ku"),t("L9s1"),t("dRSK"),t("f3/d"),t("Yk4M")),c=t("Wbzz");function m(){return a.a.createElement(c.StaticQuery,{query:"157057713",render:function(e){return a.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:s})}function i(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(c.Link,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(i,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(i,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(m,null)):a.a.createElement(i,{item:e,key:e.name})}))):null}var p=t("MEl4"),u=t.n(p);function d(e){var n=e.location,t=u.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(l,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return a.a.createElement(r.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(d,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}},"4Q/h":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m})),t.d(n,"_frontmatter",(function(){return i}));t("rGqo"),t("yt8O"),t("RW0V"),t("a1Th"),t("Btvt"),t("I5cv"),t("91GP");var o=t("q1tI"),a=t.n(o),r=t("6qfE"),s=t("3dLD");var c={},m=function(e){var n,t;t=e,(n=m).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var o;o=m;function m(n){var t;return(t=e.call(this,n)||this).layout=s.a,t}return m.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,t),components:n},a.a.createElement("h1",{id:"vagov-forms-system"},"VA.gov Forms System"),a.a.createElement(r.MDXTag,{name:"p",components:n},"The VA.gov Forms System (VAFS) provides a simple way to create a consistent experience for complex forms for Veterans. Applications created with this framework generally follow this flow:"),a.a.createElement("div",{className:"mermaid"},"graph LR\n    A(Introduction Page) --\x3e B(Form Pages Start)\n    B -. Form Pages .-> C(Review Page)\n    C -- Submission --\x3e D(Confirmation Page)"),a.a.createElement(r.MDXTag,{name:"p",components:n},"VAFS consists of several different pieces:"),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Standardized ",a.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"inputs and field sets")," for common types of form data"),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},a.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Validation functions")," used for commonly collected types of data"),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"A standardized ",a.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"data flow")," within the application that triggers validation and updates conditionally displayed UI"),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Hooks for custom validation, hiding/showing fields, and writing custom fields and widgets"),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Save and restore form data using the VA.gov save in progress and prefill APIs")),a.a.createElement("h2",{id:"when-to-use-vafs"},"When to use VAFS"),a.a.createElement(r.MDXTag,{name:"p",components:n},"VAFS is best suited for forms that"),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"are long enough to be organized across multiple pages,"),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"have optionally captured or required fields, and"),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"require field level or multiple field validation.")),a.a.createElement(r.MDXTag,{name:"p",components:n},"VAFS shouldn't be used when"),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"the form is simple enough to fit on a single page, or"),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"when the user experience doesn't benefit from ",a.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"all")," of the steps documented in the above flow.")),a.a.createElement(r.MDXTag,{name:"p",components:n},"In these cases, it's recommended to either make simple single page form or to deploy a React app that doesn't use VAFS. We have form components available in the formation-react library, which can view ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/platform"}},"here"),"."))},m}(a.a.Component),i={}},Yk4M:function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-forms-index-mdx-cf22c2f59637ed1e8055.js.map