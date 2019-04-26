(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{300:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d}),t.d(a,"_frontmatter",function(){return u});t(42);var n=t(43),o=t.n(n),r=t(3),s=t.n(r),i=t(2),m=t.n(i),c=t(4),l=t(337),p={},d=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=l.a,t}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:a},m.a.createElement(c.MDXTag,{name:"h1",components:a},"CSS General Info"),m.a.createElement(c.MDXTag,{name:"h2",components:a},"Background"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Written in ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://sass-lang.com/"}},"Sass")," using the ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html"}},"SCSS")," syntax",m.a.createElement(c.MDXTag,{name:"blockquote",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"blockquote"},"There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. In addition, SCSS understands most CSS hacks and vendor-specific syntax, such as IE's old filter syntax. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension."))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Files resides in ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/sass"}},"src/sass")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Frameworks and libraries include:",m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://designsystem.digital.gov/"}},"U.S. Web Design System (USWDS)"),m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/uswds/uswds"}},"GitHub Repo")))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://foundation.zurb.com/sites/docs/v/5.5.3/"}},"Foundation"),m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Included only partially, for grid and responsive utilities"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Using Foundation classes should be avoided as we plan to remove it eventually."))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://fontawesome.io/"}},"Font Awesome")))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Compiled to CSS using Webpack")),m.a.createElement(c.MDXTag,{name:"h2",components:a},"Directory structure"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"root/"),m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Site-wide style is defined in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"style.scss"),m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Includes global imports, such as our frameworks and libraries"))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Temporary style lives in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"_shame.scss")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Other files at the root-level are considered page-specific"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"base/"),m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Contains site-wide styles and overrides that will be imported into ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"style.scss"),m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"_b-variables.scss")," - site-wide colors and units, many of which are from USWDS."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"_va.scss")," - Site-wide style declarations for global components/elements"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"_b-breakpoints.scss")," - This is used to reconcile naming conflicts and differing responsive breakpoints between USWDS and Foundation."))))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"modules/"),m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Contains site-wide styles for individual components that are generally reusable across the website."))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Other folders",m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Generally used only for specific applications/pages of the website that are organized in a directory rather than a single file.")))))),m.a.createElement(c.MDXTag,{name:"h1",components:a},"Webpack/Compilation"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Sass is configured and compiled into CSS via Webpack",m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Configuration at ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"config/webpack.config.js")))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Website is broken into a series of entry files, one of which is the site-wide file, ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"style.scss"),", while the rest are entry points for applications defined as ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"JSX")," files."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Site-wide style is compiled into ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"/generated/style.css"),", which is linked to in the header of the website and therefore available on all pages."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"An import statement within a JavaScript file is used to include style for a specific application. You should also define your application's entry point in the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"entryPoint")," map of the Webpack configuration, so that your application's code and style are not included in every page. The key you use to define your application's entry point in that map will also be used as the file name for the generated JavaScript as well as CSS. Files in the content directory can then define an ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"entryname")," property to link to those files.")),m.a.createElement(c.MDXTag,{name:"h2",components:a},"Example Application"),m.a.createElement(c.MDXTag,{name:"h5",components:a},"config/webpack.config.js"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"const entryFiles = {\n  // ...\n  'my-application': './src/applications/my-application/entry.jsx'\n  // ...\n")),m.a.createElement(c.MDXTag,{name:"h5",components:a},"content/somewhere/some-application.md"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-html"}},'---\ntitle: My Application\nlayout: page-react.html\nentryname: my-application\n---\n<p> Some content</p>\n<div id="react-entry"></div>\n')),m.a.createElement(c.MDXTag,{name:"h5",components:a},"src/applications/my-application/entry.jsx"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"// Our Webpack configuration will use the file extension to determine how to handle that import, which in our case is to compile it into a CSS file.\nimport '../../sass/my-application.scss';\n")),m.a.createElement(c.MDXTag,{name:"h2",components:a},"Static Assets"),m.a.createElement(c.MDXTag,{name:"p",components:a},"The ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"root/assets/")," directory is used for storing images, fonts, and other files you may want to have reside outside of the Webpack build system. During build time, the contents of that directory will be moved as-is to the build output, so ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"root/assets/js/something.js")," will be moved to ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"root/build/development/js/something.js"),", which means it can be linked to in the website with ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"/js/something.js"),"."),m.a.createElement(c.MDXTag,{name:"h1",components:a},"Roadmap Ahead"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Keep up-to-date with USWDS",m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://designsystem.digital.gov/whats-new/"}},"What's New")))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Foundation needs to go entirely. We should opt for the USWDS grid system or Flexbox instead."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Reduce the shame file")))},a}(m.a.Component),u={}},330:function(e,a,t){"use strict";t.d(a,"b",function(){return l});var n=t(2),o=t.n(n),r=t(13),s=t.n(r),i=t(68),m=t.n(i);t.d(a,"a",function(){return m.a});t(332);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},331:function(e,a){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"VA.gov environments",href:"architecture/site-structure/environments"},{name:"Bundles and code organization",href:"architecture/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Application generator",href:"/platform/generator"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},332:function(e,a,t){var n;e.exports=(n=t(334))&&n.default||n},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},334:function(e,a,t){"use strict";t.r(a);var n=t(18),o=t.n(n),r=t(2),s=t.n(r),i=t(13),m=t.n(i),c=t(94),l=t(9),p=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return t?s.a.createElement(c.a,o()({location:a,pageResources:t},t.json)):null};p.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},a.default=p},335:function(e,a,t){"use strict";var n=t(3),o=t.n(n),r=t(333),s=t(2),i=t.n(s),m=t(13),c=t.n(m),l=t(338),p=t.n(l),d=t(330),u=(t(17),t(133),t(134),t(331)),h=t.n(u),g=t(18),f=t.n(g),E=t(339),b=t.n(E),v=function(e){function a(a){var t;return(t=e.call(this,a)||this).state=h.a.sections.reduce(function(e,a){var t;return f()(((t={})[a.id]=!1,t),e)},{}),t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props,t=a.open,n=a.onClose,o=a.location;return i.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":t}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(a){return i.a.createElement("div",{key:a.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var t;return e.setState(((t={})[a.id]=!e.state[a.id],t))},"aria-expanded":e.state[a.id]?"true":"false","aria-controls":"nav-"+a.id},a.name)),i.a.createElement("div",{id:"nav-"+a.id,"aria-hidden":e.state[a.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===a.href}),to:a.href},"Overview")))))})))},a}(i.a.Component),y=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={navOpen:!1},t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(a.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(v,{location:a,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},a}(i.a.Component),N=(t(340),function(e){function a(){return e.apply(this,arguments)||this}o()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,a=e.children,t=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(y,{location:t}),a)},data:r})},a}(i.a.Component));N.propTypes={children:c.a.node.isRequired};a.a=N},336:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},337:function(e,a,t){"use strict";var n=t(2),o=t.n(n),r=t(13),s=t.n(r),i=t(335),m=(t(133),t(134),t(135),t(17),t(336)),c=t(330);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var a=e.items,t=e.isSublist,n=void 0!==t&&t;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=t(331),u=t.n(d);function h(e){var a=e.location,t=u.a.sections.find(function(e){return a.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:t.items}))):null}function g(e){var a=e.children,t=e.location;return o.a.createElement(i.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}t.d(a,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-architecture-site-structure-styling-overview-mdx-dfb3eec320a75da05120.js.map