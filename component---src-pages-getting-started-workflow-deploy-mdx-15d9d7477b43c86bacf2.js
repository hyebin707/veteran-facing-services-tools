(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{304:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d}),t.d(a,"_frontmatter",function(){return u});t(42);var n=t(43),o=t.n(n),r=t(3),s=t.n(r),m=t(2),i=t.n(m),c=t(4),l=t(345),p={},d=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=l.a,t}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:a},i.a.createElement("h1",{id:"deploy"},"Deploy"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Code goes through several steps to get to production. This document describes this process. It should also be noted that this is the same flow for both content and code changes."),i.a.createElement("h2",{id:"automated-deployment-schedule"},"Automated deployment schedule"),i.a.createElement(c.MDXTag,{name:"table",components:a},i.a.createElement(c.MDXTag,{name:"thead",components:a,parentName:"table"},i.a.createElement(c.MDXTag,{name:"tr",components:a,parentName:"thead"},i.a.createElement(c.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Application"),i.a.createElement(c.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Branch"),i.a.createElement(c.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Changes in by"),i.a.createElement(c.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Deployment Start"),i.a.createElement(c.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Release History"))),i.a.createElement(c.MDXTag,{name:"tbody",components:a,parentName:"table"},i.a.createElement(c.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"vets-website"),i.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"master"),i.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"2:00pm ET M-F"),i.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"3:00pm ET M-F"),i.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/releases"}},"https://github.com/department-of-veterans-affairs/vets-website/releases"))),i.a.createElement(c.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"vets-api"),i.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"master"),i.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"2:00pm ET M-F"),i.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"3:00pm ET M-F"),i.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets-api/releases"}},"https://github.com/department-of-veterans-affairs/vets-api/releases"))))),i.a.createElement("h2",{id:"overview"},"Overview"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Jenkins performs the following tasks after a pull request is merged into ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"master")),i.a.createElement(c.MDXTag,{name:"ol",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Build")," ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"master")," branch to create an deployment artifact (.tar file)"),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Deploy")," to development and staging using deployment artifact"),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://help.github.com/en/articles/creating-releases"}},"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name"),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Deploy")," to production using deployment artifact according to automated deployment schedule")),i.a.createElement(c.MDXTag,{name:"p",components:a},i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"A big assumption in this process is that the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"master")," should always be deployable. As such, the deployment to the staging environment is configured to happen automatically and can be used to see what something would look like in a production-like environment for any kind of manual testing/verification.")),i.a.createElement("h2",{id:"process-details"},"Process details"),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://help.github.com/en/articles/creating-releases"}},"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name")),i.a.createElement(c.MDXTag,{name:"p",components:a},"Every work day at the configured time a ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-automerge/"}},"Jenkins automerge job")," sends a link to the #vetsgov-engineers Slack channel with a diff between the last release and the most recent changes in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"master"),". This commit reference is stored to ensure the diff and released version is deterministic."),i.a.createElement(c.MDXTag,{name:"p",components:a},"After a time has elapsed ( currently set to 60m ) release is created at the reference from above."),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Deploy")," to production using deployment artifacts")),i.a.createElement(c.MDXTag,{name:"p",components:a},"From here, Jenkins can kickoff a production deployment. After the deployment occurs, the normal site monitoring infrastructure will be used to valide it is working. As this process is automatic any new features should have monitoring in place before, or as a part of their deployment"),i.a.createElement("h2",{id:"rollbacks"},"Rollbacks"),i.a.createElement(c.MDXTag,{name:"p",components:a},"If a production deployment introduces issues that affect Service Level Objectives (SLOs) established for the project, the DevOps team may restore service to users by rolling back the deployment. This is accomplished by triggering a new deploy job in Jenkins using a previous release tag."),i.a.createElement(c.MDXTag,{name:"p",components:a},"The ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"use of hotfixes is discouraged"),", but may be useful in an emergency situation when ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"master")," has significantly deviated from the release and a fix to the failed production release is critical. To create a hotfix, create a branch from the last stable release tag, make changes necessary (with review), create a new release tag following the correct naming scheme, and trigger a deploy in Jenkins with the release name as a parameter."),i.a.createElement(c.MDXTag,{name:"p",components:a},"If SLOs are not affected and a fix is not critical, no rollback will be issued. Instead the fix should be applied through the standard development workflow."),i.a.createElement("h2",{id:"manual-deployment"},"Manual deployment"),i.a.createElement(c.MDXTag,{name:"p",components:a},"Two out-of-cycle deploys are supported in Jenkins:"),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"partial deploy including only static page changes (",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vagov-content")," and ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Drupal"),")"),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"full deploy of VA.gov client app and static pages")),i.a.createElement("h3",{id:"before-deploying"},"Before deploying"),i.a.createElement(c.MDXTag,{name:"ul",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Wait for ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Jenkins")," to ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"build the change")," in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vets-website")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Builds status can be viewed ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=master"}},"here"),". ",i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"li"},"Requires SOCKS proxy. See ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"/veteran-facing-services-tools/getting-started/internal-tools"}},"Accessing internal tools"))),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"If this build fails, you may need to log into Jenkins and restart it")),i.a.createElement("h3",{id:"partial-deploy--static-page-changes-only"},"Partial deploy- static page changes only"),i.a.createElement(c.MDXTag,{name:"ol",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},"Start a deploy job"),i.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Log into Jenkins ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"here")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Click ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Build with Parameters")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Set the ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"release_wait")," option to ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"5")," minutes"),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Check ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"use_latest_release")," <-- ",i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"li"},"important")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Click ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Build")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Verify commits in ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"deployment notification"))),i.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"In Slack channel ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"em"},"#vetsgov-engineers"),", Jenkins will include a link that shows the exact commits being released in the ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"em"},"deploy notification"),"."))),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"Verify")," changes in ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"production")," once the build finishes"))),i.a.createElement("h3",{id:"full-deploy-of-vagov-client-app"},"Full deploy of VA.gov client app"),i.a.createElement(c.MDXTag,{name:"ol",components:a},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},"Verify that your changes are committed and that the changes since the last deploy are safe to deploy:",i.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Last deployment time"),": You can check the build ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"history")," for the time of the last deploy (usually daily at 2pm EST)"),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Commit history"),": ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/commits/master"}},"Look")," for commits after the last deploy and verify they're production ready.")))),i.a.createElement(c.MDXTag,{name:"p",components:a},i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"You may need to contact the developers of those commits to verify.")),i.a.createElement(c.MDXTag,{name:"ol",components:a,props:{start:2}},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},"Start a deploy job"),i.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Log into Jenkins ",i.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"here")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Click ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Build with Parameters")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Set the ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"release_wait")," option to ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"5")," minutes"),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Uncheck ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"use_latest_release")," <-- ",i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"li"},"important")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Click ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Build")),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Verify commits in ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"deployment notification"))),i.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},i.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},"In Slack channel ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"em"},"#vetsgov-engineers"),", Jenkins will include a link that shows the exact commits being released in the ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"em"},"deploy notification"),"."))),i.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"Verify")," changes in ",i.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"production")," once the build finishes"))))},a}(i.a.Component),u={}},338:function(e,a,t){"use strict";t.d(a,"b",function(){return l});var n=t(2),o=t.n(n),r=t(13),s=t.n(r),m=t(68),i=t.n(m);t.d(a,"a",function(){return i.a});t(340);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},339:function(e,a){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},340:function(e,a,t){var n;e.exports=(n=t(342))&&n.default||n},341:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},342:function(e,a,t){"use strict";t.r(a);var n=t(18),o=t.n(n),r=t(2),s=t.n(r),m=t(13),i=t.n(m),c=t(94),l=t(9),p=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return t?s.a.createElement(c.a,o()({location:a,pageResources:t},t.json)):null};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=p},343:function(e,a,t){"use strict";var n=t(3),o=t.n(n),r=t(341),s=t(2),m=t.n(s),i=t(13),c=t.n(i),l=t(346),p=t.n(l),d=t(338),u=(t(17),t(133),t(134),t(339)),g=t.n(u),h=t(18),f=t.n(h),v=t(347),E=t.n(v),b=function(e){function a(a){var t;return(t=e.call(this,a)||this).state=g.a.sections.reduce(function(e,a){var t;return f()(((t={})[a.id]=!1,t),e)},{}),t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props,t=a.open,n=a.onClose,o=a.location;return m.a.createElement("div",{className:E()("site-c-mobile-nav",{"is-visible":t}),id:"mobile-nav"},m.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},m.a.createElement("i",{className:"fas fa-times"})),m.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(a){return m.a.createElement("div",{key:a.id},m.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},m.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var t;return e.setState(((t={})[a.id]=!e.state[a.id],t))},"aria-expanded":e.state[a.id]?"true":"false","aria-controls":"nav-"+a.id},a.name)),m.a.createElement("div",{id:"nav-"+a.id,"aria-hidden":e.state[a.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},m.a.createElement("ul",{className:"site-c-mobile-nav-list"},m.a.createElement("li",{className:"site-c-mobile-nav-list__item"},m.a.createElement(d.a,{className:E()("site-c-mobile-nav-list__link",{current:o.pathname===a.href}),to:a.href},"Overview")))))})))},a}(m.a.Component),N=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={navOpen:!1},t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props.location;return m.a.createElement("div",null,m.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),m.a.createElement("header",{className:"site-c-header",role:"banner"},m.a.createElement("div",{className:"site-l-wrapper"},m.a.createElement("div",{className:"site-c-header__masthead"},m.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},m.a.createElement("em",{className:"site-c-header__logo-text"},m.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},m.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",m.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),m.a.createElement("div",{className:"site-c-header__utility-links"},m.a.createElement("div",{id:"search-container",className:"site-search-container"},m.a.createElement("i",{className:"fas fa-search search-icon"}),m.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),m.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},m.a.createElement("i",{className:"fas fa-search"})),m.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),m.a.createElement("nav",{className:"site-c-header__nav"},m.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return m.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},m.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(a.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),m.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},m.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),m.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&m.a.createElement("div",{className:"site-c-overlay is-visible"}),m.a.createElement(b,{location:a,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},a}(m.a.Component),T=(t(348),function(e){function a(){return e.apply(this,arguments)||this}o()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,a=e.children,t=e.location;return m.a.createElement(d.b,{query:"1044757290",render:function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},m.a.createElement("html",{lang:"en"})),m.a.createElement(N,{location:t}),a)},data:r})},a}(m.a.Component));T.propTypes={children:c.a.node.isRequired};a.a=T},344:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},345:function(e,a,t){"use strict";var n=t(2),o=t.n(n),r=t(13),s=t.n(r),m=t(343),i=(t(133),t(134),t(135),t(17),t(344)),c=t(338);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var a=e.items,t=e.isSublist,n=void 0!==t&&t;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=t(339),u=t.n(d);function g(e){var a=e.location,t=u.a.sections.find(function(e){return a.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:t.items}))):null}function h(e){var a=e.children,t=e.location;return o.a.createElement(m.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}t.d(a,"a",function(){return h}),h.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-deploy-mdx-15d9d7477b43c86bacf2.js.map