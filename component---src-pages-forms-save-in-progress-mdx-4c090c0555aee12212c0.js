(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var a=t("q1tI"),o=t.n(a),r=t("8FPV"),s=(t("Z2Ku"),t("L9s1"),t("dRSK"),t("f3/d"),t("Yk4M")),c=t("Wbzz");function m(){return o.a.createElement(c.StaticQuery,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:s})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.Link,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function p(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(m,null)):o.a.createElement(i,{item:e,key:e.name})}))):null}var l=t("MEl4"),d=t.n(l);function u(e){var n=e.location,t=d.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return o.a.createElement(r.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(u,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}},"Pt+v":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m})),t.d(n,"_frontmatter",(function(){return i}));t("rGqo"),t("yt8O"),t("RW0V"),t("a1Th"),t("Btvt"),t("I5cv"),t("91GP");var a=t("q1tI"),o=t.n(a),r=t("6qfE"),s=t("3dLD");var c={},m=function(e){var n,t;t=e,(n=m).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var a;a=m;function m(n){var t;return(t=e.call(this,n)||this).layout=s.a,t}return m.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,t),components:n},o.a.createElement("h1",{id:"setting-up-save-in-progress"},"Setting up Save in Progress"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Previous: ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./form-tutorial-advanced"}},"Advanced tutorial")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Forms on VA.gov support the ability to save them while in progress to a user's account and resume them later. Enabling Save in Progress requires"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Configuring naming and messaging options in the ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"form config"),"."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Making the Save In Progress form retrievable on the ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"user profile")," page."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Adding links to the Save In Progress on ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"static pages"),".")),o.a.createElement("h2",{id:"form-config"},"Form config"),o.a.createElement(r.MDXTag,{name:"p",components:n},"There are several configuration options related to Save in Progress (SiP)."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const formConfig = {\n  formId: '1010ez',\n  version: 0,\n  prefillEnabled: true,\n  savedFormMessages: {\n    notFound: 'Please start over to apply for health care.',\n    noAuth: 'Please sign in again to resume your application for health care.'\n  },\n  ...\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"This is from our health care application. The most important piece of information is ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formId"),", which is the key that will be used to save the form data on the backend. Once you choose this, you can't change it in production. We also set a version, typically to 0, which can be incremented if you need to migrate form data in production."),o.a.createElement(r.MDXTag,{name:"p",components:n},"There are also a couple of messages you can set, which show up in various places on the form (primarily on the intro page)."),o.a.createElement("h2",{id:"user-profile"},"User profile"),o.a.createElement(r.MDXTag,{name:"p",components:n},"You will also need to make a couple changes in the user profile code, so that your form can show up in the list of saved forms on the account page. In ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/applications/personalization/dashboard/helpers.jsx"),", you should add your form to the four configuration objects: ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formBenefits"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formLinks"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"trackingPrefixes"),", and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sipEnabledForms"),". The information for each of these should be in your form config file."),o.a.createElement("h2",{id:"static-pages"},"Static pages"),o.a.createElement(r.MDXTag,{name:"p",components:n},'Your form will likely be linked somewhere in the static content for VA.gov. In those places, we have the ability to replace something like an "Apply now" button with a widget to resume or start over an in progress form.'),o.a.createElement(r.MDXTag,{name:"p",components:n},"In your content page, you can add front matter to set up a widget:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-yaml"}},"widgets:\n  - root: react-applicationStatus\n    timeout: 20\n    loadingMessage: Checking your application status.\n    errorMessage: <strong>We’re sorry. Something went wrong when we tried to load your saved application.</strong<br/>Please try refreshing your browser in a few minutes.\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"And somewhere in the file, where you want the widget to show up:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},'<div id="react-applicationStatus" class="static-page-widget" data-widget-type="health-care-app-status">\n  <a class="usa-button-primary va-button-primary" href="/health-care/apply/application/">Apply for Health Care Benefits</a>\n</div>\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Note that the id matches the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"root")," property in the front matter. This is the link that will show up will the Javascript code is loading or if it fails to load."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Also note the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"data-widget-type")," property. You'll need make that custom for your form and add it to the list in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/applications/static-pages/widgetTypes.js"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once that's done, you can open up the static pages entry file at ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/applications/static-pages/static-pages-entry.js")," and make your changes. Here's an example for the healh care application:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"createApplicationStatus(store, {\n  formId: '1010ez',\n  additionalText: 'You can start your online application right now.',\n  applyLink: '/health-care/apply/',\n  applyText: 'Apply for Health Care Benefits',\n  widgetType: widgetTypes.HEALTH_CARE_APP_STATUS,\n});\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"The main things to note are that the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"widgetType")," should match the one you added to the widget types list. The code block also has some configuration options for your form that should be easy to get from the form config object."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once you've got all that set up, your form should appear on the profile page:"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"742px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/c4cfadd1397d5ae008a696654cfc4997/0f2bc/saved_form.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.123552123552116%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"saved form",title:"saved form",src:"/static/c4cfadd1397d5ae008a696654cfc4997/0f2bc/saved_form.png",srcSet:"/static/c4cfadd1397d5ae008a696654cfc4997/a2ead/saved_form.png 259w,\n/static/c4cfadd1397d5ae008a696654cfc4997/6b9fd/saved_form.png 518w,\n/static/c4cfadd1397d5ae008a696654cfc4997/0f2bc/saved_form.png 742w",sizes:"(max-width: 742px) 100vw, 742px",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px"},loading:"lazy"})))),o.a.createElement(r.MDXTag,{name:"p",components:n},"Next: ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./forms/forms-in-production"}},"Forms in production")))},m}(o.a.Component),i={}},Yk4M:function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-forms-save-in-progress-mdx-4c090c0555aee12212c0.js.map