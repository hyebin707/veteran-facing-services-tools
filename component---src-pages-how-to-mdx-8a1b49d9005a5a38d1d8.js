(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return g});a(62);var n=a(91),o=a.n(n),s=a(5),r=a.n(s),c=a(0),i=a.n(c),m=a(11),l=a(190),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return i.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},i.a.createElement(m.MDXTag,{name:"h2",components:t},"How to Add Documents"),i.a.createElement(m.MDXTag,{name:"p",components:t},"This is the process of how you should add new pages and documents to this website."),i.a.createElement(m.MDXTag,{name:"h3",components:t},"MDX Format"),i.a.createElement(m.MDXTag,{name:"p",components:t},"We will be using the .mdx format to create our documents.\nMDX is a format that lets you seamlessly use JSX in your Markdown documents.\nYou can import components, like interactive charts or notifs, and export metadata.\nThis makes writing long-form content with components a blast 🚀"),i.a.createElement(m.MDXTag,{name:"p",components:t},i.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),i.a.createElement(m.MDXTag,{name:"h3",components:t},"Adding React Component documentation"),i.a.createElement(m.MDXTag,{name:"p",components:t},"Adding React Components documentation in Formation."),i.a.createElement(m.MDXTag,{name:"ul",components:t},i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"Take a look at the example MDX file at formation-react/src/components/AcceptTermsPrompt/AcceptTermsPrompt.mdx.\nYou can use this as a starter"))),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"Create a .mdx file the same name as your component in the ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"strong"},"formation-react/src/components")," folder, adjacent to your component.")),i.a.createElement(m.MDXTag,{name:"pre",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"- components\n  - YourComponent.js\n  - YourComponent.mdx\n"))),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"Add the required frontmatter at the top of the page")),i.a.createElement(m.MDXTag,{name:"pre",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"  ---\n  title: AcceptTermsPrompt\n  name: AcceptTermsPrompt\n  ---\n"))),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"Add descriptions to your PropTypes in your Component files")),i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"We need to convert the propType comments to jsDoc format.\nThis will not show up in the propTypes definitions on your page if you\ndon't have it in a jsDoc format."),i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"Here is an examples of how it should look:"),i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"Changed code:"),i.a.createElement(m.MDXTag,{name:"pre",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"  YourComponent.propTypes = {\n    /**\n     * content shown as the actual terms and conditions\n     */\n    user: PropTypes.object,\n    /**\n     * cancel button click handler\n     */\n    onCancel: PropTypes.func\n  };\n")),i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},"It will look like this on the page."),i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/45201d2577870335ad99cf46a6f1127d/815b9/proptypes.png",style:{display:"block"},target:"_blank",rel:"noopener"},i.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",maxWidth:"881px",marginLeft:"auto",marginRight:"auto"}},i.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.4472190692395%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),i.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"proptypes",title:"PropType Image",src:"/static/45201d2577870335ad99cf46a6f1127d/03a91/proptypes.png",srcSet:"/static/45201d2577870335ad99cf46a6f1127d/6245e/proptypes.png 259w,\n/static/45201d2577870335ad99cf46a6f1127d/b5c1f/proptypes.png 518w,\n/static/45201d2577870335ad99cf46a6f1127d/03a91/proptypes.png 1035w,\n/static/45201d2577870335ad99cf46a6f1127d/d2502/proptypes.png 1553w,\n/static/45201d2577870335ad99cf46a6f1127d/815b9/proptypes.png 1762w",sizes:"(max-width: 881px) 100vw, 881px"}))))),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"Once this is all setup you can start adding your React Component and markdown to your file."))),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"Start gatsby")),i.a.createElement(m.MDXTag,{name:"pre",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"yarn develop\n"))),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"You should be able to see your component in the sidebar or go to the url.")),i.a.createElement(m.MDXTag,{name:"pre",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"http://localhost:8000/yourcomponentnamelowercase\n")))),i.a.createElement(m.MDXTag,{name:"h3",components:t},"Adding Document Pages"),i.a.createElement(m.MDXTag,{name:"ul",components:t},i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"Create a .mdx file in ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"strong"},"src/pages")))),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"Add the required frontmatter at the top of the page. You will need this if you\nwant it to display in the sidebar.")),i.a.createElement(m.MDXTag,{name:"pre",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-markdown"}},"  // Your .mdx page\n  ---\n  title: How to Add Documents\n  ---\n"))),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"You have the option to create React Components and add them to the MDX file.\nReact components for pages should be located in src/components")),i.a.createElement(m.MDXTag,{name:"h3",components:t,parentName:"li"},"GraphQl Sample Reference"),i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.gatsbyjs.org/docs/graphql-reference/"}},"https://www.gatsbyjs.org/docs/graphql-reference/")),i.a.createElement(m.MDXTag,{name:"h3",components:t,parentName:"li"},"Github API GraphQL Explorer"),i.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"https://developer.github.com/v4/explorer/")))))},t}(i.a.Component),g={}},188:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}},allMarkDown:{edges:[{node:{fields:{slug:"Work Practices/Accessibility and 508/2016-12-21_508_Audit_Report",fileName:"2016-12-21_508_Audit_Report",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/meeting-notes/2017-06-05-meeting-508-office.md/2017-06-05-meeting-508-office",fileName:"2017-06-05-meeting-508-office",path:"Work Practices/Accessibility and 508/meeting-notes/2017-06-05-meeting-508-office.md"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/508-testing-plan",fileName:"508-testing-plan",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/508officeReviewList",fileName:"508officeReviewList",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Accessing-Staging",fileName:"Accessing-Staging",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/DEFINITION-severity-rubric",fileName:"DEFINITION-severity-rubric",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Github Requests",fileName:"Github Requests",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/How to File Bugs Tasks and Questions",fileName:"How to File Bugs Tasks and Questions",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/Mac_VoiceOver_guide",fileName:"Mac_VoiceOver_guide",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Product_Development_Roles",fileName:"Product_Development_Roles",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Product_Team_Process",fileName:"Product_Team_Process",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/README",fileName:"README",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/README",fileName:"README",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/RESEARCH-screenreader-fieldset-legend-label",fileName:"RESEARCH-screenreader-fieldset-legend-label",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/Slack Requests",fileName:"Slack Requests",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Team Norms",fileName:"Team Norms",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Using GitHub and Contributing Code",fileName:"Using GitHub and Contributing Code",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/Accessibility and 508/a11y-508-launch-guidelines",fileName:"a11y-508-launch-guidelines",path:"Work Practices/Accessibility and 508"}}},{node:{fields:{slug:"Work Practices/listserv-management",fileName:"listserv-management",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/mailing-lists",fileName:"mailing-lists",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/norms",fileName:"norms",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/org-chart",fileName:"org-chart",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/team descriptions",fileName:"team descriptions",path:"Work Practices"}}},{node:{fields:{slug:"Work Practices/zenhub description",fileName:"zenhub description",path:"Work Practices"}}}]},pages:{edges:[{node:{id:"f26d4a44-aaa8-5bb0-864b-20fcacf4429d",frontmatter:{title:"Gatsby Configurations"},fields:{slug:"/gatsby-configurations/",sourceInstanceName:"pages"},parent:{__typename:"File",name:"gatsby-configurations"},code:{scope:""}}},{node:{id:"afefbe8a-b2f1-5dc4-b4a1-6dd394c0b0d0",frontmatter:{title:"How to Add Documents"},fields:{slug:"/how-to/",sourceInstanceName:"pages"},parent:{__typename:"File",name:"how-to"},code:{scope:""}}},{node:{id:"26d92fc2-10b0-5f30-aed5-db824c3b40b9",frontmatter:{title:"How to Add Pages from GitHub"},fields:{slug:"/add-external-pages/",sourceInstanceName:"pages"},parent:{__typename:"File",name:"add-external-pages"},code:{scope:""}}},{node:{id:"5156f8bf-8258-5b77-961a-bf87e0c28271",frontmatter:{title:"Internal Tools"},fields:{slug:"/internal-tools/",sourceInstanceName:"pages"},parent:{__typename:"File",name:"internal-tools"},code:{scope:""}}},{node:{id:"e0b12eb0-2ddd-50f9-b6f3-766a4ddb2957",frontmatter:{title:"This is the index"},fields:{slug:"/",sourceInstanceName:"pages"},parent:{__typename:"File",name:"index"},code:{scope:""}}}]},components:{edges:[{node:{id:"f1ac5e08-37d3-5bd0-a2d1-893b28c1824f",frontmatter:{title:"AcceptTermsPrompt"},fields:{slug:"/accepttermsprompt/",sourceInstanceName:"components"},parent:{__typename:"File",name:"AcceptTermsPrompt"},code:{scope:""}}},{node:{id:"92c5cc23-97a8-5177-9a4d-56bddbbefce3",frontmatter:{title:"AdditionalInfo"},fields:{slug:"/additionalinfo/",sourceInstanceName:"components"},parent:{__typename:"File",name:"AdditionalInfo"},code:{scope:""}}}]}}}},189:function(e,t,a){},190:function(e,t,a){"use strict";var n=a(5),o=a.n(n),s=a(188),r=a(0),c=a.n(r),i=a(1),m=a.n(i),l=a(63),p=a.n(l),d=a(42),g=(a(43),function(e){var t=e.pages,a=e.siteTitle,n=e.components,o=e.allMarkDown;return c.a.createElement("aside",{className:"sidebar"},c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"input-wrap"},c.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),c.a.createElement("h1",null,a),c.a.createElement("h4",null,"Components"),c.a.createElement("ul",{className:"menu-list"},n.map(function(e){return c.a.createElement("li",{key:e.node.id},c.a.createElement(d.Link,{to:"/"+e.node.fields.slug.toLowerCase()+"/"},e.node.frontmatter.title))})),c.a.createElement("h4",null,"Documents"),c.a.createElement("ul",{className:"menu-list"},t.map(function(e){return c.a.createElement("li",{key:e.node.id},c.a.createElement(d.Link,{to:"/"+e.node.fields.slug.toLowerCase()+"/"},e.node.frontmatter.title))})),c.a.createElement("h4",null,"External Documents"),c.a.createElement("ul",{className:"menu-list"},o.map(function(e){return c.a.createElement("li",{key:e.node.id},c.a.createElement(d.Link,{to:"/"+e.node.fields.slug.toLowerCase().replace(/ /g,"-")+"/"},function(e){return"README"===e.node.fields.fileName?e.node.fields.slug:e.node.fields.fileName}(e)))})))}),u=(a(189),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this,t=this.props.children;return c.a.createElement(d.StaticQuery,{query:"1278266300",render:function(a){return c.a.createElement(c.a.Fragment,null,"' '",c.a.createElement(p.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"keywords",content:"design system, style guide, documentation"}]},c.a.createElement("html",{lang:"en"}),c.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.0/css/all.css",integrity:"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",crossOrigin:"anonymous"})),"' '",c.a.createElement(g,{pages:e.getSitePages(a.pages.edges),components:a.components.edges,siteTitle:a.site.siteMetadata.title,allMarkDown:a.allMarkDown.edges}),"' '",c.a.createElement("div",{className:"ContentArea"},t),"' '")},data:s})},t}(c.a.Component));u.propTypes={children:m.a.node.isRequired};t.a=u}}]);
//# sourceMappingURL=component---src-pages-how-to-mdx-8a1b49d9005a5a38d1d8.js.map