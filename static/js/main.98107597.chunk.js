(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n.p+"static/media/Logo.5e93cacb.jpg"},131:function(e,t,n){e.exports=n(177)},146:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(31),c=n.n(r),l=n(7),i=n(234),s=n(237),u=n(235),m=n(238),d=n(236),f=n(229),p=n(109),h=n.n(p),v=n(232),b=n(106),g=n.n(b),w=n(48),E=function(){var e=a.useState(null),t=Object(l.a)(e,2),n=t[0],o=t[1],r=a.useState(null),c=Object(l.a)(r,2);c[0],c[1];return a.createElement(i.a,{position:"fixed",style:{background:"#f2cc25",color:"#000"}},a.createElement(v.a,{maxWidth:"xl"},a.createElement(u.a,{disableGutters:!0},a.createElement(d.a,{variant:"h6",noWrap:!0,component:"a",href:"/namasteTube",sx:{mr:2,display:{xs:"none",md:"flex"},fontWeight:700,color:"inherit",textDecoration:"none"}},a.createElement("div",{style:{fontSize:"2rem"}},"Namaste JavaScript")),a.createElement(s.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},a.createElement(m.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit"},a.createElement(h.a,null)),a.createElement(f.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:function(){o(null)},sx:{display:{xs:"block",md:"none"}}})),a.createElement(w.b,{to:"/namasteTube"},a.createElement("img",{src:g.a,alt:"logo",style:{height:"50px"}})),a.createElement(d.a,{variant:"h6",noWrap:!0,component:"a",href:"/namasteTube",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontWeight:700,color:"inherit",textDecoration:"none"}},a.createElement("div",{style:{fontSize:"2rem"}},"Namaste JavaScript")),a.createElement(s.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}}))))},k=(n(146),n(20)),x=n(110),y=n.n(x),j=n(111),O=n.n(j),S=(n(174),n(8)),W=n(114),N=n(231),C=n(240),I=n(241),z=n(242),T=n(233),D=n(243),M=n(244),P=n(245),A=n(112),B=n.n(A),L=n(113),F=n(228),G=n(29),U=n(6),J=Object(L.a)({palette:{primary:{main:"#FFCC00"}}}),R=Object(U.a)(function(e){var t=e.className,n=Object(W.a)(e,["className"]);return o.a.createElement(F.a,Object.assign({},n,{arrow:!0,classes:{popper:t}}))})(function(e){var t,n=e.theme;return t={},Object(S.a)(t,"& .".concat(G.a.arrow),{color:n.palette.common.black}),Object(S.a)(t,"& .".concat(G.a.tooltip),{backgroundColor:n.palette.common.black,fontSize:9}),t});var V=function(e){var t=e.vidsData,n=(e.selected,e.setSelected),r=e.saveBookMark,c=e.bookMark,i=Object(a.useState)(0),s=Object(l.a)(i,2),u=s[0],m=s[1];return o.a.createElement(N.a,{theme:J},o.a.createElement(C.a,{sx:{width:"100%",maxWidth:900,bgcolor:"background.paper",marginTop:"100px",overflow:"auto",position:"relative",maxHeight:400,fontSize:"1.5rem"}},t.map(function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,{alignItems:"flex-start",selected:t===u,onClick:function(){return function(e,t){m(e),n(t.snippet.resourceId.videoId)}(t,e)}},o.a.createElement(z.a,null,o.a.createElement(T.a,{alt:"thumbnail",src:e.snippet.thumbnails.default.url})),o.a.createElement(D.a,{primary:o.a.createElement("div",{style:{fontSize:"1.5rem",fontWeight:500}},e.snippet.title)}),o.a.createElement(M.a,null,o.a.createElement(R,{title:"BookMark"},o.a.createElement(B.a,{color:c.includes(e.contentDetails.videoId)?"primary":"",style:{fontSize:"2rem"},onClick:function(t){r(e.contentDetails.videoId)}})))),o.a.createElement(P.a,{variant:"inset",component:"li"}))})))},q=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!0),i=Object(l.a)(c,2),s=i[0],u=i[1],m=Object(a.useState)(),d=Object(l.a)(m,2),f=(d[0],d[1],Object(a.useState)("")),p=Object(l.a)(f,2),h=p[0],b=p[1],g=Object(a.useState)([]),w=Object(l.a)(g,2),E=w[0],x=w[1];Object(a.useEffect)(function(){j()},[]);var j=function(){O.a.get("https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&key=AIzaSyA5S3uU7htP_rqhVWmwNPT6CWGMuDF2hLw").then(function(e){if(console.log(e),e.data){var t=e.data.items;r(t),u(!1),b("https://www.youtube.com/watch?v="+t[0].snippet.resourceId.videoId)}}).catch(function(e){console.log(e),u(!0)})};return s?o.a.createElement("div",null,"loading... "):o.a.createElement(v.a,{maxWidth:"md"},0===n.length?o.a.createElement("h1",null,"No Data Found"):o.a.createElement("div",{className:"player-wrapper"},o.a.createElement(y.a,{className:"react-player",url:h,muted:!1,playing:!1,controls:!0,width:"100%",height:"100%"})),o.a.createElement(V,{vidsData:n,setSelected:function(e){return function(e){console.log(e,"hellooooooooooooooooooo"),b("https://www.youtube.com/watch?v="+e)}(e)},saveBookMark:function(e){return function(e){if(E.includes(e)){console.log(E,e);var t=E.filter(function(t){return t!==e});x(t)}else x(function(t){return[].concat(Object(k.a)(t),[e])})}(e)},bookMark:E}))};var H=function(){return o.a.createElement("div",null,o.a.createElement(q,null))};var Q=function(){return o.a.createElement("div",null,o.a.createElement(E,null),o.a.createElement(H,null))},X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(175);c.a.render(o.a.createElement(w.a,null,o.a.createElement(Q,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/namasteTube",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/namasteTube","/service-worker.js");X?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):$(t,e)})}}()}},[[131,1,2]]]);
//# sourceMappingURL=main.98107597.chunk.js.map