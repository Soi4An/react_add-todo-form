(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(6),s=a(2),o=a(1),c=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],l=a(8),u=a.n(l),m=a(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},h=function(e){var t=e.completed,a=e.title,n=e.todoId,i=e.userId,r=c.find((function(e){return e.id===i}));return Object(m.jsxs)("article",{"data-id":n,className:u()("TodoInfo",{"TodoInfo--completed":t}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:a}),r&&Object(m.jsx)(j,{user:r})]})},b=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(h,{completed:e.completed,title:e.title,todoId:e.id,userId:e.userId},e.id)}))})},p=function(){var e=Object(o.useState)(d),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),l=Object(s.a)(i,2),u=l[0],j=l[1],h=Object(o.useState)(!1),p=Object(s.a)(h,2),O=p[0],f=p[1],x=Object(o.useState)(0),v=Object(s.a)(x,2),y=v[0],I=v[1],S=Object(o.useState)(!1),N=Object(s.a)(S,2),g=N[0],C=N[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),f(!u),C(0===y),u&&0!==y){var t,i={id:(t=a,Math.max.apply(Math,Object(r.a)(t.map((function(e){return e.id}))))+1),title:u,completed:!1,userId:y};n((function(e){return[].concat(Object(r.a)(e),[i])})),j(""),I(0)}},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"input--title--add-todo-name",children:"Title: "}),Object(m.jsx)("input",{id:"input--title--add-todo-name",placeholder:"Enter a title",type:"text","data-cy":"titleInput",value:u,onChange:function(e){var t=e.target.value,a=1===t.length?t.trim():t;/^[A-Za-z\u0410-\u042f\u0430-\u044f0-9 ]*$/.test(a)&&j(a),a&&f(!1)}}),O&&Object(m.jsx)("span",{className:"error",children:" Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"select--user--add-todo-user",children:"User: "}),Object(m.jsxs)("select",{id:"select--user--add-todo-user","data-cy":"userSelect",value:y,onChange:function(e){I(+e.target.value),0!==+e.target.value&&C(!1)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"},"0"),c.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),g&&Object(m.jsx)("span",{className:"error",children:" Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(b,{todos:a})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7ed10e6e.chunk.js.map