(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{231:function(e,t,a){e.exports={formControl:"FormControls_formControl__2ON-w",error:"FormControls_error__1EbmF",formSummaryError:"FormControls_formSummaryError__1KPHr"}},232:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return g}));var n=a(236),r=a(0),i=a.n(r),o=a(231),s=a.n(o),c=a(115),l=function(e){var t=e.meta,a=t.touched,n=t.error,r=e.children,o=a&&n;return i.a.createElement("div",{className:s.a.formControl+" "+(o?s.a.error:"")},i.a.createElement("div",null,r),o&&i.a.createElement("span",null,n))},m=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,["input","meta"]));return i.a.createElement(l,e,"  ",i.a.createElement("textarea",Object.assign({},t,a)))},u=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,["input","meta"]));return i.a.createElement(l,e,i.a.createElement("input",Object.assign({},t,a)))};function g(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return i.a.createElement("div",null,i.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:a,component:n},r))," ",o)}},234:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},i=function(e){if(e&&e.length<2)return"Min length is 2 symbols"}},242:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__xFR2T",dialog:"Dialogs_dialog__3YZMl",message:"Dialogs_message__YR3GF",messages:"Dialogs_messages__15RF7",dialogItems:"Dialogs_dialogItems__1Hjf9",active:"Dialogs_active__2z4cT"}},302:function(e,t,a){"use strict";a.r(t);var n=a(79),r=a(0),i=a.n(r),o=a(242),s=a.n(o),c=a(10),l=i.a.memo((function(e){var t="/dialogs/"+e.id;return i.a.createElement("div",{className:s.a.dialog},i.a.createElement("img",{src:e.img}),i.a.createElement(c.b,{to:t},e.name))})),m=i.a.memo((function(e){return i.a.createElement("div",{className:s.a.message},e.message)})),u=a(236),g=a(7),d=a(9),f=function(e){return{isAuth:e.auth.isAuth}};function E(e){return Object(d.b)(f)((function(t){t.isAuth;var a=Object(u.a)(t,["isAuth"]);return t.isAuth?i.a.createElement(e,a):i.a.createElement(g.a,{to:"/login"})}))}var v=a(115),b=a(116),_=a(232),h=a(234),p=i.a.memo((function(e){var t=e.dialogsPage.dialogs.map((function(e){return i.a.createElement(l,{name:e.name,id:e.id,img:e.img})})),a=e.dialogsPage.messages.map((function(e){return i.a.createElement(m,{message:e.message})}));return i.a.createElement("div",{className:s.a.dialogs},i.a.createElement("div",{className:s.a.dialogItems},t),i.a.createElement("div",{className:s.a.messages},i.a.createElement("div",null,a),i.a.createElement("div",null,i.a.createElement(O,{onSubmit:function(t){e.onSendMessageClick(t.newMessageText)}}))),i.a.createElement("div",{className:s.a.messages}))})),j=Object(h.a)(50),O=Object(b.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(v.a,{placeholder:"Enter your message",name:"newMessageText",component:_.b,validate:[h.c,j]})),i.a.createElement("div",null,i.a.createElement("button",null,"Send")))})),F=E(p),A=a(20);t.default=Object(A.d)(Object(d.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{onSendMessageClick:function(t){e(Object(n.a)(t))}}})),E)(F)}}]);
//# sourceMappingURL=5.1e469c7e.chunk.js.map