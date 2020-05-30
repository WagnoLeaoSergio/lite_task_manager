(this.webpackJsonplite_task_manager=this.webpackJsonplite_task_manager||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),s=a(3),l=(a(34),a(9)),i=a(10),u=a(14),d=a(12),p=a(13);var m=function(e){return{type:"GET_NEW_TASK_INFO",payload:e}};var b=function(){return{type:"ADD_TASK",payload:null}};var O=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(s.b)();return r.a.createElement("div",{className:"panel add-task"},r.a.createElement("h3",{className:"panel-title"},"Add a New Task:"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o(b()),c("")}},r.a.createElement("input",{name:"taskDescription",placeholder:"Task description",type:"text",value:a.toUpperCase(),onChange:function(e){c(e.target.value),o(m(e.target.value.toUpperCase()))}}),r.a.createElement("button",{className:"panel-button",name:"addTaskBtn",type:"submit"},"Add")))};var k=function(e){return{type:"UPDATE_NOTEBOX",payload:e}};var f=function(){var e=Object(s.c)((function(e){return e.noteBox_reducer.noteBox})),t=Object(s.b)();return r.a.createElement("div",{className:"panel noteBox"},r.a.createElement("h3",{className:"panel-title"},"Anotate Your Thoughts:"),r.a.createElement("textarea",{onChange:function(e){t(k(e.target.value))},value:e}))},E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content-container actions"},r.a.createElement(O,null),r.a.createElement(f,null))}}]),a}(n.Component),v=a(18),y=a(22),h=a.n(y);var g=function(e){return{type:"UPDATE_TASK",payload:e}};var j=function(e){return{type:"REMOVE_TASK",payload:e}};var _=function(e){var t=Object(s.b)(),a=Object(n.useState)(!1),c=Object(p.a)(a,2),o=(c[0],c[1]);return r.a.createElement("button",{className:"remove-button",style:{background:"none",border:"none"},onMouseOver:function(){o(!0)},onMouseLeave:function(){o(!1)},onClick:function(a){t(j(e.key_data))}},"DELETE")};var S=function(e){var t=Object(s.b)();return r.a.createElement("li",{className:"item-container"},r.a.createElement("input",{className:"checkBox",type:"checkbox",name:"",id:"",checked:e.checked,onChange:function(a){t(g({key:e.key_data,description:e.description,checked:a.target.checked}))}}),r.a.createElement("p",{style:e.checked?{textDecorationLine:"line-through",color:"#bbb"}:{textDecorationLine:"none",color:"#000"}},e.description),r.a.createElement(_,{key_data:e.key_data}))};var T=function(e){return{type:"UPDATE_TASKS",payload:e}},A=Object(v.b)((function(e){var t=e.item;return r.a.createElement(S,{key:t.key,key_data:t.key,description:t.description,checked:t.checked})})),N=Object(v.a)((function(e){var t=e.children;return r.a.createElement("ul",null,t)}));var x=function(){var e=Object(s.c)((function(e){return e.tasks_reducer.tasks})),t=Object(s.b)();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content-container todo-list-container"},r.a.createElement("h2",null,"Tasks"),r.a.createElement(N,{onSortEnd:function(a){var n=a.oldIndex,r=a.newIndex;t(T(h()(e,n,r)))},className:"todoList"},e.map((function(e,t){return r.a.createElement(A,{key:e.key,index:t,item:e})})))))},P=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(E,null),r.a.createElement(x,null))}}]),a}(n.Component),D=a(23),B=a.n(D);var I=function(){return r.a.createElement("header",null,r.a.createElement("p",null,"Lite Task Manager"),r.a.createElement("a",{href:"https://github.com/WagnoLeaoSergio/lite_task_manager",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(B.a,{name:"fab fa-github-alt",size:"2x"})))};var K=function(){return{type:"LOAD_TASKS"}};var L=function(){return{type:"LOAD_NOTEBOX"}};var J=function(){var e=Object(s.b)();return Object(n.useEffect)((function(){sessionStorage.clear(),e(K()),e(L())}),[]),r.a.createElement("div",{className:"app-container"},r.a.createElement(I,null),r.a.createElement(P,null))},C=a(7),U=a(2),M=a(19),w={tasks:[],noteBox:""};var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=JSON.parse(localStorage.getItem("todoAPP"));switch(t.type){case"ADD_TASK":var n=sessionStorage.getItem("add_task_input");if(!e.tasks||!n)return e;var r={key:Math.floor(500*Math.random()),description:n,checked:!1},c=[r].concat(Object(M.a)(e.tasks));return localStorage.setItem("todoAPP",JSON.stringify({appTasks:c})),sessionStorage.setItem("add_task_input",""),Object(U.a)(Object(U.a)({},e),{},{tasks:c});case"LOAD_TASKS":return Object(U.a)(Object(U.a)({},e),{},{tasks:a.appTasks});case"GET_NEW_TASK_INFO":return sessionStorage.setItem("add_task_input",t.payload),e;case"UPDATE_TASK":for(var o=Object(M.a)(e.tasks),s=0;s<o.length;s++)o[s].key===t.payload.key&&(o[s].checked=t.payload.checked);return localStorage.setItem("todoAPP",JSON.stringify({appTasks:o})),Object(U.a)(Object(U.a)({},e),{},{tasks:o});case"UPDATE_TASKS":var l=t.payload;return localStorage.setItem("todoAPP",JSON.stringify({appTasks:l})),Object(U.a)(Object(U.a)({},e),{},{tasks:l});case"REMOVE_TASK":var i=e.tasks.filter((function(e){return e.key!==t.payload}));return localStorage.setItem("todoAPP",JSON.stringify({appTasks:i})),Object(U.a)(Object(U.a)({},e),{},{tasks:i});default:return e}};var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=JSON.parse(localStorage.getItem("todoAPP"));switch(t.type){case"UPDATE_NOTEBOX":return localStorage.setItem("todoAPP",JSON.stringify(Object(U.a)(Object(U.a)({},a),{},{noteBox:t.payload}))),Object(U.a)(Object(U.a)({},e),{},{noteBox:t.payload});case"LOAD_NOTEBOX":return Object(U.a)(Object(U.a)({},e),{},{noteBox:a.noteBox});default:return e}},F=Object(C.b)({tasks_reducer:X,noteBox_reducer:W}),G=Object(C.c)(F);o.a.render(r.a.createElement(s.a,{store:G},r.a.createElement(J,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8ba26fdc.chunk.js.map