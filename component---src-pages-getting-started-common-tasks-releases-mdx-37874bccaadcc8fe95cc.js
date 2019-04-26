(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{318:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),r=a(3),s=a.n(r),m=a(2),i=a.n(m),c=a(4),l=a(337),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t},"Deployment Process"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Code goes through several steps to get to production. This document describes this process. It should also be noted that this is the same flow for both content and code changes."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Automated Deployment Schedule"),i.a.createElement(c.MDXTag,{name:"table",components:t},i.a.createElement(c.MDXTag,{name:"thead",components:t,parentName:"table"},i.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"thead"},i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Application"),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Branch"),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Changes in by"),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Deployment Start"),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Release History"))),i.a.createElement(c.MDXTag,{name:"tbody",components:t,parentName:"table"},i.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"vets-website"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"master"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"2:00pm ET M-F"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"3:00pm ET M-F"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/releases"}},"https://github.com/department-of-veterans-affairs/vets-website/releases"))),i.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"vets-api"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"master"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"2:00pm ET M-F"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"3:00pm ET M-F"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets-api/releases"}},"https://github.com/department-of-veterans-affairs/vets-api/releases"))))),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Summary"),i.a.createElement(c.MDXTag,{name:"p",components:t},"For feature and hotfix development (code changes and content changes), the process looks like:"),i.a.createElement(c.MDXTag,{name:"ol",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Dev/Content: Create feature branch from ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"master")," branch"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Dev/Content: Commit changes to feature branch"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Dev/Content: Feature branch merged to the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"master")," branch (via Pull Request)"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Automatic: Build run from ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"master")," branch to create an artifact"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Automatic: Deploy newly created artifact to dev and staging"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Automatic: Create a release in GitHub from master, tag artifacts of that commit sha with release name"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Automatic: Deploy to production using artifacts")),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Process Details"),i.a.createElement(c.MDXTag,{name:"p",components:t},"The first half of the steps of are:"),i.a.createElement(c.MDXTag,{name:"blockquote",components:t},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"1","."," Dev: Create feature branch from ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master")," branch"),i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"2","."," Dev: Commit changes to feature branch"),i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"3","."," Dev: Feature branch merged to the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master")," branch (via Pull Request)"),i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"4","."," Automatic: Build run from ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master")," branch to create an artifact"),i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"5","."," Automatic: Deploy newly created artifact to dev and staging")),i.a.createElement(c.MDXTag,{name:"p",components:t},"These steps follow the flow as described in the ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"Continuous%20Integration%20Process.md"}},"Continuous Integration Process"),". The parts that should be explicitly called out are that during the pull request phase (step 3), the following things happen:"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Code is reviewed"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"GitHub triggers Jenkins to run unit tests, linting, and security scans."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Committing and code reviewing developers are responsible for running automated ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"strong"},"and"))," manual integration tests locally before closing the pull request")),i.a.createElement(c.MDXTag,{name:"p",components:t},"All Vets.gov GitHub repos are setup to do squash merges (via the GitHub PR interface), leaving behind a clean revision history that is feature based."),i.a.createElement(c.MDXTag,{name:"p",components:t},"A big assumption in this process is that the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master")," should always be deployable. As such, the deployment to the staging environment is configured to happen automatically and can be used to see what something would look like in a production-like environment for any kind of manual testing/verification."),i.a.createElement(c.MDXTag,{name:"p",components:t},"Because ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master")," is designed to always be deployable, long running features that should ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"not")," be deployed should utilize feature flags in the code that disable the feature for the actual production environment. Notifying the DevOps team on what feature flags should be enabled/disabled in staging and production environment is an important part of this process. However, it's likely that breakages in staging will occur and that this is necessary to discover these prior to moving anything to the production steps."),i.a.createElement(c.MDXTag,{name:"p",components:t},"Speaking of production steps, things kick off with the daily production push"),i.a.createElement(c.MDXTag,{name:"blockquote",components:t},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"6","."," Create a release in GitHub from master, tag artifacts of that commit sha with release name")),i.a.createElement(c.MDXTag,{name:"p",components:t},"Every work day at the configured time a ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-automerge/"}},"Jenkins automerge job")," sends a link to the #vetsgov-engineers Slack channel with a diff between the last release and the most recent changes in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master"),". This commit reference is stored to ensure the diff and released version is deterministic."),i.a.createElement(c.MDXTag,{name:"p",components:t},"After a time has elapsed ( currently set to 60m ) release is created at the reference from above."),i.a.createElement(c.MDXTag,{name:"blockquote",components:t},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"7","."," Automated: Deploy to production using artifacts")),i.a.createElement(c.MDXTag,{name:"p",components:t},"From here, Jenkins can kickoff a production deployment. After the deployment occurs, the normal site monitoring infrastructure will be used to valide it is working. As this process is automatic any new features should have monitoring in place before, or as a part of their deployment"),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Other Notes"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"The code that appears in the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"master")," branch ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"actually")," gets deployed to both dev and staging environments. This is done to support different configurations for the DevOps team as they work to support any configuration changes (i.e. in dev first).")),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Deployment Rollbacks"),i.a.createElement(c.MDXTag,{name:"p",components:t},"If a production deployment introduces issues that affect Service Level Objectives (SLOs) established for the project, the DevOps team may restore service to users by rolling back the deployment. This is accomplished by triggering a new deploy job in Jenkins using a previous release tag."),i.a.createElement(c.MDXTag,{name:"p",components:t},"The use of hotfixes is discouraged, but may be useful in an emergency situation when ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master")," has significantly deviated from the release and a fix to the failed production release is critical. To create a hotfix, create a branch from the last stable release tag, make changes necessary (with review), create a new release tag following the correct naming scheme, and trigger a deploy in Jenkins with the release name as a parameter."),i.a.createElement(c.MDXTag,{name:"p",components:t},"If SLOs are not affected and a fix is not critical, no rollback will be issued. Instead the fix should be applied through the standard development workflow."),i.a.createElement(c.MDXTag,{name:"h1",components:t},"Getting a change from Drupal or vagov-content into production"),i.a.createElement(c.MDXTag,{name:"p",components:t},"If your change is in Drupal, skip to the next section."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Merge content change in vagov-content"),i.a.createElement(c.MDXTag,{name:"ol",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"When you get a PR request in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"vagov-content"),", wait for the build checks to pass and for the PR to be mergeable",i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"If there's an issue with the build check, you may need to restart it (click on the Jenkins link in the PR to open it)"))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Merge the PR in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"vagov-content")," into master"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Wait for Jenkins to build the change in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"vets-website"),". You should see a running build here: ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=master"}},"http://jenkins.vetsgov-internal/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=master"),i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"If this build fails, you may need to log into Jenkins and restart it"))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Once the build succeeds, the change is on dev and staging, and ready for the next production deploy")),i.a.createElement(c.MDXTag,{name:"h2",components:t},"If you need to immediately deploy only content changes to production (and no new vets-website changes)"),i.a.createElement(c.MDXTag,{name:"ol",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Start a deploy job",i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Go to ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Log into Jenkins if you haven't yet"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Choose Build with Parameters"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Set the release_wait option to something like 5-10 minutes, depending on how much time you want to give yourself or others to respond"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Click the checkbox for use_latest_release"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Click Build"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"In Slack, the notification that happens in the vetsgov-engineers channel will have a link that shows the exact commits being released, re-check these to make sure they're safe"))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Once the build finishes, check production to see that the changes are live")),i.a.createElement(c.MDXTag,{name:"h2",components:t},"If you need to immediately deploy the change to production, including undeployed vets-website changes"),i.a.createElement(c.MDXTag,{name:"ol",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Validate that the changes since the last deploy are safe to deploy, and include any vets-website commits you need:",i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"You can check the build history at ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/")," to get the time of the last deploy (usually daily at 2pm EST)"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Look for commits after the last deploy: ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/commits/master"}},"https://github.com/department-of-veterans-affairs/vets-website/commits/master")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"You may need to contact the developers of those commits to verify for sure"))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Start a deploy job",i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Go to ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Log into Jenkins if you haven't yet"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Choose Build with Parameters"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Set the release_wait option to something like 5-10 minutes, depending on how much time you want to give yourself or others to respond"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Click Build"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"In Slack, the notification that happens in the vetsgov-engineers channel will have a link that shows the exact commits being released, re-check these to make sure they're safe"))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Once the build finishes, check production to see that the changes are live")))},t}(i.a.Component),u={}},330:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),o=a.n(n),r=a(13),s=a.n(r),m=a(68),i=a.n(m);a.d(t,"a",function(){return i.a});a(332);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},331:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"},{name:"3. Leverage CI workflow",href:"/getting-started/workflow"}]},{name:"Project and environment structure",items:[{name:"VA.gov environments",href:"/getting-started/environments"},{name:"Bundles and Code organization",href:"/getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"/getting-started/common-tasks/local"},{name:"Building VA.gov",href:"/getting-started/common-tasks/build"},{name:"Running tests",href:"/getting-started/common-tasks/tests"},{name:"Linting your code",href:"/getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"/getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Releases",href:"/getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"/getting-started/common-tasks/reviewing-feature-branches"},{name:"Documentation",items:[{name:"Adding new pages to this site",href:"/getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"/getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"/getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"/getting-started/common-tasks/creating-gatsby-plugins"}]}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"/architecture/site-structure/topology-overview"},{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"/forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"/forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"Forms in Production",href:"/forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},332:function(e,t,a){var n;e.exports=(n=a(334))&&n.default||n},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},334:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),s=a.n(r),m=a(13),i=a.n(m),c=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(c.a,o()({location:t,pageResources:a},a.json)):null};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},335:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(333),s=a(2),m=a.n(s),i=a(13),c=a.n(i),l=a(338),p=a.n(l),d=a(330),u=(a(17),a(133),a(134),a(331)),h=a.n(u),g=a(18),f=a.n(g),v=a(339),b=a.n(v),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var a;return f()(((a={})[t.id]=!1,a),e)},{}),a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,o=t.location;return m.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},m.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},m.a.createElement("i",{className:"fas fa-times"})),m.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return m.a.createElement("div",{key:t.id},m.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},m.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),m.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},m.a.createElement("ul",{className:"site-c-mobile-nav-list"},m.a.createElement("li",{className:"site-c-mobile-nav-list__item"},m.a.createElement(d.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(m.a.Component),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return m.a.createElement("div",null,m.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),m.a.createElement("header",{className:"site-c-header",role:"banner"},m.a.createElement("div",{className:"site-l-wrapper"},m.a.createElement("div",{className:"site-c-header__masthead"},m.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},m.a.createElement("em",{className:"site-c-header__logo-text"},m.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},m.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",m.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),m.a.createElement("div",{className:"site-c-header__utility-links"},m.a.createElement("div",{id:"search-container",className:"site-search-container"},m.a.createElement("i",{className:"fas fa-search search-icon"}),m.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),m.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},m.a.createElement("i",{className:"fas fa-search"})),m.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),m.a.createElement("nav",{className:"site-c-header__nav"},m.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return m.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},m.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),m.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},m.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),m.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&m.a.createElement("div",{className:"site-c-overlay is-visible"}),m.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(m.a.Component),D=(a(340),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return m.a.createElement(d.b,{query:"1044757290",render:function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},m.a.createElement("html",{lang:"en"})),m.a.createElement(y,{location:a}),t)},data:r})},t}(m.a.Component));D.propTypes={children:c.a.node.isRequired};t.a=D},336:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},337:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(13),s=a.n(r),m=a(335),i=(a(133),a(134),a(135),a(17),a(336)),c=a(330);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(331),u=a.n(d);function h(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function g(e){var t=e.children,a=e.location;return o.a.createElement(m.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-releases-mdx-37874bccaadcc8fe95cc.js.map