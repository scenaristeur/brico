(function(e){function t(t){for(var r,c,s=t[0],u=t[1],i=t[2],l=0,f=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9da0b9dc","chunk-2c2ed59c":"6b8ff9c5","chunk-2d0b9270":"0c3c4b54","chunk-2d0bceed":"d7effc53","chunk-33934886":"0061a4dd"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var i=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/brico/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=i;a.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t,n){e.exports=n("56d7")},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],c=(n("034f"),n("2877")),s={},u=Object(c["a"])(s,o,a,!1,null,null,null),i=u.exports,l=n("9483");Object(l["a"])("".concat("/brico/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("New content is available; please close the app & reopen.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var p=n("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v(e._s(e.msg))]),null!=e.pod?n("div",[e._v(" Bienvenu(e) "+e._s(e.pod.name)),n("br"),n("small",[e._v(e._s(e.pod))])]):e._e(),n("Login"),n("Actor",{attrs:{webId:"https://bricodeurs.solidweb.org/profile/card#me"}}),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)],1)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],g={name:"HelloWorld",components:{Login:function(){return n.e("chunk-2d0bceed").then(n.bind(null,"2a9a"))},Actor:function(){return n.e("chunk-2d0b9270").then(n.bind(null,"3272"))}},props:{msg:String},computed:{pod:{get:function(){return this.$store.state.solid.pod},set:function(){}}}},v=g,m=(n("bc59"),Object(c["a"])(v,h,b,!1,null,"7371ac47",null)),w=m.exports,j={name:"Home",components:{HelloWorld:w}},x=j,k=Object(c["a"])(x,f,d,!1,null,null,null),O=k.exports;r["default"].use(p["a"]);var y=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],_=new p["a"]({mode:"history",base:"/brico/",routes:y}),R=_,$=n("2f62"),T=n("5530"),I=n("d11f"),S=n("a719"),F=n("dbc7"),P=function(){return{session:null,pod:null,currentRemoteUrl:"",remoteResources:[],things:[],vocabs:Object(T["a"])(Object(T["a"])(Object(T["a"])({},I),S),F),tags:{}}},C={},A={setPod:function(e,t){e.pod=t},setSession:function(e,t){e.session=t},setCurrentRemoteUrl:function(e,t){e.currentRemoteUrl=t},setRemoteResources:function(e,t){e.remoteResources=t},setThings:function(e,t){e.things=t}},E={namespaced:!0,state:P,actions:C,mutations:A},L=function(){return{}},U={},D={},W={namespaced:!0,state:L,actions:U,mutations:D};r["default"].use($["a"]);var N=new $["a"].Store({state:{},mutations:{},actions:{},modules:{solid:E,brico:W}}),H=n("53ca"),V=n("1da1"),q=(n("99af"),n("07ac"),n("b0c0"),n("d81d"),n("159b"),n("8a79"),n("ac1f"),n("1276"),n("fb6a"),n("c740"),n("2ca0"),n("96cf"),n("93ef")),B=n("8522"),J=n("2aca"),M=n("46bd"),z={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;function r(e){return o.apply(this,arguments)}function o(){return o=Object(V["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={nodes:[],edges:[]},console.log("parseTagsRdf",t),e.prev=2,e.next=5,Object(q["j"])(t,{fetch:B["fetch"]});case 5:return r=e.sent,console.log(r),e.next=9,r._quads.forEach(function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var r,o,a,c,u,i,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t.subject.id,e.next=3,s(t.subject.id);case 3:return e.t1=e.sent,e.t2={id:e.t0,label:e.t1},e.t3=t.predicate.id,e.t4=t.object.id,e.next=9,s(t.object.id);case 9:return e.t5=e.sent,e.t6={id:e.t4,label:e.t5},r=[e.t2,e.t3,e.t6],o=r[0],a=r[1],c=r[2],u=n.nodes.findIndex((function(e){return e.id==o.id})),-1===u&&n.nodes.push(o),i=n.nodes.findIndex((function(e){return e.id==c.id})),-1===i&&n.nodes.push(c),e.t7=o.id,e.t8=c.id,e.next=23,s(a);case 23:e.t9=e.sent,l={from:e.t7,to:e.t8,label:e.t9},p=n.edges.findIndex((function(e){return e.from==l.from&&e.to==l.to&&e.label==l.label})),-1===p&&n.edges.push(l);case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](2),console.log(e.t0);case 14:return console.log(n),e.abrupt("return",n);case 16:case"end":return e.stop()}}),e,null,[[2,11]])}))),o.apply(this,arguments)}function a(e){return c.apply(this,arguments)}function c(){return c=Object(V["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="xhr",e.next=3,M["useDocumentLoader"](n);case 3:return e.next=5,M["documentLoader"](t,(function(e){e&&alert(e)}));case 5:return r=e.sent,r.jsonld=JSON.parse(r.document),r.jsonld.forEach((function(e){console.log(e)})),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function s(e){return u.apply(this,arguments)}function u(){return u=Object(V["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a,c,s,u,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n="http://www.wikidata.org/entity/",r="https://www.wikidata.org/w/api.php?action=wbgetentities&origin=*&format=json",o=navigator.language.split("-")[0]||"en",o+="|en",!t.startsWith(n)){e.next=17;break}return a=t.split(n)[1],c=r+"&ids="+a+"&props=labels&languages="+o,e.next=9,fetch(c);case 9:return s=e.sent,e.next=12,s.json();case 12:u=e.sent;try{i=void 0!=u.entities[a].labels[o]?u.entities[a].labels[o].value:u.entities[a].labels.en.value}catch(p){console.log(p,u.entities)}return e.abrupt("return",i);case 17:if("object"!=Object(H["a"])(t)||void 0==t["rdfs:label"]){e.next=21;break}return e.abrupt("return",t["rdfs:label"]);case 21:if("string"!=typeof t||!t.startsWith("http")){e.next=26;break}return l=t.lastIndexOf("/"),e.abrupt("return",t.substring(l+1));case 26:return e.abrupt("return",t);case 27:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}e.prototype.$login=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B["login"]({oidcIssuer:t,redirectUrl:window.location.href,clientName:"Vatch"});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),alert(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$logout=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=B["getDefaultSession"](),console.log(t),e.next=5,r.logout();case 5:n.commit("solid/setSession",r),n.commit("solid/setPod",{}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$checkSessions=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B["handleIncomingRedirect"]({restorePreviousSession:t.restore}).then((function(e){console.log(e)}));case 3:r=B["getDefaultSession"](),B["onSessionRestore"]((function(e){console.log("restore",e)})),n.commit("solid/setSession",r),this.$getPodInfosFromSession(r),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getPodInfosFromSession=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,r={},r.logged=t.info.isLoggedIn,!r.logged){e.next=18;break}return r.webId=t.info.webId,e.next=7,this.$getPodInfos(r);case 7:if(r=e.sent,n.commit("solid/setPod",r),null==r.storage){e.next=16;break}return this.$setCurrentThingUrl(r.storage),o=r.storage+"public/tags.ttl",e.next=14,this.$getTags(o);case 14:a=e.sent,console.log("############################tags",a);case 16:e.next=20;break;case 18:n.commit("solid/setPod",null),n.commit("solid/setThings",[]);case 20:e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](0),alert(e.t0);case 25:case"end":return e.stop()}}),e,this,[[0,22]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$setCurrentThingUrl=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var r,o,a,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(q["i"])(t,{fetch:B["fetch"]});case 3:if(r=e.sent,console.log("Fetched a ".concat(Object(q["h"])(r)," file from ").concat(Object(q["k"])(r),".")),console.log("The file is ".concat(Object(q["q"])(r)?"not ":"","a dataset.")),n.commit("solid/setCurrentRemoteUrl",t),!Object(q["q"])(r)){e.next=14;break}console.log("todo raw data",r),o=new FileReader,o.addEventListener("loadend",(function(){console.log(o),n.commit("vatch/setFile",{path:Object(q["k"])(r),content:o.result,type:{mime:Object(q["h"])(r)}},{root:!0})})),o.readAsText(r),e.next=30;break;case 14:return e.next=16,Object(q["j"])(t,{fetch:B["fetch"]});case 16:return a=e.sent,console.log(a),e.next=20,Object(q["g"])(a,{fetch:B["fetch"]});case 20:if(c=e.sent,console.log("Resources",c),!(c.length>0)){e.next=26;break}n.commit("solid/setRemoteResources",c),e.next=30;break;case 26:return e.next=28,Object(q["n"])(a,t);case 28:s=e.sent,n.commit("solid/setThings",s);case 30:e.next=35;break;case 32:e.prev=32,e.t0=e["catch"](0),alert(e.t0);case 35:case"end":return e.stop()}}),e,null,[[0,32]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getFolder=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=B["getDefaultSession"](),1!=n.info.isLoggedIn){e.next=7;break}return e.next=4,Object(q["j"])(t,{fetch:B["fetch"]});case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,Object(q["j"])(t);case 9:r=e.sent;case 10:return o=r.graphs.default,a=Object.values(o),e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getPodInfos=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,n=B["getDefaultSession"](),1!=n.info.isLoggedIn){e.next=8;break}return e.next=5,Object(q["j"])(t.webId,{fetch:B["fetch"]});case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,Object(q["j"])(t.webId);case 10:r=e.sent;case 11:return console.log("DATASET",r),e.next=14,Object(q["m"])(r,t.webId);case 14:return o=e.sent,e.next=17,Object(q["l"])(o,I["FOAF"].name);case 17:return t.name=e.sent,e.next=20,Object(q["p"])(o,I["FOAF"].knows).map((function(e){return{webId:e}}));case 20:return t.friends=e.sent,e.next=23,Object(q["o"])(o,F["WS"].storage);case 23:return t.storage=e.sent,e.next=26,Object(q["o"])(o,I["VCARD"].hasPhoto);case 26:t.photo=e.sent,console.log("getpodinfos",t),e.next=33;break;case 30:e.prev=30,e.t0=e["catch"](0),console.log("erreur",e.t0,t);case 33:return e.next=35,t;case 35:return e.abrupt("return",e.sent);case 36:case"end":return e.stop()}}),e,null,[[0,30]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getTags=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var n,o,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(t);case 3:return n=e.sent,console.log("tags JSONLD",n),e.next=7,r(t);case 7:return o=e.sent,console.log("tags RDF",o),e.next=11,Object(q["j"])(t,{fetch:B["fetch"]});case 11:return c=e.sent,console.log("DATASET",c),e.next=15,Object(q["n"])(c,t);case 15:return s=e.sent,console.log(s),e.abrupt("return",o);case 20:return e.prev=20,e.t0=e["catch"](0),e.abrupt("return",[]);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$addTags=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(q["j"])(t.tagFile,{fetch:B["fetch"]});case 3:n=e.sent,console.log("DATASET",n),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:return(void 0==n||null==n)&&(n=Object(q["c"])()),t.tags.forEach((function(e){console.log("add",e.subject,e.predicate.value,e.object.concepturi),(void 0==r||null==r)&&(r=Object(q["m"])(n,e.subject)),null==r&&(r=Object(q["d"])({url:e.subject})),r=Object(q["a"])(r,e.predicate.value,e.object.concepturi)})),o=Object(q["u"])(n,r),e.next=14,Object(q["t"])(t.tagFile,o,{fetch:B["fetch"]});case 14:a=e.sent,console.log("File saved",a);case 16:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$uploadLocalToPod=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var r,o,a,c,s,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(t),void 0!=t.dest){e.next=5;break}return alert("Please select a destination"),e.abrupt("return");case 5:if(r=t.type&&t.type.mime||"plain/text",o=t.dest.endsWith("/"),a="addDir"==t.event,!a){e.next=12;break}console.info("todo src is directory"),e.next=28;break;case 12:if(!o){e.next=22;break}return void 0==t.parts&&(t.parts=t.path.split(n.state.vatch.pathsep)),c=encodeURIComponent(t.parts.pop()),e.next=17,Object(q["s"])(t.dest,new Blob([t.content],{type:r}),{slug:c,fetch:B["fetch"]});case 17:s=e.sent,console.log("File saved at ".concat(Object(q["k"])(s))),this.$setCurrentThingUrl(t.dest),e.next=28;break;case 22:if(u=confirm("Are you sure you want to replace "+t.dest),1!=u){e.next=28;break}return e.next=26,Object(q["r"])(t.dest,new Blob([t.content],{type:r}),{fetch:B["fetch"]});case 26:i=e.sent,console.log("File saved!",i);case 28:e.next=33;break;case 30:e.prev=30,e.t0=e["catch"](0),alert(e.t0);case 33:case"end":return e.stop()}}),e,this,[[0,30]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$createFile=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.type&&t.type.mime||"plain/text",r=encodeURIComponent(t.filename),e.next=5,Object(q["s"])(t.dest,new Blob([t.content||""],{type:n}),{slug:r,fetch:B["fetch"]});case 5:o=e.sent,console.log("File saved at ".concat(Object(q["k"])(o))),this.$setCurrentThingUrl(t.dest),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),alert(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$createFolder=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.dest+encodeURIComponent(t.foldername),e.next=4,Object(q["b"])(n,{fetch:B["fetch"]});case 4:r=e.sent,console.log("Folder saved at ".concat(Object(q["k"])(r))),this.$setCurrentThingUrl(t.dest),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$deleteOnPod=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!t.endsWith("/")){e.next=6;break}return e.next=4,Object(q["e"])(t,{fetch:B["fetch"]});case 4:e.next=8;break;case 6:return e.next=8,Object(q["f"])(t,{fetch:B["fetch"]});case 8:console.log(" deleted !",t),n=t.slice(0,t.lastIndexOf("/"))+"/",console.log("parent",n),this.$setCurrentThingUrl(n),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),alert(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$subscribe=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=new J["a"](t,{fetch:B["fetch"]}),n.on("message",console.log),n.connect();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$label=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(z);var Y=z,G=n("5f5b"),K=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(Y,{store:N}),r["default"].use(G["a"]),r["default"].use(K["a"]),r["default"].config.productionTip=!1,new r["default"]({router:R,store:N,render:function(e){return e(i)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,n){},9:function(e,t){},bc59:function(e,t,n){"use strict";n("c804")},c804:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.968b937f.js.map