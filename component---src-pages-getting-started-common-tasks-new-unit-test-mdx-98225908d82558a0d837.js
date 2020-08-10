(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n("q1tI"),i=n.n(a),r=n("8FPV"),o=n("Wbzz");function s(){return i.a.createElement(o.StaticQuery,{query:"4277382034",render:function(e){return i.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function m(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(o.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(m,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},a&&i.a.createElement(m,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(s,null)):i.a.createElement(m,{item:e,key:e.name})}))):null}var c=n("MEl4"),d=n.n(c);function u(e){var t=e.location,n=d.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(l,{items:n.items}))):null}function p(e){var t=e.componentToMatch;return i.a.createElement(o.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?i.a.createElement(h,{item:{name:e.node.context.name}}):""}))}})}function h(e){var t=e.item,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return i.a.createElement(o.Link,{to:n},"Edit this page on GitHub")}function b(e){var t=e.pathname.split("/");return i.a.createElement(p,{componentToMatch:t[3]})}var f=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function j(e){var t=e.location,n="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+f(t)+function(e){var t=f(e),n=d.a.sections.find((function(e){return t.includes(e.href)})),a=d.a.sections.find((function(e){return e.href===t}));if(null==a?void 0:a.indexmdx)return"/index";if((null==n?void 0:n.items)&&n.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return i.a.createElement(o.Link,{to:n},"Edit this page on GitHub")}function x(e){var t=e.location;return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("br",null),i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return i.a.createElement(b,{pathname:t})}return i.a.createElement(j,{location:e})}(t)))}function O(e){var t=e.children,n=e.location;return i.a.createElement(r.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(u,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(x,{location:n}))))}},j4L8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),r=n("3dLD"),o={},s={_frontmatter:o},m=r.a;function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(m,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"writing-a-unit-test"},"Writing a unit test"),Object(i.mdx)("p",null,"All new code that is added to ",Object(i.mdx)("inlineCode",{parentName:"p"},"vets-website")," should be unit tested and unit tests should cover at least 75% of code paths. Write unit tests as you build to make sure your form (or other component) is behaving as you expect and to help guard against future bugs."),Object(i.mdx)("p",null,"For example, you might create a unit test file for each page in a form and then test the following scenarios:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"The correct number of inputs show up when you render the page."),Object(i.mdx)("li",{parentName:"ul"},"The correct number of fields display validation errors if you submit without entering any information."),Object(i.mdx)("li",{parentName:"ul"},"Any conditional logic on the page displays under the correct conditions.")),Object(i.mdx)("h2",{id:"unit-test-overview"},"Unit test overview"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"The ",Object(i.mdx)("inlineCode",{parentName:"li"},"vets-website")," repo uses:",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://mochajs.org/"}),"Mocha")," for running unit tests"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://chaijs.com/"}),"Chai")," for test assertions"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://airbnb.io/enzyme/"}),"Enzyme")," for mounting and inspecting React components"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://sinonjs.org/"}),"Sinon")," for stubs and spies"))),Object(i.mdx)("li",{parentName:"ul"},"Unit tests are ",Object(i.mdx)("strong",{parentName:"li"},"collocated with the application folder")," in a test directory that matches the application directory structure:")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"- 📂 src\n  - 📂 my-application\n    - 📂 components\n      - MyComponent.jsx\n    - 📂 tests\n      - 📂 components\n        - MyComponent.unit.spec.jsx\n")),Object(i.mdx)("p",null,"Mocha runs any ",Object(i.mdx)("em",{parentName:"p"},"file_name"),".unit.spec.js file located in the ",Object(i.mdx)("inlineCode",{parentName:"p"},"/src")," folder. This file is usually located in a test directory close to the code being tested."),Object(i.mdx)("p",null,Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/getting-started/common-tasks/test"}),"Run the test")," locally through npm script commands, during the Jenkins build (Unit), and after merging to master."),Object(i.mdx)("h2",{id:"unit-test-conventions"},"Unit test conventions"),Object(i.mdx)("p",null,"Use the following conventions when writing a unit test."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport { expect } from 'chai';\nimport { shallow } from 'enzyme';\nimport MyComponent from '../../components/MyComponent';\n\ndescribe('my-application', () => {\n  describe('MyComponent', () => {\n    it('renders privacy act disclosure when state.show is true', () => {\n        const wrapper = shallow(<MyComponent />);\n        ...\n        expect(someCondition).to.be.true;\n\n        wrapper.unmount();\n    })\n  });\n});\n")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Use ",Object(i.mdx)("inlineCode",{parentName:"li"},"describe")," to organize tests by application and feature. Two levels is adequate depending on the size of the application being tested."),Object(i.mdx)("li",{parentName:"ul"},"Use ",Object(i.mdx)("inlineCode",{parentName:"li"},"it")," to describe the unit test:",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Use active voice."),Object(i.mdx)("li",{parentName:"ul"},"Describe the behavior in terms specific to the unit."),Object(i.mdx)("li",{parentName:"ul"},"Do not abstract the test description with business logic."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Recommended"),":",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"it('truncates the address property when it is longer than 15 characters')")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"it('renders an error when props.errors contains at least one item')")))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Not recommended"),":",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"it('shortens the address when the user has a long address')")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"it('shows an error when the user is not logged in')")))),Object(i.mdx)("li",{parentName:"ul"},"Use Enzyme's ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://airbnb.io/enzyme/docs/api/shallow.html"}),"shallow")," instead of ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://airbnb.io/enzyme/docs/api/mount.html"}),"mount")," when possible to test components."),Object(i.mdx)("li",{parentName:"ul"},"Always ",Object(i.mdx)("inlineCode",{parentName:"li"},"unmount")," components at the end of the test.")))),Object(i.mdx)("h2",{id:"unit-tests-for-forms-pages"},"Unit tests for forms pages"),Object(i.mdx)("p",null,"Use the following guidelines when writing a unit test for forms pages."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { DefinitionTester } from 'platform/testing/unit/schemaform-utils';\n\ndescribe('MyForm FormID', () => {\n\nconst {\n    schema,\n    uiSchema,\n    arrayPath,\n  } = formConfig.chapters.myFormChapter.pages.myFormPage;\n\n  it('renders myFormPage form', () => {\n    const form = mount(\n      <DefinitionTester\n        arrayPath={arrayPath}\n        pagePerItemIndex={0}\n        definitions={formConfig.defaultDefinitions}\n        schema={schema}\n        data={initialData}\n        formData={initialData}\n        uiSchema={uiSchema}\n      />,\n    );\n\n    expect(form.find('select').length).to.equal(6); // from/to months, days; country, state\n    expect(form.find('input').length).to.equal(4); // facility name, from/to years, city\n    form.unmount();\n  });\n")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Organize forms config tests by page."),Object(i.mdx)("li",{parentName:"ul"},"Use ",Object(i.mdx)("inlineCode",{parentName:"li"},"<DefinitionTester />")," to render form configs for testing."),Object(i.mdx)("li",{parentName:"ul"},"Test at least the following:",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Number of each type of input is rendered (example above)"),Object(i.mdx)("li",{parentName:"ul"},"Any conditional display logic on the page"),Object(i.mdx)("li",{parentName:"ul"},"All field level validation errors"))),Object(i.mdx)("li",{parentName:"ul"},"Use the other ",Object(i.mdx)("inlineCode",{parentName:"li"},"schemaform-utils")," for filling out form data:")),Object(i.mdx)("blockquote",null,Object(i.mdx)("ul",{parentName:"blockquote"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"fillData()")," - Enzyme helper that fires a change event with a value for an element at the given selector")),Object(i.mdx)("pre",{parentName:"blockquote"},Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"fillData(\n  form, // mounted <DefinitionTester />\n  'select#root_blah' // selector\n  'USA', // value\n);\n"))),Object(i.mdx)("blockquote",null,Object(i.mdx)("ul",{parentName:"blockquote"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"fillDate()")," - Enzyme helper that fills in a date field with data from the given date string")),Object(i.mdx)("pre",{parentName:"blockquote"},Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"fillDate(\n  form, // mounted <DefinitionTester />\n  'select#root_blah' // selector\n  '1950-1-3', // value\n);\n"))),Object(i.mdx)("blockquote",null,Object(i.mdx)("ul",{parentName:"blockquote"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"selectCheckbox()")," - Enzyme helper that fires a change event with a value for a checkbox at the given name"))),Object(i.mdx)("h2",{id:"example-unit-tests"},"Example unit tests"),Object(i.mdx)("p",null,"VSP provides helper utilities to make writing tests easier. The following example unit tests illustrate some of these helpers. You can find these unit tests in the ",Object(i.mdx)("inlineCode",{parentName:"p"},"vets-website")," repo in the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/vic-v2/tests/config/veteranInformation.unit.spec.jsx"}),"veteranInformation.unit.spec.jsx")," file."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport { expect } from 'chai';\nimport sinon from 'sinon';\nimport { mount } from 'enzyme';\n\nimport { DefinitionTester, fillData, selectRadio, fillDate } from '../../../../platform/testing/unit/schemaform-utils.jsx';\nimport formConfig from '../config/form.js';\n\ndescribe('VIC veteran information', () => {\n  const { schema, uiSchema } = formConfig.chapters.veteranInformation.pages.veteranInformation;\n  it('should render', () => {\n    const form = mount(\n      <DefinitionTester\n        definitions={formConfig.defaultDefinitions}\n        schema={schema}\n        data=\\{{}}\n        uiSchema={uiSchema}\n        />\n    );\n\n    expect(form.find('input').length).to.equal(7);\n    expect(form.find('select').length).to.equal(4);\n  });\n\n  ...\n});\n")),Object(i.mdx)("p",null,"Helpers are imported from ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/unit/schemaform-utils.jsx"}),Object(i.mdx)("inlineCode",{parentName:"a"},"schemaform-utils.jsx")),". The ",Object(i.mdx)("inlineCode",{parentName:"p"},"DefinitionTester")," is a component you can use to simulate a page being rendered without having to set up a whole form application with all the dependencies."),Object(i.mdx)("p",null,"This example uses ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"http://airbnb.io/enzyme/"}),"Enzyme")," and mounts a ",Object(i.mdx)("inlineCode",{parentName:"p"},"DefinitionTester")," component that is passed in the schema information from the ",Object(i.mdx)("inlineCode",{parentName:"p"},"veteranInformation")," page as props. The test checks to make sure there are 7 ",Object(i.mdx)("inlineCode",{parentName:"p"},"input")," and 4 ",Object(i.mdx)("inlineCode",{parentName:"p"},"select")," entries on the page. When there are errors with definitions on the form pages, you will often see inputs not being rendered, so this helps check for that scenario."),Object(i.mdx)("p",null,"The next test in the file checks to see that the right fields are marked as required:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"  it('should not submit without required info', () => {\n    const onSubmit = sinon.spy();\n    const form = mount(\n      <DefinitionTester\n        onSubmit={onSubmit}\n        definitions={formConfig.defaultDefinitions}\n        schema={schema}\n        data=\\{{}}\n        uiSchema={uiSchema}\n        />\n    );\n\n    form.find('form').simulate('submit');\n\n    expect(form.find('.usa-input-error').length).to.equal(6);\n    expect(onSubmit.called).to.be.false;\n  });\n")),Object(i.mdx)("p",null,"This test simulates a form submission and then counts the number of error elements on the page, which is expected to be 6. The test checks that the existing validation rules are still generally in place and that additional rules haven't been added."),Object(i.mdx)("p",null,"Finally, this example test fills in all the data and submits the form:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"  it('should submit with all info filled in', () => {\n    const onSubmit = sinon.spy();\n    const form = mount(\n      <DefinitionTester\n        onSubmit={onSubmit}\n        definitions={formConfig.defaultDefinitions}\n        schema={schema}\n        data={{}}\n        uiSchema={uiSchema}\n        />\n    );\n\n    fillData(form, 'input#root_veteranFullName_first', 'test');\n    fillData(form, 'input#root_veteranFullName_last', 'test2');\n    fillData(form, 'input#root_veteranSocialSecurityNumber', '233224343');\n    selectRadio(form, 'root_gender', 'F');\n    fillDate(form, 'root_veteranDateOfBirth', '1920-01-04');\n    fillData(form, 'select#root_serviceBranch', 'F');\n    form.find('form').simulate('submit');\n\n    expect(form.find('.usa-input-error').length).to.equal(0);\n    expect(onSubmit.called).to.be.true;\n  });\n")),Object(i.mdx)("p",null,"Helper functions make the correct Enzyme calls to fill in data, so there isn't a lot of repeated code. The helpers are documented in the ",Object(i.mdx)("inlineCode",{parentName:"p"},"schemaform-utils.jsx")," file. The helpers fill in data and then check that the right number of inputs appear on the page after that change. Some of the tests also directly test logic in ",Object(i.mdx)("inlineCode",{parentName:"p"},"depends")," functions on the page configuration. "),Object(i.mdx)("h2",{id:"other-utilities"},"Other utilities"),Object(i.mdx)("p",null,"These utilities can be found in ",Object(i.mdx)("inlineCode",{parentName:"p"},"platform/testing/unit/helpers.js"),":"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"mockFetch()")," -  A function to mock the global fetch function and return the value provided in returnVal",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"resetFetch()")," - Resets the mocked fetch set with ",Object(i.mdx)("inlineCode",{parentName:"li"},"mockFetch()")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"mockApiRequest()")," - Decorated ",Object(i.mdx)("inlineCode",{parentName:"li"},"mockFetch()")," that adds typical API headers to ",Object(i.mdx)("inlineCode",{parentName:"li"},"returnVal")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"mockMultipleApiRequests()")," - Decorated ",Object(i.mdx)("inlineCode",{parentName:"li"},"mockFetch()")," that mocks a fetch call for each response object in an array")))),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"mockFetch(\n  new Error('fake error'), // returnVal\n  false, // shouldResolve: false returns rejected promise. default is true\n);\n")),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Note:")," This utility can be found in ",Object(i.mdx)("inlineCode",{parentName:"p"},"platform/utilities/storage/localstorage.js"),"."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"getLocalStorage()")," - convenience accessor for local storage and implements a fallback. Useful for stubbing localstorage.")),Object(i.mdx)("h2",{id:"legacy-tools"},"Legacy tools"),Object(i.mdx)("p",null,"While ReactTestUtils and SkinDeep are used in many of our tests, use Enzyme for any updated or new tests."),Object(i.mdx)("h2",{id:"libraries"},"Libraries"),Object(i.mdx)("p",null,"Unit tests use the following libraries:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://mochajs.org/"}),"mocha.js"),": Test framework."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.chaijs.com/"}),"chai.js"),": BDD / TDD assertion library."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/domenic/chai-as-promised"}),"chai-as-promised"),": Extends Chai with assertions about promises."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://sinonjs.org/"}),"sinon.js"),": Standalone test spies, stubs and mocks."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://airbnb.io/enzyme/"}),"enzyme"),": Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.npmjs.com/package/enzyme-adapter-react-16"}),"enzyme-adapter-react-16"),": Enzyme React 16 integration."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.npmjs.com/package/react-dom"}),"react-dom"),": React DOM Library needed for testing React Components."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://reactjs.org/docs/test-utils.html"}),"react-dom/test-utils"),": Test utilities for React DOM."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.npmjs.com/package/react-test-renderer"}),"react-test-renderer"),": This package provides an experimental React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://airbnb.io/enzyme/docs/guides/jsdom.html"}),"jsdom"),": A JavaScript implementation of the WHATWG DOM and HTML standards, for use with node.js."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.npmjs.com/package/mocha-junit-reporter"}),"mocha-junit-reporter"),": Produces JUnit-style XML test results. This is used specifically for Jenkins so it can output and track test results in its system."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/lennym/choma"}),"choma"),": Random execution order for mocha suites.")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-unit-test-mdx-98225908d82558a0d837.js.map