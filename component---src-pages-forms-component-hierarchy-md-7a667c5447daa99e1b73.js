(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n("q1tI"),i=n.n(a),r=n("8FPV"),m=n("Wbzz");function c(){return i.a.createElement(m.StaticQuery,{query:"4277382034",render:function(e){return i.a.createElement(d,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function o(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(m.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function d(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(o,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},a&&i.a.createElement(o,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(c,null)):i.a.createElement(o,{item:e,key:e.name})}))):null}var l=n("MEl4"),p=n.n(l);function s(e){var t=e.location,n=p.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(d,{items:n.items}))):null}function h(e){var t=e.componentToMatch;return i.a.createElement(m.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?i.a.createElement(b,{item:{name:e.node.context.name}}):""}))}})}function b(e){var t=e.item,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return i.a.createElement(m.Link,{to:n},"Edit this page on GitHub")}function u(e){var t=e.pathname.split("/");return i.a.createElement(h,{componentToMatch:t[3]})}var f=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function j(e){var t=e.location,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+f(t)+function(e){var t=f(e),n=p.a.sections.find((function(e){return t.includes(e.href)})),a=p.a.sections.find((function(e){return e.href===t}));if(null==a?void 0:a.indexmdx)return"/index";if((null==n?void 0:n.items)&&n.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return i.a.createElement(m.Link,{to:n},"Edit this page on GitHub")}function x(e){var t=e.location;return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("br",null),i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return i.a.createElement(u,{pathname:t})}return i.a.createElement(j,{location:e})}(t)))}function O(e){var t=e.children,n=e.location;return i.a.createElement(r.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(s,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(x,{location:n}))))}},U4b5:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return d}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),r=n("3dLD"),m={},c={_frontmatter:m},o=r.a;function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(o,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"about-the-react-component-hierarchy"},"About the React component hierarchy"),Object(i.mdx)("p",null,"The VAFS builds a React application of a form, and determines which React components to render based on the description of the form in the form configuration file."),Object(i.mdx)("h2",{id:"in-this-guide"},"In this guide"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#about-the-form-component-fields-and-widgets"}),"About the ",Object(i.mdx)("inlineCode",{parentName:"a"},"Form")," component, fields, and widgets"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#example-schema-string-object"}),"Example schema: ",Object(i.mdx)("inlineCode",{parentName:"a"},"string")," object")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#example-schema-string-with-enum-property"}),"Example schema: ",Object(i.mdx)("inlineCode",{parentName:"a"},"string")," with ",Object(i.mdx)("inlineCode",{parentName:"a"},"enum")," property")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#example-schema-object"}),"Example schema: ",Object(i.mdx)("inlineCode",{parentName:"a"},"object"))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#example-schema-arrayfield"}),"Example schema: ",Object(i.mdx)("inlineCode",{parentName:"a"},"ArrayField"))))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#field-component-props"}),"Field component props"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#about-the-onchange-field-component"}),"About the ",Object(i.mdx)("inlineCode",{parentName:"a"},"onChange")," field component")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#about-the-uischema-field-component"}),"About the ",Object(i.mdx)("inlineCode",{parentName:"a"},"uiSchema")," field component"))))),Object(i.mdx)("h2",{id:"about-the-form-component-fields-and-widgets"},"About the Form component, fields, and widgets"),Object(i.mdx)("p",null,"At the top level, RJSF uses a ",Object(i.mdx)("inlineCode",{parentName:"p"},"Form")," component to take the schema inputs and render a hierarchy of components for each field of the form:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"Fields")," generally match the ",Object(i.mdx)("inlineCode",{parentName:"li"},"type")," attribute in a ",Object(i.mdx)("inlineCode",{parentName:"li"},"schema")," object. There are object fields, array fields, number fields, boolean fields, and string fields. Except for arrays and objects, the fields render a label (via ",Object(i.mdx)("inlineCode",{parentName:"li"},"FieldTemplate"),") and a widget. To specify a particular field, set the ",Object(i.mdx)("inlineCode",{parentName:"li"},"ui:field")," property to a specific field."),Object(i.mdx)("li",{parentName:"ul"},"A ",Object(i.mdx)("em",{parentName:"li"},"widget")," is the html input element that accepts data from the user. To specify a particular widget, set the  ",Object(i.mdx)("inlineCode",{parentName:"li"},"ui:widget")," property to ",Object(i.mdx)("inlineCode",{parentName:"li"},"text"),", ",Object(i.mdx)("inlineCode",{parentName:"li"},"email"),", ",Object(i.mdx)("inlineCode",{parentName:"li"},"checkbox"),", ",Object(i.mdx)("inlineCode",{parentName:"li"},"radio"),", ",Object(i.mdx)("inlineCode",{parentName:"li"},"select"),", and ",Object(i.mdx)("inlineCode",{parentName:"li"},"textarea"),". While there are many widgets provided by RJSF, the defaults are overwritten with these versions.")),Object(i.mdx)("h3",{id:"example-schema-string-object"},"Example schema: string object"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"{\n  type: 'string'\n}\n")),Object(i.mdx)("p",null,"The two ",Object(i.mdx)("inlineCode",{parentName:"p"},"Field")," components determine which fields and widgets to render. ",Object(i.mdx)("inlineCode",{parentName:"p"},"SchemaField")," uses the two schemas the library accepts, ",Object(i.mdx)("inlineCode",{parentName:"p"},"schema")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema"),", to determine what other ",Object(i.mdx)("inlineCode",{parentName:"p"},"Field")," component to render. The example chose ",Object(i.mdx)("inlineCode",{parentName:"p"},"StringField")," because the schema type was ",Object(i.mdx)("inlineCode",{parentName:"p"},"string"),". The ",Object(i.mdx)("inlineCode",{parentName:"p"},"StringField")," component then rendered ",Object(i.mdx)("inlineCode",{parentName:"p"},"TextWidget"),", based on ",Object(i.mdx)("inlineCode",{parentName:"p"},"schema")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema"),", because the only information provided was that the field is a string (the default widget type)."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"<SchemaField>\n  <StringField>\n    <FieldTemplate>\n      <TextWidget/>\n    </FieldTemplate>\n  </StringField>\n</SchemaField>\n")),Object(i.mdx)("h3",{id:"example-schema-string-with-enum-property"},"Example schema: string with enum property"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"{\n  type: 'string',\n  enum: ['first', 'second', 'third']\n}\n")),Object(i.mdx)("p",null,"The hierarchy for this field uses ",Object(i.mdx)("inlineCode",{parentName:"p"},"SelectWidget")," instead of ",Object(i.mdx)("inlineCode",{parentName:"p"},"TextWidget"),", because ",Object(i.mdx)("inlineCode",{parentName:"p"},"StringField")," detected the ",Object(i.mdx)("inlineCode",{parentName:"p"},"enum")," property in the schema."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"<SchemaField>\n  <StringField>\n    <FieldTemplate>\n      <SelectWidget/>\n    </FieldTemplate>\n  </StringField>\n</SchemaField>\n")),Object(i.mdx)("p",null,"While in most cases a field component is responsible for rendering a label and a widget, for ",Object(i.mdx)("inlineCode",{parentName:"p"},"object")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"array")," schema types, the field component renders additional field components for each of the elements they contain."),Object(i.mdx)("h3",{id:"example-schema-object"},"Example schema: object"),Object(i.mdx)("p",null,"This is an ",Object(i.mdx)("inlineCode",{parentName:"p"},"object")," schema with two string fields."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"{\n  type: 'object',\n  properties: {\n    field1: {\n      type: 'string'\n    },\n    field2: {\n      type: 'string'\n    }\n  }\n}\n")),Object(i.mdx)("p",null,"The ",Object(i.mdx)("inlineCode",{parentName:"p"},"ObjectField")," component renders a ",Object(i.mdx)("inlineCode",{parentName:"p"},"SchemaField")," component for each of its properties. Those properties are both ",Object(i.mdx)("inlineCode",{parentName:"p"},"string")," types, so it looks like the first hierarchy, but nested."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"<SchemaField>\n  <ObjectField>\n    <SchemaField>\n      <StringField>\n        <FieldTemplate>\n          <TextWidget/>\n        </FieldTemplate>\n      </StringField>\n    </SchemaField>\n    <SchemaField>\n      <StringField>\n        <FieldTemplate>\n          <TextWidget/>\n        </FieldTemplate>\n      </StringField>\n    </SchemaField>\n  </ObjectField>\n</SchemaField>\n")),Object(i.mdx)("h3",{id:"example-schema-arrayfield"},"Example schema: ArrayField"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"ArrayField")," renders a ",Object(i.mdx)("inlineCode",{parentName:"p"},"SchemaField")," component for each item in the array. The library only uses the array field where each item is an object type schema."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      field1: {\n        type: 'string'\n      },\n      field2: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),Object(i.mdx)("h2",{id:"field-component-props"},"Field component props"),Object(i.mdx)("p",null,"In order for each component to know what to render, field components pass a collection of props down through the component hierarchy. Most are passed to widget components."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"name"),": The property name of the current field. For example, the object schema above would be named ",Object(i.mdx)("inlineCode",{parentName:"li"},"field1"),"."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"required"),": If the field is required or not (i.e. the property name is in the schema's ",Object(i.mdx)("inlineCode",{parentName:"li"},"required")," array)."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"schema"),": The schema for the specific field."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"uiSchema"),': The ui schema for this field. See "',Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#about-the-uischema-field-component"}),"About the ",Object(i.mdx)("inlineCode",{parentName:"a"},"uiSchema")," field component"),'."'),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"errorSchema"),": An object that contains the list of errors for the current field and any child properties, if the field is an array or object."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"idSchema"),": An object that contains the field IDs for the current field and any child properties. The library generates IDs for each field by joining each property name with an underscore."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"formData"),": The actual data entered for the field so far."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"onChange"),": The function that's called when data changes. See \"",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#about-the-onchange-field-component"}),"About the ",Object(i.mdx)("inlineCode",{parentName:"a"},"onChange")," field component"),'."'),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"onBlur"),": The function that's called when focus is lost on a widget.")),Object(i.mdx)("h3",{id:"about-the-onchange-field-component"},"About the onChange field component"),Object(i.mdx)("p",null,"When a user enters data, each widget calls ",Object(i.mdx)("inlineCode",{parentName:"p"},"onChange"),". Each component in the hierarchy passes an ",Object(i.mdx)("inlineCode",{parentName:"p"},"onChange")," handler to child fields. When child data changes, the component combines it with the rest of the data and calls the ",Object(i.mdx)("inlineCode",{parentName:"p"},"onChange")," prop passed to it from its parent."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"{\n  type: 'object',\n  properties: {\n    field1: {\n      type: 'string'\n    }\n  }\n}\n")),Object(i.mdx)("p",null,"In this example:"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"The user types 'a'."),Object(i.mdx)("li",{parentName:"ol"},"The ",Object(i.mdx)("inlineCode",{parentName:"li"},"TextWidget")," for field1 calls ",Object(i.mdx)("inlineCode",{parentName:"li"},"onChange")," with 'a'."),Object(i.mdx)("li",{parentName:"ol"},"The ",Object(i.mdx)("inlineCode",{parentName:"li"},"onChange")," property came from the parent ",Object(i.mdx)("inlineCode",{parentName:"li"},"ObjectField")," component, which puts 'a' in an object as ",Object(i.mdx)("inlineCode",{parentName:"li"},"field1")," (",Object(i.mdx)("inlineCode",{parentName:"li"},"{ field1: 'a' }"),"), then calls the ",Object(i.mdx)("inlineCode",{parentName:"li"},"onChange")," prop it was passed."),Object(i.mdx)("li",{parentName:"ol"},"When it reaches the top-level ",Object(i.mdx)("inlineCode",{parentName:"li"},"Form")," component, RJSF runs the JSON Schema validation and passes the results through the component hierarchy.")),Object(i.mdx)("p",null,"Similar to Redux, all state is kept in the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Form")," component, or the root of the form. All data processing and validation happens in ",Object(i.mdx)("inlineCode",{parentName:"p"},"Form"),", or is triggered by hooks provided by ",Object(i.mdx)("inlineCode",{parentName:"p"},"Form"),". The VAFS code built on top of this processes the schemas and form data in Redux, triggered by events provided by ",Object(i.mdx)("inlineCode",{parentName:"p"},"Form"),"."),Object(i.mdx)("h3",{id:"about-the-uischema-field-component"},"About the uiSchema field component"),Object(i.mdx)("p",null,"Along with the regular JSON Schema, a UI schema for UI-specific options that don't fit within the JSON Schema standard is also optionally defined for each field. The UI schema is passed to the form config file as an object, ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema"),', for each field. For more information, see "',Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/forms/about-the-schema-and-uischema-objects#understanding-the-uischema-object"}),"Understanding the ",Object(i.mdx)("inlineCode",{parentName:"a"},"uiSchema")," object"),'."'))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-forms-component-hierarchy-md-7a667c5447daa99e1b73.js.map