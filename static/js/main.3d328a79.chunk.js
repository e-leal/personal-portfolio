(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],[,,,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/profile_image.86a7a958.jpg"},function(e,t,a){e.exports=a.p+"static/media/Elyssa_Leal_Resume_21.cf529799.PDF"},function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){var n={"./Horiseon_Screenshot2.png":23,"./RedBag-Screenshot.png":24,"./RunBuddy-Screenshot.png":25,"./WorthMyTime_Screenshot.png":26};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=22},function(e,t,a){e.exports=a.p+"static/media/Horiseon_Screenshot2.e4230fa0.png"},function(e,t,a){e.exports=a.p+"static/media/RedBag-Screenshot.00a827cf.png"},function(e,t,a){e.exports=a.p+"static/media/RunBuddy-Screenshot.41819bb4.png"},function(e,t,a){e.exports=a.p+"static/media/WorthMyTime_Screenshot.ffad124f.png"},,,,,,function(e){e.exports=JSON.parse("{}")},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l);a(19),a(20),a(21),a(10);var o=function(e){var t=e.project,n=t.title,l=t.image,c=t.project_type;return console.log("our project object is: ",t),r.a.createElement("div",{className:"project"},r.a.createElement("img",{className:"project-bg",alt:"".concat(n),src:a(22)("./".concat(l,".png"))}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("h5",{className:"card-title"},n),r.a.createElement("p",{className:"card-text"},c)))},i=a(35),u=(a(8),a(12)),s=a.n(u);var m=function(){return r.a.createElement("img",{className:"hero",src:s.a,alt:"Profile headshot"})},d=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"About Me"),r.a.createElement(m,null),r.a.createElement("p",null,"I'm an enthusiastic system engineer eager to contribute to team success through hard work, attention to detail and excellent organizational and communication skills. Clear understanding of changepoint management and error troubleshooting and training in web development technologies. Motivated to learn, grow and excel in system development."))},p=a(36),E=a(37),f=a(38),g=function(){return r.a.createElement(i.a,null,r.a.createElement("h2",null,"Contact"),r.a.createElement(p.a,{className:"mb-3"},r.a.createElement(p.a.Prepend,null,r.a.createElement(p.a.Text,{id:"inputGroup-sizing-default"},"Name")),r.a.createElement(E.a,{"aria-label":"name","aria-describedby":"inputGroup-sizing-default"})),r.a.createElement(p.a,{className:"mb-3"},r.a.createElement(p.a.Prepend,null,r.a.createElement(p.a.Text,null,"Email")),r.a.createElement(E.a,{"aria-label":"email","aria-describedby":"inputGroup-sizing-default"})),r.a.createElement(p.a,{className:"mb-3"},r.a.createElement(p.a.Prepend,null,r.a.createElement(p.a.Text,null,"Message")),r.a.createElement(E.a,{as:"textarea","aria-label":"message","aria-describedby":"inputGroup-sizing-default"})),r.a.createElement(f.a,{type:"submit"},"Submit"))},h=a(6);a(32),a(33);var b=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};var v=function(){var e=Object(n.useState)([{id:1,title:"Red Bag",image:"RedBag-Screenshot",proj_type:"Express.js / Node.js"},{id:2,title:"Worth My Time",image:"WorthMyTime_Screenshot",proj_type:"API"},{id:3,title:"Book Search Engine",image:"WorthMyTime_Screenshot",proj_type:"MERN stack"},{id:4,title:"Run Buddy",image:"RunBuddy-Screenshot",proj_type:"HTML / CSS"},{id:5,title:"Horiseon",image:"Horiseon_Screenshot2",proj_type:"HTML / CSS"}]),t=Object(h.a)(e,1)[0];return r.a.createElement(b,null,r.a.createElement("h1",{className:"title"},"Project List"),t.map((function(e){return r.a.createElement(o,{key:e.id,project:e})})))},y=a(13),S=a.n(y);var N=function(){return r.a.createElement(b,null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Resume"),r.a.createElement("p",null,"Download my ",r.a.createElement("a",{href:S.a},"resume"))),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Languages"),r.a.createElement("ul",null,r.a.createElement("li",null,"ReactJS"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"Java"),r.a.createElement("li",null,"C#"),r.a.createElement("li",null,"MYSQL/No SQL/ & SQL"),r.a.createElement("li",null,"Javascript"),r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"))),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Other Skills"),r.a.createElement("ul",null,r.a.createElement("li",null,"Software Documentation"),r.a.createElement("li",null,"System development and administration"),r.a.createElement("li",null,"New Employee Mentoring"),r.a.createElement("li",null,"Unix/Linux"),r.a.createElement("li",null,"Git"))))};var j=function(e){return r.a.createElement("ul",{className:"nav nav-tabs row"},["About","Contact","Portfolio","Resume"].map((function(t){return r.a.createElement("li",{className:"nav-item",key:t},r.a.createElement("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handleTabChange(t)},className:e.currentTab===t?"nav-link active":"nav-link"},t))})))};var x=function(){var e=Object(n.useState)("About"),t=Object(h.a)(e,2),a=t[0],l=t[1];return r.a.createElement(i.a,null,r.a.createElement(j,{currentTab:a,handleTabChange:l}),r.a.createElement(b,null,function(){switch(a){case"About":return r.a.createElement(d,null);case"Contact":return r.a.createElement(g,null);case"Portfolio":return r.a.createElement(v,null);case"Resume":return r.a.createElement(N,null);default:return r.a.createElement(d,null)}}()))},w=function(){return r.a.createElement(b,null,r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.3d328a79.chunk.js.map