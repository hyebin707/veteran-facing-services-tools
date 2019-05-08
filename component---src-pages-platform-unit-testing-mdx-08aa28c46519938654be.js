(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{337:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(42);var a=t(43),o=t.n(a),r=t(3),s=t.n(r),c=t(2),m=t.n(c),p=t(4),i=t(343),l={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=i.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return m.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},m.a.createElement("h2",{id:"how-do-unit-tests-work"},"How do unit tests work?"),m.a.createElement(p.MDXTag,{name:"p",components:n},m.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},"File format"),": *.unit.spec.js"),m.a.createElement(p.MDXTag,{name:"p",components:n},m.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},"Where"),": Any *.unit.spec.js file located in the ",m.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/src")," folder. Typically located in a directory close to the code being tested."),m.a.createElement(p.MDXTag,{name:"p",components:n},m.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},"When"),": Locally through npm script commands, Jenkins build (Unit), and After merging to master"),m.a.createElement(p.MDXTag,{name:"p",components:n},m.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"}," How "),": ",m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/getting-started/common-tasks/test"}},"/getting-started/common-tasks/test")),m.a.createElement(p.MDXTag,{name:"p",components:n},m.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},"Process"),":"),m.a.createElement("div",{className:"mermaid"},'graph TB\n    A["Checks environment"] --\x3e B["Babel transpiles unit tests"];\n    B["Babel transpiles unit tests"] --\x3e C["Test files get built in the environment folder"];\n    C["Test files get built in the environment folder"] --\x3e D["CHOMA randomizes test execution order"];\n    D["CHOMA randomizes test execution order"] -- Unit tests are executed serially --\x3e F["mocha-junit-reporter generates XML report file"];\n    F["mocha-junit-reporter generates XML report file"] -- this file is used by Jenkins to trigger a failure or success --\x3e G["Jenkins will display a failure or success"];'),m.a.createElement(p.MDXTag,{name:"p",components:n},m.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},"Libraries used"),":"),m.a.createElement(p.MDXTag,{name:"ul",components:n},m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://mochajs.org/"}},"mocha.js"),": Test framework."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.chaijs.com/"}},"chai.js"),": BDD / TDD assertion library."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/domenic/chai-as-promised"}},"chai-as-promised"),": Extends Chai with assertions about promises."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://sinonjs.org/"}},"sinon.js"),": Standalone test spies, stubs and mocks."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://airbnb.io/enzyme/"}},"enzyme"),": Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.npmjs.com/package/enzyme-adapter-react-16"}},"enzyme-adapter-react-16"),": Enzyme React 16 integration."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.npmjs.com/package/react-dom"}},"react-dom"),": React DOM Library needed for testing React Components."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://reactjs.org/docs/test-utils.html"}},"react-dom/test-utils"),": Test utilities for React DOM."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.npmjs.com/package/react-test-renderer"}},"react-test-renderer"),": This package provides an experimental React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://airbnb.io/enzyme/docs/guides/jsdom.html"}},"jsdom"),": A JavaScript implementation of the WHATWG DOM and HTML standards, for use with node.js."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.npmjs.com/package/mocha-junit-reporter"}},"mocha-junit-reporter"),": Produces JUnit-style XML test results. This is used specifically for Jenkins so it can output and track test results in its system."),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/lennym/choma"}},"choma"),": Random execution order for mocha suites.")))},n}(m.a.Component),d={}},342:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},343:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),s=t.n(r),c=t(345),m=(t(133),t(134),t(135),t(17),t(342)),p=t(344);function i(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(l,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function l(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(p.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var u=t(346),d=t.n(u);function g(e){var n=e.location,t=d.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(l,{items:t.items}))):null}function h(e){var n=e.children,t=e.location;return o.a.createElement(c.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return h}),h.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-unit-testing-mdx-08aa28c46519938654be.js.map