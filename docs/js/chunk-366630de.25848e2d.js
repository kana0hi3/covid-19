(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-366630de"],{"0bbe":function(t,e,i){},"4f66":function(t,e,i){"use strict";(function(t){i("99af"),i("dca8"),i("ac1f"),i("5319");var a=i("ad3a"),o=i("bc3a"),n=i.n(o),s=i("4bb4"),c=i("10bf"),h=i.n(c);e["a"]={name:"Shisetu_itiranpage",props:{location_no:{type:String}},components:{mainmenu:a["a"]},data:function(){return{windowWidth:window.innerWidth,Sport:[],Nursery:[],Kind:[],Junior:[],JuniorHigh:[],Sight:[],Welfare:[],Park:[],Library:[],Government:[],Rally:[],Child:[],AED:[],joinData:[],joinData2:[],tableData:[],Name:""}},mounted:function(){switch(this.location_no){case"4":this.GetCsvFile("/data/Sports_location.csv",!0,"SJIS","UNICODE",this.setSports);break;case"5":this.GetCsvFile("/data/Nursery_location.csv",!0,"SJIS","UNICODE",this.setNursery),this.GetCsvFile("/data/Kindergarten_location.csv",!0,"SJIS","UNICODE",this.setKind),this.GetCsvFile("/data/JuniorSchool_location.csv",!0,"SJIS","UNICODE",this.setJunior),this.GetCsvFile("/data/JuniorHighSchool_location.csv",!0,"SJIS","UNICODE",this.setJuniorHigh);break;case"6":this.GetCsvFile("/data/Sightseeing_location.csv",!0,"SJIS","UNICODE",this.setSight);break;case"7":this.GetCsvFile("/data/Welfare_location.csv",!0,"SJIS","UNICODE",this.setWelfare);break;case"8":this.GetCsvFile("/data/Park_location.csv",!0,"SJIS","UNICODE",this.setPark),this.GetCsvFile("/data/Library_location.csv",!0,"SJIS","UNICODE",this.setLibrary);break;case"9":this.GetCsvFile("/data/Government_location.csv",!0,"SJIS","UNICODE",this.setGovernment);break;case"10":this.GetCsvFile("/data/Rally_location.csv",!0,"SJIS","UNICODE",this.setRally);break;case"11":this.GetCsvFile("/data/Children_location.csv",!0,"SJIS","UNICODE",this.setChild);break;case"12":this.GetCsvFile("/data/AED_location.csv",!0,"SJIS","UNICODE",this.setAED);break;default:break}},methods:{setSports:function(t){this.Sport=t,this.tableData=this.Sport,this.$store.commit("toStore",this.tableData)},setNursery:function(t){this.Nursery=t,this.Kind.length>0&&this.Junior.length>0&&this.JuniorHigh.length>0&&(this.joinData=this.Nursery.concat(this.Kind,this.Junior,this.JuniorHigh),this.tableData=this.joinData,this.$store.commit("toStore",this.tableData))},setKind:function(t){this.Kind=t,this.Nursery.length>0&&this.Junior.length>0&&this.JuniorHigh.length>0&&(this.joinData=this.Nursery.concat(this.Kind,this.Junior,this.JuniorHigh),this.tableData=this.joinData,this.$store.commit("toStore",this.tableData))},setJunior:function(t){this.Junior=t,this.Nursery.length>0&&this.Kind.length>0&&this.JuniorHigh.length>0&&(this.joinData=this.Nursery.concat(this.Kind,this.Junior,this.JuniorHigh),this.tableData=this.joinData,this.$store.commit("toStore",this.tableData))},setJuniorHigh:function(t){this.JuniorHigh=t,this.Nursery.length>0&&this.Kind.length>0&&this.Junior.length>0&&(this.joinData=this.Nursery.concat(this.Kind,this.Junior,this.JuniorHigh),this.tableData=this.joinData,this.$store.commit("toStore",this.tableData))},setSight:function(t){this.Sight=t,this.tableData=this.Sight,this.$store.commit("toStore",this.tableData)},setWelfare:function(t){this.Welfare=t,this.tableData=this.Welfare,this.$store.commit("toStore",this.tableData)},setPark:function(t){this.Park=t,this.Library.length>0&&(this.joinData2=this.Library.concat(this.Park),this.tableData=this.joinData2,this.$store.commit("toStore",this.tableData))},setLibrary:function(t){this.Library=t,this.Park.length>0&&(this.joinData2=this.Library.concat(this.Park),this.tableData=this.joinData2,this.$store.commit("toStore",this.tableData))},setGovernment:function(t){this.Government=t,this.tableData=this.Government,this.$store.commit("toStore",this.tableData)},setRally:function(t){this.Rally=t,this.tableData=this.Rally,this.$store.commit("toStore",this.tableData)},setChild:function(t){this.Child=t,this.tableData=this.Child,this.$store.commit("toStore",this.tableData)},setAED:function(t){this.AED=t,this.tableData=this.AED,this.$store.commit("toStore",this.tableData)},GetCsvFile:function(e,i,a,o,c){n.a.get(e,{responseType:"arraybuffer"}).then((function(e){var n=t.from(e.data),r=h.a.convert(n,{from:a,to:o,type:"string"});r=r.replace(/^\ufeff/,""),Object(s["parse"])(r,{columns:i,quote:'"',ltrim:!0,rtrim:!0,delimiter:",",cast:!0},(function(t,e){c(Object.freeze(e))}))})).catch((function(t){return console.log(t)}))}}}}).call(this,i("b639").Buffer)},8418:function(t,e,i){"use strict";var a=i("c04e"),o=i("9bf2"),n=i("5c6c");t.exports=function(t,e,i){var s=a(e);s in t?o.f(t,s,n(0,i)):t[s]=i}},"99af":function(t,e,i){"use strict";var a=i("23e7"),o=i("d039"),n=i("e8b5"),s=i("861d"),c=i("7b0b"),h=i("50c4"),r=i("8418"),l=i("65f0"),b=i("1dde"),u=i("b622"),d=i("2d00"),j=u("isConcatSpreadable"),O=9007199254740991,f="Maximum allowed index exceeded",D=d>=51||!o((function(){var t=[];return t[j]=!1,t.concat()[0]!==t})),S=b("concat"),y=function(t){if(!s(t))return!1;var e=t[j];return void 0!==e?!!e:n(t)},m=!D||!S;a({target:"Array",proto:!0,forced:m},{concat:function(t){var e,i,a,o,n,s=c(this),b=l(s,0),u=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?s:arguments[e],y(n)){if(o=h(n.length),u+o>O)throw TypeError(f);for(i=0;i<o;i++,u++)i in n&&r(b,u,n[i])}else{if(u>=O)throw TypeError(f);r(b,u++,n)}return b.length=u,b}})},a239:function(t,e,i){"use strict";i.r(e);var a=i("7a23"),o=Object(a["F"])("data-v-5dfb6d72");Object(a["t"])("data-v-5dfb6d72");var n={class:"pagelink"},s=Object(a["g"])("施設情報"),c=Object(a["h"])("a",null,"＞",-1),h=Object(a["h"])("a",null,"津山市体育施設一覧",-1),r={key:0},l={key:1},b={key:2},u={key:3},d={key:4},j={key:5},O={key:6},f={key:7},D={key:8},S={key:9},y={key:10},m={key:11},g={key:12,class:"table2"},v=Object(a["h"])("th",null,"施設名",-1),k=Object(a["h"])("th",null,"住所",-1),_={key:0},J={key:0},C={key:1},p={key:2},I={key:3};Object(a["r"])();var N=o((function(t,e,i,N,E,q){var w=Object(a["x"])("mainmenu"),G=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])(w,{judge:"1"}),Object(a["h"])("div",n,[Object(a["h"])(G,{to:"/shisetupage"},{default:o((function(){return[s]})),_:1}),c,h]),1==i.location_no?(Object(a["q"])(),Object(a["d"])("h1",r,"津山市医科一覧")):Object(a["e"])("",!0),2==i.location_no?(Object(a["q"])(),Object(a["d"])("h1",l,"津山市歯科一覧")):Object(a["e"])("",!0),3==i.location_no?(Object(a["q"])(),Object(a["d"])("h1",b,"津山市薬局一覧")):Object(a["e"])("",!0),4==i.location_no?(Object(a["q"])(),Object(a["d"])("h1",u,"津山市体育施設一覧")):Object(a["e"])("",!0),5==i.location_no?(Object(a["q"])(),Object(a["d"])("h1",d,"津山市教育施設一覧")):Object(a["e"])("",!0),6==i.location_no?(Object(a["q"])(),Object(a["d"])("h1",j,"津山市観光施設一覧")):Object(a["e"])("",!0),7==i.location_no?(Object(a["q"])(),Object(a["d"])("h1",O,"津山市福祉施設一覧")):Object(a["e"])("",!0),8==i.location_no?(Object(a["q"])(),Object(a["d"])("h1",f,"津山市公園・図書館一覧")):Object(a["e"])("",!0),9==i.location_no?(Object(a["q"])(),Object(a["d"])("h1",D,"津山市役所一覧")):Object(a["e"])("",!0),10==i.location_no?(Object(a["q"])(),Object(a["d"])("h1",S,"津山市集会施設一覧")):Object(a["e"])("",!0),11==i.location_no?(Object(a["q"])(),Object(a["d"])("h1",y,"津山市児童クラブ一覧")):Object(a["e"])("",!0),12==i.location_no?(Object(a["q"])(),Object(a["d"])("h1",m,"津山市AED設置場所一覧")):Object(a["e"])("",!0),t.tableData.length>0?(Object(a["q"])(),Object(a["d"])("table",g,[Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[v,k,t.windowWidth>480?(Object(a["q"])(),Object(a["d"])("th",_,"電話番号")):Object(a["e"])("",!0)])]),Object(a["h"])("tbody",null,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(t.tableData,(function(e){return Object(a["q"])(),Object(a["d"])("tr",{key:e},["12"==i.location_no?(Object(a["q"])(),Object(a["d"])("td",J,[Object(a["h"])(G,{to:{name:"Shisetu_syousaipage",params:{no:e.施設名,location_no:i.location_no}}},{default:o((function(){return[Object(a["g"])(Object(a["z"])(e.施設名),1)]})),_:2},1032,["to"])])):(Object(a["q"])(),Object(a["d"])("td",C,[Object(a["h"])(G,{to:{name:"Shisetu_syousaipage",params:{no:e.名称,location_no:i.location_no}}},{default:o((function(){return[Object(a["g"])(Object(a["z"])(e.名称),1)]})),_:2},1032,["to"])])),Object(a["h"])("td",null,Object(a["z"])(e.住所),1),t.windowWidth>480&&"12"==i.location_no?(Object(a["q"])(),Object(a["d"])("td",p,Object(a["z"])(e.電話),1)):Object(a["e"])("",!0),t.windowWidth>480&&"12"!=i.location_no?(Object(a["q"])(),Object(a["d"])("td",I,Object(a["z"])(e.TEL),1)):Object(a["e"])("",!0)])})),128))])])):Object(a["e"])("",!0)],64)})),E=i("4f66");i("deed");E["a"].render=N,E["a"].__scopeId="data-v-5dfb6d72";e["default"]=E["a"]},deed:function(t,e,i){"use strict";i("0bbe")}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU2hpc2V0dV9pdGlyYW5wYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlPzc1YjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1NoaXNldHVfaXRpcmFucGFnZS52dWU/MTk5NiJdLCJuYW1lcyI6WyJuYW1lIiwicHJvcHMiLCJsb2NhdGlvbl9ubyIsInR5cGUiLCJTdHJpbmciLCJjb21wb25lbnRzIiwibWFpbm1lbnUiLCJkYXRhIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiU3BvcnQiLCJOdXJzZXJ5IiwiS2luZCIsIkp1bmlvciIsIkp1bmlvckhpZ2giLCJTaWdodCIsIldlbGZhcmUiLCJQYXJrIiwiTGlicmFyeSIsIkdvdmVybm1lbnQiLCJSYWxseSIsIkNoaWxkIiwiQUVEIiwiam9pbkRhdGEiLCJqb2luRGF0YTIiLCJ0YWJsZURhdGEiLCJOYW1lIiwibW91bnRlZCIsInRoaXMiLCJHZXRDc3ZGaWxlIiwic2V0U3BvcnRzIiwic2V0TnVyc2VyeSIsInNldEtpbmQiLCJzZXRKdW5pb3IiLCJzZXRKdW5pb3JIaWdoIiwic2V0U2lnaHQiLCJzZXRXZWxmYXJlIiwic2V0UGFyayIsInNldExpYnJhcnkiLCJzZXRHb3Zlcm5tZW50Iiwic2V0UmFsbHkiLCJzZXRDaGlsZCIsInNldEFFRCIsIm1ldGhvZHMiLCIkc3RvcmUiLCJjb21taXQiLCJsZW5ndGgiLCJjb25jYXQiLCJ1cmwiLCJjb2wiLCJmcm9tIiwidG8iLCJzZXR0ZXIiLCJhIiwiZ2V0IiwicmVzcG9uc2VUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwiYnVmZmVyIiwiQnVmZmVyIiwiY3N2IiwiY29udmVydCIsInJlcGxhY2UiLCJjb2x1bW5zIiwicXVvdGUiLCJsdHJpbSIsInJ0cmltIiwiZGVsaW1pdGVyIiwiY2FzdCIsImVycm9yIiwib3V0cHV0IiwiT2JqZWN0IiwiZnJlZXplIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwidG9QcmltaXRpdmUiLCJkZWZpbmVQcm9wZXJ0eU1vZHVsZSIsImNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJvYmplY3QiLCJrZXkiLCJ2YWx1ZSIsInByb3BlcnR5S2V5IiwiZiIsIiQiLCJmYWlscyIsImlzQXJyYXkiLCJpc09iamVjdCIsInRvT2JqZWN0IiwidG9MZW5ndGgiLCJjcmVhdGVQcm9wZXJ0eSIsImFycmF5U3BlY2llc0NyZWF0ZSIsImFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQiLCJ3ZWxsS25vd25TeW1ib2wiLCJWOF9WRVJTSU9OIiwiSVNfQ09OQ0FUX1NQUkVBREFCTEUiLCJNQVhfU0FGRV9JTlRFR0VSIiwiTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEIiwiSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCIsImFycmF5IiwiU1BFQ0lFU19TVVBQT1JUIiwiaXNDb25jYXRTcHJlYWRhYmxlIiwiTyIsInNwcmVhZGFibGUiLCJ1bmRlZmluZWQiLCJGT1JDRUQiLCJ0YXJnZXQiLCJwcm90byIsImZvcmNlZCIsImFyZyIsImkiLCJrIiwibGVuIiwiRSIsIkEiLCJuIiwiYXJndW1lbnRzIiwiVHlwZUVycm9yIiwiY2xhc3MiLCJqdWRnZSIsInJvdyIsIuaWveioreWQjSIsIuWQjeensCIsIuS9j+aJgCIsIumbu+ipsSIsIlRFTCIsInJlbmRlciIsIl9fc2NvcGVJZCJdLCJtYXBwaW5ncyI6InNRQTZDZSxRQUNiQSxLQUFNLHFCQUNOQyxNQUFPLENBQ0xDLFlBQVksQ0FDVkMsS0FBTUMsU0FHVkMsV0FBWSxDQUNSQyxTQUFBLFFBRUpDLEtBQU0sV0FDSixNQUFP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QixVQUFVcUIsT0FBTSxHLGlCQUE1QyxlQWtCUSxRQWxCUixFQWtCUSxDQWpCTixlQU1RLGNBTE4sZUFJSyxXQUhILEVBQ0EsRUFDVSxFQUFBdkMsWUFBVyxLLGlCQUFyQixlQUFvQyxPQUFULFMsMEJBSS9CLGVBUVEsZSxtQkFQTixlQU1LLDJCQU5hLEVBQUFrQixXQUFTLFNBQWhCaUcsRyx3QkFBWCxlQU1LLE1BTnlCeEMsSUFBS3dDLEdBQUcsQ0FDZixNQUFYLEVBQUF6SCxhLGlCQUFWLGVBQTRKLFFBQS9ILGVBQTBILEdBQTVHa0QsR0FBRSx1Q0FBNkN1RSxFQUFJQyxJQUFHLFlBQWMsRUFBQTFILGUsWUFBZSxpQkFBVyxDLDhCQUFUeUgsRUFBSUMsS0FBRyxPLHVDQUN2SSxlQUF3SSxRQUE3SCxlQUF3SCxHQUExR3hFLEdBQUUsdUNBQTZDdUUsRUFBSUUsR0FBRSxZQUFjLEVBQUEzSCxlLFlBQWUsaUJBQVUsQyw4QkFBUnlILEVBQUlFLElBQUUsTyxxQkFDbkgsZUFBbUIseUJBQWJGLEVBQUlHLElBQUUsR0FDRixFQUFBdEgsWUFBVyxLQUFtQixNQUFYLEVBQUFOLGEsaUJBQTdCLGVBQStELHNCQUFieUgsRUFBSUksSUFBRSxJLHNCQUM5QyxFQUFBdkgsWUFBVyxLQUFtQixNQUFYLEVBQUFOLGEsaUJBQTdCLGVBQWdFLHNCQUFkeUgsRUFBSUssS0FBRyxJLDBGRzVCakUsT0FBT0MsT0FBUyxFQUNoQixPQUFPQyxVQUFZLGtCQUVKLHFCLGtDQ1JmIiwiZmlsZSI6ImpzL2NodW5rLTM2NjYzMGRlLjI1ODQ4ZTJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxtYWlubWVudSBqdWRnZT0xIC8+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2VsaW5rXCI+XHJcbiAgICA8cm91dGVyLWxpbmsgdG89XCIvc2hpc2V0dXBhZ2VcIj7mlr3oqK3mg4XloLE8L3JvdXRlci1saW5rPlxyXG4gICAgPGE+77yePC9hPjxhPua0peWxseW4guS9k+iCsuaWveioreS4gOimpzwvYT5cclxuICA8L2Rpdj5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT0xXCI+5rSl5bGx5biC5Yy756eR5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT0yXCI+5rSl5bGx5biC5q2v56eR5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT0zXCI+5rSl5bGx5biC6Jas5bGA5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT00XCI+5rSl5bGx5biC5L2T6IKy5pa96Kit5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT01XCI+5rSl5bGx5biC5pWZ6IKy5pa96Kit5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT02XCI+5rSl5bGx5biC6Kaz5YWJ5pa96Kit5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT03XCI+5rSl5bGx5biC56aP56WJ5pa96Kit5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT04XCI+5rSl5bGx5biC5YWs5ZyS44O75Zuz5pu46aSo5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT05XCI+5rSl5bGx5biC5b255omA5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT0xMFwiPua0peWxseW4gumbhuS8muaWveioreS4gOimpzwvaDE+XHJcbiAgPGgxIHYtaWY9XCJsb2NhdGlvbl9ubz09MTFcIj7mtKXlsbHluILlhZDnq6Xjgq/jg6njg5bkuIDopqc8L2gxPlxyXG4gIDxoMSB2LWlmPVwibG9jYXRpb25fbm89PTEyXCI+5rSl5bGx5biCQUVE6Kit572u5aC05omA5LiA6KanPC9oMT5cclxuICA8dGFibGUgY2xhc3M9XCJ0YWJsZTJcIiB2LWlmPVwidGFibGVEYXRhLmxlbmd0aD4wXCI+XHJcbiAgICA8dGhlYWQ+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGg+5pa96Kit5ZCNPC90aD5cclxuICAgICAgICA8dGg+5L2P5omAPC90aD5cclxuICAgICAgICA8dGggdi1pZj1cIndpbmRvd1dpZHRoPjQ4MFwiPumbu+ipseeVquWPtzwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG5cclxuICAgIDx0Ym9keT5cclxuICAgICAgPHRyIHYtZm9yPVwicm93IGluIHRhYmxlRGF0YVwiIDprZXk9XCJyb3dcIj5cclxuICAgICAgICA8dGQgdi1pZj1cImxvY2F0aW9uX25vPT0nMTInXCI+PHJvdXRlci1saW5rIDp0bz1cIntuYW1lOiAnU2hpc2V0dV9zeW91c2FpcGFnZScsIHBhcmFtczoge25vOiByb3cu5pa96Kit5ZCNLCBsb2NhdGlvbl9ubzpsb2NhdGlvbl9ub319XCI+e3tyb3cu5pa96Kit5ZCNfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcbiAgICAgICAgPHRkIHYtZWxzZT48cm91dGVyLWxpbmsgOnRvPVwie25hbWU6ICdTaGlzZXR1X3N5b3VzYWlwYWdlJywgcGFyYW1zOiB7bm86IHJvdy7lkI3np7AsIGxvY2F0aW9uX25vOmxvY2F0aW9uX25vfX1cIj57e3Jvdy7lkI3np7B9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICA8dGQ+e3tyb3cu5L2P5omAfX08L3RkPlxyXG4gICAgICAgIDx0ZCB2LWlmPVwid2luZG93V2lkdGg+NDgwICYmIGxvY2F0aW9uX25vPT0nMTInXCI+e3tyb3cu6Zu76KmxfX08L3RkPlxyXG4gICAgICAgIDx0ZCB2LWlmPVwid2luZG93V2lkdGg+NDgwICYmIGxvY2F0aW9uX25vIT0nMTInXCI+e3tyb3cuVEVMfX08L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90Ym9keT5cclxuICA8L3RhYmxlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IG1haW5tZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21haW5tZW51LnZ1ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2Nzdic7XHJcbmltcG9ydCBFbmNvZGluZyBmcm9tICdlbmNvZGluZy1qYXBhbmVzZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJTaGlzZXR1X2l0aXJhbnBhZ2VcIixcclxuICBwcm9wczoge1xyXG4gICAgbG9jYXRpb25fbm86e1xyXG4gICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHsgXHJcbiAgICAgIG1haW5tZW51LFxyXG4gIH0sXHJcbiAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgIFNwb3J0OiBbXSxcclxuICAgICAgTnVyc2VyeTogW10sXHJcbiAgICAgIEtpbmQ6IFtdLFxyXG4gICAgICBKdW5pb3I6IFtdLFxyXG4gICAgICBKdW5pb3JIaWdoOiBbXSxcclxuICAgICAgU2lnaHQ6IFtdLFxyXG4gICAgICBXZWxmYXJlOiBbXSxcclxuICAgICAgUGFyazogW10sXHJcbiAgICAgIExpYnJhcnk6IFtdLFxyXG4gICAgICBHb3Zlcm5tZW50OiBbXSxcclxuICAgICAgUmFsbHk6IFtdLFxyXG4gICAgICBDaGlsZDogW10sXHJcbiAgICAgIEFFRDogW10sXHJcbiAgICAgIGpvaW5EYXRhOiBbXSxcclxuICAgICAgam9pbkRhdGEyOiBbXSxcclxuICAgICAgdGFibGVEYXRhOiBbXSxcclxuICAgICAgTmFtZTogXCJcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICBzd2l0Y2godGhpcy5sb2NhdGlvbl9ubyl7XHJcbiAgICAgIGNhc2UgJzQnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcIi9kYXRhL1Nwb3J0c19sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRTcG9ydHMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICc1JzpcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCIvZGF0YS9OdXJzZXJ5X2xvY2F0aW9uLmNzdlwiLHRydWUsJ1NKSVMnLCdVTklDT0RFJyx0aGlzLnNldE51cnNlcnkpO1xyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcIi9kYXRhL0tpbmRlcmdhcnRlbl9sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRLaW5kKTtcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCIvZGF0YS9KdW5pb3JTY2hvb2xfbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0SnVuaW9yKTtcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCIvZGF0YS9KdW5pb3JIaWdoU2Nob29sX2xvY2F0aW9uLmNzdlwiLHRydWUsJ1NKSVMnLCdVTklDT0RFJyx0aGlzLnNldEp1bmlvckhpZ2gpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICc2JzpcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCIvZGF0YS9TaWdodHNlZWluZ19sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRTaWdodCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzcnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcIi9kYXRhL1dlbGZhcmVfbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0V2VsZmFyZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzgnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcIi9kYXRhL1BhcmtfbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0UGFyayk7XHJcbiAgICAgICAgdGhpcy5HZXRDc3ZGaWxlKFwiL2RhdGEvTGlicmFyeV9sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRMaWJyYXJ5KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnOSc6XHJcbiAgICAgICAgdGhpcy5HZXRDc3ZGaWxlKFwiL2RhdGEvR292ZXJubWVudF9sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRHb3Zlcm5tZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMTAnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcIi9kYXRhL1JhbGx5X2xvY2F0aW9uLmNzdlwiLHRydWUsJ1NKSVMnLCdVTklDT0RFJyx0aGlzLnNldFJhbGx5KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMTEnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcIi9kYXRhL0NoaWxkcmVuX2xvY2F0aW9uLmNzdlwiLHRydWUsJ1NKSVMnLCdVTklDT0RFJyx0aGlzLnNldENoaWxkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMTInOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcIi9kYXRhL0FFRF9sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRBRUQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2V0U3BvcnRzOiBmdW5jdGlvbihTcG9ydCkge1xyXG4gICAgICB0aGlzLlNwb3J0ID0gU3BvcnRcclxuICAgICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLlNwb3J0XHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgfSxcclxuICAgIHNldE51cnNlcnk6IGZ1bmN0aW9uKE51cnNlcnkpIHtcclxuICAgICAgdGhpcy5OdXJzZXJ5ID0gTnVyc2VyeVxyXG4gICAgICBpZih0aGlzLktpbmQubGVuZ3RoPjAgJiYgdGhpcy5KdW5pb3IubGVuZ3RoPjAgJiYgdGhpcy5KdW5pb3JIaWdoLmxlbmd0aD4wKXtcclxuICAgICAgICB0aGlzLmpvaW5EYXRhID0gdGhpcy5OdXJzZXJ5LmNvbmNhdCh0aGlzLktpbmQsIHRoaXMuSnVuaW9yLCB0aGlzLkp1bmlvckhpZ2gpO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLmpvaW5EYXRhXHJcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd0b1N0b3JlJywgdGhpcy50YWJsZURhdGEpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRLaW5kOiBmdW5jdGlvbihLaW5kKSB7XHJcbiAgICAgIHRoaXMuS2luZCA9IEtpbmRcclxuICAgICAgaWYodGhpcy5OdXJzZXJ5Lmxlbmd0aD4wICYmIHRoaXMuSnVuaW9yLmxlbmd0aD4wICYmIHRoaXMuSnVuaW9ySGlnaC5sZW5ndGg+MCl7XHJcbiAgICAgICAgdGhpcy5qb2luRGF0YSA9IHRoaXMuTnVyc2VyeS5jb25jYXQodGhpcy5LaW5kLCB0aGlzLkp1bmlvciwgdGhpcy5KdW5pb3JIaWdoKTtcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YSA9dGhpcy5qb2luRGF0YVxyXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0SnVuaW9yOiBmdW5jdGlvbihKdW5pb3IpIHtcclxuICAgICAgdGhpcy5KdW5pb3IgPSBKdW5pb3JcclxuICAgICAgaWYodGhpcy5OdXJzZXJ5Lmxlbmd0aD4wICYmIHRoaXMuS2luZC5sZW5ndGg+MCAmJiB0aGlzLkp1bmlvckhpZ2gubGVuZ3RoPjApe1xyXG4gICAgICAgIHRoaXMuam9pbkRhdGEgPSB0aGlzLk51cnNlcnkuY29uY2F0KHRoaXMuS2luZCwgdGhpcy5KdW5pb3IsIHRoaXMuSnVuaW9ySGlnaCk7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGEgPXRoaXMuam9pbkRhdGFcclxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldEp1bmlvckhpZ2g6IGZ1bmN0aW9uKEp1bmlvckhpZ2gpIHtcclxuICAgICAgdGhpcy5KdW5pb3JIaWdoID0gSnVuaW9ySGlnaFxyXG4gICAgICBpZih0aGlzLk51cnNlcnkubGVuZ3RoPjAgJiYgdGhpcy5LaW5kLmxlbmd0aD4wICYmIHRoaXMuSnVuaW9yLmxlbmd0aD4wKXtcclxuICAgICAgICB0aGlzLmpvaW5EYXRhID0gdGhpcy5OdXJzZXJ5LmNvbmNhdCh0aGlzLktpbmQsIHRoaXMuSnVuaW9yLCB0aGlzLkp1bmlvckhpZ2gpO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLmpvaW5EYXRhXHJcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd0b1N0b3JlJywgdGhpcy50YWJsZURhdGEpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRTaWdodDogZnVuY3Rpb24oU2lnaHQpIHtcclxuICAgICAgdGhpcy5TaWdodCA9IFNpZ2h0XHJcbiAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLlNpZ2h0XHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgfSxcclxuICAgIHNldFdlbGZhcmU6IGZ1bmN0aW9uKFdlbGZhcmUpIHtcclxuICAgICAgdGhpcy5XZWxmYXJlID0gV2VsZmFyZVxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9dGhpcy5XZWxmYXJlXHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgfSxcclxuICAgIHNldFBhcms6IGZ1bmN0aW9uKFBhcmspIHtcclxuICAgICAgdGhpcy5QYXJrID0gUGFya1xyXG4gICAgICBpZih0aGlzLkxpYnJhcnkubGVuZ3RoPjApe1xyXG4gICAgICAgIHRoaXMuam9pbkRhdGEyID0gdGhpcy5MaWJyYXJ5LmNvbmNhdCh0aGlzLlBhcmspO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLmpvaW5EYXRhMlxyXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0TGlicmFyeTogZnVuY3Rpb24oTGlicmFyeSkge1xyXG4gICAgICB0aGlzLkxpYnJhcnkgPSBMaWJyYXJ5XHJcbiAgICAgIGlmKHRoaXMuUGFyay5sZW5ndGg+MCl7XHJcbiAgICAgICAgdGhpcy5qb2luRGF0YTIgPSB0aGlzLkxpYnJhcnkuY29uY2F0KHRoaXMuUGFyayk7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGEgPXRoaXMuam9pbkRhdGEyXHJcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd0b1N0b3JlJywgdGhpcy50YWJsZURhdGEpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRHb3Zlcm5tZW50OiBmdW5jdGlvbihHb3Zlcm5tZW50KSB7XHJcbiAgICAgIHRoaXMuR292ZXJubWVudCA9IEdvdmVybm1lbnRcclxuICAgICAgdGhpcy50YWJsZURhdGEgPXRoaXMuR292ZXJubWVudFxyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgIH0sXHJcbiAgICBzZXRSYWxseTogZnVuY3Rpb24oUmFsbHkpIHtcclxuICAgICAgdGhpcy5SYWxseSA9IFJhbGx5XHJcbiAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLlJhbGx5XHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgfSxcclxuICAgIHNldENoaWxkOiBmdW5jdGlvbihDaGlsZCkge1xyXG4gICAgICB0aGlzLkNoaWxkID0gQ2hpbGRcclxuICAgICAgdGhpcy50YWJsZURhdGEgPXRoaXMuQ2hpbGRcclxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd0b1N0b3JlJywgdGhpcy50YWJsZURhdGEpXHJcbiAgICB9LFxyXG4gICAgc2V0QUVEOiBmdW5jdGlvbihBRUQpIHtcclxuICAgICAgdGhpcy5BRUQgPSBBRURcclxuICAgICAgdGhpcy50YWJsZURhdGEgPXRoaXMuQUVEXHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgfSxcclxuICAgIEdldENzdkZpbGU6IGZ1bmN0aW9uKHVybCxjb2wsZnJvbSx0byxzZXR0ZXIpIHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZ2V0KHVybCx7cmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgIGxldCBjc3YgPSBFbmNvZGluZy5jb252ZXJ0KGJ1ZmZlciwge1xyXG4gICAgICAgICAgICAgIGZyb206IGZyb20sXHJcbiAgICAgICAgICAgICAgdG86IHRvLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNzdiA9IGNzdi5yZXBsYWNlKC9eXFx1ZmVmZi8sJycpXHJcbiAgICAgICAgICAgIHBhcnNlKGNzdiwge1xyXG4gICAgICAgICAgICAgIGNvbHVtbnM6IGNvbCxcclxuICAgICAgICAgICAgICBxdW90ZTogJ1wiJyxcclxuICAgICAgICAgICAgICBsdHJpbTogdHJ1ZSxcclxuICAgICAgICAgICAgICBydHJpbTogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWxpbWl0ZXI6ICcsJyxcclxuICAgICAgICAgICAgICBjYXN0OiB0cnVlXHJcbiAgICAgICAgICAgIH0sIChlcnJvciwgb3V0cHV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0dGVyKE9iamVjdC5mcmVlemUob3V0cHV0KSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbmgxe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogIzZlYjBmOTtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIC13ZWJraXQtYm94LXJlZmxlY3Q6IGJlbG93IC0xMHB4IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCxyZ2JhKDAsMCwwLDApLHJnYmEoMCwwLDAsMCkgMTAlLHJnYmEoMCwgMCwgMCwgMC42KSk7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5wYWdlbGlua3tcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4udGFibGUyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyOSwgMjMsIDIzKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpe1xyXG4gIC50YWJsZTIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbiAgaDF7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgfVxyXG4gIC5wYWdlbGlua3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuPC9zdHlsZT4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gdG9MZW5ndGgoRS5sZW5ndGgpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1NoaXNldHVfaXRpcmFucGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWRmYjZkNzImc2NvcGVkPXRydWUmYmluZGluZ3M9e1xcXCJsb2NhdGlvbl9ub1xcXCI6XFxcInByb3BzXFxcIixcXFwic2V0U3BvcnRzXFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcInNldE51cnNlcnlcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwic2V0S2luZFxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJzZXRKdW5pb3JcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwic2V0SnVuaW9ySGlnaFxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJzZXRTaWdodFxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJzZXRXZWxmYXJlXFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcInNldFBhcmtcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwic2V0TGlicmFyeVxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJzZXRHb3Zlcm5tZW50XFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcInNldFJhbGx5XFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcInNldENoaWxkXFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcInNldEFFRFxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJHZXRDc3ZGaWxlXFxcIjpcXFwib3B0aW9uc1xcXCJ9XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hpc2V0dV9pdGlyYW5wYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWRmYjZkNzImc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuc2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTVkZmI2ZDcyXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L2luZGV4LmpzPz9yZWYtLTAtMSEuL1NoaXNldHVfaXRpcmFucGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZGZiNmQ3MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIl0sInNvdXJjZVJvb3QiOiIifQ==