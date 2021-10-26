(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{231:function(e,t,a){e.exports={formControl:"FormControls_formControl__2ON-w",error:"FormControls_error__1EbmF",formSummaryError:"FormControls_formSummaryError__1KPHr"}},232:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return f}));var n=a(236),o=a(0),r=a.n(o),l=a(231),i=a.n(l),c=a(115),s=function(e){var t=e.meta,a=t.touched,n=t.error,o=e.children,l=a&&n;return r.a.createElement("div",{className:i.a.formControl+" "+(l?i.a.error:"")},r.a.createElement("div",null,o),l&&r.a.createElement("span",null,n))},u=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,["input","meta"]));return r.a.createElement(s,e,"  ",r.a.createElement("textarea",Object.assign({},t,a)))},m=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,["input","meta"]));return r.a.createElement(s,e,r.a.createElement("input",Object.assign({},t,a)))};function f(e,t,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",null,r.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:a,component:n},o))," ",l)}},234:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}));var n=function(e){if(!e)return"Field is required"},o=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},r=function(e){if(e&&e.length<2)return"Min length is 2 symbols"}},237:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__28vS3",image:"ProfileInfo_image__2taE8",description:"ProfileInfo_description__3B1ZG",item:"ProfileInfo_item__2CGwY",changePhoto:"ProfileInfo_changePhoto__3jtNi",customFileUpload:"ProfileInfo_customFileUpload__1IrYy",contact:"ProfileInfo_contact__2Z3h-",edit:"ProfileInfo_edit__2IXzW"}},255:function(e,t,a){e.exports={profileStatus:"ProfileStatusWithHooks_profileStatus__2NXVN"}},256:function(e,t,a){e.exports={modal:"Modal_modal__2_HKt",modal_content:"Modal_modal_content__3_FmA",active:"Modal_active__X7Vnx"}},297:function(e,t,a){e.exports={item:"MyPosts_item__UXf7B",postBlock:"MyPosts_postBlock__1kfNr",posts:"MyPosts_posts__nqRn6"}},298:function(e,t,a){e.exports={item:"post_item__3KsPL"}},299:function(e,t,a){e.exports={profileContainer:"Profile_profileContainer__3J165"}},301:function(e,t,a){"use strict";a.r(t);var n=a(40),o=a(41),r=a(46),l=a(45),i=a(0),c=a.n(i),s=a(69),u=a(237),m=a.n(u),f=a(255),p=a.n(f),d=function(e){var t=Object(i.useState)(!1),a=Object(s.a)(t,2),n=a[0],o=a[1],r=Object(i.useState)(e.status),l=Object(s.a)(r,2),u=l[0],m=l[1];Object(i.useEffect)((function(){m(e.status)}),[e.status]);return c.a.createElement("div",{className:p.a.profileStatus},!n&&c.a.createElement("div",null,c.a.createElement("b",null,"Status:")," ",c.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"My status")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(u)},value:u})))},E=a(43),b=a(44),v=a.n(b),h=a(256),_=a.n(h),g=function(e){var t=e.modal,a=e.setModal,n=e.children,o="".concat(_.a.modal," ").concat(t?_.a.active:""),r="".concat(_.a.modal_content," ").concat(t?_.a.active:"");return c.a.createElement("div",{className:o,onClick:function(){return a(!1)}},c.a.createElement("div",{className:r,onClick:function(e){return e.stopPropagation()}},n))},P=function(e){var t=e.profile,a=e.goToEditMode,n=e.isOwner;return c.a.createElement("div",{className:m.a.description},c.a.createElement("div",{className:m.a.item},c.a.createElement("b",null,"Full name:")," ",t.fullName),c.a.createElement("div",{className:m.a.item},c.a.createElement("b",null,"Looking for a lob:")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",{className:m.a.item},c.a.createElement("b",null,"My professional skills:")," ",t.lookingForAJobDescription),c.a.createElement("div",{className:m.a.item},c.a.createElement("b",null,"About me:")," ",t.aboutMe),c.a.createElement("div",{className:m.a.item},c.a.createElement("b",null,"Contacts:"),Object.keys(t.contacts).map((function(e){return c.a.createElement(S,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))),n&&c.a.createElement("div",{className:m.a.edit},c.a.createElement("button",{onClick:a},"Edit")))},k=a(231),N=a.n(k),O=a(232),j=a(116),y=Object(j.a)({form:"edit-profile"})((function(e){var t=e.profile,a=e.handleSubmit,n=e.error;return c.a.createElement("form",{className:m.a.description,onSubmit:a},c.a.createElement("div",{className:m.a.item},c.a.createElement("b",null,"Full name:")," ",Object(O.c)("Full name","fullName",[],O.a)),c.a.createElement("div",{className:m.a.item},c.a.createElement("b",null,"Looking for a lob:"),Object(O.c)("","lookingForAJob",[],O.a,{type:"checkbox"})),c.a.createElement("div",{className:m.a.item},c.a.createElement("b",null,"My professional skills:"),Object(O.c)("My professional skills","lookingForAJobDescription",[],O.b)),c.a.createElement("div",{className:m.a.item},c.a.createElement("b",null,"About me:"),Object(O.c)("About me","aboutMe",[],O.b)),c.a.createElement("div",{className:m.a.item},c.a.createElement("b",null,"Contacts:"),Object.keys(t.contacts).map((function(e){return c.a.createElement("div",{key:e,className:m.a.contact},c.a.createElement("b",null,e,":"),Object(O.c)(e,"contacts."+e,[],O.b))}))),c.a.createElement("div",{className:m.a.edit},c.a.createElement("button",{onClick:function(){}},"Save")),n&&c.a.createElement("div",{className:N.a.formSummaryError},n))})),S=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",null,""!=a&&null!=a&&c.a.createElement("div",{className:m.a.contact},c.a.createElement("b",null,t),":",c.a.createElement("a",{href:a,target:"blank"},a)))},M=function(e){var t=e.isOwner,a=e.profile,n=e.status,o=e.updateStatus,r=e.savePhoto,l=e.saveProfile,u=Object(i.useState)(!1),f=Object(s.a)(u,2),p=f[0],b=f[1],h=Object(i.useState)(!1),_=Object(s.a)(h,2),k=_[0],N=_[1];if(!a)return c.a.createElement(E.a,null);return c.a.createElement("div",{className:m.a.container},c.a.createElement("div",{className:m.a.descriptionBlock},c.a.createElement("div",{className:m.a.image},c.a.createElement("div",{onClick:function(){return b(!0)}},c.a.createElement("img",{src:a.photos.large||v.a})),c.a.createElement(g,{modal:p,setModal:b},c.a.createElement("div",{className:m.a.changePhoto},c.a.createElement("div",null,t&&c.a.createElement("input",{type:"file",id:"file-upload",onChange:function(e){e.target.files&&e.target.files.length&&r(e.target.files[0])}}),c.a.createElement("label",{htmlFor:"file-upload",className:m.a.customFileUpload},c.a.createElement("span",{className:m.a.jsFileName},"Upload a photo"))))),c.a.createElement(d,{status:n,updateStatus:o})),k?c.a.createElement(y,{initialValues:a,profile:a,onSubmit:function(e){l(e).then((function(){N(!1)}))}}):c.a.createElement(P,{profile:a,goToEditMode:function(){return N(!0)},isOwner:t})))},C=a(64),F=a(297),w=a.n(F),I=a(298),x=a.n(I),A=c.a.memo((function(e){return c.a.createElement("div",{className:x.a.item},c.a.createElement("img",{src:"https://vignette.wikia.nocookie.net/lisenot/images/2/25/.jpg/revision/latest/scale-to-width-down/340?cb=20150514143502&path-prefix=ru"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like")," ",e.howManyLikes))})),B=a(115),J=a(234),U=c.a.memo((function(e){var t=e.profilePage.posts.map((function(e){return c.a.createElement(A,{id:e.id,message:e.message,howManyLikes:e.howManyLikes})}));return c.a.createElement("div",{className:w.a.postBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement("div",{className:w.a.nav},c.a.createElement(L,{onSubmit:function(t){e.addPostCallback(t.newPostText)}})),c.a.createElement("div",{className:w.a.posts},t))})),T=Object(J.a)(10),L=Object(j.a)({form:"dialogAddMessageForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(B.a,{name:"newPostText",component:O.b,placeholder:"Post message",validate:[J.c,T,J.b]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),D=U,V=a(9),X=Object(V.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPostCallback:function(t){e(Object(C.a)(t))}}}))(D),z=function(e){return console.log("profile"),c.a.createElement("div",null,e.profile&&c.a.createElement(M,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),c.a.createElement(X,null))},H=a(7),K=a(20),q=a(299),G=a.n(q),W=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.authorizedUserIs)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement("div",{className:G.a.profileContainer},c.a.createElement(z,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})))}}]),a}(c.a.Component);t.default=Object(K.d)(Object(V.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserIs:e.auth.id,isAuth:e.auth.isAuth}}),{getProfile:C.b,getStatus:C.c,updateStatus:C.g,savePhoto:C.e,saveProfile:C.f}),H.f)(W)}}]);
//# sourceMappingURL=4.0d49f2be.chunk.js.map