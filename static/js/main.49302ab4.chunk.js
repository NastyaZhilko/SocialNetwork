(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__xFR2T",dialog:"Dialogs_dialog__3YZMl",message:"Dialogs_message__YR3GF",messages:"Dialogs_messages__15RF7",dialogItems:"Dialogs_dialogItems__1Hjf9",active:"Dialogs_active__2z4cT"}},23:function(e,t,a){e.exports={item:"MyPosts_item__UXf7B",postBlock:"MyPosts_postBlock__1kfNr",posts:"MyPosts_posts__nqRn6"}},28:function(e,t,a){e.exports={avatar:"Users_avatar__3rKsv",selectedPage:"Users_selectedPage__3jfWm"}},29:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__Z3h2x",image:"ProfileInfo_image__1MsHN"}},30:function(e,t,a){e.exports={header:"Header_header__2tyyt",loginBlock:"Header_loginBlock__1OQkB"}},41:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/avatar1.498d600c.png"},45:function(e,t,a){e.exports=a.p+"static/media/preloader.0ad6a0ce.gif"},46:function(e,t,a){e.exports=a.p+"static/media/wpapers.a1b97f4f.jpg"},47:function(e,t,a){e.exports={item:"post_item__3KsPL"}},5:function(e,t,a){e.exports={nav:"Navbar_nav__8_Igp",item:"Navbar_item__ulGPc",activeLink:"Navbar_activeLink__2OwnW"}},50:function(e,t,a){e.exports=a(78)},52:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=(a(52),a(5)),i=a.n(s),o=a(4),c=function(){return r.a.createElement("nav",{className:i.a.nav},r.a.createElement("div",{className:i.a.item},r.a.createElement(o.b,{to:"/profile",activeClassName:i.a.activeLink},"Profile")),r.a.createElement("div",{className:"".concat(i.a.item," ").concat(i.a.active)},r.a.createElement(o.b,{to:"/dialogs",activeClassName:i.a.activeLink},"Dialogs")),r.a.createElement("div",{className:i.a.item},r.a.createElement(o.b,{to:"/users",activeClassName:i.a.activeLink},"Users")),r.a.createElement("div",{className:i.a.item},r.a.createElement(o.b,{to:"/news",activeClassName:i.a.activeLink},"News")),r.a.createElement("div",{className:i.a.item},r.a.createElement(o.b,{to:"/music",activeClassName:i.a.activeLink},"Music")),r.a.createElement("div",{className:i.a.item},r.a.createElement(o.b,{to:"/settings",activeClassName:i.a.activeLink},"Settings")))},l=a(3),u=a(41),m=a.n(u),g=function(e){return r.a.createElement("div",{className:m.a.Music},"Music")},d=function(e){return r.a.createElement("div",null,"News")},p=function(e){return r.a.createElement("div",null,"Settings")},f=a(14),E=a(15),h=a(18),v=a(16),b=a(6),w=a(17),O=a(1),P=a(43),_=a.n(P).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"f86ed128-1eb6-4390-9695-099af06721b7"}}),j=function(e,t){return _.get("users?page=".concat(e,"&count=").concat(t))},N=function(e){return _.delete("follow/".concat(e))},T=function(e){return _.post("follow/".concat(e))},y=function(e){return _.get("profile/"+e)},S=function(){return _.get("auth/me")},k={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},C=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},L=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFetch:e,userId:t}},A=a(28),I=a.n(A),M=a(44),U=a.n(M),x=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],n=1;n<=t;n++)a.push(n);return r.a.createElement("div",null,r.a.createElement("div",null,a.map((function(t){return r.a.createElement("span",{className:e.currentPage===t?I.a.selectedPage:"",onClick:function(){e.onPageChanged(t)}},t)}))),e.usersPage.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(o.b,{to:"/profile/"+t.id},r.a.createElement("img",{className:I.a.avatar,src:null!=t.photos.small?t.photos.small:U.a}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unFollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"location.country"),r.a.createElement("div",null,"location.city"))))})))},F=a(45),G=a.n(F),R=function(e){return r.a.createElement("img",{src:e.loading})},D=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(R,{loading:G.a}):null,r.a.createElement(x,{follow:this.props.follow,unFollow:this.props.unFollow,usersPage:this.props.usersPage,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress}))}}]),a}(r.a.Component),W=Object(b.b)((function(e){return{usersPage:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(L(!0,e)),T(e).then((function(a){0===a.data.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(L(!1,e))}))}},unFollow:function(e){return function(t){t(L(!0,e)),N(e).then((function(a){0===a.data.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(L(!1,e))}))}},setCurrentPage:function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},getUsers:function(e,t){return function(a){a(C(!0)),j(e,t).then((function(e){a(C(!1)),a({type:"SET-USERS",users:e.data.items}),a({type:"SET-TOTAL-USERS-COUNT",count:e.data.totalCount})}))}}})(D),B=a(29),z=a.n(B),H=a(46),X=a.n(H),K=function(e){var t;return r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement("div",{className:z.a.image},r.a.createElement("img",{src:X.a})),r.a.createElement("div",{className:z.a.descriptionBlock},r.a.createElement("img",{src:null===(t=e.profile)||void 0===t?void 0:t.photos.large}),"ava+description"))},q={posts:[{id:1,message:"Hi, how are you?",howManyLikes:10},{id:2,message:"It is my first post?",howManyLikes:15}],newPostText:"New post",profile:null},Y=a(23),Z=a.n(Y),J=a(47),V=a.n(J),Q=function(e){return r.a.createElement("div",{className:V.a.item},r.a.createElement("img",{src:"https://vignette.wikia.nocookie.net/lisenot/images/2/25/.jpg/revision/latest/scale-to-width-down/340?cb=20150514143502&path-prefix=ru"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"like")," ",e.howManyLikes))},$=function(e){var t=e.profilePage.posts.map((function(e){return r.a.createElement(Q,{id:e.id,message:e.message,howManyLikes:e.howManyLikes})}));return r.a.createElement("div",{className:Z.a.postBlock},r.a.createElement("h3",null,"My posts"),r.a.createElement("div",{className:Z.a.nav},r.a.createElement("div",null,r.a.createElement("textarea",{value:e.profilePage.newPostText,onChange:function(t){var a=t.currentTarget.value;e.addNewPostText(a)}})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.addPostCallback(e.profilePage.newPostText)}},"Add post"))),r.a.createElement("div",{className:Z.a.posts},t))},ee=Object(b.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPostCallback:function(){e({type:"ADD-POST"})},addNewPostText:function(t){e(function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(t))}}}))($),te=function(e){return r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(K,{profile:e.profile}),r.a.createElement(ee,null))},ae=a(49),ne=function(e){return{isAuth:e.auth.isAuth}};function re(e){return Object(b.b)(ne)((function(t){t.isAuth;var a=Object(ae.a)(t,["isAuth"]);return t.isAuth?r.a.createElement(e,a):r.a.createElement(l.a,{to:"/login"})}))}var se=re(function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=Number(this.props.match.params.userId);e||(e=2),this.props.getProfile(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(te,Object.assign({},this.props,{profile:this.props.profile})))}}]),a}(r.a.Component)),ie=Object(l.f)(se),oe=Object(b.b)((function(e){return{profile:e.profilePage.profile}}),{getProfile:function(e){return function(t){y(e).then((function(e){t({type:"SET-USER-PROFILE",profile:e.data})}))}}})(ie),ce=a(30),le=a.n(ce),ue=function(e){return r.a.createElement("header",{className:le.a.header},r.a.createElement("img",{src:"https://flosium.ru/imagehost/158/med_kak-razvivaetsya-cvetok-gerbery-v-domashnih-usloviyah.jpg"}),r.a.createElement("div",{className:le.a.loginBlock},e.isAuth?e.login:r.a.createElement(o.b,{to:"/login"},"Login")))},me={id:null,email:null,login:null,isAuth:!1},ge=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"componentDidMount",value:function(){this.props.auth()}},{key:"render",value:function(){return r.a.createElement(ue,Object.assign({},this.props,{isAuth:this.props.isAuth,login:this.props.login}))}}]),a}(r.a.Component),de=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{auth:function(){return function(e){S().then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.id,r=a.login,s=a.email;e(function(e,t,a){return{type:"SET_USER_DATA",data:{id:e,email:t,login:a}}}(n,r,s))}}))}}})(ge),pe=function(e){return r.a.createElement("h1",null,"Login")},fe={messages:[{id:1,message:"Hello"},{id:2,message:"How are you?"},{id:3,message:"What do you do"},{id:4,message:"My dog is the best friend"},{id:5,message:"The best day!"}],newMessageText:"",dialogs:[{id:1,name:"Lera",img:"https://www.sb.by/upload/resize_cache/slam.image/iblock/558/558ebd06b5552debf362edd774b92920.jpg"},{id:2,name:"Sasha",img:"https://i.pinimg.com/originals/8e/b0/fd/8eb0fdac7230089db2fa51f53e53397e.jpg"},{id:3,name:"Kesha",img:"https://www.belanta.vet/vet-blog/wp-content/uploads/2018/08/bulterer_07.jpg"},{id:4,name:"Dasha",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNdbepu0Mk7TjGMAibWXRBh5Zn1lXAWFLtVg&usqp=CAU"},{id:5,name:"Pasha",img:"https://cameralabs.org/images/jamp/page/d07d78d2fbbd361944e4a80341a9931b_L.jpg"}]},Ee=a(12),he=a.n(Ee),ve=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",{className:he.a.dialog},r.a.createElement("img",{src:e.img}),r.a.createElement(o.b,{to:t},e.name))},be=function(e){return r.a.createElement("div",{className:he.a.message},e.message)},we=re((function(e){var t=e.dialogsPage.dialogs.map((function(e){return r.a.createElement(ve,{name:e.name,id:e.id,img:e.img})})),a=e.dialogsPage.messages.map((function(e){return r.a.createElement(be,{message:e.message})})),n=e.dialogsPage.newMessageText;return!1===e.isAuth?r.a.createElement(l.a,{to:"/login"}):r.a.createElement("div",{className:he.a.dialogs},r.a.createElement("div",{className:he.a.dialogItems},t),r.a.createElement("div",{className:he.a.messages},r.a.createElement("div",null,a),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("textarea",{value:n,onChange:function(t){e.onNewMessageChange(t.currentTarget.value)},placeholder:"Enter your message"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.onSendMessageClick(e.dialogsPage.newMessageText)}},"Send")))),r.a.createElement("div",{className:he.a.messages}))})),Oe=Object(b.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{onSendMessageClick:function(){e({type:"SEND-MESSAGE"})},onNewMessageChange:function(t){e(function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",messageBody:e}}(t))}}}))(we),Pe=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(de,null),r.a.createElement("div",{className:"navigation"},r.a.createElement(c,null)),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(l.b,{path:"/music",component:g}),r.a.createElement(l.b,{path:"/news",component:d}),r.a.createElement(l.b,{path:"/settings",component:p}),r.a.createElement(l.b,{path:"/dialogs",render:function(){return r.a.createElement(Oe,null)}}),r.a.createElement(l.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(l.b,{path:"/users",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(l.b,{path:"/login",render:function(){return r.a.createElement(pe,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _e=a(22),je=a.n(_e),Ne=a(19),Te={friends:[{id:1,name:"Lera",img:"https://hvost.news/upload/resize_cache/iblock/8b8/750_400_1/pochemu_kotenok_lizhet_volosy_i_zaryvaetsja_v_nih.jpg"},{id:2,name:"Nick",img:"https://irecommend.ru/sites/default/files/product-images/8170/x_1bfe8ccb.jpg"},{id:3,name:"Sasha",img:"https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2019-10/3_2.jpg?itok=490tTVov"}]},ye=a(48),Se=Object(Ne.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:3,message:e.newPostText,howManyLikes:0};return Object(O.a)(Object(O.a)({},e),{},{posts:[].concat(Object(w.a)(e.posts),[a]),newPostText:""});case"UPDATE-NEW-POST-TEXT":return Object(O.a)(Object(O.a)({},e),{},{newPostText:t.newText});case"SET-USER-PROFILE":return Object(O.a)(Object(O.a)({},e),{},{profile:t.profile});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-TEXT":return Object(O.a)(Object(O.a)({},e),{},{newMessageText:t.messageBody});case"SEND-MESSAGE":var a=e.newMessageText;return Object(O.a)(Object(O.a)({},e),{},{newMessageText:"",messages:[].concat(Object(w.a)(e.messages),[{id:6,message:a}])});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(O.a)(Object(O.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(O.a)(Object(O.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(O.a)(Object(O.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(O.a)(Object(O.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(O.a)(Object(O.a)({},e),{},{followingInProgress:t.isFetch?[].concat(Object(w.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(O.a)(Object(O.a)(Object(O.a)({},e),t.data),{},{isAuth:!0});default:return e}}}),ke=Object(Ne.d)(Se,Object(Ne.a)(ye.a));window.store=ke;var Ce=ke;je.a.render(r.a.createElement(o.a,null,r.a.createElement(b.a,{store:Ce},r.a.createElement(Pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.49302ab4.chunk.js.map