(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{304:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(43);var a=t(44),o=t.n(a),r=t(3),m=t.n(r),s=t(2),c=t.n(s),i=t(4),p=t(316),l={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=p.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},c.a.createElement(i.MDXTag,{name:"h2",components:n},"Adding External Pages from Github API"),c.a.createElement(i.MDXTag,{name:"p",components:n},"We are going to be using Github's GraphQL API to consume markdown pages from GitHub.\nThis document will detail the process of adding pages and how it all works."),c.a.createElement(i.MDXTag,{name:"h3",components:n},"Why?"),c.a.createElement(i.MDXTag,{name:"p",components:n},"We wanted a way to get pre-existing documents from GitHub without having to\nduplicate it."),c.a.createElement(i.MDXTag,{name:"h3",components:n},"How to Add External pages"),c.a.createElement(i.MDXTag,{name:"p",components:n},"I have created helper functions for the GitHub Api located in ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"services/github-api.js"),".\nWe should store all our utility function for the GitHub Api here. That way we have one source of truth. We can add to this file as needed."),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"getPageAndCreatePage"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"getDirectoryAndCreatePages")),c.a.createElement(i.MDXTag,{name:"p",components:n},"You will need to run these functions in the ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"exports.sourceNodes")," lifecycle hook.\nThis can be found in the ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"gatsby-node.js")," file."),c.a.createElement(i.MDXTag,{name:"h5",components:n},"Limitations"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Due to GitHub's rate limit we can only grab whole directories or single files at a time.\nIf we try to get the whole repo it will give us a rate limit error. This is also due to the size of our documentation repo."),c.a.createElement(i.MDXTag,{name:"h5",components:n},"Data you will need to make the API request"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Owner of the repo"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Repo name"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"File directory you want to add or file fileName")),c.a.createElement(i.MDXTag,{name:"p",components:n},"Example:"),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"department-of-veterans-affairs/vets.gov-team/Work Practices/Accessing-Staging.md\n|            owner           |     repo    |           file directory           |\n")),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},c.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"strong"},"Note")),": The file directory is not the url but the actual directory.\nHere is an example of what the file directory should look like:"),c.a.createElement(i.MDXTag,{name:"h2",components:n},c.a.createElement(i.MDXTag,{name:"img",components:n,parentName:"h2",props:{src:"../images/github-file-directory.png",alt:"github file directory"}})),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Here is how to use the utility functions:"),"\nThese functions will do an API request then create a Gatsby nodes so you can create pages within the system."),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"getPageAndCreatePage")," - This will add only 1 page in Gatsby"),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst githubApi = require('./services/github-api');\n\nexports.sourceNodes = async ({\n  actions,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = actions\n\n  await githubApi.getPageAndCreatePage({\n    owner: 'department-of-veterans-affairs',\n    repo: 'vets.gov-team',\n    dir: 'Work Practices/Accessing-Staging.md',\n  }, createNode);\n}\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"getDirectoryAndCreatePages")," - This will add all markdown pages in a directory"),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst githubApi = require('./services/github-api');\n\nexports.sourceNodes = async ({\n  actions,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = actions\n\n  await githubApi.getDirectoryAndCreatePages({\n    owner: 'department-of-veterans-affairs',\n    repo: 'vets.gov-team',\n    dir: 'Work Practices',\n  }, createNode);\n}\n")))),c.a.createElement(i.MDXTag,{name:"h3",components:n},"How it Works"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Initially we were trying to use pre-existing Gatsby plugins to do this but\ncouldn't find one that did what we exactly wanted it to do. The ones that came\ncloses to doing what we wanted ended up timing out due to the massive document repo\nwe have. So we ended up writing our own local plugin. Here is a list of steps we\ntook to make this work."),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Use Gatsby's ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"sourceNodes")," lifecycle hook to get data."),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Use GitHub's GraphQL API to query page information from GitHub"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Create a Gatsby Node for the pages"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Use ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"gatsby-transformer-remark")," to convert the markdown data into an html document"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Create pages using the createPages lifecycle hook.")),c.a.createElement(i.MDXTag,{name:"h4",components:n},"Use Gatsby's ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"h4"},"sourceNodes")," lifecycle hook to get data."),c.a.createElement(i.MDXTag,{name:"p",components:n},"First thing we have to do to get data from an API request into Gatsby is hook into the\n",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sourceNodes")," lifecycle hook. This is were Gatsby allows you to do this."),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript{numberLines:",metastring:"true}","true}":!0}},"  // gatsby-node.js\n\n  exports.sourceNodes = async ({\n    boundActionCreators,\n    getNode,\n    hasNodeChanged,\n  }) => {\n    const { createNode } = boundActionCreators\n\n  }\n")),c.a.createElement(i.MDXTag,{name:"h4",components:n},"Use GitHub's GraphQL API to query page information from GitHub"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Now we have to do a API request using the Github GraphQL API. You can use the ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"GitHub's GraphQL Explorer")," to generate your query. You'll have to explore GitHub's GraphQL API to understand more but here is a reference of how to get content data from GitHub."),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896"}},"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896")),c.a.createElement(i.MDXTag,{name:"p",components:n},"Here is an example of what it looks like."),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n}\n")),c.a.createElement(i.MDXTag,{name:"h4",components:n},"Create a Gatsby Node for the pages"),c.a.createElement(i.MDXTag,{name:"p",components:n},"After that we have to create a Node so that Gatsby can add it to the GraphQL data system.\nThere are notes in the below code which shows what is required and what is optional.\nYou may add custom properties that will be available in GraphQL."),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n\n  result\n    .data\n    .repository\n    .object\n    .entries.filter(item => item.name.endsWith('.md')).forEach(({ name, oid, object }) => {\n      createNode({\n        id: oid, <---- required\n        parent: null, <---- required\n        children: [], <---- required\n        internal: { <---- required\n          type: 'GithubAPI', <---- define type for look up in GraphQL\n          contentDigest: crypto  <---- required\n            .createHash('md5')\n            .update(object.text)\n            .digest('hex'),\n          mediaType: 'text/markdown', <---- required\n          content: object.text, <---- required\n          directory: dir, <---- custom properties\n          name: name.replace('.md', ''), <---- custom properties\n        }\n      });\n    });\n}\n")),c.a.createElement(i.MDXTag,{name:"h4",components:n},"Use gatsby-transformer-remark to convert the markdown data into an html document"),c.a.createElement(i.MDXTag,{name:"p",components:n},"When we did a ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"createNode")," we set the ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"mediaType: 'text/markdown'"),". This will automatically convert the markdown using ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"gatsby-transformer-remark"),"."),c.a.createElement(i.MDXTag,{name:"h3",components:n},"Create pages using the createPages lifecycle hook"),c.a.createElement(i.MDXTag,{name:"p",components:n},"After everything is set and we have all our pages in GraphQL. We can now create pages using our new data. Here is an example."),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nresult.data.allMarkDown.edges.forEach(async ({ node }) => {\n  createPage({\n    path: `/${node.fields.slug.toLowerCase().replace(/ /g, '-')}/`,\n    component: path.resolve('./src/layouts/external-layout.js'),\n    context: {\n      id: node.id,\n      name: node.fields.slug,\n    },\n  })\n})\n")))},n}(c.a.Component),d={}},313:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},314:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}}]}}}},315:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"How to Add Documents",href:"getting-started/how-to"},{name:"How to Add Pages from Github",href:"getting-started/add-external-pages"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},316:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(313),m=t(2),s=t.n(m),c=t(8),i=t.n(c),p=t(96),l=t.n(p),u=t(95),d=(t(18),t(138),t(139),t(140),t(314));function g(){return s.a.createElement(u.b,{query:"2758471434",render:function(e){return s.a.createElement(h,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:d})}function h(e){var n=e.items;return n.length?s.a.createElement("ul",{className:"menu-list"},n.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(h,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(g,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.href},s.a.createElement(u.a,{to:e.href},e.name)))})):null}var f=t(315),b=t.n(f);function E(e){var n=e.location,t=b.a.sections.find(function(e){return n.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!t&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,t.name),s.a.createElement(u.a,{className:"home-link",to:""},"Home"),s.a.createElement(h,{items:t.items})),!t&&s.a.createElement("ul",{className:"menu-list"},b.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(u.a,{to:e.href},e.name))})))}t(317);var y=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,n=e.children,t=e.location;return s.a.createElement(u.b,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(E,{location:t}),s.a.createElement("div",{className:"ContentArea docSearch-content"},n))},data:r})},n}(s.a.Component);y.propTypes={children:i.a.node.isRequired};n.a=y}}]);
//# sourceMappingURL=component---src-pages-getting-started-add-external-pages-mdx-f4ef50b2c8e2cb602e6c.js.map