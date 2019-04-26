(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{312:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),s=a(3),r=a.n(s),i=a(2),m=a.n(i),c=a(4),l=a(345),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},m.a.createElement("h1",{id:"teamsite-overview"},"Teamsite Overview"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Updated from ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12779#issue-356005850"}},"TeamSite Technical Solution and Implementation")),m.a.createElement(c.MDXTag,{name:"p",components:t},"EWIS serves much of the existing content on www.va.gov (e.g. www.va.gov/health) and to accomodate this our systems serve that request from our version of the site on sites that exist on the same domain."),m.a.createElement(c.MDXTag,{name:"p",components:t},m.a.createElement(c.MDXTag,{name:"img",components:t,parentName:"p",props:{src:"https://user-images.githubusercontent.com/215266/45632257-195abc80-ba5a-11e8-9f7c-76c63fb14ac4.png",alt:"ewis"}})),m.a.createElement(c.MDXTag,{name:"p",components:t},"Requests to subdomain hosts such as www.benefits.va.gov are not proxied through our systems and are not under our control. Content for these sites exists on TeamSite: a content management system utilized by the VA to manage content across several properties at the VA. Each property in TeamSite consists of perl-based template files, which on publish rendered content to a file store. The rendered content contains server side includes, which reference content from a directory called ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"va_files"),", which has shared header and footer functionality."),m.a.createElement(c.MDXTag,{name:"p",components:t},"There are no consistent staging/production environments for TeamSite properties, and there are multiple variants of header and footer functionality in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"va_files")," (attached to this issue). For properties that do have staging and production variants, they reference the same version of header and footer content. A change to the header or footer will affect both the staging and production versions of a property."),m.a.createElement("h2",{id:"scripts-and-teamsite-administration"},"Scripts and Teamsite Administration"),m.a.createElement(c.MDXTag,{name:"p",components:t},"The header injection markup is added to Teamsite templates by their administrator. Current point of contact for this is:"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Josh Tuscher ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"mailto:Joshua.Tuscher@va.gov"}},"Joshua.Tuscher@va.gov"))),m.a.createElement(c.MDXTag,{name:"p",components:t},"Current markup added to Teamsite templates:"),m.a.createElement(c.MDXTag,{name:"pre",components:t},m.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html"}},'<style type="text/css">.brand-consolidation-deprecated { display: none !important; } </style>\n<link rel="stylesheet" href="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/styleConsolidated.css" />\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/js/settings.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/polyfills.entry.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/vendor.entry.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/proxy-rewrite.entry.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/js/vendor/uswds.min.js"><\/script>\n')),m.a.createElement("h2",{id:"teamsite-behavior-and-whitelisting-pages"},"Teamsite Behavior and Whitelisting Pages"),m.a.createElement(c.MDXTag,{name:"p",components:t},"There are an unknown number of Teamsite templates that drive the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<head>")," content on Teamsite pages and there are several pages that receive the above markup that ",m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"should not")," show the va.gov header. The proxy rewrite application uses a ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/b770f380270722228563e56629af440c64342157/src/applications/proxy-rewrite/proxy-rewrite-whitelist.json"}},"whitelist")," to drive the activation of the header content. Example whitelist entry:"),m.a.createElement(c.MDXTag,{name:"pre",components:t},m.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},'{\n  "hostname": "www.benefits.va.gov",\n  "pathnameBeginning": "/",\n  "cookieOnly": false\n},\n')),m.a.createElement(c.MDXTag,{name:"p",components:t},"Pages can be whitelisted in two ways:"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"cookieOnly: false")," - the header will always activate"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"cookieOnly: true")," - the header will activate when ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"proxyRewrite")," cookie is set to true.")),m.a.createElement(c.MDXTag,{name:"p",components:t},"This cookie can be set in the console by running ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},'document.cookie = "proxyRewrite=true;"')),m.a.createElement("h3",{id:"considerations-when-editing-and-testing-the-whitelist"},"Considerations when editing and testing the whitelist"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Some Teamsites redirect to both ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"subdomain.va.gov")," and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"www.subdomain.va.gov")," (sometimes alternating between the two). Always test the redirect behavior of the first level of links on the page and ensure that both hosts are whitelisted if necessary."),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"New hostnames need to be added to our ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"allowed_origins")," ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/c5687fc1b483eaea17a1191eb41440fb560d01d6/terraform/environments/dsva-vagov-prod/main.tf#L277"}},"here")," and ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/c5687fc1b483eaea17a1191eb41440fb560d01d6/terraform/environments/dsva-vagov-prod/main.tf#L290"}},"here"),". Subdomains are considered separate hostnames by CORS and the browser performs CORS checks on all of the webfonts injected by the Teamsite header scripts. Terraform updates are not automatically deployed- work with a Devops engineer to deploy these changes."),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"There are at least two behaviors provided by the Teamsite system for adding the inline scripts to the page:",m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"as part of the initial document response, or"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"injected as part of a Teamsite sourced JavaScript.")))),m.a.createElement("h1",{id:"proxy-rewrite"},"Proxy Rewrite"),m.a.createElement(c.MDXTag,{name:"p",components:t},"The ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"proxy-rewrite"),' application is used to inject site-wide VA.gov components into pages that are outside of the www.va.gov build and publish process. The affected sites are generally referred to as "TeamSite", because TeamSite is the name of the CMS use for those pages.'),m.a.createElement(c.MDXTag,{name:"p",components:t},"This works by -"),m.a.createElement(c.MDXTag,{name:"ol",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"A request is sent to a VA.gov website"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"The content requested from the Teamsite servers and passed through the www.va.gov proxy"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"A code snippet included in the Teamsite page downloads the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"proxy-rewrite")," app which overwrites the Teamsite header and footer with VA.gov content")),m.a.createElement(c.MDXTag,{name:"p",components:t},"Because the Teamsite template containing the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"proxy-rewrite")," snippet is used both on sites that should and shouldn't show the VA.gov header, the script is governed by an allow list contained in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"proxy-rewrite-whitelist.json"),"."),m.a.createElement("h2",{id:"local-dev"},"Local Dev"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Since Teamsite content is not run through the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vets-website")," build process, testing changes on Teamsite requires running local or staging changes against the production pages. The ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"proxy-rewrite")," app supports targeting a specific environment for testing:"),m.a.createElement(c.MDXTag,{name:"p",components:t},"For example: ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://staging.va.gov/health/?targetEnvironment=vagovstaging"}},"https://staging.va.gov/health/?targetEnvironment=vagovstaging")),m.a.createElement(c.MDXTag,{name:"p",components:t},"The default behavior for ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://staging.va.gov/health"}},"https://staging.va.gov/health")," is to load the production assets. when the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"targetEnvironment")," is set, the loader well delete the production nodes from the DOM and add script and style nodes for the target environment."),m.a.createElement(c.MDXTag,{name:"p",components:t},"The injection script will support any of ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/constants/environments.js"}},"these")," environment names set as the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"targetEnvironment"),"."),m.a.createElement(c.MDXTag,{name:"p",components:t},"Caveats:"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Style node deletions will prompt a rebuilding of the CSSOM but removing script nodes doesn't undo any JS that was run before the JS node was removed. For most cases this should not impact testing as the application specific code doesn't run but JS that is executed before the application (e.g. polyfills) will always run the production code first.")),m.a.createElement("h2",{id:"charles-proxy"},"Charles Proxy"),m.a.createElement(c.MDXTag,{name:"p",components:t},"You can also use an application called Charles Proxy to map the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"proxy-rewrite")," bundles of TeamSite pages to your local machine. This way you can navigate directly to ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"https://www.va.gov/health/")," and when the request for the production bundle of ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"proxy-rewrite")," is sent, Charles will have overridden that file to instead be served locally. Instructions to set this up are located here, ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Teamsite.md"}},"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Teamsite.md"),"."),m.a.createElement("h2",{id:"teamsite-visual-regression-testing"},"Teamsite Visual Regression Testing"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Both scripts compare production Teamsite header and footer against images in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vets-website")," repo"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"npm run vrt")," - test fails and generates diff images when images differ")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"npm run vrt:baseline")," - test always succeeds and replaces existing baseline images when images differ")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"If no baseline images exist for a test, both scripts will"),m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"succeed on each test that has no baseline image and"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"generate a new baseline image for it."))),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Diff images are removed automatically when their associated test succeeds."))),m.a.createElement("h3",{id:"details"},"Details"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"compares snapsshots of ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"<header>")," and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},".footerNav")," on current subdomain Teamsite pages"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/americanexpress/jest-image-snapshot"}},"jest-image-snapshot")," uses ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/mapbox/pixelmatch"}},"pixelmatch")," to detect failure"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Diff images show ",m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"left center right")," the ",m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"baseline diff new")," images\n",m.a.createElement(c.MDXTag,{name:"img",components:t,parentName:"li",props:{src:"./readme-assets/diff-image-example.png",alt:"Example Diff Image"}}))),m.a.createElement("h2",{id:"what-to-do-when-the-test-fails"},"What To Do When The Test Fails"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"If needed, run ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run vrt")," locally"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"The test log will show a",m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Summary of successes and failures\n",m.a.createElement(c.MDXTag,{name:"img",components:t,parentName:"li",props:{src:"./readme-assets/vrt-test-summary-example.png",alt:"Test Summary Example"}})),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Failure details for each test with path to diff image for failure\n",m.a.createElement(c.MDXTag,{name:"img",components:t,parentName:"li",props:{src:"./readme-assets/cli-failure-example.png",alt:"Failure Detail Example"}})))),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"If failure is caused by production issue"),m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Repair issue and publish to production"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Verify ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:vrt")," succeeds"))),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"If failure is caused by an update"),m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Run ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:vrt:baseline")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Check in new baseline images to ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"vets-website"))))))},t}(m.a.Component),u={}},338:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),o=a.n(n),s=a(13),r=a.n(s),i=a(68),m=a.n(i);a.d(t,"a",function(){return m.a});a(340);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},339:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},340:function(e,t,a){var n;e.exports=(n=a(342))&&n.default||n},341:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},342:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),s=a(2),r=a.n(s),i=a(13),m=a.n(i),c=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,o()({location:t,pageResources:a},a.json)):null};p.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},t.default=p},343:function(e,t,a){"use strict";var n=a(3),o=a.n(n),s=a(341),r=a(2),i=a.n(r),m=a(13),c=a.n(m),l=a(346),p=a.n(l),d=a(338),u=(a(17),a(133),a(134),a(339)),h=a.n(u),g=a(18),f=a.n(g),v=a(347),E=a.n(v),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var a;return f()(((a={})[t.id]=!1,a),e)},{}),a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,o=t.location;return i.a.createElement("div",{className:E()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),i.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:E()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(i.a.Component),T=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(b,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(i.a.Component),w=(a(348),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(T,{location:a}),t)},data:s})},t}(i.a.Component));w.propTypes={children:c.a.node.isRequired};t.a=w},344:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},345:function(e,t,a){"use strict";var n=a(2),o=a.n(n),s=a(13),r=a.n(s),i=a(343),m=(a(133),a(134),a(135),a(17),a(344)),c=a(338);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(339),u=a.n(d);function h(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function g(e){var t=e.children,a=e.location;return o.a.createElement(i.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return g}),g.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-teamsite-mdx-51a6b3172b4486bfa337.js.map