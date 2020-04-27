(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"094v":function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return c})),a.d(n,"_frontmatter",(function(){return l}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/");var t=a("q1tI"),o=a.n(t),r=a("6qfE"),s=a("3dLD");var m={},c=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).layout=s.a,a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props,n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,a),components:n},o.a.createElement("h1",{id:"review"},"Review"),o.a.createElement("h2",{id:"submit-pull-request"},"Submit pull request"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Pull master")," and ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"push feature branch")," to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-website")," repository")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"git pull origin master\ngit push origin 12345-issue-title\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"Always ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"em"},"pull master")," into your feature branch before creating a pull request.")),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Create a pull request")," indicating that your code is ready for review."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Request peer review")," on Github by tagging a fellow team member who you feel is qualified to review the code (this prevents the pull request from just sitting). You may also want to tag developers on other teams if the changes cover more than one application.")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"Depending on the type of work done, you may need a product person to review and / or a developer to review. See ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"em",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Code%20Review%20Norms.md"}},"Code Review Norms")," for more information on how we do code reviews.")),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Use Zenhub to ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"connect")," pull request with a ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"linked issue"))),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"If you use the Zenhub Chrome ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"em",props:{href:"https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd"}},"extension"),', there will be a "Connect this pull request with an existing issue" section at the bottom of Github\'s create pull request UI. You can click the "Connect with an issue" button to link the PR to the original issue in Zenhub.')),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"765px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/d16a8f63d7f7ad20701141bbe9190083/bbb77/connect-issue.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"10.038610038610038%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"PR deployment list",title:"PR deployment list",src:"/static/d16a8f63d7f7ad20701141bbe9190083/bbb77/connect-issue.png",srcSet:"/static/d16a8f63d7f7ad20701141bbe9190083/a2ead/connect-issue.png 259w,\n/static/d16a8f63d7f7ad20701141bbe9190083/6b9fd/connect-issue.png 518w,\n/static/d16a8f63d7f7ad20701141bbe9190083/bbb77/connect-issue.png 765w",sizes:"(max-width: 765px) 100vw, 765px",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px"},loading:"lazy"})))),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Change status")," of the ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"linked issue")," to ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"validate"))),o.a.createElement("h2",{id:"run-tests-and-compliance-scans"},"Run tests and compliance scans"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Jenkins")," automatically ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"builds")," and ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"runs all tests")," your feature branch:",o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"when the pull request is created"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"after a pull request is created when the feature branch is updated"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Test results are displayed on the pull request page")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"699px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/4faf58036ea7db547dd9a3340a594242/3fe45/test-results.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"16.988416988416986%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"PR deployment list",title:"PR deployment list",src:"/static/4faf58036ea7db547dd9a3340a594242/3fe45/test-results.png",srcSet:"/static/4faf58036ea7db547dd9a3340a594242/a2ead/test-results.png 259w,\n/static/4faf58036ea7db547dd9a3340a594242/6b9fd/test-results.png 518w,\n/static/4faf58036ea7db547dd9a3340a594242/3fe45/test-results.png 699w",sizes:"(max-width: 699px) 100vw, 699px",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px"},loading:"lazy"})))),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"See ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"em",props:{href:"/getting-started/common-tasks/test"}},"Run Tests")," to run these tests locally")),o.a.createElement("h2",{id:"manually-test-change"},"Manually test change"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Manual testing can involve some separate things:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Making sure the functionality works in the web browsers users are most likely to use"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Run the code on production-like environment. This could be done by spinning up a cloud instance that resembles production, or launching a container that is production like (such as a Docker image, etc.)"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"See if there are there any bugs or unexpected nuisances that users might encounter"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Does it meet the requirements?")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"em"},"The person making the change is responsible")," for ensuring the change is adequately tested. Testing can include automated tests or manual testing by stakeholders on the review instance or staging build.")),o.a.createElement("h3",{id:"review-instance-automatic-creation"},"Review instance automatic creation"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Jenkins")," automatically ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"deploys")," two remote ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"review instances")," of a ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"feature branch")," when a pull request is created:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},"an instance that just includes static pages content deployed by ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"va-bot"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},"an instance that includes static pages and the VA.gov client application deployed by ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"va-vfs-bot")),o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"Example of deployment links:")),o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"709px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/82df6872c5a0578f1ad667636438ad90/4d08a/PR-deployment-list.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.25482625482626%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"PR deployment list",title:"PR deployment list",src:"/static/82df6872c5a0578f1ad667636438ad90/4d08a/PR-deployment-list.png",srcSet:"/static/82df6872c5a0578f1ad667636438ad90/a2ead/PR-deployment-list.png 259w,\n/static/82df6872c5a0578f1ad667636438ad90/6b9fd/PR-deployment-list.png 518w,\n/static/82df6872c5a0578f1ad667636438ad90/4d08a/PR-deployment-list.png 709w",sizes:"(max-width: 709px) 100vw, 709px",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px"},loading:"lazy"})))))),o.a.createElement(r.MDXTag,{name:"p",components:n},"After a pull request is created, ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Jenkins")," will automatically ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"rebuild")," these instances when feature branch ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"changes are pushed")),o.a.createElement(r.MDXTag,{name:"p",components:n},"  ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"You will need your browser configured to access the vetsgov-internal domain via the SOCKS proxy. Please see the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"em",props:{href:"/getting-started/internal-tools"}},"2. Access internal tools")," for detailed instructions.")),o.a.createElement("h3",{id:"review-instance-manual-creation"},"Review instance manual creation"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Jenkins")," can be ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"manually triggered")," to build a ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"review instance"),"."),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Visit ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/vets-review-instance-deploy/"}},"http://jenkins.vetsgov-internal/job/vets-review-instance-deploy/")," and log in."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},'Select "Build with Parameters"'),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Specify the branch names for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"api_branch")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"web_branch"),". These branches will be deployed together with the review instance."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"When the process is completed, the URL for the review instance will be provided at the end of the output logs.")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"A Jenkins job will run periodically and remove review instances for which the source branches no longer exist. To ensure that your instance is cleaned up appropriately, just delete the branch from the origin repository.")),o.a.createElement("h2",{id:"peer-review-and-merge"},"Peer review and merge"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Get at least one ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"pull request approval")," from a peer"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"It is recommended not to merge at the end of the day or right before the weekend unless necessary."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.blog/2016-04-01-squash-your-commits/"}},"Squash your commits")," and ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"merge")," into ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"master")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Delete")," pull request branch")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"See our team's ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"em",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Code%20Review%20Norms.md"}},"code review norms")," for details on how code review work and what needs to be checked.")))},t}(o.a.Component),l={}},"3dLD":function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var t=a("q1tI"),o=a.n(t),r=a("8FPV"),s=(a("gu/5"),a("eoYm"),a("v9g0"),a("pJf4"),a("Yk4M")),m=a("Wbzz");function c(){return o.a.createElement(m.StaticQuery,{query:"157057713",render:function(e){return o.a.createElement(i,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:s})}function l(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(m.Link,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function i(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(c,null)):o.a.createElement(l,{item:e,key:e.name})}))):null}var p=a("MEl4"),g=a.n(p);function u(e){var n=e.location,a=g.a.sections.find((function(e){return n.pathname.includes(e.href)}));return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(i,{items:a.items}))):null}function d(e){var n=e.children,a=e.location;return o.a.createElement(r.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(u,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}},Yk4M:function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-review-mdx-9e4784874c175e3ca7a8.js.map