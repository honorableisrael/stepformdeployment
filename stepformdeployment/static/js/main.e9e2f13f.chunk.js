(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,a,t){},35:function(e,a,t){e.exports=t(65)},40:function(e,a,t){},41:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),s=(t(40),t(27)),i=t(28),m=t(33),o=t(29),u=t(34),d=t(12),p=t(1),E=(t(41),t(32)),g=t(8),v=t(7),f=(t(11),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"row jcenter"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("svg",{version:"1.1",id:"svg_form_time",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 824 24"},r.a.createElement("rect",{x:"12",y:"9",width:"200",height:"6",fill:"rgb(230, 230, 230)"}),r.a.createElement("circle",{cx:"12",cy:"12",r:"12",width:"12",height:"6",fill:1==e.step?"#735400":"rgb(230, 230, 230)"}),r.a.createElement("rect",{x:"212",y:"9",width:"200",height:"6",fill:"rgb(230, 230, 230)"}),r.a.createElement("circle",{cx:"212",cy:"12",r:"12",width:"212",height:"6",fill:2==e.step?"#735400":"rgb(230, 230, 230)"}),r.a.createElement("circle",{cx:"412",cy:"12",r:"12",width:"412",height:"6",fill:3==e.step?"#735400":"rgb(230, 230, 230)"})))))}),b=r.a.createContext({state:{},setState:function(){}}),h=function(e){var a=Object(n.useContext)(b),t=a.state,l=a.setState,c=t.email,s=t.name,i=t.errorMessage,m=(t.isloading,function(e){var a;l(Object(v.a)({},t,(a={},Object(g.a)(a,e.target.name,e.target.value),Object(g.a)(a,"errorMessage",""),a)))}),o=function(e){if(e.preventDefault(),!c||!s)return l(Object(v.a)({},t,{errorMessage:"all fields are required"}));l(Object(v.a)({},t,{step1:!1,step2:!0}))};return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(f,{step:1}),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("h2",{className:"card-heading"},"Get started",r.a.createElement("small",null,"Let us create your account"))),r.a.createElement("form",{className:"card-form",onSubmit:o},r.a.createElement("div",{className:"text-center text-danger"},i),r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"text",className:"input-field",value:s,onChange:m,name:"name",required:!0}),r.a.createElement("label",{className:"input-label"},"Full name")),r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"text",className:"input-field",value:c,name:"email",onChange:m,required:!0}),r.a.createElement("label",{className:"input-label"},"Email")),r.a.createElement("div",{className:"action"},r.a.createElement("button",{className:"action-button",onClick:o},"Get started"))),r.a.createElement("div",{className:"card-info"},r.a.createElement("p",null,"By signing up you are agreeing to our"," ",r.a.createElement("a",{href:"#"},"Terms and Conditions"))))))},N=t(30),w=t.n(N),y=function(e){var a=Object(n.useContext)(b),t=a.state,l=a.setState,c=t.password,s=t.confirm_password,i=t.email,m=t.name,o=t.isloading,u=t.errorMessage,d=function(e){l(Object(v.a)({},t,Object(g.a)({},e.target.name,e.target.value)))},p=function(e){return e.preventDefault(),c&&s?c!==s?l(Object(v.a)({},t,{errorMessage:"confirm password must be equal to password"})):void E():l(Object(v.a)({},t,{errorMessage:"all fields are required"}))},E=function(){l(Object(v.a)({},t,{isloading:!0}));var e={email:i,name:m,password:c};w.a.post("".concat("https://stepformbackend.herokuapp.com/","users/user"),e).then((function(e){l(Object(v.a)({},t,{step2:!1,step3:!0,isloading:!1}))})).catch((function(e){l(Object(v.a)({},t,{step2:!1,isloading:!1,errorMessage:"Failed to register"}))}))};return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(f,{step:2}),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("h2",{className:"card-heading"},"Step 2",r.a.createElement("small",null,"Create password for your new account"))),r.a.createElement("form",{className:"card-form",onSubmit:p},r.a.createElement("div",{className:"text-center text-danger"},u),r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"password",className:"input-field",value:c,name:"password",onChange:d,required:!0}),r.a.createElement("label",{className:"input-label"},"Password")),r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"password",value:s,name:"confirm_password",onChange:d,className:"input-field",required:!0}),r.a.createElement("label",{className:"input-label"},"Confirm Password")),r.a.createElement("div",{className:"action"},r.a.createElement("button",{className:"action-button",onClick:p},o?"Submitting":"Submit"))),r.a.createElement("div",{className:"card-info"},r.a.createElement("p",null,"By signing up you are agreeing to our"," ",r.a.createElement("a",{href:"#"},"Terms and Conditions"))))))},j=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card1"},r.a.createElement("div",{className:"card2"},r.a.createElement("i",{className:"checkmark"},"\u2713")),r.a.createElement("h1",null,"Success"),r.a.createElement("p",null,"Congratulations",r.a.createElement("br",null)," you have successfully registered!"))))},x=function(e){var a=Object(n.useState)({password:"",confirm_password:"",name:"",email:"",isloading:!1,step1:!0,step2:!1,step3:!1,errorMessage:""}),t=Object(E.a)(a,2),l=t[0],c=t[1],s=l.step1,i=l.step2,m=l.step3;return r.a.createElement("div",null,r.a.createElement(b.Provider,{value:{state:l,setState:c}},s&&r.a.createElement(h,null),i&&r.a.createElement(y,null),m&&r.a.createElement(j,null)))},O=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{component:x,path:"/",exact:!0})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.e9e2f13f.chunk.js.map