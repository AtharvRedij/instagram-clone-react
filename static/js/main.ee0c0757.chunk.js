(this["webpackJsonpinstagram-clone-react"]=this["webpackJsonpinstagram-clone-react"]||[]).push([[0],{42:function(e,t,a){e.exports=a(61)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),l=a(35),s=a(3),i=a(87),u=a(88),m=a(83),p=a(86);function d(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var f=Object(m.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),g=function(e){var t=e.open,a=e.setOpen,n=e.children,r=f(),o=c.a.useState(d),l=Object(s.a)(o,1)[0];return c.a.createElement(p.a,{open:t,onClose:function(){return a(!1)}},c.a.createElement("div",{style:l,className:r.paper},c.a.createElement("form",{className:"common-modal"},c.a.createElement("center",null,c.a.createElement("img",{src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"Instagram Logo"})),n)))},E=a(20),b=a.n(E);a(49),a(53),a(62);b.a.initializeApp({apiKey:"AIzaSyCREV-4kouY0jcmQVji5r9zUosuVIyD_ZI",authDomain:"technical-quiz-162b7.firebaseapp.com",databaseURL:"https://technical-quiz-162b7.firebaseio.com",projectId:"technical-quiz-162b7",storageBucket:"technical-quiz-162b7.appspot.com",messagingSenderId:"297710748938",appId:"1:297710748938:web:ede00f37acf3c2e9fde6f3",measurementId:"G-JX5T7Z8RWF"});var h=b.a.firestore(),v=b.a.auth(),O=b.a.storage(),j=b.a,_=function(e){var t=e.open,a=e.setOpen,r=Object(n.useState)(""),o=Object(s.a)(r,2),l=o[0],m=o[1],p=Object(n.useState)(""),d=Object(s.a)(p,2),f=d[0],E=d[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),O=h[0],j=h[1];return c.a.createElement(g,{open:t,setOpen:a},c.a.createElement(u.a,{type:"text",placeholder:"username",value:l,onChange:function(e){return m(e.target.value)},fullWidth:!0}),c.a.createElement(u.a,{type:"email",placeholder:"email",value:f,onChange:function(e){return E(e.target.value)},fullWidth:!0}),c.a.createElement(u.a,{type:"password",placeholder:"password",value:O,onChange:function(e){return j(e.target.value)},fullWidth:!0}),c.a.createElement(i.a,{onClick:function(e){e.preventDefault(),v.createUserWithEmailAndPassword(f,O).then((function(e){return e.user.updateProfile({displayName:l})})).catch((function(e){return console.log(e.message)})),a(!1)}},"Sign Up"))},S=function(e){var t=e.open,a=e.setOpen,r=Object(n.useState)(""),o=Object(s.a)(r,2),l=o[0],m=o[1],p=Object(n.useState)(""),d=Object(s.a)(p,2),f=d[0],E=d[1];return c.a.createElement(g,{open:t,setOpen:a},c.a.createElement(u.a,{type:"email",placeholder:"email",value:l,onChange:function(e){return m(e.target.value)},fullWidth:!0}),c.a.createElement(u.a,{type:"password",placeholder:"password",value:f,onChange:function(e){return E(e.target.value)},fullWidth:!0}),c.a.createElement(i.a,{onClick:function(e){e.preventDefault(),v.signInWithEmailAndPassword(l,f).catch((function(e){return console.log(e.message)})),a(!1)}},"Sign In"))},y=a(89),w=(a(57),function(e){var t=e.postId,a=e.username,r=e.caption,o=e.imageUrl,l=e.signedInUser,m=Object(n.useState)([]),p=Object(s.a)(m,2),d=p[0],f=p[1],g=Object(n.useState)(""),E=Object(s.a)(g,2),b=E[0],v=E[1];Object(n.useEffect)((function(){var e;return t&&(e=h.collection("instagram-clone-react__posts").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){f(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[t]);return c.a.createElement("div",{className:"post"},c.a.createElement("div",{className:"post__header"},c.a.createElement(y.a,{className:"post__avatar",alt:a,src:"/broken-image.jpg"}),c.a.createElement("h3",null,a)),c.a.createElement("img",{className:"post__image",src:o,alt:"post"}),c.a.createElement("h4",{className:"post__text"},c.a.createElement("strong",null,a),r),l?c.a.createElement("form",null,c.a.createElement(u.a,{fullWidth:!0,type:"text",placeholder:"Enter a comment",value:b,onChange:function(e){return v(e.target.value)}}),c.a.createElement(i.a,{onClick:function(e){e.preventDefault(),h.collection("instagram-clone-react__posts").doc(t).collection("comments").add({text:b,username:l.displayName,timestamp:j.firestore.FieldValue.serverTimestamp()}),v("")}},"Post")):null,c.a.createElement("div",{className:"post__comments-container"},d.map((function(e,t){return c.a.createElement("p",{key:t},c.a.createElement("strong",null,e.username)," ",e.text)}))))}),C=(a(58),function(e){var t=e.username,a=Object(n.useState)(""),r=Object(s.a)(a,2),o=r[0],l=r[1],m=Object(n.useState)(null),p=Object(s.a)(m,2),d=p[0],f=p[1],g=Object(n.useState)(0),E=Object(s.a)(g,2),b=E[0],v=E[1];return c.a.createElement("div",{className:"image-upload"},c.a.createElement("progress",{value:b,max:"100"}),c.a.createElement(u.a,{type:"text",onChange:function(e){return l(e.target.value)},placeholder:"Enter a caption"}),c.a.createElement(u.a,{type:"file",onChange:function(e){e.target.files[0]&&f(e.target.files[0])}}),c.a.createElement(i.a,{onClick:function(){O.ref("".concat("instagram-clone-react__images","/").concat(d.name)).put(d).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);v(t)}),(function(e){return console.log(e)}),(function(){O.ref("instagram-clone-react__images").child(d.name).getDownloadURL().then((function(e){h.collection("instagram-clone-react__posts").add({timestamp:j.firestore.FieldValue.serverTimestamp(),caption:o,imageUrl:e,username:t}),v(0),l(""),f(null)}))}))}},"Upload"))}),I=(a(59),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),u=Object(s.a)(o,2),m=u[0],p=u[1],d=Object(n.useState)(!1),f=Object(s.a)(d,2),g=f[0],E=f[1],b=Object(n.useState)(null),O=Object(s.a)(b,2),j=O[0],y=O[1];return Object(n.useEffect)((function(){var e=v.onAuthStateChanged((function(e){y(e||null)}));return function(){e()}}),[j]),Object(n.useEffect)((function(){h.collection("instagram-clone-react__posts").orderBy("timestamp","desc").onSnapshot((function(e){r(e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())})))}))}),[]),c.a.createElement("div",{className:"app"},c.a.createElement(S,{open:m,setOpen:p}),c.a.createElement(_,{open:g,setOpen:E}),c.a.createElement("div",{className:"app__header"},c.a.createElement("img",{src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"Instagram Logo"}),j?c.a.createElement(i.a,{onClick:function(){return v.signOut()}},"Sign Out"):c.a.createElement("div",{className:"app__sign-in-container"},c.a.createElement(i.a,{onClick:function(){return p(!0)}},"Sign In"),c.a.createElement(i.a,{onClick:function(){return E(!0)}},"Sign Up"))),c.a.createElement("div",{className:"app__posts"},a.map((function(e){var t=e.id,a=e.username,n=e.caption,r=e.imageUrl;return c.a.createElement(w,{key:t,postId:t,username:a,caption:n,imageUrl:r,signedInUser:j})}))),j?c.a.createElement(C,{username:j.displayName}):c.a.createElement("h3",{className:"app_login-to-upload-message"},"Login to upload"))});a(60);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.ee0c0757.chunk.js.map