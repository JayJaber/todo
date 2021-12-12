(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{29:function(e,t,n){},33:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),l=n(16),c=n.n(l),i=(n(29),n(8)),r=(n(30),n(32),n(33),n(4)),o=n(1);function j(e){var t=e.tasks,n=e.onTasksChange,s=a.a.useState(),l=Object(i.a)(s,2);l[0],l[1];return Object(o.jsxs)(r.Navbar,{className:"teal",style:{marginBottom:"1em"},alignLinks:"right",brand:Object(o.jsx)("a",{className:"brand-logo",children:"\xa0Task\xa0Manager\xa0"}),id:"mobile-nav",menuIcon:Object(o.jsx)(r.Icon,{children:"menu"}),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0},children:[Object(o.jsx)(r.NavItem,{onClick:function(){return n(t.filter((function(e){return!1===e.done})))},style:{cursor:"pointer"},children:"Clear Completed Tasks"}),Object(o.jsx)(r.NavItem,{onClick:function(){return n([])},style:{cursor:"pointer"},children:"Clear All Tasks"})]})}var d=n(17),b=n(18);function h(e){var t=e.tasks,n=e.onTasksChange,s=a.a.useState(""),l=Object(i.a)(s,2),c=l[0],j=l[1],h=a.a.useState(""),g=Object(i.a)(h,2),m=g[0],x=g[1];return Object(o.jsxs)("div",{className:"teal lighten-5",style:{textAlign:"center",margin:"1em",padding:"0.5em",paddingTop:"1em"},children:[Object(o.jsx)("h5",{children:"Todo List"}),0===t.length?Object(o.jsx)("h6",{style:{padding:"0.65em"},children:"No tasks yet, add some below!"}):Object(o.jsx)(r.Row,{style:{marginBottom:"0"},children:t.map((function(e,s){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.Col,{s:9,m:10,l:10,xl:11,style:{textAlign:"left",marginTop:"0.75em",marginBottom:"0.5em"},children:e.done?Object(o.jsxs)("s",{children:[s+1,".\xa0",e.value]}):Object(o.jsxs)(o.Fragment,{children:[s+1,".\xa0",e.value]})}),Object(o.jsx)(r.Col,{s:3,m:2,l:2,xl:1,style:{marginTop:"0.75em",marginBottom:"0.5em",textAlign:"right"},children:Object(o.jsx)(r.Checkbox,{label:e.done?"Done":"Todo",checked:e.done,value:"done",onClick:function(e){return n(t.map((function(t,n){return s===n?Object(b.a)(Object(b.a)({},t),{},{done:e.target.checked}):t})))}})}),Object(o.jsx)("hr",{style:{width:"calc(100% - 1.4em)"}})]})}))}),Object(o.jsxs)(r.Row,{style:{display:"flex",alignItems:"center",height:"5em"},children:[Object(o.jsx)(r.TextInput,{s:9,m:10,l:10,xl:11,className:m,label:"New task",error:"Tasks cannot be blank",value:c,onChange:function(e){j(e.target.value),x("")},style:{fontSize:"200"},onKeyDown:function(e){c&&"Enter"===e.key?(n([].concat(Object(d.a)(t),[{value:c,done:!1}])),j("")):"Enter"===e.key&&x("invalid")}}),Object(o.jsx)(r.Col,{s:3,m:2,l:2,xl:1,children:Object(o.jsx)(r.Button,{floating:!0,icon:Object(o.jsx)(r.Icon,{children:"add"}),small:!0,node:"button",waves:"light",tooltip:"Add task",onClick:function(){c?(n([].concat(Object(d.a)(t),[{value:c,done:!1}])),j("")):x("invalid")}})})]})]})}function g(){return Object(o.jsx)("div",{className:"footer teal",style:{padding:"0.5em",textAlign:"center"},children:Object(o.jsxs)(r.Row,{style:{margin:0},children:[Object(o.jsx)(r.Col,{s:6,m:6,children:Object(o.jsx)("p",{className:"grey-text text-lighten-3",children:"\xa9 2021 Jay Jaber"})}),Object(o.jsx)(r.Col,{s:2,m:2,children:Object(o.jsx)("p",{className:"grey-text text-lighten-3",children:Object(o.jsx)("a",{className:"grey-text text-lighten-3",href:"https://github.com/JayJaber",children:Object(o.jsx)("img",{src:"./GitHub.png",style:{height:12},alt:"GitHub"})})})}),Object(o.jsx)(r.Col,{s:2,m:2,children:Object(o.jsx)("p",{className:"grey-text text-lighten-3",style:{paddingTop:1},children:Object(o.jsx)("a",{className:"grey-text text-lighten-3",href:"https://www.linkedin.com/in/jay-jaber-7439bb1b3/",children:Object(o.jsx)("img",{src:"./Linkedin.svg",alt:"Linkedin",style:{height:16}})})})}),Object(o.jsx)(r.Col,{s:2,m:2,children:Object(o.jsx)("p",{className:"grey-text text-lighten-3",children:Object(o.jsx)("a",{className:"grey-text text-lighten-3",href:"mailto:calijayjaber@gmail.com",children:Object(o.jsx)(r.Icon,{style:{fontSize:16},children:"mail"})})})})]})})}var m=function(){var e=JSON.parse(localStorage.getItem("tasks")),t=a.a.useState(e||[]),n=Object(i.a)(t,2),s=n[0],l=n[1];return a.a.useEffect((function(){localStorage.setItem("tasks",JSON.stringify(s))}),[s]),Object(o.jsxs)("div",{className:"App teal lighten-5",children:[Object(o.jsxs)("main",{className:"teal lighten-4",children:[Object(o.jsx)(j,{tasks:s,onTasksChange:l}),Object(o.jsx)(h,{tasks:s,onTasksChange:l})]}),Object(o.jsx)(g,{className:"footer"})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),l(e),c(e)}))};c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),x()}},[[78,1,2]]]);
//# sourceMappingURL=main.672f472b.chunk.js.map