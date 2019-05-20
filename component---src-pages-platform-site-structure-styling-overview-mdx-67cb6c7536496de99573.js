(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{337:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return u});a(42);var t=a(43),o=a.n(t),s=a(3),m=a.n(s),r=a(2),i=a.n(r),c=a(4),l=a(347),p={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=l.a,a}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},i.a.createElement("h1",{id:"css-general-info"},"CSS General Info"),i.a.createElement("h2",{id:"background"},"Background"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Written in ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://sass-lang.com/"}},"Sass")," using the ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html"}},"SCSS")," syntax",i.a.createElement(c.MDXTag,{name:"blockquote",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"p",components:n,parentName:"blockquote"},"There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. In addition, SCSS understands most CSS hacks and vendor-specific syntax, such as IE's old filter syntax. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension."))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Files resides in ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/sass"}},"src/sass")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Frameworks and libraries include:",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://designsystem.digital.gov/"}},"U.S. Web Design System (USWDS)"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/uswds/uswds"}},"GitHub Repo")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://foundation.zurb.com/sites/docs/v/5.5.3/"}},"Foundation"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Included only partially, for grid and responsive utilities"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Using Foundation classes should be avoided as we plan to remove it eventually."))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://fontawesome.io/"}},"Font Awesome")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Compiled to CSS using Webpack")),i.a.createElement("h2",{id:"directory-structure"},"Directory structure"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"root/"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Site-wide style is defined in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"style.scss"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Includes global imports, such as our frameworks and libraries"))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Temporary style lives in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_shame.scss")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Other files at the root-level are considered page-specific"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"base/"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Contains site-wide styles and overrides that will be imported into ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"style.scss"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_b-variables.scss")," - site-wide colors and units, many of which are from USWDS."),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_va.scss")," - Site-wide style declarations for global components/elements"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_b-breakpoints.scss")," - This is used to reconcile naming conflicts and differing responsive breakpoints between USWDS and Foundation."))))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"modules/"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Contains site-wide styles for individual components that are generally reusable across the website."))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Other folders",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Generally used only for specific applications/pages of the website that are organized in a directory rather than a single file.")))))),i.a.createElement("h1",{id:"webpackcompilation"},"Webpack/Compilation"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Sass is configured and compiled into CSS via Webpack",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Configuration at ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"config/webpack.config.js")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Website is broken into a series of entry files, one of which is the site-wide file, ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"style.scss"),", while the rest are entry points for applications defined as ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"JSX")," files."),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Site-wide style is compiled into ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/generated/style.css"),", which is linked to in the header of the website and therefore available on all pages."),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"An import statement within a JavaScript file is used to include style for a specific application. You should also define your application's entry point in the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"entryPoint")," map of the Webpack configuration, so that your application's code and style are not included in every page. The key you use to define your application's entry point in that map will also be used as the file name for the generated JavaScript as well as CSS. Files in the content directory can then define an ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"entryname")," property to link to those files.")),i.a.createElement("h2",{id:"example-application"},"Example Application"),i.a.createElement("h5",{id:"configwebpackconfigjs"},"config/webpack.config.js"),i.a.createElement(c.MDXTag,{name:"pre",components:n},i.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const entryFiles = {\n  // ...\n  'my-application': './src/applications/my-application/entry.jsx'\n  // ...\n")),i.a.createElement("h5",{id:"contentsomewheresome-applicationmd"},"content/somewhere/some-application.md"),i.a.createElement(c.MDXTag,{name:"pre",components:n},i.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},'---\ntitle: My Application\nlayout: page-react.html\nentryname: my-application\n---\n<p> Some content</p>\n<div id="react-entry"></div>\n')),i.a.createElement("h5",{id:"srcapplicationsmy-applicationentryjsx"},"src/applications/my-application/entry.jsx"),i.a.createElement(c.MDXTag,{name:"pre",components:n},i.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// Our Webpack configuration will use the file extension to determine how to handle that import, which in our case is to compile it into a CSS file.\nimport '../../sass/my-application.scss';\n")),i.a.createElement("h2",{id:"static-assets"},"Static Assets"),i.a.createElement(c.MDXTag,{name:"p",components:n},"The ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"root/assets/")," directory is used for storing images, fonts, and other files you may want to have reside outside of the Webpack build system. During build time, the contents of that directory will be moved as-is to the build output, so ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"root/assets/js/something.js")," will be moved to ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"root/build/development/js/something.js"),", which means it can be linked to in the website with ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/js/something.js"),"."),i.a.createElement("h1",{id:"roadmap-ahead"},"Roadmap Ahead"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Keep up-to-date with USWDS",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://designsystem.digital.gov/whats-new/"}},"What's New")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Foundation needs to go entirely. We should opt for the USWDS grid system or Flexbox instead."),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Reduce the shame file")))},n}(i.a.Component),u={}},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,n,a){"use strict";var t=a(2),o=a.n(t),s=a(13),m=a.n(s),r=a(350),i=(a(133),a(134),a(135),a(17),a(346)),c=a(348);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var u=a(349),g=a.n(u);function h(e){var n=e.location,a=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:a.items}))):null}function E(e){var n=e.children,a=e.location;return o.a.createElement(r.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return E}),E.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-styling-overview-mdx-67cb6c7536496de99573.js.map