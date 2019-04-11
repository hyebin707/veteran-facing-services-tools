(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{279:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),r=n(3),m=n.n(r),s=n(2),c=n.n(s),i=n(4),l=n(335),p={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},c.a.createElement(i.MDXTag,{name:"h1",components:t},"Building forms"),c.a.createElement(i.MDXTag,{name:"table",components:t},c.a.createElement(i.MDXTag,{name:"thead",components:t,parentName:"table"},c.a.createElement(i.MDXTag,{name:"tr",components:t,parentName:"thead"},c.a.createElement(i.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),c.a.createElement(i.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),c.a.createElement(i.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),c.a.createElement(i.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}))),c.a.createElement(i.MDXTag,{name:"tbody",components:t,parentName:"table"},c.a.createElement(i.MDXTag,{name:"tr",components:t,parentName:"tbody"},c.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"td"},"Decision Made:")),c.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),c.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"td"},"Decision Date:")),c.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"01/2017")),c.a.createElement(i.MDXTag,{name:"tr",components:t,parentName:"tbody"},c.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Decision:")),c.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),c.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Date:")),c.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"December 2017")))),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Revisit Criteria:")," As of 9/2017, all our forms are using RJSF. We should regroup and take a look at how it's going a few months after that."),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Decision Makers:")," @annekainicUSDS @jbalboni @ayaleloehr @aub"),c.a.createElement(i.MDXTag,{name:"hr",components:t}),c.a.createElement(i.MDXTag,{name:"h2",components:t},"tl;dr"),c.a.createElement(i.MDXTag,{name:"p",components:t},"When bringing lengthy paper forms to Vets.gov, we use react-jsonschema-form and the common code we've built on top of it."),c.a.createElement(i.MDXTag,{name:"p",components:t},"A longer form ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://medium.com/the-u-s-digital-service/building-forms-faster-on-vets-gov-d8619f4e9db"}},"article on this decision")," can be found on the USDS Medium. The information below is meant to be a distilled version."),c.a.createElement(i.MDXTag,{name:"h2",components:t},"History"),c.a.createElement(i.MDXTag,{name:"p",components:t},"We built two forms (10-10EZ and 22-1990) with a basic React/Redux approach. The 10-10EZ (HCA) took 5 months and the 1990 took 2 months. We also had numerous production bugs to fix around validation and incorrectly formatted data. Based on those two forms, we thought we had a stable set of patterns for long forms and could make better use of shared code to make development faster and more reliable. We evaluated a few different form libraries for React and settled on ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form"}},"react-json-schemaform")," (RJSF). We used that to build the 22-1995 form. We found that building the 1995 with RJSF was a big improvement and have been building forms with RJSF since then."),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Pros"),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Almost all form specific information is in a single configuration file, and has less boilerplate than building forms with React components"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"There's very little form-specific React code. Most form specific code are files that export configuration information, which is easy to modify and overwrite when necessary"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Forms are built using a JSON Schema file as a base and the backend uses the same file to validate submissions. So we're less likely to have schema errors than previously"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Building the config files is generally faster than building React components for each form")),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Cons"),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"The application code for each form is very centralized, which makes it hard to use code splitting"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Overall form bundle size is still a little big (but generally smaller than before)"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Form-specific customizations that fall outside our expected patterns are more difficult to implement"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Handling different variations on our patterns means adding options to the config file, which can add noise to the form config files"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"The shared code built on top of RJSF is complicated")),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Example of an alternative approach"),c.a.createElement(i.MDXTag,{name:"p",components:t},"There are other React form libraries, most of which have you still building forms with React components (",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"redux-form.com"}},"redux-form"),", ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://react-form.js.org/#/story/readme-documentation"}},"react-form"),"). We could have gone with one of those, and put more effort into building reusable components, but we didn't feel like we would make as big of an improvement as with config file based approaches."),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Decision"),c.a.createElement(i.MDXTag,{name:"p",components:t},"Long paper forms on Vets.gov will use RJSF and the shared code built on top of it."))},t}(c.a.Component),u={}},330:function(e,t,n){var a;e.exports=(a=n(332))&&a.default||a},331:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},332:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),s=n(13),c=n.n(s),i=n(94),l=n(9),p=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(i.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},333:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},334:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"},{name:"Releases",href:"getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"getting-started/common-tasks/reviewing-feature-branches"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Redux standards",href:"architecture/front-end-standards/redux"},{name:"Styles",href:"architecture/front-end-standards/styles"},{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Accessibility",href:"architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},335:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(331),m=n(2),s=n.n(m),c=n(13),i=n.n(c),l=n(336),p=n.n(l),d=n(68),u=n.n(d),h=(n(330),s.a.createContext({})),f=function(e){return s.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};n(17),n(133),n(134),n(135);var g=n(333);function b(){return s.a.createElement(f,{query:"157057713",render:function(e){return s.a.createElement(E,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:g})}function E(e){var t=e.items;return t.length?s.a.createElement("ul",{className:"menu-list"},t.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(E,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(b,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var v=n(334),D=n.n(v);function T(e){var t=e.location,n=D.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,n.name),s.a.createElement(u.a,{className:"home-link",to:""},"Home"),s.a.createElement(E,{items:n.items})),!n&&s.a.createElement("ul",{className:"menu-list"},D.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(u.a,{to:e.href},e.name))})))}n(337);var w=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return s.a.createElement(f,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(T,{location:n}),s.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(s.a.Component);w.propTypes={children:i.a.node.isRequired};t.a=w}}]);
//# sourceMappingURL=component---src-pages-architecture-front-end-standards-documented-decisions-building-forms-mdx-a6a5f00d40c29bb3b405.js.map