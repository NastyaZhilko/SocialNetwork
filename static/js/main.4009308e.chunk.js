(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{11:function(e,t,n){e.exports={nav:"Navbar_nav__8_Igp",item:"Navbar_item__ulGPc",activeLink:"Navbar_activeLink__2OwnW"}},141:function(e,t,n){e.exports=n(229)},143:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var a=n(39),r=n(40),c=n(44),i=n(43),u=n(0),o=n.n(u),s=(n(143),n(11)),l=n.n(s),f=n(10),d=function(){return o.a.createElement("nav",{className:l.a.nav},o.a.createElement("div",{className:l.a.item},o.a.createElement(f.b,{to:"/profile",activeClassName:l.a.activeLink},"Profile")),o.a.createElement("div",{className:"".concat(l.a.item," ").concat(l.a.active)},o.a.createElement(f.b,{to:"/dialogs",activeClassName:l.a.activeLink},"Dialogs")),o.a.createElement("div",{className:l.a.item},o.a.createElement(f.b,{to:"/users",activeClassName:l.a.activeLink},"Users")),o.a.createElement("div",{className:l.a.item},o.a.createElement(f.b,{to:"/news",activeClassName:l.a.activeLink},"News")),o.a.createElement("div",{className:l.a.item},o.a.createElement(f.b,{to:"/music",activeClassName:l.a.activeLink},"Music")),o.a.createElement("div",{className:l.a.item},o.a.createElement(f.b,{to:"/settings",activeClassName:l.a.activeLink},"Settings")))},p=n(6),m=n(85),g=n.n(m),b=function(e){return o.a.createElement("div",{className:g.a.Music},"Music")},h=function(e){return o.a.createElement("div",null,"News")},v=function(e){return o.a.createElement("div",null,"Settings")},E=n(9),O=n(42),w=n(88),j=n(5),S=n.n(j),y=n(8),P=n(26),_=n(2),k=n(7),T=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(_.a)(Object(_.a)({},e),a):e}))},N={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},C=function(e){return{type:"FOLLOW",userId:e}},I=function(e){return{type:"UNFOLLOW",userId:e}},L=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},x=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFetch:e,userId:t}},A=function(e,t){return function(){var n=Object(y.a)(S.a.mark((function n(a){var r;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(L(!0)),a({type:"SET-CURRENT-PAGE",currentPage:e}),n.next=4,k.d.getUsers(e,t);case 4:r=n.sent,a(L(!1)),a({type:"SET-USERS",users:r.data.items}),a({type:"SET-TOTAL-USERS-COUNT",count:r.data.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},U=function(){var e=Object(y.a)(S.a.mark((function e(t,n,a,r){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0,n)),e.next=3,a(n);case 3:e.sent.data.resultCode===k.a.Success&&t(r(n)),t(x(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),F=n(46),R=n(83),z=n(47),G=n.n(z),M=n(90),D=n.n(M),W=function(e){for(var t=e.totalItemCount,n=e.currentPage,a=e.pageSize,r=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,s=Math.ceil(t/a),l=[],f=1;f<=s;f++)l.push(f);var d=Math.ceil(s/i),p=Object(u.useState)(1),m=Object(R.a)(p,2),g=m[0],b=m[1],h=(g-1)*i+1,v=g*i;return o.a.createElement("div",{className:G.a.paginator},g>1&&o.a.createElement("button",{onClick:function(){b(g-1)}},"PREV"),l.filter((function(e){return e>=h&&e<=v})).map((function(e){return o.a.createElement("span",{className:D()(Object(F.a)({},G.a.selectedPage,n===e),G.a.pageNumber),key:e,onClick:function(t){r(e)}},e)})),d>g&&o.a.createElement("button",{onClick:function(){b(g+1)}},"NEXT"))},H=n(58),B=n.n(H),q=n(76),V=n.n(q),X=function(e){var t=e.user,n=e.followingInProgress,a=e.unFollow,r=e.follow;return o.a.createElement("div",{className:B.a.container},o.a.createElement("span",null,o.a.createElement("div",null,o.a.createElement(f.b,{to:"/profile/"+t.id},o.a.createElement("img",{className:B.a.avatar,src:null!=t.photos.small?t.photos.small:V.a}))),o.a.createElement("div",null,t.followed?o.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):o.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Follow"))),o.a.createElement("span",null,o.a.createElement("span",null,o.a.createElement("div",null,t.name),o.a.createElement("div",null,t.status)),o.a.createElement("span",null,o.a.createElement("div",null,"location.country"),o.a.createElement("div",null,"location.city"))))},K=function(e){Object(w.a)(e);var t=Object(E.d)((function(e){return e.usersPage.totalUsersCount})),n=Object(E.d)((function(e){return e.usersPage.currentPage})),a=Object(E.d)((function(e){return e.usersPage.users})),r=Object(E.d)((function(e){return e.usersPage.pageSize})),c=Object(E.d)((function(e){return e.usersPage.followingInProgress})),i=Object(E.c)();Object(u.useEffect)((function(){i(A(n,r))}),[]);var s=function(e){i(function(e){return function(){var t=Object(y.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U(n,e,k.d.follow.bind(k.d),C);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},l=function(e){i(function(e){return function(){var t=Object(y.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U(n,e,k.d.unFollow.bind(k.d),I);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return o.a.createElement("div",null,o.a.createElement(W,{currentPage:n,onPageChanged:function(e){i(A(e,r))},pageSize:r,totalItemCount:t}),o.a.createElement("div",null,a.map((function(e){return o.a.createElement(X,{user:e,followingInProgress:c,follow:s,unFollow:l,key:e.id})}))))},Z=function(e){var t=Object(E.d)((function(e){return e.usersPage.isFetching}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,e.pageTitle),t?o.a.createElement(O.a,null):null,o.a.createElement(K,null))},J=n(59),Q=n.n(J),Y=o.a.memo((function(e){var t=e.isAuth,n=e.login,a=e.logOut;return o.a.createElement("header",{className:Q.a.header},o.a.createElement("img",{src:"https://flosium.ru/imagehost/158/med_kak-razvivaetsya-cvetok-gerbery-v-domashnih-usloviyah.jpg"}),o.a.createElement("div",{className:Q.a.loginBlock},t?o.a.createElement("div",null,n," - ",o.a.createElement("button",{onClick:a},"Log out")," "):o.a.createElement(f.b,{to:"/login"},"Login")))})),$=n(23),ee=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement(Y,Object.assign({},this.props,{isAuth:this.props.isAuth,logOut:this.props.logOut,login:this.props.login}))}}]),n}(o.a.Component),te=Object(E.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{auth:$.a,logOut:$.c})(ee),ne=n(20),ae={initialized:!1};function re(e){return function(t){return o.a.createElement(u.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(e,t))}}var ce=o.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,297))})),ie=o.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,298))})),ue=o.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,296))})),oe=re(ie),se=re(ce),le=re(ue),fe=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?o.a.createElement(f.a,null,o.a.createElement("div",{className:"app-wrapper"},o.a.createElement(te,null),o.a.createElement("div",{className:"navigation"},o.a.createElement(d,null)),o.a.createElement("div",{className:"app-wrapper-content"},o.a.createElement(p.b,{path:"/music",component:b}),o.a.createElement(p.b,{path:"/news",component:h}),o.a.createElement(p.b,{path:"/settings",component:v}),o.a.createElement(p.b,{path:"/dialogs",render:function(){return o.a.createElement(oe,null)}}),o.a.createElement(p.b,{path:"/profile/:userId?",render:function(){return o.a.createElement(se,null)}}),o.a.createElement(p.b,{path:"/users",render:function(){return o.a.createElement(Z,{pageTitle:"Samurai"})}}),o.a.createElement(p.b,{path:"/login",render:function(){return o.a.createElement(le,null)}})))):o.a.createElement(O.a,null)}}]),n}(o.a.Component),de=Object(ne.d)(p.f,Object(E.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(y.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object($.a)());case 2:t({type:"SET_INITIALIZED"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(fe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=n(41),me=n.n(pe),ge=n(62),be={friends:[{id:1,name:"Lera",img:"https://hvost.news/upload/resize_cache/iblock/8b8/750_400_1/pochemu_kotenok_lizhet_volosy_i_zaryvaetsja_v_nih.jpg"},{id:2,name:"Nick",img:"https://irecommend.ru/sites/default/files/product-images/8170/x_1bfe8ccb.jpg"},{id:3,name:"Sasha",img:"https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2019-10/3_2.jpg?itok=490tTVov"}]},he=n(77),ve=n(91),Ee=n(84),Oe=Object(ne.c)({profilePage:ge.d,dialogsPage:he.b,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(_.a)(Object(_.a)({},e),{},{users:T(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(_.a)(Object(_.a)({},e),{},{users:T(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(_.a)(Object(_.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(_.a)(Object(_.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(_.a)(Object(_.a)({},e),{},{followingInProgress:t.isFetch?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},auth:$.b,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}},form:Ee.a}),we=Object(ne.e)(Oe,Object(ne.a)(ve.a));window.store=we;var je=we;me.a.render(o.a.createElement(f.a,null,o.a.createElement(E.a,{store:je},o.a.createElement(de,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return m}));var a=n(5),r=n.n(a),c=n(8),i=n(2),u=n(7),o=n(48),s={id:null,email:null,login:null,isAuth:!1,captcha:null},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":return Object(i.a)(Object(i.a)({},e),t.payload);default:return e}},f=function(e,t,n,a){return{type:"samurai-network/auth/SET_USER_DATA",payload:{id:e,email:n,login:t,isAuth:a}}},d=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.me();case 2:(n=e.sent).data.resultCode===u.a.Success&&(a=n.data.data,c=a.id,i=a.login,o=a.email,t(f(c,i,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n,a){return function(){var i=Object(c.a)(r.a.mark((function c(i){var s,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.b.login(e,t,n,a);case 2:(s=r.sent).data.resultCode===u.a.Success?i(d()):(l=s.data.messages.length>0?s.data.messages[0]:"Some error",i(Object(o.a)("login",{_error:l})));case 4:case"end":return r.stop()}}),c)})));return function(e){return i.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.logOut();case 2:e.sent.data.resultCode===u.a.Success&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},42:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(87),i=n.n(c);t.a=function(){return r.a.createElement("img",{src:i.a})}},47:function(e,t,n){e.exports={paginator:"Paginator_paginator__9OQqy",pageNumber:"Paginator_pageNumber__2Xff8",selectedPage:"Paginator_selectedPage__2EAXe"}},58:function(e,t,n){e.exports={container:"Users_container__3RTIw",avatar:"Users_avatar__3rKsv",selectedPage:"Users_selectedPage__3jfWm"}},59:function(e,t,n){e.exports={header:"Header_header__2tyyt",loginBlock:"Header_loginBlock__1OQkB"}},62:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return b}));var a=n(5),r=n.n(a),c=n(8),i=n(26),u=n(2),o=n(7),s={posts:[{id:1,message:"Hi, how are you?",howManyLikes:10},{id:2,message:"It is my first post?",howManyLikes:15}],profile:null,status:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[{id:3,message:t.newPostText,howManyLikes:0}])});case"SET-USER-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"SAVE-PHOTO-SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}},f=function(e){return{type:"ADD-POST",newPostText:e}},d=function(e){return{type:"SET-STATUS",status:e}},p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.getProfile(e);case 2:a=t.sent,n({type:"SET-USER-PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getStatus(e);case 2:a=t.sent,n(d(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.updateStatus(e);case 2:t.sent.data.resultCode===o.a.Success&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.savePhoto(e);case 2:(a=t.sent).data.resultCode===o.a.Success&&n({type:"SAVE-PHOTO-SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return o}));var a,r=n(89),c=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"5562f413-fdfb-4253-9584-34a31cc657d3"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}));var i={getUsers:function(e,t){return c.get("users?page=".concat(e,"&count=").concat(t))},unFollow:function(e){return c.delete("follow/".concat(e))},follow:function(e){return c.post("follow/".concat(e))},getProfile:function(e){return u.getProfile(e)}},u={getProfile:function(e){return c.get("profile/"+e)},getStatus:function(e){return c.get("profile/status/"+e)},updateStatus:function(e){return c.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},o={me:function(){return c.get("auth/me")},login:function(e,t,n,a){return c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logOut:function(){return c.delete("auth/login")}}},76:function(e,t,n){e.exports=n.p+"static/media/avatar1.498d600c.png"},77:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var a=n(26),r=n(2),c={messages:[{id:1,message:"Hello"},{id:2,message:"How are you?"},{id:3,message:"What do you do"},{id:4,message:"My dog is the best friend"},{id:5,message:"The best day!"}],dialogs:[{id:1,name:"Lera",img:"https://www.sb.by/upload/resize_cache/slam.image/iblock/558/558ebd06b5552debf362edd774b92920.jpg"},{id:2,name:"Sasha",img:"https://i.pinimg.com/originals/8e/b0/fd/8eb0fdac7230089db2fa51f53e53397e.jpg"},{id:3,name:"Kesha",img:"https://www.belanta.vet/vet-blog/wp-content/uploads/2018/08/bulterer_07.jpg"},{id:4,name:"Dasha",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNdbepu0Mk7TjGMAibWXRBh5Zn1lXAWFLtVg&usqp=CAU"},{id:5,name:"Pasha",img:"https://cameralabs.org/images/jamp/page/d07d78d2fbbd361944e4a80341a9931b_L.jpg"}]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:t.newMessageText}])});default:return e}},u=function(e){return{type:"SEND-MESSAGE",newMessageText:e}}},85:function(e,t,n){},87:function(e,t,n){e.exports=n.p+"static/media/preloader.0ad6a0ce.gif"}},[[141,2,3]]]);
//# sourceMappingURL=main.4009308e.chunk.js.map