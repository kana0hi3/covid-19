(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-577f20f2"],{"0485":function(t,e,a){},4811:function(t,e,a){"use strict";a.r(e);var n=a("7a23"),s={class:"pagelink"},i=Object(n["g"])("新型コロナウイルス情報"),c=Object(n["h"])("a",null,"＞岡山県コロナ感染者詳細情報",-1),r={key:0},l={key:1,id:"chart",height:"100",width:"300"},o={key:2,id:"chart"},d=Object(n["h"])("br",null,null,-1),u=Object(n["h"])("br",null,null,-1),b={class:"filter"},h={style:{"white-space":"nowrap"},class:"filterkeyword"},O=Object(n["g"])("絞り込み"),j={class:"table1"},f={class:"detailbody"};function k(t,e,a,k,p,y){var g=Object(n["x"])("mainmenu"),m=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(g,{judge:"0"}),Object(n["h"])("div",s,[Object(n["h"])(m,{to:"/"},{default:Object(n["D"])((function(){return[i]})),_:1}),c]),t.$store.state.detaildata.length>0?(Object(n["q"])(),Object(n["d"])("h1",r,"岡山県コロナ感染者詳細情報")):Object(n["e"])("",!0),Object(n["h"])("button",{type:"button",onClick:e[1]||(e[1]=function(){return y.Back.apply(y,arguments)}),disabled:t.isTestDisabledBack},"前",8,["disabled"]),Object(n["h"])("button",{type:"button",onClick:e[2]||(e[2]=function(){return y.Next.apply(y,arguments)}),disabled:t.isTestDisabledNext},"次",8,["disabled"]),1==y.isLarge?(Object(n["q"])(),Object(n["d"])("canvas",l)):0==y.isLarge?(Object(n["q"])(),Object(n["d"])("canvas",o)):Object(n["e"])("",!0),d,u,Object(n["h"])("div",b,[Object(n["h"])("span",h,[O,Object(n["E"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.keyword=e})},null,512),[[n["B"],t.keyword]])])]),Object(n["h"])("table",j,[Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(t.columnshead,(function(t){return Object(n["q"])(),Object(n["d"])("th",{key:t},Object(n["z"])(t),1)})),128))])]),Object(n["h"])("tbody",f,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(y.reverseItems,(function(e){return Object(n["q"])(),Object(n["d"])("tr",{key:e},[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(t.columns,(function(t,a){return Object(n["q"])(),Object(n["d"])("td",{key:a},Object(n["z"])(e[a]),1)})),128))])})),128))])])],64)}a("99af"),a("4de4"),a("c975"),a("d81d"),a("13d5"),a("fb6a"),a("a434");var p=a("30ef"),y=a.n(p),g=a("ad3a");function m(t,e,a){for(var n=[],s=0;s<e.length;s++)n[s]=e[s].slice(0,7);for(var i=n.filter((function(t,e,a){return a.indexOf(t)===e})),c=0;c<e.length;c++)e[c].slice(0,7)!=i[i.length-1-a]&&(e.splice(c,1),t.splice(c,1),c-=1);return{data:t,label:e,LabelLen:i.length}}function w(t,e,a){t.data.labels=e,t.data.datasets[0].data=a,t.update()}var C={name:"Detailpage",components:{mainmenu:g["a"]},data:function(){var t={"公表年月日":"公表年月日","患者＿居住地":"患者＿居住地","患者＿年代":"患者＿年代","患者＿性別":"患者＿性別"};return{columnshead:["公表年月日","居住地","年代","性別"],keyword:"",isTestDisabledBack:!1,isTestDisabledNext:!0,kenDetails:this.$store.state.detaildata,columns:t,tasks:this.$store.state.detaildata2,count:0}},methods:{listCategoryCreat:function(t){for(var e=0;e<this.kenDetails.length;e++)""==this.kenDetails[e]["日別の感染者数"]&&(this.kenDetails[e]["日別の感染者数"]=0);var a=this.kenDetails.map((function(e){return[e[t]]})).reduce((function(t,e){return t.concat(e)}));return a},Next:function(){this.count=this.count-1,this.count<=0?(this.isTestDisabledNext=!0,this.isTestDisabledBack=!1,this.count=0):(this.isTestDisabledNext=!1,this.isTestDisabledBack=!1)},Back:function(){this.count=this.count+1,this.count>=this.CountLength-1?(this.isTestDisabledBack=!0,this.isTestDisabledNext=!1,this.count=this.CountLength-1):(this.isTestDisabledBack=!1,this.isTestDisabledNext=!1)},CreateChart:function(){var t=this.listCategoryCreat("集計時点_年月日"),e=this.listCategoryCreat("日別の感染者数"),a=m(e,t,this.count);this.CountLength=a.LabelLen;var n={type:"bar",data:{labels:a.label,datasets:[{data:a.data,backgroundColor:"#00B0F0",label:"新規感染者数"}]},options:{plugins:{pan:{enabled:!0,mode:"xy"},zoom:{enabled:!0,drag:!0,mode:"xy"}},scales:{yAxes:[{ticks:{beginAtZero:!0,userCallback:function(t){if(Math.floor(t)===t)return t},fontSize:15,suggestedMax:50,stepSize:10}}]}}};this.Chart=new y.a(document.getElementById("chart").getContext("2d"),n)}},computed:{reverseItems:function(){var t=[];for(var e in this.tasks){var a=this.tasks[e];-1===a.公表年月日.indexOf(this.keyword)&&-1===a.患者＿居住地.indexOf(this.keyword)&&-1===a.患者＿年代.indexOf(this.keyword)&&-1===a.患者＿性別.indexOf(this.keyword)||t.push(a)}return t.slice().reverse()},isLarge:function(){return!!window.matchMedia("(min-width: 480px)").matches}},watch:{count:function(){var t=this.listCategoryCreat("集計時点_年月日"),e=this.listCategoryCreat("日別の感染者数"),a=m(e,t,this.count);w(this.Chart,a.label,a.data)}},mounted:function(){this.CreateChart()}};a("82b4");C.render=k;e["default"]=C},"82b4":function(t,e,a){"use strict";a("0485")}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvRGV0YWlsc3BhZ2UudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9EZXRhaWxzcGFnZS52dWU/MDg3ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvRGV0YWlsc3BhZ2UudnVlPzZlMGQiXSwibmFtZXMiOlsiY2xhc3MiLCJpZCIsImhlaWdodCIsIndpZHRoIiwic3R5bGUiLCJqdWRnZSIsInRvIiwiJHN0b3JlIiwic3RhdGUiLCJkZXRhaWxkYXRhIiwibGVuZ3RoIiwidHlwZSIsIkJhY2siLCJkaXNhYmxlZCIsImlzVGVzdERpc2FibGVkQmFjayIsIk5leHQiLCJpc1Rlc3REaXNhYmxlZE5leHQiLCJpc0xhcmdlIiwia2V5d29yZCIsImNvbHVtbnNoZWFkIiwiaGVhZCIsImtleSIsInJldmVyc2VJdGVtcyIsInRhc2siLCJjb2x1bW5zIiwidmFsdWUiLCJEYXRhU2V0IiwiZGF0YSIsImxhYmVsIiwiY291bnQiLCJzZWFyY2giLCJpIiwic2xpY2UiLCJzZWFyY2hXb3JkIiwiZmlsdGVyIiwieCIsInNlbGYiLCJpbmRleE9mIiwic3BsaWNlIiwiTGFiZWxMZW4iLCJDaGFuZ2VMYWJlbHNEYXRhc2V0cyIsImNoYXJ0IiwibmV3ZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwidXBkYXRlIiwibmFtZSIsImNvbXBvbmVudHMiLCJtYWlubWVudSIsIuWFrOihqOW5tOaciOaXpSIsIuaCo+iAhe+8v+WxheS9j+WcsCIsIuaCo+iAhe+8v+W5tOS7oyIsIuaCo+iAhe+8v+aAp+WIpSIsImtlbkRldGFpbHMiLCJ0aGlzIiwidGFza3MiLCJkZXRhaWxkYXRhMiIsIm1ldGhvZHMiLCJsaXN0Q2F0ZWdvcnlDcmVhdCIsInRhcmdldCIsInRhcmdldExpc3QiLCJtYXAiLCJhcnIiLCJyZWR1Y2UiLCJhIiwiYiIsImNvbmNhdCIsIkNvdW50TGVuZ3RoIiwiQ3JlYXRlQ2hhcnQiLCJsYWJlbExpc3QiLCJkYXRhTGlzdCIsImZpbHRlcmVkRGF0YVNldCIsImNvbmZpZyIsImJhY2tncm91bmRDb2xvciIsIm9wdGlvbnMiLCJwbHVnaW5zIiwicGFuIiwiZW5hYmxlZCIsIm1vZGUiLCJ6b29tIiwiZHJhZyIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJiZWdpbkF0WmVybyIsInVzZXJDYWxsYmFjayIsIk1hdGgiLCJmbG9vciIsImZvbnRTaXplIiwic3VnZ2VzdGVkTWF4Iiwic3RlcFNpemUiLCJDaGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiY29tcHV0ZWQiLCJmaWx0ZXJlZFRhYmxlIiwiZmlsdGVyZWRUYWJsZXMiLCJwdXNoIiwicmV2ZXJzZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwid2F0Y2giLCJtb3VudGVkIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoibUtBRU9BLE1BQU0sWSxpQkFDVyxlLEVBQXlCLGVBQXFCLFNBQWxCLGtCQUFjLEcsbUJBS2pDQyxHQUFHLFFBQVFDLE9BQU8sTUFBTUMsTUFBTSxPLFNBQ3hCRixHQUFHLFMsRUFDeEMsZUFBSSxtQixFQUFBLGVBQUksbUIsR0FDSEQsTUFBTSxVLEdBQ0hJLE1BQUEseUJBQTZCSixNQUFNLGlCLGlCQUFnQixRLEdBRXBEQSxNQUFNLFUsR0FRSkEsTUFBTSxjLDZJQXJCZixlQUFvQixHQUFWSyxNQUFNLE1BQ2hCLGVBRU0sTUFGTixFQUVNLENBREosZUFBNkMsR0FBaENDLEdBQUcsS0FBRyxDLHdCQUFDLGlCQUFXLEMsWUFBYyxJQUVyQyxFQUFBQyxPQUFPQyxNQUFNQyxXQUFXQyxPQUFNLEcsaUJBQXhDLGVBQWdFLE9BQWxCLGtCLHNCQUM5QyxlQUFpRixVQUF6RUMsS0FBSyxTQUFjLFFBQUssOEJBQUUsRUFBQUMsS0FBQSxxQkFBT0MsU0FBVSxFQUFBQyxvQkFBb0IsSUFBQyxnQkFDeEUsZUFBaUYsVUFBekVILEtBQUssU0FBYyxRQUFLLDhCQUFFLEVBQUFJLEtBQUEscUJBQU9GLFNBQVUsRUFBQUcsb0JBQW9CLElB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QWUvQyxPQUFPYixRQUFRaUIsS0FBS3BDLFdBQ2EsSUFBaEQrRSxFQUFlOUMsTUFBTWQsUUFBUWlCLEtBQUtwQyxXQUNjLElBQWhEK0UsRUFBZTdDLE1BQU1mLFFBQVFpQixLQUFLcEMsVUFDcEM4RSxFQUFjRSxLQUFLRCxHQUd2QixPQUFPRCxFQUFjaEUsUUFBUW1FLFdBRS9CbEYsUUFkUSxXQWVOLFFBQUltRixPQUFPQyxXQUFXLHNCQUFzQkMsVUFPaERDLE1BQU8sQ0FDTDFFLE1BQU8sV0FDTCxJQUFNd0MsRUFBWWYsS0FBS0ksa0JBQWtCLFlBQ25DWSxFQUFXaEIsS0FBS0ksa0JBQWtCLFdBQ2xDYSxFQUFrQjdDLEVBQVE0QyxFQUFVRCxFQUFXZixLQUFLekIsT0FDMURXLEVBQ0VjLEtBQUtxQyxNQUNMcEIsRUFBZ0IzQyxNQUNoQjJDLEVBQWdCNUMsUUFJdEI2RSxRQUFTLFdBQ1BsRCxLQUFLYyxnQixVQzdOVCxFQUFPcUMsT0FBU0EsRUFFRCxnQixvQ0NQZiIsImZpbGUiOiJqcy9jaHVuay01NzdmMjBmMi5lZmVjNDQ4NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8bWFpbm1lbnUganVkZ2U9MCAvPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlbGlua1wiPlxyXG4gICAgPHJvdXRlci1saW5rIHRvPVwiL1wiPuaWsOWei+OCs+ODreODiuOCpuOCpOODq+OCueaDheWgsTwvcm91dGVyLWxpbms+PGE+77ye5bKh5bGx55yM44Kz44Ot44OK5oSf5p+T6ICF6Kmz57Sw5oOF5aCxPC9hPlxyXG4gIDwvZGl2PlxyXG4gIDxoMSB2LWlmPVwiJHN0b3JlLnN0YXRlLmRldGFpbGRhdGEubGVuZ3RoID4gMFwiPuWyoeWxseecjOOCs+ODreODiuaEn+afk+iAheips+e0sOaDheWgsTwvaDE+XHJcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdi1vbjpjbGljaz1cIkJhY2tcIiA6ZGlzYWJsZWQ9XCJpc1Rlc3REaXNhYmxlZEJhY2tcIj7liY08L2J1dHRvbj5cclxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB2LW9uOmNsaWNrPVwiTmV4dFwiIDpkaXNhYmxlZD1cImlzVGVzdERpc2FibGVkTmV4dFwiPuasoTwvYnV0dG9uPlxyXG4gIDxjYW52YXMgdi1pZj1cImlzTGFyZ2UgPT0gdHJ1ZVwiIGlkPVwiY2hhcnRcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjMwMFwiPjwvY2FudmFzPlxyXG4gIDxjYW52YXMgdi1lbHNlLWlmPVwiaXNMYXJnZSA9PSBmYWxzZVwiIGlkPVwiY2hhcnRcIj48L2NhbnZhcz5cclxuICA8YnI+PGJyPlxyXG4gIDxkaXYgY2xhc3M9XCJmaWx0ZXJcIj5cclxuICAgIDxzcGFuIHN0eWxlPVwid2hpdGUtc3BhY2U6IG5vd3JhcDtcIiBjbGFzcz1cImZpbHRlcmtleXdvcmRcIj7ntZ7jgorovrzjgb88aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwia2V5d29yZFwiPjwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8dGFibGUgY2xhc3M9XCJ0YWJsZTFcIj5cclxuICAgIDx0aGVhZD5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0aCB2LWZvcj1cImhlYWQgaW4gY29sdW1uc2hlYWRcIiA6a2V5PVwiaGVhZFwiPlxyXG4gICAgICAgICAge3sgaGVhZCB9fVxyXG4gICAgICAgIDwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG4gICAgPHRib2R5IGNsYXNzPVwiZGV0YWlsYm9keVwiPlxyXG4gICAgICA8dHIgdi1mb3I9XCJ0YXNrIGluIHJldmVyc2VJdGVtc1wiIDprZXk9XCJ0YXNrXCI+XHJcbiAgICAgICAgPHRkIHYtZm9yPVwiKHZhbHVlLCBrZXkpIGluIGNvbHVtbnNcIiA6a2V5PVwia2V5XCI+XHJcbiAgICAgICAgICB7eyB0YXNrW2tleV0gfX1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90Ym9keT5cclxuICA8L3RhYmxlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xyXG5pbXBvcnQgbWFpbm1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFpbm1lbnUudnVlXCI7XHJcblxyXG5mdW5jdGlvbiBEYXRhU2V0KGRhdGEsIGxhYmVsLCBjb3VudCkge1xyXG4gIGNvbnN0IHNlYXJjaCA9IFtdO1xyXG4gIC8v5YWs6ZaL5pel44GM5pyI44Gg44GR44Gr44Gq44KL44KI44GG44Gr5YiG44GR44KL44CCXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYWJlbC5sZW5ndGg7IGkrKykge1xyXG4gICAgc2VhcmNoW2ldID0gbGFiZWxbaV0uc2xpY2UoMCwgNyk7XHJcbiAgfVxyXG5cclxuICAvL+mHjeikh+OBruOBquOBhOmFjeWIl+OBq+OBmeOCi+OAguWPguiAg++8mmh0dHBzOi8vd3d3LnN1enU2Lm5ldC9wb3N0cy85NS1qcy1kdXBsaWNhdGlvbi9cclxuICBjb25zdCBzZWFyY2hXb3JkID0gc2VhcmNoLmZpbHRlcihmdW5jdGlvbiAoeCwgaSwgc2VsZikge1xyXG4gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih4KSA9PT0gaTtcclxuICB9KTtcclxuXHJcbiAgLy9cIuaXpeWIpeOBruaciOOBoOOBkeODh+ODvOOCv1wi44GoXCLjgrDjg6njg5XjgafooajnpLrjgZfjgZ/jgYTmnIhcIuOCkuavlOi8g+OBl+OBpuOAgeihqOekuuOBl+OBn+OBhOaciOOBp+OBr+OBquOBhOaXpeS7mOOBqOaXpeWIpeODh+ODvOOCv+OBr+WJiumZpOOBmeOCi1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGFiZWwubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChsYWJlbFtpXS5zbGljZSgwLCA3KSAhPSBzZWFyY2hXb3JkW3NlYXJjaFdvcmQubGVuZ3RoIC0gMSAtIGNvdW50XSkge1xyXG4gICAgICBsYWJlbC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xyXG4gICAgICBpID0gaSAtIDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgTGFiZWxMZW46IHNlYXJjaFdvcmQubGVuZ3RoXHJcbiAgfTtcclxufVxyXG5mdW5jdGlvbiBDaGFuZ2VMYWJlbHNEYXRhc2V0cyhjaGFydCwgbGFiZWwsIG5ld2RhdGEpIHtcclxuICBjaGFydC5kYXRhLmxhYmVscyA9IGxhYmVsO1xyXG4gIGNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IG5ld2RhdGE7XHJcbiAgY2hhcnQudXBkYXRlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIkRldGFpbHBhZ2VcIixcclxuICBjb21wb25lbnRzOiB7IFxyXG4gICAgbWFpbm1lbnUsXHJcbiAgIH0sXHJcbiAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY29sdW1ucyA9IHtcclxuICAgICAg5YWs6KGo5bm05pyI5pelOiBcIuWFrOihqOW5tOaciOaXpVwiLFxyXG4gICAgICDmgqPogIXvvL/lsYXkvY/lnLA6IFwi5oKj6ICF77y/5bGF5L2P5ZywXCIsXHJcbiAgICAgIOaCo+iAhe+8v+W5tOS7ozogXCLmgqPogIXvvL/lubTku6NcIixcclxuICAgICAg5oKj6ICF77y/5oCn5YilOiBcIuaCo+iAhe+8v+aAp+WIpVwiLFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29sdW1uc2hlYWQgOiBbXCLlhazooajlubTmnIjml6VcIixcIuWxheS9j+WcsFwiLFwi5bm05LujXCIsXCLmgKfliKVcIl0sXHJcbiAgICAgIGtleXdvcmQ6ICcnLFxyXG4gICAgICBpc1Rlc3REaXNhYmxlZEJhY2s6IGZhbHNlLFxyXG4gICAgICBpc1Rlc3REaXNhYmxlZE5leHQ6IHRydWUsXHJcbiAgICAgIGtlbkRldGFpbHM6IHRoaXMuJHN0b3JlLnN0YXRlLmRldGFpbGRhdGEsXHJcbiAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXHJcbiAgICAgIHRhc2tzOiB0aGlzLiRzdG9yZS5zdGF0ZS5kZXRhaWxkYXRhMixcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgbGlzdENhdGVnb3J5Q3JlYXQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmtlbkRldGFpbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5rZW5EZXRhaWxzW2ldW1wi5pel5Yil44Gu5oSf5p+T6ICF5pWwXCJdID09IFwiXCIpIHtcclxuICAgICAgICAgIHRoaXMua2VuRGV0YWlsc1tpXVtcIuaXpeWIpeOBruaEn+afk+iAheaVsFwiXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvL+OCsOODqeODleOCkuaPj+eUu+OBmeOCi+OBn+OCgeOBq+mAo+aDs+mFjeWIl+OCkuaZrumAmuOBrumFjeWIl+OBq+WkieaPm1xyXG4gICAgICAvL+WPguiAg+OBvuOBp+OBq++8mmh0dHBzOi8vbXNlZWVlbi5tc2VuLmpwL2phdmFzY3JpcHQtbWFwLWZ1bmN0aW9uL1xyXG4gICAgICBjb25zdCB0YXJnZXRMaXN0ID0gdGhpcy5rZW5EZXRhaWxzXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoYXJyKSB7XHJcbiAgICAgICAgICByZXR1cm4gW2Fyclt0YXJnZXRdXTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiB0YXJnZXRMaXN0O1xyXG4gICAgfSxcclxuICAgIE5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5jb3VudCA9IHRoaXMuY291bnQgLSAxO1xyXG4gICAgICBpZiAodGhpcy5jb3VudDw9MCl7XHJcbiAgICAgICAgdGhpcy5pc1Rlc3REaXNhYmxlZE5leHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNUZXN0RGlzYWJsZWRCYWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDBcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5pc1Rlc3REaXNhYmxlZE5leHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzVGVzdERpc2FibGVkQmFjayA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgQmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmNvdW50ID0gdGhpcy5jb3VudCArIDE7XHJcbiAgICAgIGlmICh0aGlzLmNvdW50Pj10aGlzLkNvdW50TGVuZ3RoLTEpe1xyXG4gICAgICAgIHRoaXMuaXNUZXN0RGlzYWJsZWRCYWNrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzVGVzdERpc2FibGVkTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSB0aGlzLkNvdW50TGVuZ3RoLTE7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuaXNUZXN0RGlzYWJsZWRCYWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1Rlc3REaXNhYmxlZE5leHQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIENyZWF0ZUNoYXJ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGxhYmVsTGlzdCA9IHRoaXMubGlzdENhdGVnb3J5Q3JlYXQoXCLpm4boqIjmmYLngrlf5bm05pyI5pelXCIpO1xyXG4gICAgICBjb25zdCBkYXRhTGlzdCA9IHRoaXMubGlzdENhdGVnb3J5Q3JlYXQoXCLml6XliKXjga7mhJ/mn5PogIXmlbBcIik7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YVNldCA9IERhdGFTZXQoZGF0YUxpc3QsIGxhYmVsTGlzdCwgdGhpcy5jb3VudCk7XHJcblxyXG4gICAgICB0aGlzLkNvdW50TGVuZ3RoID0gZmlsdGVyZWREYXRhU2V0LkxhYmVsTGVuO1xyXG4gICAgICAvL+OCsOODqeODleaPj+eUu1xyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgdHlwZTogXCJiYXJcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsYWJlbHM6IGZpbHRlcmVkRGF0YVNldC5sYWJlbCxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBkYXRhOiBmaWx0ZXJlZERhdGFTZXQuZGF0YSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwQjBGMFwiLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIuaWsOimj+aEn+afk+iAheaVsFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgcGFuOiB7XHJcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtb2RlOiBcInh5XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRyYWc6IHRydWUsXHJcbiAgICAgICAgICAgICAgbW9kZTogXCJ4eVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgIHRpY2tzOntcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAvL1nou7jnm67nm5vjga7lsI/mlbDngrnjgpLmtojjgZlcclxuICAgICAgICAgICAgICAgICAgICAvL+WPguiAg++8mmh0dHBzOi8vaGFja25vdGUuanAvYXJjaGl2ZXMvMjgwMjIvXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckNhbGxiYWNrOiBmdW5jdGlvbihsYWJlbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKE1hdGguZmxvb3IobGFiZWwpPT09bGFiZWwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0ZWRNYXg6IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAxMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgdGhpcy5DaGFydCA9IG5ldyBDaGFydChcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0XCIpLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgICBjb25maWdcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHJldmVyc2VJdGVtcygpIHtcclxuICAgICAgY29uc3QgZmlsdGVyZWRUYWJsZSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMudGFza3Mpe1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkVGFibGVzID0gdGhpcy50YXNrc1tpXTtcclxuICAgICAgICBpZihmaWx0ZXJlZFRhYmxlcy7lhazooajlubTmnIjml6UuaW5kZXhPZih0aGlzLmtleXdvcmQpICE9PSAtMSB8fFxyXG4gICAgICAgICAgICBmaWx0ZXJlZFRhYmxlcy7mgqPogIXvvL/lsYXkvY/lnLAuaW5kZXhPZih0aGlzLmtleXdvcmQpICE9PSAtMSB8fFxyXG4gICAgICAgICAgICBmaWx0ZXJlZFRhYmxlcy7mgqPogIXvvL/lubTku6MuaW5kZXhPZih0aGlzLmtleXdvcmQpICE9PSAtMSB8fFxyXG4gICAgICAgICAgICBmaWx0ZXJlZFRhYmxlcy7mgqPogIXvvL/mgKfliKUuaW5kZXhPZih0aGlzLmtleXdvcmQpICE9PSAtMSApe1xyXG4gICAgICAgICAgZmlsdGVyZWRUYWJsZS5wdXNoKGZpbHRlcmVkVGFibGVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmlsdGVyZWRUYWJsZS5zbGljZSgpLnJldmVyc2UoKTtcclxuICAgIH0sXHJcbiAgICBpc0xhcmdlKCkge1xyXG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA0ODBweClcIikubWF0Y2hlcykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBjb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBsYWJlbExpc3QgPSB0aGlzLmxpc3RDYXRlZ29yeUNyZWF0KFwi6ZuG6KiI5pmC54K5X+W5tOaciOaXpVwiKTtcclxuICAgICAgY29uc3QgZGF0YUxpc3QgPSB0aGlzLmxpc3RDYXRlZ29yeUNyZWF0KFwi5pel5Yil44Gu5oSf5p+T6ICF5pWwXCIpO1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGFTZXQgPSBEYXRhU2V0KGRhdGFMaXN0LCBsYWJlbExpc3QsIHRoaXMuY291bnQpO1xyXG4gICAgICBDaGFuZ2VMYWJlbHNEYXRhc2V0cyhcclxuICAgICAgICB0aGlzLkNoYXJ0LFxyXG4gICAgICAgIGZpbHRlcmVkRGF0YVNldC5sYWJlbCxcclxuICAgICAgICBmaWx0ZXJlZERhdGFTZXQuZGF0YVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuQ3JlYXRlQ2hhcnQoKTtcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLnRhYmxlMSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjksIDIzLCAyMyk7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAudGFibGUxIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG59XHJcbmgxe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogIzZlYjBmOTtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIC13ZWJraXQtYm94LXJlZmxlY3Q6IGJlbG93IC0xMHB4IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCxyZ2JhKDAsMCwwLDApLHJnYmEoMCwwLDAsMCkgMTAlLHJnYmEoMCwgMCwgMCwgMC42KSk7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5wYWdlbGlua3tcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmRldGFpbGJvZHkge1xyXG4gIGhlaWdodDogMzhlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbnRye1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxudGhlYWR7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMTEsIDIxMCk7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpe1xyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxuICAucGFnZWxpbmt7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIHRoZWFke1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xyXG4gIH1cclxufVxyXG4uZmlsdGVya2V5d29yZHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG48L3N0eWxlPiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0RldGFpbHNwYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MTJhZWNkMVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0RldGFpbHNwYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9EZXRhaWxzcGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0RldGFpbHNwYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxMmFlY2QxJmxhbmc9Y3NzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L2luZGV4LmpzPz9yZWYtLTAtMSEuL0RldGFpbHNwYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxMmFlY2QxJmxhbmc9Y3NzXCIiXSwic291cmNlUm9vdCI6IiJ9