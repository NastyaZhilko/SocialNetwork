(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__xFR2T",dialog:"Dialogs_dialog__3YZMl",message:"Dialogs_message__YR3GF",messages:"Dialogs_messages__15RF7",dialogItems:"Dialogs_dialogItems__1Hjf9",active:"Dialogs_active__2z4cT"}},19:function(e,a,t){e.exports={item:"MyPosts_item__UXf7B",postBlock:"MyPosts_postBlock__1kfNr",posts:"MyPosts_posts__nqRn6"}},23:function(e,a,t){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__Z3h2x",image:"ProfileInfo_image__1MsHN"}},25:function(e,a,t){e.exports={avatar:"Users_avatar__3rKsv",selectedPage:"Users_selectedPage__3jfWm"}},37:function(e,a,t){e.exports={header:"Header_header__2tyyt"}},38:function(e,a,t){e.exports=t.p+"static/media/wpapers.a1b97f4f.jpg"},39:function(e,a,t){e.exports={item:"post_item__3KsPL"}},4:function(e,a,t){e.exports={nav:"Navbar_nav__8_Igp",item:"Navbar_item__ulGPc",activeLink:"Navbar_activeLink__2OwnW"}},41:function(e,a,t){},44:function(e,a,t){e.exports=t.p+"static/media/avatar1.498d600c.png"},47:function(e,a,t){e.exports=t(75)},49:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=(t(49),t(37)),c=t.n(r),i=function(){return s.a.createElement("header",{className:c.a.header},s.a.createElement("img",{src:"https://flosium.ru/imagehost/158/med_kak-razvivaetsya-cvetok-gerbery-v-domashnih-usloviyah.jpg"}))},o=t(4),l=t.n(o),u=t(7),m=function(){return s.a.createElement("nav",{className:l.a.nav},s.a.createElement("div",{className:l.a.item},s.a.createElement(u.b,{to:"/profile",activeClassName:l.a.activeLink},"Profile")),s.a.createElement("div",{className:"".concat(l.a.item," ").concat(l.a.active)},s.a.createElement(u.b,{to:"/dialogs",activeClassName:l.a.activeLink},"Dialogs")),s.a.createElement("div",{className:l.a.item},s.a.createElement(u.b,{to:"/users",activeClassName:l.a.activeLink},"Users")),s.a.createElement("div",{className:l.a.item},s.a.createElement(u.b,{to:"/news",activeClassName:l.a.activeLink},"News")),s.a.createElement("div",{className:l.a.item},s.a.createElement(u.b,{to:"/music",activeClassName:l.a.activeLink},"Music")),s.a.createElement("div",{className:l.a.item},s.a.createElement(u.b,{to:"/settings",activeClassName:l.a.activeLink},"Settings")))},g=t(23),d=t.n(g),p=t(38),E=t.n(p),f=function(){return s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement("div",{className:d.a.image},s.a.createElement("img",{src:E.a})),s.a.createElement("div",{className:d.a.descriptionBlock},"ava+description"))},v=t(18),h=t(2),b={posts:[{id:1,message:"Hi, how are you?",howManyLikes:10},{id:2,message:"It is my first post?",howManyLikes:15}],newPostText:"New post"},w=t(19),_=t.n(w),P=t(39),N=t.n(P),T=function(e){return s.a.createElement("div",{className:N.a.item},s.a.createElement("img",{src:"https://vignette.wikia.nocookie.net/lisenot/images/2/25/.jpg/revision/latest/scale-to-width-down/340?cb=20150514143502&path-prefix=ru"}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,"like")," ",e.howManyLikes))},k=function(e){var a=e.profilePage.posts.map((function(e){return s.a.createElement(T,{id:e.id,message:e.message,howManyLikes:e.howManyLikes})}));return s.a.createElement("div",{className:_.a.postBlock},s.a.createElement("h3",null,"My posts"),s.a.createElement("div",{className:_.a.nav},s.a.createElement("div",null,s.a.createElement("textarea",{value:e.profilePage.newPostText,onChange:function(a){var t=a.currentTarget.value;e.addNewPostText(t)}})),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){e.addPostCallback(e.profilePage.newPostText)}},"Add post"))),s.a.createElement("div",{className:_.a.posts},a))},y=t(12),j=Object(y.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPostCallback:function(){e({type:"ADD-POST"})},addNewPostText:function(a){e(function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(a))}}}))(k),O=function(){return s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(f,null),s.a.createElement("div",null,s.a.createElement(j,null)))},S=t(3),C=t(41),M=t.n(C),x=function(e){return s.a.createElement("div",{className:M.a.Music},"Music")},U=function(e){return s.a.createElement("div",null,"News")},L=function(e){return s.a.createElement("div",null,"Settings")},A={messages:[{id:1,message:"Hello"},{id:2,message:"How are you?"},{id:3,message:"What do you do"},{id:4,message:"My dog is the best friend"},{id:5,message:"The best day!"}],newMessageText:"",dialogs:[{id:1,name:"Lera",img:"https://www.sb.by/upload/resize_cache/slam.image/iblock/558/558ebd06b5552debf362edd774b92920.jpg"},{id:2,name:"Sasha",img:"https://i.pinimg.com/originals/8e/b0/fd/8eb0fdac7230089db2fa51f53e53397e.jpg"},{id:3,name:"Kesha",img:"https://www.belanta.vet/vet-blog/wp-content/uploads/2018/08/bulterer_07.jpg"},{id:4,name:"Dasha",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNdbepu0Mk7TjGMAibWXRBh5Zn1lXAWFLtVg&usqp=CAU"},{id:5,name:"Pasha",img:"https://cameralabs.org/images/jamp/page/d07d78d2fbbd361944e4a80341a9931b_L.jpg"}]},D=t(11),z=t.n(D),W=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:z.a.dialog},s.a.createElement("img",{src:e.img}),s.a.createElement(u.b,{to:a},e.name))},F=function(e){return s.a.createElement("div",{className:z.a.message},e.message)},R=function(e){var a=e.dialogsPage.dialogs.map((function(e){return s.a.createElement(W,{name:e.name,id:e.id,img:e.img})})),t=e.dialogsPage.messages.map((function(e){return s.a.createElement(F,{message:e.message})})),n=e.dialogsPage.newMessageText;return s.a.createElement("div",{className:z.a.dialogs},s.a.createElement("div",{className:z.a.dialogItems},a),s.a.createElement("div",{className:z.a.messages},s.a.createElement("div",null,t),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("textarea",{value:n,onChange:function(a){e.onNewMessageChange(a.currentTarget.value)},placeholder:"Enter your message"})),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){e.onSendMessageClick(e.dialogsPage.newMessageText)}},"Send")))),s.a.createElement("div",{className:z.a.messages}))},B=Object(y.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onSendMessageClick:function(){e({type:"SEND-MESSAGE"})},onNewMessageChange:function(a){e(function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",messageBody:e}}(a))}}}))(R),I=t(42),G=t(43),X=t(46),H=t(45),q={users:[],pageSize:5,totalUsersCount:0,currentPage:1},K=t(25),Z=t.n(K),J=t(44),V=t.n(J),Y=function(e){for(var a=Math.ceil(e.totalUsersCount/e.pageSize),t=[],n=1;n<=a;n++)t.push(n);return s.a.createElement("div",null,s.a.createElement("div",null,t.map((function(a){return s.a.createElement("span",{className:e.currentPage===a?Z.a.selectedPage:"",onClick:function(){e.onPageChanged(a)}},a)}))),e.usersPage.map((function(a){return s.a.createElement("div",{key:a.id},s.a.createElement("span",null,s.a.createElement("div",null,s.a.createElement("img",{className:Z.a.avatar,src:null!=a.photos.small?a.photos.small:V.a})),s.a.createElement("div",null,a.followed?s.a.createElement("button",{onClick:function(){e.unFollow(a.id)}},"Unfollow"):s.a.createElement("button",{onClick:function(){e.follow(a.id)}},"Follow"))),s.a.createElement("span",null,s.a.createElement("span",null,s.a.createElement("div",null,a.name),s.a.createElement("div",null,a.status)),s.a.createElement("span",null,s.a.createElement("div",null,"location.country"),s.a.createElement("div",null,"location.city"))))})))},$=t(26),Q=t.n($),ee=function(e){Object(X.a)(t,e);var a=Object(H.a)(t);function t(){var e;Object(I.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).onPageChanged=function(a){e.props.setCurrentPage(a),Q.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(a,"&count=").concat(e.props.pageSize)).then((function(a){e.props.setUsers(a.data.items)}))},e}return Object(G.a)(t,[{key:"componentDidMount",value:function(){var e=this;Q.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(a){e.props.setUsers(a.data.items),e.props.setTotalUsersCount(a.data.totalCount)}))}},{key:"render",value:function(){return s.a.createElement(Y,{follow:this.props.follow,unFollow:this.props.unFollow,usersPage:this.props.usersPage,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged})}}]),t}(s.a.Component),ae=Object(y.b)((function(e){return{usersPage:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage}}),(function(e){return{follow:function(a){e(function(e){return{type:"FOLLOW",userId:e}}(a))},unFollow:function(a){e(function(e){return{type:"UNFOLLOW",userId:e}}(a))},setUsers:function(a){e(function(e){return{type:"SET-USERS",users:e}}(a))},setCurrentPage:function(a){e({type:"SET-CURRENT-PAGE",currentPage:a})},setTotalUsersCount:function(a){e({type:"SET-TOTAL-USERS-COUNT",count:a})}}}))(ee),te=function(){return s.a.createElement(u.a,null,s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(i,null),s.a.createElement("div",{className:"navigation"},s.a.createElement(m,null)),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(S.a,{path:"/music",component:x}),s.a.createElement(S.a,{path:"/news",component:U}),s.a.createElement(S.a,{path:"/settings",component:L}),s.a.createElement(S.a,{path:"/dialogs",render:function(){return s.a.createElement(B,null)}}),s.a.createElement(S.a,{path:"/profile",render:function(){return s.a.createElement(O,null)}}),s.a.createElement(S.a,{path:"/users",render:function(){return s.a.createElement(ae,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=t(17),se=t.n(ne),re=t(15),ce={friends:[{id:1,name:"Lera",img:"https://hvost.news/upload/resize_cache/iblock/8b8/750_400_1/pochemu_kotenok_lizhet_volosy_i_zaryvaetsja_v_nih.jpg"},{id:2,name:"Nick",img:"https://irecommend.ru/sites/default/files/product-images/8170/x_1bfe8ccb.jpg"},{id:3,name:"Sasha",img:"https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2019-10/3_2.jpg?itok=490tTVov"}]},ie=Object(re.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD-POST":var t={id:3,message:e.newPostText,howManyLikes:0};return Object(h.a)(Object(h.a)({},e),{},{posts:[].concat(Object(v.a)(e.posts),[t]),newPostText:""});case"UPDATE-NEW-POST-TEXT":return Object(h.a)(Object(h.a)({},e),{},{newPostText:a.newText});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE-NEW-MESSAGE-TEXT":return Object(h.a)(Object(h.a)({},e),{},{newMessageText:a.messageBody});case"SEND-MESSAGE":var t=e.newMessageText;return Object(h.a)(Object(h.a)({},e),{},{newMessageText:"",messages:[].concat(Object(v.a)(e.messages),[{id:6,message:t}])});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return e.id===a.userId?Object(h.a)(Object(h.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return e.id===a.userId?Object(h.a)(Object(h.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(h.a)(Object(h.a)({},e),{},{users:a.users});case"SET-CURRENT-PAGE":return Object(h.a)(Object(h.a)({},e),{},{currentPage:a.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(h.a)(Object(h.a)({},e),{},{totalUsersCount:a.count});default:return e}}}),oe=Object(re.c)(ie);window.store=oe;var le=oe;se.a.render(s.a.createElement(u.a,null,s.a.createElement(y.a,{store:le},s.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.d519ab3e.chunk.js.map