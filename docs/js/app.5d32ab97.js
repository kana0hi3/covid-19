(function(e){function n(n){for(var r,a,u=n[0],i=n[1],s=n[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-204ceca2":"02e7b6da","chunk-26ca56a1":"ec7b8890","chunk-577f20f2":"efec4485","chunk-8d8ad86a":"1b1f9645","chunk-49c5be31":"264b08e0","chunk-7db3dbe8":"89679942","chunk-9183825a":"e10e0c2d","chunk-ca1ec3a4":"74eea9b3","chunk-eff0f638":"16e04d4d"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-204ceca2":1,"chunk-26ca56a1":1,"chunk-577f20f2":1,"chunk-8d8ad86a":1,"chunk-49c5be31":1,"chunk-7db3dbe8":1,"chunk-9183825a":1,"chunk-ca1ec3a4":1,"chunk-eff0f638":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-204ceca2":"899016dd","chunk-26ca56a1":"ef6e8770","chunk-577f20f2":"9ba00b8a","chunk-8d8ad86a":"f9053feb","chunk-49c5be31":"ef6e8770","chunk-7db3dbe8":"d176bf00","chunk-9183825a":"beeb709d","chunk-ca1ec3a4":"1fb628e9","chunk-eff0f638":"8af1033f"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),t(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function a(e,n){var t=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(t)}t("6a0b");const o={};o.render=a;var c=o,u=t("9483");Object(u["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var i=t("6c02"),s=[{path:"/",name:"Mainpage",component:function(){return Promise.all([t.e("chunk-49c5be31"),t.e("chunk-9183825a")]).then(t.bind(null,"4edd"))}},{path:"/Detailspage",name:"detailspage",component:function(){return Promise.all([t.e("chunk-26ca56a1"),t.e("chunk-577f20f2")]).then(t.bind(null,"4811"))}},{path:"/Detailspage_tsuyama",name:"detailspage_tsuyama",component:function(){return Promise.all([t.e("chunk-26ca56a1"),t.e("chunk-8d8ad86a")]).then(t.bind(null,"b045"))}},{path:"/shisetupage",name:"shisetupage",component:function(){return t.e("chunk-ca1ec3a4").then(t.bind(null,"7796"))}},{path:"/helppage",name:"helppage",component:function(){return t.e("chunk-204ceca2").then(t.bind(null,"681d"))}},{path:"/shisetupage/itiranpage",name:"Shisetu_itiranpage",component:function(){return Promise.all([t.e("chunk-49c5be31"),t.e("chunk-7db3dbe8")]).then(t.bind(null,"a239"))},props:!0},{path:"/shisetupage/itiran/syousai",name:"Shisetu_syousaipage",component:function(){return t.e("chunk-eff0f638").then(t.bind(null,"ee4b"))},props:!0}],l=Object(i["a"])({history:Object(i["b"])(""),routes:s}),f=l,d=t("5502"),h=t("0e44"),p=Object(d["a"])({state:{detaildata:[],detaildata2:[],facilityTableData:[]},mutations:{Enter:function(e,n){e.detaildata=n},Enter2:function(e,n){e.detaildata2=n},toStore:function(e,n){e.facilityTableData=n}},actions:{},modules:{},plugins:[Object(h["a"])({storage:window.sessionStorage})]}),b=Object(r["c"])(c);b.config.devtools=!0,b.use(p).use(f).mount("#app")},"6a0b":function(e,n,t){"use strict";t("9e7e")},"9e7e":function(e,n,t){}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/OTdmNSIsIndlYnBhY2s6Ly8vLi9zcmMvcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlP2Q5YTciXSwibmFtZXMiOlsid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJkZWZlcnJlZE1vZHVsZXMiLCJhcHBseSIsImNoZWNrRGVmZXJyZWRNb2R1bGVzIiwicmVzdWx0IiwiZGVmZXJyZWRNb2R1bGUiLCJmdWxmaWxsZWQiLCJqIiwiZGVwSWQiLCJzcGxpY2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicyIsImluc3RhbGxlZE1vZHVsZXMiLCJpbnN0YWxsZWRDc3NDaHVua3MiLCJqc29ucFNjcmlwdFNyYyIsInAiLCJleHBvcnRzIiwibW9kdWxlIiwibCIsImUiLCJwcm9taXNlcyIsImNzc0NodW5rcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHJlZiIsImZ1bGxocmVmIiwiZXhpc3RpbmdMaW5rVGFncyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0YWciLCJkYXRhSHJlZiIsImdldEF0dHJpYnV0ZSIsInJlbCIsImV4aXN0aW5nU3R5bGVUYWdzIiwibGlua1RhZyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwib25sb2FkIiwib25lcnJvciIsImV2ZW50IiwicmVxdWVzdCIsInRhcmdldCIsInNyYyIsImVyciIsIkVycm9yIiwiY29kZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInRoZW4iLCJpbnN0YWxsZWRDaHVua0RhdGEiLCJwcm9taXNlIiwib25TY3JpcHRDb21wbGV0ZSIsInNjcmlwdCIsImNoYXJzZXQiLCJ0aW1lb3V0IiwibmMiLCJzZXRBdHRyaWJ1dGUiLCJlcnJvciIsImNsZWFyVGltZW91dCIsImNodW5rIiwiZXJyb3JUeXBlIiwicmVhbFNyYyIsIm1lc3NhZ2UiLCJuYW1lIiwidW5kZWZpbmVkIiwic2V0VGltZW91dCIsImFsbCIsIm0iLCJjIiwiZCIsImdldHRlciIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsIm9lIiwiY29uc29sZSIsImpzb25wQXJyYXkiLCJ3aW5kb3ciLCJvbGRKc29ucEZ1bmN0aW9uIiwic2xpY2UiLCJyZW5kZXIiLCJyZWdpc3RlciIsInByb2Nlc3MiLCJyZWFkeSIsImxvZyIsInJlZ2lzdGVyZWQiLCJjYWNoZWQiLCJ1cGRhdGVmb3VuZCIsInVwZGF0ZWQiLCJvZmZsaW5lIiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsInByb3BzIiwicm91dGVyIiwiY3JlYXRlUm91dGVyIiwiaGlzdG9yeSIsImNyZWF0ZVdlYkhhc2hIaXN0b3J5IiwiY3JlYXRlU3RvcmUiLCJzdGF0ZSIsImRldGFpbGRhdGEiLCJkZXRhaWxkYXRhMiIsImZhY2lsaXR5VGFibGVEYXRhIiwibXV0YXRpb25zIiwiRW50ZXIiLCJFbnRlcjIiLCJ0b1N0b3JlIiwiYWN0aW9ucyIsInBsdWdpbnMiLCJjcmVhdGVQZXJzaXN0ZWRTdGF0ZSIsInN0b3JhZ2UiLCJzZXNzaW9uU3RvcmFnZSIsImFwcCIsImNyZWF0ZUFwcCIsIkFwcCIsImNvbmZpZyIsImRldnRvb2xzIiwidXNlIiwic3RvcmUiLCJtb3VudCJdLCJtYXBwaW5ncyI6ImFBQ0UsU0FBU0EsRUFBcUJDLEdBUTdCLElBUEEsSUFNSUMsRUFBVUMsRUFOVkMsRUFBV0gsRUFBSyxHQUNoQkksRUFBY0osRUFBSyxHQUNuQkssRUFBaUJMLEVBQUssR0FJSE0sRUFBSSxFQUFHQyxFQUFXLEdBQ3BDRCxFQUFJSCxFQUFTSyxPQUFRRixJQUN6QkosRUFBVUMsRUFBU0csR0FDaEJHLE9BQU9DLFVBQVVDLGVBQWVDLEtBQUtDLEVBQWlCWCxJQUFZVyxFQUFnQlgsSUFDcEZLLEVBQVNPLEtBQUtELEVBQWdCWCxHQUFTLElBRXhDVyxFQUFnQlgsR0FBVyxFQUU1QixJQUFJRCxLQUFZRyxFQUNaSyxPQUFPQyxVQUFVQyxlQUFlQyxLQUFLUixFQUFhSCxLQUNwRGMsRUFBUWQsR0FBWUcsRUFBWUgsSUFHL0JlLEdBQXFCQSxFQUFvQmhCLEdBRTVDLE1BQU1PLEVBQVNDLE9BQ2RELEVBQVNVLE9BQVRWLEdBT0QsT0FIQVcsRUFBZ0JKLEtBQUtLLE1BQU1ELEVBQWlCYixHQUFrQixJQUd2RGUsSUFFUixTQUFTQSxJQUVSLElBREEsSUFBSUMsRUFDSWYsRUFBSSxFQUFHQSxFQUFJWSxFQUFnQlYsT0FBUUYsSUFBSyxDQUcvQyxJQUZBLElBQUlnQixFQUFpQkosRUFBZ0JaLEdBQ2pDaUIsR0FBWSxFQUNSQyxFQUFJLEVBQUdBLEVBQUlGLEVBQWVkLE9BQVFnQixJQUFLLENBQzlDLElBQUlDLEVBQVFILEVBQWVFLEdBQ0csSUFBM0JYLEVBQWdCWSxLQUFjRixHQUFZLEdBRTNDQSxJQUNGTCxFQUFnQlEsT0FBT3BCLElBQUssR0FDNUJlLEVBQVNNLEVBQW9CQSxFQUFvQkMsRUFBSU4sRUFBZSxL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TjRDLFVBQVcsa0JBQU0sa0RBRW5CLENBQ0VELEtBQU0sWUFDTjNDLEtBQU0sV0FDTjRDLFVBQVcsa0JBQU0sa0RBRW5CLENBQ0VELEtBQU0sMEJBQ04zQyxLQUFNLHFCQUNONEMsVUFBVyxrQkFBTSxzRkFDakJDLE9BQU8sR0FFVCxDQUNFRixLQUFNLDhCQUNOM0MsS0FBTSxzQkFDTjRDLFVBQVcsa0JBQU0saURBQ2pCQyxPQUFPLElBSUxDLEVBQVNDLGVBQWEsQ0FDMUJDLFFBQVNDLGVBQXFCZixJQUM5QlEsV0FHYUksSSx3QkM1Q0FJLGlCQUFZLENBQ3pCQyxNQUFPLENBQ0xDLFdBQVksR0FDWkMsWUFBYSxHQUNiQyxrQkFBbUIsSUFFckJDLFVBQVcsQ0FDVEMsTUFEUyxTQUNGTCxFQUFPdEksR0FDVnNJLEVBQU1DLFdBQWF2SSxHQUV2QjRJLE9BSlMsU0FJRE4sRUFBT3RJLEdBQ2JzSSxFQUFNRSxZQUFjeEksR0FFdEI2SSxRQVBTLFNBT0FQLEVBQU90SSxHQUNkc0ksRUFBTUcsa0JBQW9CekksSUFHOUI4SSxRQUFTLEdBRVQvSCxRQUFTLEdBRVRnSSxRQUFTLENBQUNDLGVBQXFCLENBQzdCQyxRQUFTakMsT0FBT2tDLG9CQ25CZEMsRUFBTUMsZUFBVUMsR0FFdEJGLEVBQUlHLE9BQU9DLFVBQVcsRUFDdEJKLEVBQUlLLElBQUlDLEdBQU9ELElBQUl2QixHQUFReUIsTUFBTSxTLG9DQ1RqQyxXIiwiZmlsZSI6ImpzL2FwcC41ZDMyYWI5Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIENTUyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDc3NDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH1cblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwianMvXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyB7XCJjaHVuay0yMDRjZWNhMlwiOlwiMDJlN2I2ZGFcIixcImNodW5rLTI2Y2E1NmExXCI6XCJlYzdiODg5MFwiLFwiY2h1bmstNTc3ZjIwZjJcIjpcImVmZWM0NDg1XCIsXCJjaHVuay04ZDhhZDg2YVwiOlwiMWIxZjk2NDVcIixcImNodW5rLTQ5YzViZTMxXCI6XCIyNjRiMDhlMFwiLFwiY2h1bmstN2RiM2RiZThcIjpcIjg5Njc5OTQyXCIsXCJjaHVuay05MTgzODI1YVwiOlwiZTEwZTBjMmRcIixcImNodW5rLWNhMWVjM2E0XCI6XCI3NGVlYTliM1wiLFwiY2h1bmstZWZmMGY2MzhcIjpcIjE2ZTA0ZDRkXCJ9W2NodW5rSWRdICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4gQ1NTIGxvYWRpbmdcbiBcdFx0dmFyIGNzc0NodW5rcyA9IHtcImNodW5rLTIwNGNlY2EyXCI6MSxcImNodW5rLTI2Y2E1NmExXCI6MSxcImNodW5rLTU3N2YyMGYyXCI6MSxcImNodW5rLThkOGFkODZhXCI6MSxcImNodW5rLTQ5YzViZTMxXCI6MSxcImNodW5rLTdkYjNkYmU4XCI6MSxcImNodW5rLTkxODM4MjVhXCI6MSxcImNodW5rLWNhMWVjM2E0XCI6MSxcImNodW5rLWVmZjBmNjM4XCI6MX07XG4gXHRcdGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSkgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRlbHNlIGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSAhPT0gMCAmJiBjc3NDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0dmFyIGhyZWYgPSBcImNzcy9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5cIiArIHtcImNodW5rLTIwNGNlY2EyXCI6XCI4OTkwMTZkZFwiLFwiY2h1bmstMjZjYTU2YTFcIjpcImVmNmU4NzcwXCIsXCJjaHVuay01NzdmMjBmMlwiOlwiOWJhMDBiOGFcIixcImNodW5rLThkOGFkODZhXCI6XCJmOTA1M2ZlYlwiLFwiY2h1bmstNDljNWJlMzFcIjpcImVmNmU4NzcwXCIsXCJjaHVuay03ZGIzZGJlOFwiOlwiZDE3NmJmMDBcIixcImNodW5rLTkxODM4MjVhXCI6XCJiZWViNzA5ZFwiLFwiY2h1bmstY2ExZWMzYTRcIjpcIjFmYjYyOGU5XCIsXCJjaHVuay1lZmYwZjYzOFwiOlwiOGFmMTAzM2ZcIn1bY2h1bmtJZF0gKyBcIi5jc3NcIjtcbiBcdFx0XHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG4gXHRcdFx0XHR2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ0xpbmtUYWdzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciB0YWcgPSBleGlzdGluZ0xpbmtUYWdzW2ldO1xuIFx0XHRcdFx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuIFx0XHRcdFx0XHRpZih0YWcucmVsID09PSBcInN0eWxlc2hlZXRcIiAmJiAoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSkgcmV0dXJuIHJlc29sdmUoKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHZhciBleGlzdGluZ1N0eWxlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdTdHlsZVRhZ3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHRhZyA9IGV4aXN0aW5nU3R5bGVUYWdzW2ldO1xuIFx0XHRcdFx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuIFx0XHRcdFx0XHRpZihkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpIHJldHVybiByZXNvbHZlKCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHR2YXIgbGlua1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuIFx0XHRcdFx0bGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiBcdFx0XHRcdGxpbmtUYWcudHlwZSA9IFwidGV4dC9jc3NcIjtcbiBcdFx0XHRcdGxpbmtUYWcub25sb2FkID0gcmVzb2x2ZTtcbiBcdFx0XHRcdGxpbmtUYWcub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gXHRcdFx0XHRcdHZhciByZXF1ZXN0ID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmMgfHwgZnVsbGhyZWY7XG4gXHRcdFx0XHRcdHZhciBlcnIgPSBuZXcgRXJyb3IoXCJMb2FkaW5nIENTUyBjaHVuayBcIiArIGNodW5rSWQgKyBcIiBmYWlsZWQuXFxuKFwiICsgcmVxdWVzdCArIFwiKVwiKTtcbiBcdFx0XHRcdFx0ZXJyLmNvZGUgPSBcIkNTU19DSFVOS19MT0FEX0ZBSUxFRFwiO1xuIFx0XHRcdFx0XHRlcnIucmVxdWVzdCA9IHJlcXVlc3Q7XG4gXHRcdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF1cbiBcdFx0XHRcdFx0bGlua1RhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmtUYWcpXG4gXHRcdFx0XHRcdHJlamVjdChlcnIpO1xuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuXG4gXHRcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcbiBcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG4gXHRcdFx0fSkudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdFx0fSkpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcImNodW5rLXZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCI8dGVtcGxhdGU+XHJcbiAgPHJvdXRlci12aWV3Lz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG5cclxuPHN0eWxlPlxyXG4jYXBwIHtcclxuICBmb250LWZhbWlseTogQXZlbmlyLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcblxyXG5cclxuI25hdiBhIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxufVxyXG5cclxuI25hdiBhLnJvdXRlci1saW5rLWV4YWN0LWFjdGl2ZSB7XHJcbiAgY29sb3I6ICM0MmI5ODM7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lODkzYjdlYVwiXG5jb25zdCBzY3JpcHQgPSB7fVxuXG5pbXBvcnQgXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lODkzYjdlYSZsYW5nPWNzc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAncmVnaXN0ZXItc2VydmljZS13b3JrZXInXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gIHJlZ2lzdGVyKGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfXNlcnZpY2Utd29ya2VyLmpzYCwge1xyXG4gICAgcmVhZHkgKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnQXBwIGlzIGJlaW5nIHNlcnZlZCBmcm9tIGNhY2hlIGJ5IGEgc2VydmljZSB3b3JrZXIuXFxuJyArXHJcbiAgICAgICAgJ0ZvciBtb3JlIGRldGFpbHMsIHZpc2l0IGh0dHBzOi8vZ29vLmdsL0FGc2txQidcclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHJlZ2lzdGVyZWQgKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgaGFzIGJlZW4gcmVnaXN0ZXJlZC4nKVxyXG4gICAgfSxcclxuICAgIGNhY2hlZCAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDb250ZW50IGhhcyBiZWVuIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuJylcclxuICAgIH0sXHJcbiAgICB1cGRhdGVmb3VuZCAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdOZXcgY29udGVudCBpcyBkb3dubG9hZGluZy4nKVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZWQgKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnTmV3IGNvbnRlbnQgaXMgYXZhaWxhYmxlOyBwbGVhc2UgcmVmcmVzaC4nKVxyXG4gICAgfSxcclxuICAgIG9mZmxpbmUgKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnTm8gaW50ZXJuZXQgY29ubmVjdGlvbiBmb3VuZC4gQXBwIGlzIHJ1bm5pbmcgaW4gb2ZmbGluZSBtb2RlLicpXHJcbiAgICB9LFxyXG4gICAgZXJyb3IgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb246JywgZXJyb3IpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVdlYkhhc2hIaXN0b3J5IH0gZnJvbSAndnVlLXJvdXRlcidcclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBuYW1lOiAnTWFpbnBhZ2UnLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL01haW5wYWdlLnZ1ZScpXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL0RldGFpbHNwYWdlJyxcclxuICAgIG5hbWU6ICdkZXRhaWxzcGFnZScsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvRGV0YWlsc3BhZ2UudnVlJylcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvRGV0YWlsc3BhZ2VfdHN1eWFtYScsXHJcbiAgICBuYW1lOiAnZGV0YWlsc3BhZ2VfdHN1eWFtYScsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvRGV0YWlsc3BhZ2VfdHN1eWFtYS52dWUnKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9zaGlzZXR1cGFnZScsXHJcbiAgICBuYW1lOiAnc2hpc2V0dXBhZ2UnLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL1NoaXNldHVwYWdlLnZ1ZScpXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2hlbHBwYWdlJyxcclxuICAgIG5hbWU6ICdoZWxwcGFnZScsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvSGVscHBhZ2UudnVlJylcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvc2hpc2V0dXBhZ2UvaXRpcmFucGFnZScsXHJcbiAgICBuYW1lOiAnU2hpc2V0dV9pdGlyYW5wYWdlJyxcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlJyksXHJcbiAgICBwcm9wczogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9zaGlzZXR1cGFnZS9pdGlyYW4vc3lvdXNhaScsXHJcbiAgICBuYW1lOiAnU2hpc2V0dV9zeW91c2FpcGFnZScsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvU2hpc2V0dV9zeW91c2FpcGFnZS52dWUnKSxcclxuICAgIHByb3BzOiB0cnVlXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcclxuICBoaXN0b3J5OiBjcmVhdGVXZWJIYXNoSGlzdG9yeShwcm9jZXNzLmVudi5CQVNFX1VSTCksXHJcbiAgcm91dGVzXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgY3JlYXRlUGVyc2lzdGVkU3RhdGUgZnJvbSAndnVleC1wZXJzaXN0ZWRzdGF0ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHtcclxuICBzdGF0ZToge1xyXG4gICAgZGV0YWlsZGF0YTogW10sXHJcbiAgICBkZXRhaWxkYXRhMjogW10sXHJcbiAgICBmYWNpbGl0eVRhYmxlRGF0YTogW10sXHJcbiAgfSxcclxuICBtdXRhdGlvbnM6IHtcclxuICAgIEVudGVyIChzdGF0ZSwgZGF0YSkge1xyXG4gICAgICAgIHN0YXRlLmRldGFpbGRhdGEgPSBkYXRhO1xyXG4gICAgfSxcclxuICAgIEVudGVyMiAoc3RhdGUsIGRhdGEpIHtcclxuICAgICAgc3RhdGUuZGV0YWlsZGF0YTIgPSBkYXRhO1xyXG4gICAgfSxcclxuICAgIHRvU3RvcmUgKHN0YXRlLCBkYXRhKSB7XHJcbiAgICAgIHN0YXRlLmZhY2lsaXR5VGFibGVEYXRhID0gZGF0YTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBhY3Rpb25zOiB7XHJcbiAgfSxcclxuICBtb2R1bGVzOiB7XHJcbiAgfSxcclxuICBwbHVnaW5zOiBbY3JlYXRlUGVyc2lzdGVkU3RhdGUoe1xyXG4gICAgc3RvcmFnZTogd2luZG93LnNlc3Npb25TdG9yYWdlXHJcbiAgfSldXHJcbn0pXHJcbiIsImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXHJcbmltcG9ydCAnLi9yZWdpc3RlclNlcnZpY2VXb3JrZXInXHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5cclxuY29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcClcclxuXHJcbmFwcC5jb25maWcuZGV2dG9vbHMgPSB0cnVlXHJcbmFwcC51c2Uoc3RvcmUpLnVzZShyb3V0ZXIpLm1vdW50KCcjYXBwJykiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvaW5kZXguanM/P3JlZi0tMC0xIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU4OTNiN2VhJmxhbmc9Y3NzXCIiXSwic291cmNlUm9vdCI6IiJ9