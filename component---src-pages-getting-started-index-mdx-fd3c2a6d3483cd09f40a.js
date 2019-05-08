(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{304:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return g}),a.d(n,"_frontmatter",function(){return d});a(42);var t=a(43),o=a.n(t),m=a(3),r=a.n(m),c=a(2),s=a.n(c),l=a(4),p=a(343),i={},g=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=p.a,a}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return s.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,a),components:n},s.a.createElement("h1",{id:"set-up-vagov-locally"},"Set up VA.gov locally"),s.a.createElement(l.MDXTag,{name:"p",components:n},"These instructions cover the installation of dependencies needed for running VA.gov locally."),s.a.createElement(l.MDXTag,{name:"ul",components:n},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"Node setup")," - steps for installing ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"node")," which is needed for building, testing, and running the local development server"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"Get the source code")," - steps for cloning the various repos needed to run VA.gov"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"Start up the front end")," - installing and running VA.gov locally"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"Backend and local tools setup")," - links to other setup instructions for running ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-api")," and retrieving static content")),s.a.createElement("h2",{id:"prerequisites"},"Prerequisites"),s.a.createElement(l.MDXTag,{name:"ul",components:n},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://brew.sh/"}},"homebrew")," is recommended for for installing ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nvm")," but other installation approaches are on ",s.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/creationix/nvm#installation-and-update"}},"nvm Github page"))),s.a.createElement("h2",{id:"node-setup"},"Node setup"),s.a.createElement(l.MDXTag,{name:"ol",components:n},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"Install ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nvm"),":")),s.a.createElement(l.MDXTag,{name:"pre",components:n},s.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"brew update && brew install nvm\n")),s.a.createElement(l.MDXTag,{name:"p",components:n},s.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"Follow the post install instructions in the success message.")),s.a.createElement(l.MDXTag,{name:"ol",components:n,props:{start:2}},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"Install ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"node 8.10.0")," (this also installs ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"npm"),"):")),s.a.createElement(l.MDXTag,{name:"pre",components:n},s.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"nvm install 8.10.0\n")),s.a.createElement(l.MDXTag,{name:"ol",components:n,props:{start:3}},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"Configure ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nvm")," to use ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"node 8.10.0")," by default:")),s.a.createElement(l.MDXTag,{name:"pre",components:n},s.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"nvm alias default 8.10.0\n")),s.a.createElement(l.MDXTag,{name:"ol",components:n,props:{start:4}},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"Install ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn 1.12.3")," globally:")),s.a.createElement(l.MDXTag,{name:"pre",components:n},s.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npm i -g yarn@1.12.3\n")),s.a.createElement(l.MDXTag,{name:"ol",components:n,props:{start:5}},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"Verify correct versions of ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"node")," and ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn")," are installed:")),s.a.createElement(l.MDXTag,{name:"pre",components:n},s.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"node --version # 8.10.0\nyarn --version # 1.12.3\n")),s.a.createElement("h2",{id:"get-the-source-code"},"Get the source code"),s.a.createElement(l.MDXTag,{name:"ol",components:n,props:{start:6}},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"Clone VA.gov git repos ",s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"as sibling directories"),":")),s.a.createElement(l.MDXTag,{name:"pre",components:n},s.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"git clone git@github.com:department-of-veterans-affairs/vets-website.git\ngit clone git@github.com:department-of-veterans-affairs/vagov-content.git\ngit clone git@github.com:department-of-veterans-affairs/vets-json-schema.git\ngit clone git@github.com:department-of-veterans-affairs/veteran-facing-services-tools.git\ngit clone git@github.com:department-of-veterans-affairs/vets-api.git\ngit clone git@github.com:department-of-veterans-affairs/vets-api-mockdata.git\n")),s.a.createElement(l.MDXTag,{name:"p",components:n},s.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"Front end repos")),s.a.createElement(l.MDXTag,{name:"ul",components:n},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"vets-website"),": Core front end platform and application code"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"vagov-content"),": Markdown content used to generate static pages"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"veteran-facing-services-tools"),": Shared front end components (including non VA.gov users) and front end documentation site")),s.a.createElement(l.MDXTag,{name:"p",components:n},s.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"Back end repos")),s.a.createElement(l.MDXTag,{name:"ul",components:n},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"vets-api"),": Core Rails API server application code"),s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"vets-api-mockdata"),": Mock data used when running locally and on dev for the backend")),s.a.createElement(l.MDXTag,{name:"p",components:n},s.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"Shared repos")),s.a.createElement(l.MDXTag,{name:"ul",components:n},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"vets-json-schema"),": Shared JSON Schema definitions used by form applications and the APIs that they consume")),s.a.createElement("h2",{id:"start-up-the-front-end"},"Start up the front end"),s.a.createElement(l.MDXTag,{name:"ol",components:n,props:{start:7}},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"Install ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-website")," dependencies")),s.a.createElement(l.MDXTag,{name:"pre",components:n},s.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"yarn install\n")),s.a.createElement(l.MDXTag,{name:"ol",components:n,props:{start:8}},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"Start the local development server")),s.a.createElement(l.MDXTag,{name:"pre",components:n},s.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"yarn watch\n")),s.a.createElement(l.MDXTag,{name:"p",components:n},s.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"Build is complete when the CLI says")," ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Compiled successfully")),s.a.createElement(l.MDXTag,{name:"ol",components:n,props:{start:9}},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"Open ",s.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://localhost:3001"}},"http://localhost:3001")," in a browser")),s.a.createElement("h2",{id:"backend-and-internal-tools-set-up"},"Backend and internal tools set up"),s.a.createElement(l.MDXTag,{name:"p",components:n},"Setting up the backend and internal tools allows local test account login and static content rendering."),s.a.createElement(l.MDXTag,{name:"ul",components:n},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"Backend set up")," instructions: ",s.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-api"}},"vets-api"),".")),s.a.createElement(l.MDXTag,{name:"p",components:n},s.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"Follow the Docker instructions, which are in the README for the ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"vets-api")," repo.")),s.a.createElement(l.MDXTag,{name:"ul",components:n},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"Local test account login")," instructions: ",s.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Accessing-Staging.md"}},"Accessing Staging"))),s.a.createElement(l.MDXTag,{name:"ul",components:n},s.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"Internal tools setup")," instructions: ",s.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"internal-tools"}},"Accessing internal tools"),".")),s.a.createElement(l.MDXTag,{name:"p",components:n},s.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"This proxy setup is required to access static content locally and to access to our reporting and monitoring tools. Running the watch task with the SOCK proxy active will automatically pull and cache the static content for ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"vets-website"))))},n}(s.a.Component),d={}},342:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},343:function(e,n,a){"use strict";var t=a(2),o=a.n(t),m=a(13),r=a.n(m),c=a(345),s=(a(133),a(134),a(135),a(17),a(342)),l=a(344);function p(){return o.a.createElement(l.b,{query:"157057713",render:function(e){return o.a.createElement(i,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function i(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(l.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var g=a(346),d=a.n(g);function u(e){var n=e.location,a=d.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(i,{items:a.items}))):null}function h(e){var n=e.children,a=e.location;return o.a.createElement(c.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(u,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return h}),h.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-index-mdx-fd3c2a6d3483cd09f40a.js.map