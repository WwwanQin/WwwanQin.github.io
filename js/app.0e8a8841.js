(function(e){function n(n){for(var a,r,o=n[0],i=n[1],d=n[2],h=0,l=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(n);while(l.length)l.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],a=!0,r=1;r<t.length;r++){var o=t[r];0!==c[o]&&(a=!1)}a&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},r={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-37de8366":"8a074c44","chunk-67981cf6":"70f4b31f","chunk-6a3d186a":"9f99ba4f","chunk-063d6f0e":"8b6413b0","chunk-0eb85f4f":"b825b2a9","chunk-73e966f0":"856c47d8","chunk-952760a4":"b53b1f44","chunk-ac1cc8da":"20266488","chunk-c5bd1154":"42f893d9","chunk-41e528d2":"81eb4bf2","chunk-550a2be6":"9f945685","chunk-1e5a394b":"92a5dde5","chunk-791dfa96":"1dd064a0","chunk-aedb745c":"8241d16a","chunk-cef2992e":"2e326ca5"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-37de8366":1,"chunk-67981cf6":1,"chunk-063d6f0e":1,"chunk-0eb85f4f":1,"chunk-73e966f0":1,"chunk-952760a4":1,"chunk-ac1cc8da":1,"chunk-41e528d2":1,"chunk-550a2be6":1,"chunk-1e5a394b":1,"chunk-791dfa96":1,"chunk-aedb745c":1,"chunk-cef2992e":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-37de8366":"a3d7fa56","chunk-67981cf6":"235aad51","chunk-6a3d186a":"31d6cfe0","chunk-063d6f0e":"8a757fcd","chunk-0eb85f4f":"c51233c1","chunk-73e966f0":"0b6762dd","chunk-952760a4":"04081d7e","chunk-ac1cc8da":"5a2ea80d","chunk-c5bd1154":"31d6cfe0","chunk-41e528d2":"11300c52","chunk-550a2be6":"c61a9646","chunk-1e5a394b":"6c007ab3","chunk-791dfa96":"f184a8cc","chunk-aedb745c":"fd514895","chunk-cef2992e":"751c9bdb"}[e]+".css",c=i.p+a,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var d=u[o],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===a||h===c))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){d=l[o],h=d.getAttribute("data-href");if(h===a||h===c)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete r[e],f.parentNode.removeChild(f),t(u)},f.href=c;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)n.push(a[2]);else{var u=new Promise((function(n,t){a=c[e]=[n,t]}));n.push(a[2]=u);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e);var l=new Error;d=function(n){h.onerror=h.onload=null,clearTimeout(f);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,t[1](l)}c[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=h;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2395:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=t("b970"),c=t("d399"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:"index,search"}},[t("router-view")],1)],1)},o=[],i=(t("7c55"),t("2877")),d={},h=Object(i["a"])(d,u,o,!1,null,null,null),l=h.exports,f=t("8c4f");a["a"].use(f["a"]);var s=[{path:"/",name:"index",component:function(){return Promise.all([t.e("chunk-6a3d186a"),t.e("chunk-063d6f0e")]).then(t.bind(null,"1e4b"))}},{path:"/login",name:"login",component:function(){return t.e("chunk-37de8366").then(t.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return t.e("chunk-67981cf6").then(t.bind(null,"73cf"))}},{path:"/personalPage",name:"personalPage",meta:{authorization:!0},component:function(){return Promise.all([t.e("chunk-c5bd1154"),t.e("chunk-41e528d2")]).then(t.bind(null,"5da9"))}},{path:"/editUser",name:"editUser",meta:{authorization:!0},component:function(){return t.e("chunk-73e966f0").then(t.bind(null,"fe57"))}},{path:"/follow",name:"follow",meta:{authorization:!0},component:function(){return Promise.all([t.e("chunk-c5bd1154"),t.e("chunk-550a2be6")]).then(t.bind(null,"99b5"))}},{path:"/comments",name:"comments",meta:{authorization:!0},component:function(){return Promise.all([t.e("chunk-c5bd1154"),t.e("chunk-aedb745c")]).then(t.bind(null,"0bef"))}},{path:"/star",name:"star",meta:{authorization:!0},component:function(){return t.e("chunk-ac1cc8da").then(t.bind(null,"ef5a"))}},{path:"/categorymanage",name:"categorymanage",component:function(){return t.e("chunk-952760a4").then(t.bind(null,"462a"))}},{path:"/newsarticledetail/:id",name:"newsarticledetail",component:function(){return Promise.all([t.e("chunk-c5bd1154"),t.e("chunk-791dfa96")]).then(t.bind(null,"c505"))}},{path:"/newsvideodetail/:id",name:"newsvideodetail",component:function(){return t.e("chunk-cef2992e").then(t.bind(null,"399d"))}},{path:"/search",name:"search",component:function(){return Promise.all([t.e("chunk-6a3d186a"),t.e("chunk-0eb85f4f")]).then(t.bind(null,"2d3b"))}},{path:"/messagereply/:id",name:"messagereply",component:function(){return Promise.all([t.e("chunk-c5bd1154"),t.e("chunk-6a3d186a"),t.e("chunk-1e5a394b")]).then(t.bind(null,"22e4"))}}],p=new f["a"]({mode:"history",base:"/",routes:s});p.beforeEach((function(e,n,t){var a=JSON.parse(localStorage.getItem("news_User_Data"))||{},r=n.query.returnUrl;e.meta.authorization?a.token?t():t("/login"):t(),r&&t(r)}));var b=p,m=t("bc3a"),k=t.n(m),g="http://111.230.152.88:3000";k.a.defaults.baseURL=g,a["a"].prototype.$axios=k.a,a["a"].use(r["a"]),a["a"].config.productionTip=!1,k.a.interceptors.response.use((function(e){return e}),(function(e){var n=e.response,t=n.status,a=n.data.message;return 403===t?c["a"].fail("请先登录"):c["a"].fail(a),Promise.reject(e)})),new a["a"]({router:b,render:function(e){return e(l)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";var a=t("2395"),r=t.n(a);r.a}});
//# sourceMappingURL=app.0e8a8841.js.map