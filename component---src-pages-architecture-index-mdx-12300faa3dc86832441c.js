(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{295:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"_frontmatter",function(){return d});n(43);var o=n(44),a=n.n(o),r=n(3),m=n.n(r),c=n(2),s=n.n(c),i=n(4),l=n(316),p={},u=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=a()(e,["components"]);return s.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},s.a.createElement(i.MDXTag,{name:"p",components:t},"Here's where documenation abaout site architecture lives."))},t}(s.a.Component),d={}},313:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},314:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}}]}}}},315:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"How to Add Documents",href:"getting-started/how-to"},{name:"How to Add Pages from Github",href:"getting-started/add-external-pages"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},316:function(e,t,n){"use strict";var o=n(3),a=n.n(o),r=n(313),m=n(2),c=n.n(m),s=n(8),i=n.n(s),l=n(96),p=n.n(l),u=n(95),d=(n(18),n(138),n(139),n(140),n(314));function f(){return c.a.createElement(u.b,{query:"2758471434",render:function(e){return c.a.createElement(h,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:d})}function h(e){var t=e.items;return t.length?c.a.createElement("ul",{className:"menu-list"},t.map(function(e){return c.a.createElement("li",{key:e.name},!!e.items&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(h,{items:e.items})),"componentList"===e.query&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(f,null)),!!e.href&&c.a.createElement("li",{key:e.name},c.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&c.a.createElement("li",{key:e.href},c.a.createElement(u.a,{to:e.href},e.name)))})):null}var g=n(315),b=n.n(g);function x(e){var t=e.location,n=b.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return c.a.createElement("aside",{className:"sidebar"},c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"input-wrap"},c.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,n.name),c.a.createElement(u.a,{className:"home-link",to:""},"Home"),c.a.createElement(h,{items:n.items})),!n&&c.a.createElement("ul",{className:"menu-list"},b.a.sections.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(u.a,{to:e.href},e.name))})))}n(317);var E=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return c.a.createElement(u.b,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(x,{location:n}),c.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(c.a.Component);E.propTypes={children:i.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-architecture-index-mdx-12300faa3dc86832441c.js.map