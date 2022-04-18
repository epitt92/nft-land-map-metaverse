(function(t){function e(e){for(var a,l,s=e[0],o=e[1],c=e[2],d=0,p=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},i={index:0},r=[];function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("c31f")},"42b1":function(t,e,n){"use strict";n("f381")},"9fd1":function(t,e,n){"use strict";n("b92f")},b92f:function(t,e,n){},c31f:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld",{attrs:{msg:"Land NFT Map"}})},r=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("img",{staticStyle:{display:"none"},attrs:{id:"background",src:t.background}}),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[t.tileMapMapmatrix?n("vue-lands-tile-map",{ref:"landsTileMapRef",attrs:{tileMapMapmatrix:t.tileMapMapmatrix,tiledDigitalColormap:t.tiledDigitalColormap,tileSize:t.tileSize,startPaintingX:t.startPaintingX,startPaintingY:t.startPaintingY},on:{handleClickTile:t.handleClickTile,test:t.ceshi}}):n("div",[t._v("Loading...")])],1),n("div",{staticClass:"modal",attrs:{id:"terrainModal"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("span",{staticClass:"close"},[t._v("×")]),n("h2",[t._v("Ocean #"+t._s(t.landId))])]),n("div",{staticClass:"modal-body"},[n("img",{attrs:{id:"terrain",src:t.terrain}}),n("div",{staticClass:"terrain-content"},[t._v(" Owned By "+t._s(t.owner.substring(0,4)+"..."+t.owner.substr(-4))+" "),n("br"),n("br"),n("div",[t._v(" Plot: "+t._s(t.x)+" , "+t._s(t.y)+" ")]),t._m(0),n("br"),t._m(1)])])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v(" White "),n("div",{staticClass:"status-comment"},[t._v(" Not minted and available for your to buy. ")])]),n("li",[t._v(" Grey "),n("div",{staticClass:"status-comment"},[t._v(" Minted, but not available in our marketplace. ")])]),n("li",[t._v(" Blue "),n("div",{staticClass:"status-comment"},[t._v(" Minted and available in our marketplace. ")])]),n("li",[t._v(" Green "),n("div",{staticClass:"status-comment"},[t._v(" Your land! Add 3D assets now. Visit our marketplace and buy some. ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"buy-button"},[n("button",[t._v("Buy")])])}],o=n("bc3a"),c=n.n(o),u=n("d7de"),d=n.n(u),p=n("f2bc"),f=n.n(p),m={name:"HelloWorld",props:{msg:String},data:function(){return{background:d.a,landId:-1,terrain:f.a,owner:"",tileMapMapmatrix:null,tileMapMapmatrixToc:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0],[0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0],[0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0],[0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],tiledDigitalColormap:[{0:"#138535"},{1:"#808080"},{2:"#0070c0"}],tileSize:10,x:0,y:0,flag:!0,startPaintingX:-750,startPaintingY:-1600}},beforeCreate:function(){var t=this;console.log("beforeCreate"),c.a.get("/getall").then((function(e){console.log("after mysql"),t.tileMapMapmatrix=e.data}))},methods:{ceshi:function(){console.log("ceshi")},handleClickTile:function(t){var e=document.getElementById("terrainModal");if("undefined"!==typeof this.tileMapMapmatrix[t.clickX+"_"+t.clickY]){this.x=t.x,this.y=t.y,this.owner=this.tileMapMapmatrix[t.clickX+"_"+t.clickY]["owner"],this.landId=this.tileMapMapmatrix[t.clickX+"_"+t.clickY]["landID"],e.style.display="block";var n=document.getElementsByClassName("close")[0];n.onclick=function(){e.style.display="none"},window.onclick=function(t){t.target==e&&(e.style.display="none")}}else e.style.display="none",this.x="",this.y=""},handleClickFilter:function(){var t=this.tileMapMapmatrix,e=this.flag;e?(t=this.$refs.landsTileMapRef.blockCoverage(t,this.tileMapMapmatrixToc),e=!1):e=!0,this.flag=e,this.$refs.landsTileMapRef.handleClickAssignRender(t)}}},v=m,b=(n("9fd1"),n("2877")),h=Object(b["a"])(v,l,s,!1,null,"060c528e",null),g=h.exports,y={name:"App",components:{HelloWorld:g}},_=y,M=(n("42b1"),Object(b["a"])(_,i,r,!1,null,null,null)),x=M.exports,k=n("999d"),C=n.n(k);a["a"].config.productionTip=!1,a["a"].use(C.a),new a["a"]({render:function(t){return t(x)}}).$mount("#app")},d7de:function(t,e,n){t.exports=n.p+"static/img/background.8caa70a7.jpg"},f2bc:function(t,e,n){t.exports=n.p+"static/img/terrain.a1fb1595.gif"},f381:function(t,e,n){}});
//# sourceMappingURL=index.a087345b.js.map