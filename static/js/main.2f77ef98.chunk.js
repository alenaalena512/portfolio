(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,a,t){},21:function(e,a,t){e.exports=t(34)},26:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),o=t.n(l),c=(t(26),t(27),t(9)),i=t(37),s=(t(10),function(){return r.a.createElement("div",{className:"headerContainer"},r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/",style:{textDecoration:"none"}}," ",r.a.createElement(i.a,{variant:"warning"},"Home")," "),r.a.createElement(c.b,{to:"/about",style:{textDecoration:"none"}}," ",r.a.createElement(i.a,{variant:"warning"},"Resume")," "),r.a.createElement(c.b,{to:"/projects",style:{textDecoration:"none"}}," ",r.a.createElement(i.a,{variant:"warning"},"Projects")," ")))}),m=function(){return r.a.createElement("div",{className:"homediv"},r.a.createElement("h1",{className:"into"}," ",r.a.createElement("span",null,"Hi!")," I am Alena."),r.a.createElement("h3",null,"Software Developer based in London"),r.a.createElement("img",{src:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/81/female-technologist-type-1-2_1f469-1f3fb-200d-1f4bb.png",alt:"developer"}))},u=t(35),p=function(e){return r.a.createElement("div",{className:"certif"},r.a.createElement("img",{src:e.url,alt:e.name}),r.a.createElement("div",{className:"description"},r.a.createElement("div",{className:"name"},e.name),r.a.createElement("div",{className:"cert-description"},r.a.createElement("div",null,e.org),r.a.createElement("div",null,e.date))))},d=["JavaScript","React.js","Responsive Web Design","Front-End Development","C#",".Net Core","Docker","Kubernetes","AWS","Serverless"],E=[{name:"Diploma in C# programming",date:"Jun 2020",organisation:"Alison",url:"https://cdn01.alison-static.net/public/html/site/img/alison-icon-default.png"},{name:"Web Development Bootcamp",date:"Jul 2019",organisation:"Udemy",url:"https://www.pipelinersales.com/wp-content/uploads/2019/06/large-udemy.jpg"},{name:"JavaScript Algorithms and Data Structures",date:"Apr 2019",organisation:"FreeCodeCamp",url:"https://s3.amazonaws.com/freecodecamp/curriculum-diagram-full.jpg"},{name:"Advanced Styling with Responsive Design ",date:"Apr 2019",organisation:"Coursera",url:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-logo-square.png?auto=format%2Ccompress&dpr=1"},{name:"React.js Essential Training",date:"May 2019",organisation:"LinkedIn",url:"https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png"}],g=[{name:"Chelyabinsk State University",date:"2019-2023",role:"Software Engineering",url:"https://i2.wp.com/www.eurashe.eu/wp-content/uploads/2014/11/CSU_logo.png?fit=225%2C225&ssl=1"},{name:"Udacity",date:"2020-2020",role:"AWS Cloud Developer",url:"https://i.pinimg.com/originals/d2/7b/b0/d27bb073e4d1c175eea105adcb622dda.png"}],h=function(){return r.a.createElement("div",{className:"aboutdiv"},r.a.createElement("div",{className:"ab"},r.a.createElement("h1",{className:"about"},"Skills"),r.a.createElement("div",{className:"skill"},d.map((function(e){return r.a.createElement(u.a,{variant:"dark"}," ",e," ")})))),r.a.createElement("div",{className:"ab"},r.a.createElement("h1",{className:"background"},"Courses"),E.map((function(e){return r.a.createElement(p,{name:e.name,date:e.date,org:e.organisation,url:e.url})}))),r.a.createElement("div",{className:"ab"},r.a.createElement("h1",{className:"background"},"Education"),g.map((function(e){return r.a.createElement(p,{name:e.name,date:e.date,org:e.role,url:e.url})}))))},v=t(36),b=function(e){return r.a.createElement(v.a,{style:{width:"18rem",margin:"30px 10px"}},r.a.createElement(v.a.Img,{variant:"top"}),r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,e.title),r.a.createElement(v.a.Text,null,e.text),r.a.createElement("a",{href:e.url,style:{textDecoration:"none"}}," ",r.a.createElement(i.a,{variant:"primary"},"Go to GitHub")," ")))},f={text:"A full-stack calculator app. Stack: React, C#, ASP.Net Core",url:"https://github.com/alenaalena512/calculator"},w={text:"To-do list app. Stack: React, Node.js, OAuth, Serverless",url:"https://github.com/alenaalena512/serverless-todo"},N={text:"A to-do application with OAuth authorisation. Stack: React, JS, Node.js, Serverless",url:"https://alenaalena512.github.io/cat-game/"},S=function(){return r.a.createElement("div",{className:"projects"},r.a.createElement(b,Object.assign({title:"Cat Game"},N)),r.a.createElement(b,Object.assign({title:"Serverless"},w)),r.a.createElement(b,Object.assign({title:"Calculator"},f)))},k=(t(33),t(2)),y=t(15),C=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,"Contact me",r.a.createElement("a",{href:"https://github.com/alenaalena512"}," ",r.a.createElement(y.a,null)," "),r.a.createElement("a",{href:"https://www.linkedin.com/in/alena-gusenko-102498183/"}," ",r.a.createElement(y.b,null)," ")))},j=function(){return r.a.createElement(c.a,{basename:"/"},r.a.createElement(s,null),r.a.createElement(k.d,null,r.a.createElement(k.a,{from:"/home",to:"/"}),r.a.createElement(k.b,{exact:!0,path:"/",component:m}),r.a.createElement(k.b,{path:"/about",component:h}),r.a.createElement(k.b,{path:"/projects",component:S})),r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.2f77ef98.chunk.js.map