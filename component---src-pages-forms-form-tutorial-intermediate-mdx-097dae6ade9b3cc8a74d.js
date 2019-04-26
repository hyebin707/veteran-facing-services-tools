(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{293:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return p}),a.d(n,"_frontmatter",function(){return u});a(42);var t=a(43),o=a.n(t),i=a(3),r=a.n(i),s=a(2),m=a.n(s),c=a(4),l=a(345),d={},p=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=l.a,a}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,a),components:n},m.a.createElement("h1",{id:"intermediate-tutorial"},"Intermediate tutorial"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Previous: ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./form-tutorial-basic"}},"Basic tutorial")),m.a.createElement(c.MDXTag,{name:"p",components:n},"Now that you've gone through and created a really simple form using the tutorial, let's take a look at how to handle some common use cases on forms."),m.a.createElement("h2",{id:"form-validation"},"Form validation"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Because our forms are based on JSON Schema, you can rely on the built in types and pattern property to do a lot of your validation. However, sometimes you need validation rules that go beyond what JSON Schema offers. To write custom validation, we have a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," helper:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:validation': [\n        (errors, field) => {\n          if (field && field.startsWith('bad')) {\n            errors.addError(\"Sorry, you can't start this field with 'bad'\");\n          }\n        }\n      ]\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," takes an array of functions, each of which is passed an errors object and the field data (plus some other parameters). So in the above example, if a user puts 'badString' in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField"),", then the form will display a validation error with the message passed in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"addError()"),"."),m.a.createElement(c.MDXTag,{name:"p",components:n},"One thing to note is that you can add ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," on any field or object in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", which allows you to validate groups of fields together:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    confirmEmail: {\n      'ui:title': 'Confirm email'\n    },\n    'ui:validation': [\n      (errors, field) => {\n        if (field.email !== field.confirmEmail) {\n          errors.confirmEmail.addError('Sorry, your emails must match');\n        }\n      }\n    ]\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      email: {\n        type: 'string'\n      },\n      confirmEmail: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"Since we moved the validation array up to the root of ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", the field data it is passed is an object containing both ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"confirmEmail"),", and we can set validation errors on either field."),m.a.createElement("h3",{id:"custom-validation-error-messages"},"Custom validation error messages"),m.a.createElement(c.MDXTag,{name:"p",components:n},"In addition to the above custom validation, you can also customize the messages for the built in JSON Schema validation. For example, if I have some pattern validation, I can set an understandable message:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:errorMessages': {\n        pattern: 'Sorry, you must enter all digits'\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        pattern: '^d+$'\n      }\n    }\n  }\n}\n")),m.a.createElement("h2",{id:"conditional-required-fields"},"Conditional required fields"),m.a.createElement(c.MDXTag,{name:"p",components:n},"In some cases you may want to have fields be required only under certain conditions. To handle that, you can use the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:required")," helper:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n    },\n    myOtherField: {\n      'ui:title': 'My field',\n      'ui:required': (formData) => formData.myField === 'test'\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n      }\n      myOtherField: {\n        type: 'string',\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"In the above config, ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myOtherField")," will be required if ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField"),' equals "test". The ',m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formData")," parameter contains all of the form data, across all pages, so your conditional logic can be based on any other data in the form."),m.a.createElement("h2",{id:"conditionally-displayed-fields"},"Conditionally displayed fields"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Often when building forms you'll need to hide and show fields based on form data or other information. Our form system has three ways of doing so."),m.a.createElement("h4",{id:"expand-under-fields"},"Expand under fields"),m.a.createElement(c.MDXTag,{name:"p",components:n},'A common pattern is to expand some fields "underneath" others, when a user enters information in a field that requires more information to be collected:'),m.a.createElement(c.MDXTag,{name:"p",components:n},m.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/acb74d8d8ce49a5745002e38ca6fb0a4/ef8bc/expand_under.png",style:{display:"block"},target:"_blank",rel:"noopener"},m.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"534px"}},m.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.1498127340824%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),m.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"expand under",title:"",src:"/veteran-facing-services-tools/static/acb74d8d8ce49a5745002e38ca6fb0a4/ef8bc/expand_under.png",srcSet:"/veteran-facing-services-tools/static/acb74d8d8ce49a5745002e38ca6fb0a4/f4a45/expand_under.png 259w,\n/veteran-facing-services-tools/static/acb74d8d8ce49a5745002e38ca6fb0a4/ef0f6/expand_under.png 518w,\n/veteran-facing-services-tools/static/acb74d8d8ce49a5745002e38ca6fb0a4/ef8bc/expand_under.png 534w",sizes:"(max-width: 534px) 100vw, 534px"})))),m.a.createElement(c.MDXTag,{name:"p",components:n},"To do that, you can use the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"expandUnder")," option:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    },\n    myConditionalField: {\n      'ui:title': 'My conditional field',\n      'ui:options': {\n        expandUnder: 'myField'\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean',\n      }\n      myOtherField: {\n        type: 'string',\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"In the above example, ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myConditionalField")," will display whenever ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField")," has a truthy value. You can add this to mutiple fields and all of them will be grouped under the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"expandUnder")," field. Note, however, that if any of these hidden fields are required when visible, you'll have to use ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:required")," to make sure they're not required when they're not displayed."),m.a.createElement("h3",{id:"conditionally-hidden-fields"},"Conditionally hidden fields"),m.a.createElement(c.MDXTag,{name:"p",components:n},"If you just need to hide or show a field, without the expand under treatment, you can use ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"hideIf"),":"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    },\n    myConditionalField: {\n      'ui:title': 'My conditional field',\n      'ui:options': {\n        hideIf: (formData) => formData.myField !== true\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean'\n      }\n      myOtherField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"In the above example, ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myConditionalField")," is hidden when ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField")," is not true (meaning it's false or undefined)."),m.a.createElement("h2",{id:"conditional-pages"},"Conditional pages"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Another situation you may encounter is needing to make an entire page of the form conditional. You can do that with the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"depends")," property:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  depends: (form) => form.fieldOnAnotherPage !== 'test',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean'\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"The depends function is passed the current form data, so you can check different conditions and return false if want to skip a page. Note that you want to make sure you're checking data a user would enter before potentially reaching this page, otherwise they won't ever see it."),m.a.createElement("h2",{id:"view-only-data"},"View-only data"),m.a.createElement(c.MDXTag,{name:"p",components:n},"In some cases, you may have fields that you don't need to submit along with the form data. A confirmation email field, for example. In other cases you may also want to group fields into objects but not have that grouping reflected in the submitted data. This can be useful if you need to conditionally hide a group of fields and don't want to write hideIf functions every individual field."),m.a.createElement(c.MDXTag,{name:"p",components:n},"To keep a field from being submitted, you can prefix it with ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),":"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    'view:confirmEmail': {\n      'ui:title': 'Confirm email'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      email: {\n        type: 'string'\n      },\n      'view:confirmEmail': {\n        type: 'string'\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"Since we've prefixed ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"confirmEmail")," with ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),", that field will be removed before submitting the completed form."),m.a.createElement(c.MDXTag,{name:"p",components:n},"If you prefix an object with ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),", something slightly different will happen:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    'view:confirmEmail': {\n      'ui:title': 'Confirm email'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      'view:emails': {\n        email: {\n          type: 'string'\n        },\n        'confirmEmail': {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"In this case, the form data that's submitted when a user completes a form would be:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  email: 'test@test.com',\n  confirmEmail: 'test@test.com'\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"If we had left off the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:")," prefix it would be:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  emails: {\n    email: 'test@test.com',\n    confirmEmail: 'test@test.com'\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"That should get you started with some of the common validation and conditional field scenarios. Many of the options above have extra parameters or options that may help with some less common scenarios, so make sure to check the ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/forms/docs/spec"}},"form config specification")," for a full picture of all the options offered."),m.a.createElement(c.MDXTag,{name:"p",components:n},"Next: ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./form-tutorial-advanced"}},"Advanced tutorial")))},n}(m.a.Component),u={}},338:function(e,n,a){"use strict";a.d(n,"b",function(){return l});var t=a(2),o=a.n(t),i=a(13),r=a.n(i),s=a(68),m=a.n(s);a.d(n,"a",function(){return m.a});a(340);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},339:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},340:function(e,n,a){var t;e.exports=(t=a(342))&&t.default||t},341:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},342:function(e,n,a){"use strict";a.r(n);var t=a(18),o=a.n(t),i=a(2),r=a.n(i),s=a(13),m=a.n(s),c=a(94),l=a(9),d=function(e){var n=e.location,a=l.default.getResourcesForPathnameSync(n.pathname);return a?r.a.createElement(c.a,o()({location:n,pageResources:a},a.json)):null};d.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},n.default=d},343:function(e,n,a){"use strict";var t=a(3),o=a.n(t),i=a(341),r=a(2),s=a.n(r),m=a(13),c=a.n(m),l=a(346),d=a.n(l),p=a(338),u=(a(17),a(133),a(134),a(339)),h=a.n(u),g=a(18),f=a.n(g),v=a(347),y=a.n(v),b=function(e){function n(n){var a;return(a=e.call(this,n)||this).state=h.a.sections.reduce(function(e,n){var a;return f()(((a={})[n.id]=!1,a),e)},{}),a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props,a=n.open,t=n.onClose,o=n.location;return s.a.createElement("div",{className:y()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},s.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:t,"aria-label":"Close this menu"},s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(n){return s.a.createElement("div",{key:n.id},s.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},s.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[n.id]=!e.state[n.id],a))},"aria-expanded":e.state[n.id]?"true":"false","aria-controls":"nav-"+n.id},n.name)),s.a.createElement("div",{id:"nav-"+n.id,"aria-hidden":e.state[n.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},s.a.createElement("ul",{className:"site-c-mobile-nav-list"},s.a.createElement("li",{className:"site-c-mobile-nav-list__item"},s.a.createElement(p.a,{className:y()("site-c-mobile-nav-list__link",{current:o.pathname===n.href}),to:n.href},"Overview")))))})))},n}(s.a.Component),E=function(e){function n(n){var a;return(a=e.call(this,n)||this).state={navOpen:!1},a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props.location;return s.a.createElement("div",null,s.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),s.a.createElement("header",{className:"site-c-header",role:"banner"},s.a.createElement("div",{className:"site-l-wrapper"},s.a.createElement("div",{className:"site-c-header__masthead"},s.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},s.a.createElement("em",{className:"site-c-header__logo-text"},s.a.createElement(p.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},s.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",s.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),s.a.createElement("div",{className:"site-c-header__utility-links"},s.a.createElement("div",{id:"search-container",className:"site-search-container"},s.a.createElement("i",{className:"fas fa-search search-icon"}),s.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),s.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),s.a.createElement("nav",{className:"site-c-header__nav"},s.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return s.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},s.a.createElement(p.a,{className:"site-c-header__nav-item__link "+(n.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),s.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},s.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),s.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&s.a.createElement("div",{className:"site-c-overlay is-visible"}),s.a.createElement(b,{location:n,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},n}(s.a.Component),w=(a(348),function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var a=n.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,n=e.children,a=e.location;return s.a.createElement(p.b,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(E,{location:a}),n)},data:i})},n}(s.a.Component));w.propTypes={children:c.a.node.isRequired};n.a=w},344:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},345:function(e,n,a){"use strict";var t=a(2),o=a.n(t),i=a(13),r=a.n(i),s=a(343),m=(a(133),a(134),a(135),a(17),a(344)),c=a(338);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function d(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var p=a(339),u=a.n(p);function h(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:a.items}))):null}function g(e){var n=e.children,a=e.location;return o.a.createElement(s.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return g}),g.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-intermediate-mdx-097dae6ade9b3cc8a74d.js.map