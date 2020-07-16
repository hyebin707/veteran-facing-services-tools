(window.webpackJsonp=window.webpackJsonp||[]).push([[21,50],{"/IMz":function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return r})),o.d(n,"default",(function(){return m}));var t=o("zLVn"),a=(o("q1tI"),o("7ljp")),i=o("3dLD"),r={},s={_frontmatter:r},c=i.a;function m(e){var n=e.components,o=Object(t.a)(e,["components"]);return Object(a.mdx)(c,Object.assign({},s,o,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"advanced-tutorial"},"Advanced tutorial"),Object(a.mdx)("p",null,"Previous: ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/forms/form-tutorial-intermediate"}),"Intermediate tutorial")),Object(a.mdx)("h2",{id:"using-common-definitions"},"Using Common Definitions"),Object(a.mdx)("p",null,"All of our forms share schemas with the back-end through ",Object(a.mdx)("inlineCode",{parentName:"p"},"vets-json-schema"),", the repository where we store JSON Schemas for validating data submitted to a ",Object(a.mdx)("inlineCode",{parentName:"p"},"vets-api")," API endpoint. Assuming you've created one of those schemas, the next step is to incorporate that into your form, along with other common definitions we've built."),Object(a.mdx)("h2",{id:"adding-your-schema"},"Adding your schema"),Object(a.mdx)("p",null,"Assuming you've created your form using our form scaffolding generator, you should have some commented out lines in your ",Object(a.mdx)("inlineCode",{parentName:"p"},"config/form.js")," file:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"// import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\n\n// ...code omitted...\n\n// const { } = fullSchema.properties;\n\n// const { } = fullSchema.definitions;\n")),Object(a.mdx)("p",null,"If you uncomment those lines and update the import path to match your schema's file name, you can start pulling in individual definitions and properties to use in your form. We try to use the properties from the shared schema as much as possible, since it helps keep the front-end and back-end in sync and avoid validation errors in production. For example, if you want to import an ",Object(a.mdx)("inlineCode",{parentName:"p"},"email")," field from your schema, you can do something like this:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\n\n// ...code omitted...\n\nconst {\n  email\n} = fullSchema.properties;\n\n// const { } = fullSchema.definitions;\n\nconst formConfig = {\n   // ...code omitted...\n   page1: {\n     path: 'first-page',\n     title: 'First Page',\n     uiSchema: {\n       email: {\n         'ui:title': 'My field label'\n       }\n     },\n     schema: {\n       type: 'object',\n       properties: {\n         email\n       }\n     }\n   }\n   // ...code omitted...\n};\n")),Object(a.mdx)("p",null,"Here we're using Javascript's object shorthand syntax to set the ",Object(a.mdx)("inlineCode",{parentName:"p"},"email")," property to the object from the shared schema properties. That way we know we're using the same field name and using the same definition type as what will be used by the back-end. Note that we still need to be careful that we include all the fields we need from ",Object(a.mdx)("inlineCode",{parentName:"p"},"fullSchema"),"."),Object(a.mdx)("h2",{id:"using-a-common-front-end-definition"},"Using a common front-end definition"),Object(a.mdx)("p",null,"We have a collection of common definitions and fields on the front-end for you to use in your form. Let's try using our common full name field:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\nimport fullNameUI from '../../common/schemaform/definitions/fullName';\n// ...code omitted...\n\nconst {\n  veteranFullName\n} = fullSchema.properties;\n\nconst {\n  fullName\n} = fullSchema.definitions;\n\nconst formConfig = {\n  // ...code omitted...\n  definitions: {\n    fullName\n  },\n  // ...code omitted...\n    page1: {\n      path: 'first-page',\n      title: 'First Page',\n      uiSchema: {\n        veteranFullName: fullNameUI\n      },\n      schema: {\n        type: 'object',\n        properties: {\n          veteranFullName\n        }\n      }\n    }\n   // ...code omitted...\n};\n")),Object(a.mdx)("p",null,"There are a few things going on here. One, we've pulled the ",Object(a.mdx)("inlineCode",{parentName:"p"},"fullName")," definition from ",Object(a.mdx)("inlineCode",{parentName:"p"},"fullSchema"),". JSON Schema's method of code reuse has you put definitions in a ",Object(a.mdx)("inlineCode",{parentName:"p"},"definitions")," object in the schema, then reference them with a ",Object(a.mdx)("inlineCode",{parentName:"p"},"$ref")," property, so we have to account for that on the front-end. We can do that by importing it from ",Object(a.mdx)("inlineCode",{parentName:"p"},"fullSchema.definitions")," and adding it to the ",Object(a.mdx)("inlineCode",{parentName:"p"},"definitions")," object in our form config object."),Object(a.mdx)("p",null,"Second, we've imported ",Object(a.mdx)("inlineCode",{parentName:"p"},"fullNameUI")," from our common front-end definitions. For this field, we just have some ",Object(a.mdx)("inlineCode",{parentName:"p"},"uiSchema")," configuration that sets labels and widget types. Other fields are more complex, and may require you to call a function to generate the right configuration, and possibly import something for the regular ",Object(a.mdx)("inlineCode",{parentName:"p"},"schema")," object as well."),Object(a.mdx)("p",null,"Finally, in the code you can see that we're using ",Object(a.mdx)("inlineCode",{parentName:"p"},"fullNameUI")," in the ",Object(a.mdx)("inlineCode",{parentName:"p"},"uiSchema")," object, and we're using ",Object(a.mdx)("inlineCode",{parentName:"p"},"veteranFullName")," like we used ",Object(a.mdx)("inlineCode",{parentName:"p"},"email")," previously."),Object(a.mdx)("h2",{id:"modifying-common-definitions"},"Modifying common definitions"),Object(a.mdx)("p",null,"Often you'll need to slightly modify common definitions on the front-end to change a label or some conditional logic. The way we typically do that is to use our data utilities to set values on the schema. For example, say we needed to make our ",Object(a.mdx)("inlineCode",{parentName:"p"},"veteranFullName")," field expand underneath another field:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { set } from 'platform/utilities/data';\nimport fullSchema from 'vets-json-schema/dist/VIC-schema.json';\nimport fullNameUI from '../../common/schemaform/definitions/fullName';\n// ...code omitted...\n\nconst {\n  veteranFullName\n} = fullSchema.properties;\n\nconst {\n  fullName\n} = fullSchema.definitions;\n\nconst formConfig = {\n   // ...code omitted...\n  definitions: {\n    fullName\n  },\n  // ...code omitted...\n    page1: {\n      path: 'first-page',\n      title: 'First Page',\n      uiSchema: {\n        myField: {\n          'ui:title': 'My field',\n          'ui:widget': 'yesNo'\n        },\n        veteranFullName: set('ui:options.expandUnder', 'myField', fullNameUI)\n      },\n      schema: {\n        type: 'object',\n        properties: {\n          myField: { type: 'boolean' },\n          veteranFullName\n        }\n      }\n    }\n   // ...code omitted...\n};\n")),Object(a.mdx)("p",null,"We're using one of the available data utilities to set the expandUnder value for fullNameUI in a way that doesn't modify the existing fullNameUI object. All of the data functions in ",Object(a.mdx)("inlineCode",{parentName:"p"},"platform/utilities/data")," treat objects as immutable, not modifying anything you pass in to them, so you can reuse ",Object(a.mdx)("inlineCode",{parentName:"p"},"fullNameUI")," in another spot in your form without worrying about having to remove the ",Object(a.mdx)("inlineCode",{parentName:"p"},"ui:options")," configuration we added."),Object(a.mdx)("h2",{id:"things-to-watch-out-for"},"Things to watch out for"),Object(a.mdx)("p",null,"The point of having these common definitions and sharing a schema between the front-end and back-end is to encourage consistency in our forms and to reduce errors when submitting a form to a ",Object(a.mdx)("inlineCode",{parentName:"p"},"vets-api")," endpoint. But following the guide above won't completely prevent those issues. Here are some things to keep in mind:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Since we're importing individual fields from ",Object(a.mdx)("inlineCode",{parentName:"li"},"fullSchema"),", it can be easy to miss required field rules, since we often import those directly. Make sure you're marking all the necessary fields as required in your form config."),Object(a.mdx)("li",{parentName:"ul"},"Importing individual fields makes it easy to group them in ways specific to the front-end, so make sure if you are grouping things, you're using property names prefixed with ",Object(a.mdx)("inlineCode",{parentName:"li"},"view:")," to remove that grouping before submitting.")),Object(a.mdx)("p",null,"Next: ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/forms/save-in-progress"}),"Setting up Save in Progress")))}m.isMDXComponent=!0},"1nT/":function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/emergencybanner/","context":{"source":"component","name":"EmergencyBanner"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/maintenancebanner/","context":{"source":"component","name":"MaintenanceBanner"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/telephone/","context":{"source":"component","name":"Telephone"}}}]}}}')},"3dLD":function(e,n,o){"use strict";o.d(n,"a",(function(){return j}));var t=o("q1tI"),a=o.n(t),i=o("8FPV"),r=o("1nT/"),s=o("Wbzz");function c(){return a.a.createElement(s.StaticQuery,{query:"4277382034",render:function(e){return a.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:r})}function m(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(s.Link,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,o=e.isSublist,t=void 0!==o&&o;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?a.a.createElement("li",{key:e.name},t&&a.a.createElement(m,{item:e}),!t&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},t&&a.a.createElement(m,{item:e}),!t&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(c,null)):a.a.createElement(m,{item:e,key:e.name})}))):null}var d=o("MEl4"),p=o.n(d);function u(e){var n=e.location,o=p.a.sections.find((function(e){return n.pathname.includes(e.href)}));return o?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(l,{items:o.items}))):null}var h=o("Z/Vb");function f(e){var n=e.componentToMatch;return a.a.createElement(s.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return n===e.node.context.name.toLowerCase()?a.a.createElement(g,{item:{name:e.node.context.name}}):""}))},data:h})}function g(e){var n=e.item,o="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+n.name+"/"+n.name+".mdx";return a.a.createElement(s.Link,{to:o},"Edit this page on GitHub")}function b(e){var n=e.pathname.split("/");return a.a.createElement(f,{componentToMatch:n[3]})}var x=function(e){var n=e.pathname.replace("/veteran-facing-services-tools","");return n.length>0&&"/"===n.charAt(n.length-1)&&(n=n.substring(0,n.length-1)),n};function v(e){var n=e.location,o="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+x(n)+function(e){var n=x(e),o=p.a.sections.find((function(e){return n.includes(e.href)})),t=p.a.sections.find((function(e){return e.href===n}));if(null==t?void 0:t.indexmdx)return"/index";if((null==o?void 0:o.items)&&o.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===n})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===n)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(n)+".mdx";return a.a.createElement(s.Link,{to:o},"Edit this page on GitHub")}function y(e){var n=e.location;return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("br",null),a.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var n=e.pathname.replace("/veteran-facing-services-tools","");return a.a.createElement(b,{pathname:n})}return a.a.createElement(v,{location:e})}(n)))}function j(e){var n=e.children,o=e.location;return a.a.createElement(i.a,{location:o},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(u,{location:o}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n,a.a.createElement(y,{location:o}))))}},"Z/Vb":function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/emergencybanner/","context":{"source":"component","name":"EmergencyBanner"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/maintenancebanner/","context":{"source":"component","name":"MaintenanceBanner"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/telephone/","context":{"source":"component","name":"Telephone"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-advanced-mdx-f510fe1d6a65226bb367.js.map