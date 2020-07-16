(window.webpackJsonp=window.webpackJsonp||[]).push([[7,50],{"0Aa0":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return c}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("3dLD"),i={},m={_frontmatter:i},s=o.a;function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.mdx)(s,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h2",{id:"add-graphs-to-mdx"},"Add Graphs to MDX"),Object(r.mdx)("h3",{id:"mermaid-library"},"Mermaid Library"),Object(r.mdx)("p",null,"To generate graphs in MDX files, we need to use the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://mermaidjs.github.io/"}),"mermaid")," library.\nWe forked the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/konsumer/gatsby-remark-graph"}),"gatsby-remark-graph")," plugin and modified it to work with MDX files.\nYou can see the contents of the modified plugin in ",Object(r.mdx)("strong",{parentName:"p"},"/plugins/remarks/gatsby-remark-mdx-mermaid/")),Object(r.mdx)("p",null,"This current file (src/pages/getting-started/add-graphs-to-mdx.mdx) is an example of how to implement graphs in MDX."),Object(r.mdx)("h3",{id:"example-code"},"Example code"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Markdown")),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{}),"```mermaid\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n```\n")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"HTML Output")),Object(r.mdx)("div",{className:"mermaid","data-processed":"true"},Object(r.mdx)("svg",Object.assign({parentName:"div"},{id:"mermaid-1594927817215",width:"503.29998779296875",xmlns:"http://www.w3.org/2000/svg",height:"166",viewBox:"0 0 503.29998779296875 166"}),Object(r.mdx)("style",{parentName:"svg"},"#mermaid-1594927817215 .label{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);color:#333}#mermaid-1594927817215 .label text{fill:#333}#mermaid-1594927817215 .node rect,#mermaid-1594927817215 .node circle,#mermaid-1594927817215 .node ellipse,#mermaid-1594927817215 .node polygon,#mermaid-1594927817215 .node path{fill:#ECECFF;stroke:#9370db;stroke-width:1px}#mermaid-1594927817215 .node .label{text-align:center}#mermaid-1594927817215 .node.clickable{cursor:pointer}#mermaid-1594927817215 .arrowheadPath{fill:#333}#mermaid-1594927817215 .edgePath .path{stroke:#333;stroke-width:1.5px}#mermaid-1594927817215 .flowchart-link{stroke:#333;fill:none}#mermaid-1594927817215 .edgeLabel{background-color:#e8e8e8;text-align:center}#mermaid-1594927817215 .edgeLabel rect{opacity:0.5}#mermaid-1594927817215 .cluster rect{fill:#ffffde;stroke:#aa3;stroke-width:1px}#mermaid-1594927817215 .cluster text{fill:#333}#mermaid-1594927817215 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);font-size:12px;background:#ffffde;border:1px solid #aa3;border-radius:2px;pointer-events:none;z-index:100}#mermaid-1594927817215 .actor{stroke:#ccf;fill:#ECECFF}#mermaid-1594927817215 text.actor>tspan{fill:#000;stroke:none}#mermaid-1594927817215 .actor-line{stroke:grey}#mermaid-1594927817215 .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:#333}#mermaid-1594927817215 .messageLine1{stroke-width:1.5;stroke-dasharray:2, 2;stroke:#333}#mermaid-1594927817215 #arrowhead path{fill:#333;stroke:#333}#mermaid-1594927817215 .sequenceNumber{fill:#fff}#mermaid-1594927817215 #sequencenumber{fill:#333}#mermaid-1594927817215 #crosshead path{fill:#333;stroke:#333}#mermaid-1594927817215 .messageText{fill:#333;stroke:#333}#mermaid-1594927817215 .labelBox{stroke:#ccf;fill:#ECECFF}#mermaid-1594927817215 .labelText,#mermaid-1594927817215 .labelText>tspan{fill:#000;stroke:none}#mermaid-1594927817215 .loopText,#mermaid-1594927817215 .loopText>tspan{fill:#000;stroke:none}#mermaid-1594927817215 .loopLine{stroke-width:2px;stroke-dasharray:2, 2;stroke:#ccf;fill:#ccf}#mermaid-1594927817215 .note{stroke:#aa3;fill:#fff5ad}#mermaid-1594927817215 .noteText,#mermaid-1594927817215 .noteText>tspan{fill:#000;stroke:none}#mermaid-1594927817215 .activation0{fill:#f4f4f4;stroke:#666}#mermaid-1594927817215 .activation1{fill:#f4f4f4;stroke:#666}#mermaid-1594927817215 .activation2{fill:#f4f4f4;stroke:#666}#mermaid-1594927817215 .mermaid-main-font{font-family:\"trebuchet ms\", verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1594927817215 .section{stroke:none;opacity:0.2}#mermaid-1594927817215 .section0{fill:rgba(102,102,255,0.49)}#mermaid-1594927817215 .section2{fill:#fff400}#mermaid-1594927817215 .section1,#mermaid-1594927817215 .section3{fill:#fff;opacity:0.2}#mermaid-1594927817215 .sectionTitle0{fill:#333}#mermaid-1594927817215 .sectionTitle1{fill:#333}#mermaid-1594927817215 .sectionTitle2{fill:#333}#mermaid-1594927817215 .sectionTitle3{fill:#333}#mermaid-1594927817215 .sectionTitle{text-anchor:start;font-size:11px;text-height:14px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1594927817215 .grid .tick{stroke:#d3d3d3;opacity:0.8;shape-rendering:crispEdges}#mermaid-1594927817215 .grid .tick text{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1594927817215 .grid path{stroke-width:0}#mermaid-1594927817215 .today{fill:none;stroke:red;stroke-width:2px}#mermaid-1594927817215 .task{stroke-width:2}#mermaid-1594927817215 .taskText{text-anchor:middle;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1594927817215 .taskText:not([font-size]){font-size:11px}#mermaid-1594927817215 .taskTextOutsideRight{fill:#000;text-anchor:start;font-size:11px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1594927817215 .taskTextOutsideLeft{fill:#000;text-anchor:end;font-size:11px}#mermaid-1594927817215 .task.clickable{cursor:pointer}#mermaid-1594927817215 .taskText.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1594927817215 .taskTextOutsideLeft.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1594927817215 .taskTextOutsideRight.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1594927817215 .taskText0,#mermaid-1594927817215 .taskText1,#mermaid-1594927817215 .taskText2,#mermaid-1594927817215 .taskText3{fill:#fff}#mermaid-1594927817215 .task0,#mermaid-1594927817215 .task1,#mermaid-1594927817215 .task2,#mermaid-1594927817215 .task3{fill:#8a90dd;stroke:#534fbc}#mermaid-1594927817215 .taskTextOutside0,#mermaid-1594927817215 .taskTextOutside2{fill:#000}#mermaid-1594927817215 .taskTextOutside1,#mermaid-1594927817215 .taskTextOutside3{fill:#000}#mermaid-1594927817215 .active0,#mermaid-1594927817215 .active1,#mermaid-1594927817215 .active2,#mermaid-1594927817215 .active3{fill:#bfc7ff;stroke:#534fbc}#mermaid-1594927817215 .activeText0,#mermaid-1594927817215 .activeText1,#mermaid-1594927817215 .activeText2,#mermaid-1594927817215 .activeText3{fill:#000 !important}#mermaid-1594927817215 .done0,#mermaid-1594927817215 .done1,#mermaid-1594927817215 .done2,#mermaid-1594927817215 .done3{stroke:grey;fill:#d3d3d3;stroke-width:2}#mermaid-1594927817215 .doneText0,#mermaid-1594927817215 .doneText1,#mermaid-1594927817215 .doneText2,#mermaid-1594927817215 .doneText3{fill:#000 !important}#mermaid-1594927817215 .crit0,#mermaid-1594927817215 .crit1,#mermaid-1594927817215 .crit2,#mermaid-1594927817215 .crit3{stroke:#f88;fill:red;stroke-width:2}#mermaid-1594927817215 .activeCrit0,#mermaid-1594927817215 .activeCrit1,#mermaid-1594927817215 .activeCrit2,#mermaid-1594927817215 .activeCrit3{stroke:#f88;fill:#bfc7ff;stroke-width:2}#mermaid-1594927817215 .doneCrit0,#mermaid-1594927817215 .doneCrit1,#mermaid-1594927817215 .doneCrit2,#mermaid-1594927817215 .doneCrit3{stroke:#f88;fill:#d3d3d3;stroke-width:2;cursor:pointer;shape-rendering:crispEdges}#mermaid-1594927817215 .milestone{transform:rotate(45deg) scale(0.8, 0.8)}#mermaid-1594927817215 .milestoneText{font-style:italic}#mermaid-1594927817215 .doneCritText0,#mermaid-1594927817215 .doneCritText1,#mermaid-1594927817215 .doneCritText2,#mermaid-1594927817215 .doneCritText3{fill:#000 !important}#mermaid-1594927817215 .activeCritText0,#mermaid-1594927817215 .activeCritText1,#mermaid-1594927817215 .activeCritText2,#mermaid-1594927817215 .activeCritText3{fill:#000 !important}#mermaid-1594927817215 .titleText{text-anchor:middle;font-size:18px;fill:#000;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1594927817215 g.classGroup text{fill:#9370db;stroke:none;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);font-size:10px}#mermaid-1594927817215 g.classGroup text .title{font-weight:bolder}#mermaid-1594927817215 g.clickable{cursor:pointer}#mermaid-1594927817215 g.classGroup rect{fill:#ECECFF;stroke:#9370db}#mermaid-1594927817215 g.classGroup line{stroke:#9370db;stroke-width:1}#mermaid-1594927817215 .classLabel .box{stroke:none;stroke-width:0;fill:#ECECFF;opacity:0.5}#mermaid-1594927817215 .classLabel .label{fill:#9370db;font-size:10px}#mermaid-1594927817215 .relation{stroke:#9370db;stroke-width:1;fill:none}#mermaid-1594927817215 .dashed-line{stroke-dasharray:3}#mermaid-1594927817215 #compositionStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1594927817215 #compositionEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1594927817215 #aggregationStart{fill:#ECECFF;stroke:#9370db;stroke-width:1}#mermaid-1594927817215 #aggregationEnd{fill:#ECECFF;stroke:#9370db;stroke-width:1}#mermaid-1594927817215 #dependencyStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1594927817215 #dependencyEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1594927817215 #extensionStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1594927817215 #extensionEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1594927817215 .commit-id,#mermaid-1594927817215 .commit-msg,#mermaid-1594927817215 .branch-label{fill:lightgrey;color:lightgrey;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1594927817215 .pieTitleText{text-anchor:middle;font-size:25px;fill:#000;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1594927817215 .slice{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1594927817215 g.stateGroup text{fill:#9370db;stroke:none;font-size:10px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1594927817215 g.stateGroup text{fill:#9370db;stroke:none;font-size:10px}#mermaid-1594927817215 g.stateGroup .state-title{font-weight:bolder;fill:#000}#mermaid-1594927817215 g.stateGroup rect{fill:#ECECFF;stroke:#9370db}#mermaid-1594927817215 g.stateGroup line{stroke:#9370db;stroke-width:1}#mermaid-1594927817215 .transition{stroke:#9370db;stroke-width:1;fill:none}#mermaid-1594927817215 .stateGroup .composit{fill:white;border-bottom:1px}#mermaid-1594927817215 .stateGroup .alt-composit{fill:#e0e0e0;border-bottom:1px}#mermaid-1594927817215 .state-note{stroke:#aa3;fill:#fff5ad}#mermaid-1594927817215 .state-note text{fill:black;stroke:none;font-size:10px}#mermaid-1594927817215 .stateLabel .box{stroke:none;stroke-width:0;fill:#ECECFF;opacity:0.5}#mermaid-1594927817215 .stateLabel text{fill:#000;font-size:10px;font-weight:bold;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1594927817215 .node circle.state-start{fill:black;stroke:black}#mermaid-1594927817215 .node circle.state-end{fill:black;stroke:white;stroke-width:1.5}#mermaid-1594927817215 #statediagram-barbEnd{fill:#9370db}#mermaid-1594927817215 .statediagram-cluster rect{fill:#ECECFF;stroke:#9370db;stroke-width:1px}#mermaid-1594927817215 .statediagram-cluster rect.outer{rx:5px;ry:5px}#mermaid-1594927817215 .statediagram-state .divider{stroke:#9370db}#mermaid-1594927817215 .statediagram-state .title-state{rx:5px;ry:5px}#mermaid-1594927817215 .statediagram-cluster.statediagram-cluster .inner{fill:white}#mermaid-1594927817215 .statediagram-cluster.statediagram-cluster-alt .inner{fill:#e0e0e0}#mermaid-1594927817215 .statediagram-cluster .inner{rx:0;ry:0}#mermaid-1594927817215 .statediagram-state rect.basic{rx:5px;ry:5px}#mermaid-1594927817215 .statediagram-state rect.divider{stroke-dasharray:10,10;fill:#efefef}#mermaid-1594927817215 .note-edge{stroke-dasharray:5}#mermaid-1594927817215 .statediagram-note rect{fill:#fff5ad;stroke:#aa3;stroke-width:1px;rx:0;ry:0}:root{--mermaid-font-family: '\"trebuchet ms\", verdana, arial';--mermaid-font-family: \"Comic Sans MS\", \"Comic Sans\", cursive}#mermaid-1594927817215 .error-icon{fill:#522}#mermaid-1594927817215 .error-text{fill:#522;stroke:#522}#mermaid-1594927817215 .edge-thickness-normal{stroke-width:2px}#mermaid-1594927817215 .edge-thickness-thick{stroke-width:3.5px}#mermaid-1594927817215 .edge-pattern-solid{stroke-dasharray:0}#mermaid-1594927817215 .edge-pattern-dashed{stroke-dasharray:3}#mermaid-1594927817215 .edge-pattern-dotted{stroke-dasharray:2}#mermaid-1594927817215 .marker{fill:#333}#mermaid-1594927817215 .marker.cross{stroke:#333}\n\n:root { --mermaid-font-family: \"trebuchet ms\", verdana, arial;}"),Object(r.mdx)("style",{parentName:"svg"},'#mermaid-1594927817215 {\n    color: rgb(0, 0, 0);\n    font: 16px "trebuchet ms", verdana, arial;\n  }'),Object(r.mdx)("g",{parentName:"svg"},Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"output"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"clusters"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePaths"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-A LE-B",id:"L-A-B",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M103.92,70L171.5,39L247.5,39",markerEnd:"url(#arrowhead15)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead15",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-A LE-C",id:"L-A-C",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M103.92,108L171.5,139L226,139",markerEnd:"url(#arrowhead16)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead16",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-B LE-D",id:"L-B-D",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M309.5,39L356,39L403.1231548842124,67.87684358990862",markerEnd:"url(#arrowhead17)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead17",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-C LE-D",id:"L-C-D",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M331,139L356,139L403.12315678131347,111.12315525543461",markerEnd:"url(#arrowhead18)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead18",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabels"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"translate(171.5,39)",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-29.5,-9)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"59",height:"18",style:{fill:"#e8e8e8"}})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"59",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-A-B",className:"edgeLabel L-LS-A' L-LE-B"}),"Link text"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0",style:{fill:"#e8e8e8"}})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-A-C",className:"edgeLabel L-LS-A' L-LE-C"})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0",style:{fill:"#e8e8e8"}})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-B-D",className:"edgeLabel L-LS-B' L-LE-D"})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0",style:{fill:"#e8e8e8"}})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-C-D",className:"edgeLabel L-LS-C' L-LE-D"}))))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"nodes"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"A",transform:"translate(62.5,89)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-54.5",y:"-19",width:"109",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-44.5,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"89",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Square Rect"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"B",transform:"translate(278.5,39)",style:{opacity:"1"}}),Object(r.mdx)("circle",Object.assign({parentName:"g"},{x:"-31",y:"-19",r:"31",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-21,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"42",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Circle"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"C",transform:"translate(278.5,139)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"5",ry:"5",x:"-52.5",y:"-19",width:"105",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-42.5,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"85",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Round Rect"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"D",transform:"translate(438.1500015258789,89)",style:{opacity:"1"}}),Object(r.mdx)("polygon",Object.assign({parentName:"g"},{points:"57.15,0 114.3,-57.15 57.15,-114.3 0,-57.15",transform:"translate(-57.15,57.15)",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-34.5,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"69",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Rhombus")))))))))))}c.isMDXComponent=!0},"1nT/":function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/emergencybanner/","context":{"source":"component","name":"EmergencyBanner"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/maintenancebanner/","context":{"source":"component","name":"MaintenanceBanner"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/telephone/","context":{"source":"component","name":"Telephone"}}}]}}}')},"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a("q1tI"),r=a.n(n),o=a("8FPV"),i=a("1nT/"),m=a("Wbzz");function s(){return r.a.createElement(m.StaticQuery,{query:"4277382034",render:function(e){return r.a.createElement(d,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:i})}function c(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(m.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function d(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},n&&r.a.createElement(c,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},n&&r.a.createElement(c,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(s,null)):r.a.createElement(c,{item:e,key:e.name})}))):null}var l=a("MEl4"),p=a.n(l);function g(e){var t=e.location,a=p.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(d,{items:a.items}))):null}var b=a("Z/Vb");function f(e){var t=e.componentToMatch;return r.a.createElement(m.StaticQuery,{query:"4193446859",render:function(e){return e.components.edges.map((function(e){return t===e.node.context.name.toLowerCase()?r.a.createElement(u,{item:{name:e.node.context.name}}):""}))},data:b})}function u(e){var t=e.item,a="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/formation-react/src/components/"+t.name+"/"+t.name+".mdx";return r.a.createElement(m.Link,{to:a},"Edit this page on GitHub")}function h(e){var t=e.pathname.split("/");return r.a.createElement(f,{componentToMatch:t[3]})}var x=function(e){var t=e.pathname.replace("/veteran-facing-services-tools","");return t.length>0&&"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t};function k(e){var t=e.location,a="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages"+x(t)+function(e){var t=x(e),a=p.a.sections.find((function(e){return t.includes(e.href)})),n=p.a.sections.find((function(e){return e.href===t}));if(null==n?void 0:n.indexmdx)return"/index";if((null==a?void 0:a.items)&&a.items.map((function(e){return Array.isArray(e.items)?e.items.find((function(e){return e.href===t})):null})).map((function(e){if((null==e?void 0:e.href)&&e.href===t)return!!(null==e?void 0:e.indexmdx)})).find((function(e){return e})))return"/index";return""}(t)+".mdx";return r.a.createElement(m.Link,{to:a},"Edit this page on GitHub")}function v(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",function(e){if(e.pathname.includes("components")){var t=e.pathname.replace("/veteran-facing-services-tools","");return r.a.createElement(h,{pathname:t})}return r.a.createElement(k,{location:e})}(t)))}function O(e){var t=e.children,a=e.location;return r.a.createElement(o.a,{location:a},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(g,{location:a}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(v,{location:a}))))}},"Z/Vb":function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/emergencybanner/","context":{"source":"component","name":"EmergencyBanner"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/maintenancebanner/","context":{"source":"component","name":"MaintenanceBanner"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/telephone/","context":{"source":"component","name":"Telephone"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-add-graphs-to-mdx-mdx-a07467facb2b2b785851.js.map