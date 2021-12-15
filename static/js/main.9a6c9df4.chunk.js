(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{29:function(e,t,n){},33:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),o=n(16),c=n.n(o),s=(n(29),n(8)),r=(n(30),n(32),n(33),n(4)),i=n(1);function d(e){var t=e.tasks,n=e.onTasksChange,l=e.color,a=e.onColorChange;return Object(i.jsxs)(r.Navbar,{className:l+" navbar",style:{marginBottom:"1em"},alignLinks:"right",brand:Object(i.jsx)("a",{className:"brand-logo",children:"\xa0Task\xa0Manager\xa0"}),id:"mobile-nav",menuIcon:Object(i.jsx)(r.Icon,{children:"settings"}),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0},children:[Object(i.jsx)(r.NavItem,{onClick:function(){window.confirm("Are you sure you want to clear completed tasks?")&&n(t.filter((function(e){return!1===e.done})))},style:{cursor:"pointer"},children:"Clear Completed Tasks"}),Object(i.jsx)(r.NavItem,{onClick:function(){window.confirm("Are you sure you want to clear all tasks?")&&n([])},style:{cursor:"pointer"},children:"Clear All Tasks"}),Object(i.jsx)(r.Dropdown,{options:{alignment:"left",autoTrigger:!0,closeOnClick:!0,constrainWidth:!0,container:null,coverTrigger:!0,hover:!1,inDuration:150,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:250},trigger:Object(i.jsxs)("a",{href:"#color",children:["Select Color"," ",Object(i.jsx)(r.Icon,{right:!0,children:"arrow_drop_down"})]}),children:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey"].map((function(e){return Object(i.jsxs)("a",{className:e,href:"#"+e,style:{color:"white"},role:"button",onClick:function(){return a(e)},children:[e,l===e?Object(i.jsx)("span",{style:{fontWeight:700},children:"\xa0Selected"}):""]})}))})]})}var j=n(17),g=n(18);function u(e){var t=e.tasks,n=e.onTasksChange,l=e.color,o=a.a.useState(""),c=Object(s.a)(o,2),d=c[0],u=c[1],m=a.a.useState(""),b=Object(s.a)(m,2),h=b[0],x=b[1],O=a.a.useState(localStorage.getItem("title")||"Todo List"),p=Object(s.a)(O,2),f=p[0],y=p[1];return a.a.useEffect((function(){localStorage.setItem("title",f)}),[f]),Object(i.jsxs)("div",{className:l+" lighten-5",style:{textAlign:"center",margin:"1em",padding:"0.5em",paddingTop:"1em"},children:[Object(i.jsx)(r.TextInput,{value:f,label:"Edit Title",placeholder:"Add Title",onChange:function(e){return y(e.target.value)},style:{width:"calc(100% - 0.9em)",margin:0,textAlign:"center",fontSize:24}}),0===t.length?Object(i.jsx)("h6",{style:{padding:"1.27em"},children:"No tasks yet, add some below!"}):Object(i.jsx)(r.Row,{style:{marginBottom:"0",marginTop:0},children:t.map((function(e,l){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.Col,{s:9,m:10,l:10,xl:11,style:{textAlign:"left",marginTop:0===l?"0.25em":"1em",marginBottom:"0.5em"},children:e.done?Object(i.jsxs)("s",{children:[l+1,".\xa0",e.value]}):Object(i.jsxs)(i.Fragment,{children:[l+1," ",e.value]})}),Object(i.jsx)(r.Col,{s:3,m:2,l:2,xl:1,style:{marginTop:0===l?"0.25em":"1em",marginBottom:"0.5em",textAlign:"right"},children:Object(i.jsx)(r.Checkbox,{label:e.done?"Done":"Todo",checked:e.done,value:"done",onClick:function(e){return n(t.map((function(t,n){return l===n?Object(g.a)(Object(g.a)({},t),{},{done:e.target.checked}):t})))}})}),Object(i.jsx)(r.Col,{s:12,m:12,children:Object(i.jsx)("div",{style:{borderBottom:"1px solid rgb(158, 158, 158)",paddingTop:"0.05em",paddingBottom:"0.2em"}})})]})}))}),Object(i.jsxs)(r.Row,{style:{display:"flex",alignItems:"center"},children:[Object(i.jsx)(r.TextInput,{s:10,m:11,l:11,xl:11,className:h+" input-field",label:"New task",error:"Tasks cannot be blank",value:d,onChange:function(e){u(e.target.value),x("")},style:{fontSize:"200"},onKeyDown:function(e){d&&"Enter"===e.key?(n([].concat(Object(j.a)(t),[{value:d,done:!1}])),u("")):"Enter"===e.key&&x("invalid")}}),Object(i.jsx)(r.Col,{s:2,m:1,l:1,xl:1,children:Object(i.jsx)(r.Button,{className:l+" add-task",floating:!0,icon:Object(i.jsx)(r.Icon,{children:"add"}),small:!0,node:"button",waves:"light",tooltip:"Add task",onClick:function(){d?(n([].concat(Object(j.a)(t),[{value:d,done:!1}])),u("")):x("invalid")}})})]})]})}function m(e){return Object(i.jsx)("div",{className:"footer "+e,style:{padding:"0.5em",textAlign:"center",paddingBottom:"calc(0.5em - 4px)"},children:Object(i.jsxs)(r.Row,{style:{margin:0},children:[Object(i.jsx)(r.Col,{s:6,m:6,children:Object(i.jsx)("p",{className:"grey-text text-lighten-3",children:"\xa9 2021 Jay Jaber"})}),Object(i.jsx)(r.Col,{s:2,m:2,children:Object(i.jsx)("p",{className:"grey-text text-lighten-3",children:Object(i.jsx)("a",{className:"grey-text text-lighten-3",href:"https://github.com/JayJaber",children:Object(i.jsx)("img",{src:"./GitHub.png",style:{height:12},alt:"GitHub"})})})}),Object(i.jsx)(r.Col,{s:2,m:2,children:Object(i.jsx)("p",{className:"grey-text text-lighten-3",style:{paddingTop:1},children:Object(i.jsx)("a",{className:"grey-text text-lighten-3",href:"https://www.linkedin.com/in/jay-jaber-7439bb1b3/",children:Object(i.jsx)("img",{src:"./Linkedin.svg",alt:"Linkedin",style:{height:16}})})})}),Object(i.jsx)(r.Col,{s:2,m:2,children:Object(i.jsx)("p",{className:"grey-text text-lighten-3",children:Object(i.jsx)("a",{className:"grey-text text-lighten-3",href:"mailto:calijayjaber@gmail.com",children:Object(i.jsx)(r.Icon,{style:{fontSize:18},children:"mail"})})})})]})})}var b=function(){var e=a.a.useState(JSON.parse(localStorage.getItem("tasks"))||[]),t=Object(s.a)(e,2),n=t[0],l=t[1],o=a.a.useState(localStorage.getItem("color"))||"teal",c=Object(s.a)(o,2),r=c[0],j=c[1];return a.a.useEffect((function(){localStorage.setItem("tasks",JSON.stringify(n))}),[n]),a.a.useEffect((function(){localStorage.setItem("color",r)}),[r]),Object(i.jsxs)("div",{className:"App "+r,children:[Object(i.jsxs)("main",{className:r+" lighten-4",children:[Object(i.jsx)(d,{tasks:n,onTasksChange:l,color:r,onColorChange:j}),Object(i.jsx)(u,{tasks:n,onTasksChange:l,color:r})]}),Object(i.jsx)(m,{className:"footer",color:r})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,l=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),l(e),a(e),o(e),c(e)}))};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),h()}},[[78,1,2]]]);
//# sourceMappingURL=main.9a6c9df4.chunk.js.map