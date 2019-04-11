(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{316:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),r=a(3),s=a.n(r),i=a(2),c=a.n(i),m=a(4),l=a(335),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},c.a.createElement(m.MDXTag,{name:"h1",components:t},"Reviewing changes in feature branches"),c.a.createElement(m.MDXTag,{name:"p",components:t},"We often need want to deploy changes from a branch or pull request, so that we can do additional testing and verification outside of local machine testing. We currently have two different ways of accomplishing this."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"VA.gov visual/content review"),c.a.createElement(m.MDXTag,{name:"p",components:t},"If you're looking to test a front end change in a PR in vets-website, you can use a Heroku instance. Heroku instances are spun up for each PR; you'll see one linked in the PR with a url that looks something like ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://vetsgov-pr-5306.herokuapp.com"}},"https://vetsgov-pr-5306.herokuapp.com")," (first row):"),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/8fe5a2057c164ee23819e2887af73ccb/bcf2d/PR-deployment-list.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"740px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.297297297297295%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"PR deployment list",title:"",src:"/veteran-facing-services-tools/static/8fe5a2057c164ee23819e2887af73ccb/bcf2d/PR-deployment-list.png",srcSet:"/veteran-facing-services-tools/static/8fe5a2057c164ee23819e2887af73ccb/f4a45/PR-deployment-list.png 259w,\n/veteran-facing-services-tools/static/8fe5a2057c164ee23819e2887af73ccb/ef0f6/PR-deployment-list.png 518w,\n/veteran-facing-services-tools/static/8fe5a2057c164ee23819e2887af73ccb/bcf2d/PR-deployment-list.png 740w",sizes:"(max-width: 740px) 100vw, 740px"})))),c.a.createElement(m.MDXTag,{name:"p",components:t},"These instances are public, but they only build the website part of VA.gov, not any of the React apps. They are also not connected to an API backend."),c.a.createElement(m.MDXTag,{name:"p",components:t},"Heroku instances are best used to review content or visual changes that affect static content on VA.gov, especially if those changes need to be viewed by external stakeholders."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Full application reviews"),c.a.createElement(m.MDXTag,{name:"p",components:t},"If you need to test a service or application on VA.gov, or a backend change, review instances are the best option. Review instances are a deployment of a combination of vets-api and vets-website at specified versions."),c.a.createElement(m.MDXTag,{name:"p",components:t},"Internal review instances are built by Jenkins (these have a url like ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://71aaf141c9283eb0f29ded3b967a118c.review.vetsgov-internal"}},"http://71aaf141c9283eb0f29ded3b967a118c.review.vetsgov-internal"),") and are connected to an API backend (second row):"),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/8fe5a2057c164ee23819e2887af73ccb/bcf2d/PR-deployment-list.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"740px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.297297297297295%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"PR deployment list",title:"",src:"/veteran-facing-services-tools/static/8fe5a2057c164ee23819e2887af73ccb/bcf2d/PR-deployment-list.png",srcSet:"/veteran-facing-services-tools/static/8fe5a2057c164ee23819e2887af73ccb/f4a45/PR-deployment-list.png 259w,\n/veteran-facing-services-tools/static/8fe5a2057c164ee23819e2887af73ccb/ef0f6/PR-deployment-list.png 518w,\n/veteran-facing-services-tools/static/8fe5a2057c164ee23819e2887af73ccb/bcf2d/PR-deployment-list.png 740w",sizes:"(max-width: 740px) 100vw, 740px"})))),c.a.createElement(m.MDXTag,{name:"p",components:t},"These require access to the ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Internal%20Tools.md"}},"SOCKS proxy")," so can not be review by external stakeholders."),c.a.createElement(m.MDXTag,{name:"p",components:t},"Review instances are created as part of a pull request for the vets-api or vets-website github repositories, but they can also be created manually by running a Jenkins job."),c.a.createElement(m.MDXTag,{name:"h3",components:t},"Automatic Creation"),c.a.createElement(m.MDXTag,{name:"p",components:t},'The Jenkinsfiles in vets-website and vets-api define a stage that triggers a review instance deployment. Opening a PR will trigger the CI process, which will generate a "GitHub Deployment" for the PR. A message on the PR will provide a link to the review instance.'),c.a.createElement(m.MDXTag,{name:"p",components:t},"You will need your browser configured to access the vetsgov-internal domain via the SOCKS proxy. Please see the ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"./Internal%20Tools.md"}},"Internal Tools")," documentation for detailed instructions."),c.a.createElement(m.MDXTag,{name:"h3",components:t},"Manual Creation"),c.a.createElement(m.MDXTag,{name:"ol",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Visit ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/vets-review-instance-deploy/"}},"http://jenkins.vetsgov-internal/job/vets-review-instance-deploy/")," and log in."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},'Select "Build with Parameters"'),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Specify the branch names for ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"api_branch")," and ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"web_branch"),". These branches will be deployed together with the review instance."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"When the process is completed, the URL for the review instance will be provided at the end of the output logs.")),c.a.createElement(m.MDXTag,{name:"h3",components:t},"Cleanup"),c.a.createElement(m.MDXTag,{name:"p",components:t},"A Jenkins job will run periodically and remove review instances for which the source branches no longer exist. To ensure that your instance is cleaned up appropriately, just delete the branch from the origin repository."),c.a.createElement(m.MDXTag,{name:"h3",components:t},"User Authentication"),c.a.createElement(m.MDXTag,{name:"p",components:t},"ID.me SAML configuration requires explicitly defining a callback URL via a manual process. This callback URL receives authentication information after a successful authentication process. The review instance requires a special nginx configuration that intercepts the callback to the dev-api.vets.gov server, and forwards the authentication information to the appropriate review instance (mapped by the ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"RelayState")," parameter, which is provided to the review instance vets-api config with the ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"REVIEW_INSTANCE_SLUG")," environment variable)."),c.a.createElement(m.MDXTag,{name:"p",components:t},"For implementation specific details, see the ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/roles/revproxy-configure/templates/nginx_revproxy.conf"}},"revproxy nginx configuration"),". The following sequence diagram presents an overview of this process:"),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/217f1b28a33e347556834f4d9882cf7a/6d23f/2017-02-07-review-instance-authentication-sequence.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1035px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.28971962616822%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Authentication Sequence",title:"",src:"/veteran-facing-services-tools/static/217f1b28a33e347556834f4d9882cf7a/17fa4/2017-02-07-review-instance-authentication-sequence.png",srcSet:"/veteran-facing-services-tools/static/217f1b28a33e347556834f4d9882cf7a/f4a45/2017-02-07-review-instance-authentication-sequence.png 259w,\n/veteran-facing-services-tools/static/217f1b28a33e347556834f4d9882cf7a/ef0f6/2017-02-07-review-instance-authentication-sequence.png 518w,\n/veteran-facing-services-tools/static/217f1b28a33e347556834f4d9882cf7a/17fa4/2017-02-07-review-instance-authentication-sequence.png 1035w,\n/veteran-facing-services-tools/static/217f1b28a33e347556834f4d9882cf7a/6d23f/2017-02-07-review-instance-authentication-sequence.png 1284w",sizes:"(max-width: 1035px) 100vw, 1035px"})))))},t}(c.a.Component),u={}},330:function(e,t,a){var n;e.exports=(n=a(332))&&n.default||n},331:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},332:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),s=a.n(r),i=a(13),c=a.n(i),m=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(m.a,o()({location:t,pageResources:a},a.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},333:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},334:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"},{name:"Releases",href:"getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"getting-started/common-tasks/reviewing-feature-branches"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Redux standards",href:"architecture/front-end-standards/redux"},{name:"Styles",href:"architecture/front-end-standards/styles"},{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Accessibility",href:"architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},335:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(331),s=a(2),i=a.n(s),c=a(13),m=a.n(c),l=a(336),p=a.n(l),d=a(68),u=a.n(d),g=(a(330),i.a.createContext({})),f=function(e){return i.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};f.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func};a(17),a(133),a(134),a(135);var h=a(333);function v(){return i.a.createElement(f,{query:"157057713",render:function(e){return i.a.createElement(b,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:h})}function b(e){var t=e.items;return t.length?i.a.createElement("ul",{className:"menu-list"},t.map(function(e){return i.a.createElement("li",{key:e.name},!!e.items&&i.a.createElement("li",{key:e.name},i.a.createElement("h4",null,e.name),i.a.createElement(b,{items:e.items})),"componentList"===e.query&&i.a.createElement("li",{key:e.name},i.a.createElement("h4",null,e.name),i.a.createElement(v,null)),!!e.href&&i.a.createElement("li",{key:e.name},i.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&i.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var y=a(334),w=a.n(y);function x(e){var t=e.location,a=w.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return i.a.createElement("aside",{className:"sidebar"},i.a.createElement("div",{className:"search"},i.a.createElement("div",{className:"input-wrap"},i.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!a&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,a.name),i.a.createElement(u.a,{className:"home-link",to:""},"Home"),i.a.createElement(b,{items:a.items})),!a&&i.a.createElement("ul",{className:"menu-list"},w.a.sections.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(u.a,{to:e.href},e.name))})))}a(337);var E=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return i.a.createElement(f,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(x,{location:a}),i.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(i.a.Component);E.propTypes={children:m.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-reviewing-feature-branches-mdx-f97580f2b078cbe6daf6.js.map