webpackJsonp([1],{K2IU:function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),o=e("d7EF"),n=e.n(o),r=e("gRE1"),l=e.n(r),c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"c2c-item"},[e("div",{staticClass:"srch-title"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),e("div",{staticClass:"srch-description"},[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),e("div",{staticClass:"srch-url"},[e("a",{attrs:{href:t.url}},[t._v(t._s(t.url))])])])},staticRenderFns:[]},a={render:function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"page",on:{click:function(i){t.$emit("navigate-of")}}},[t._v(t._s(t.page))])},staticRenderFns:[]},g={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.Max?e("div",{staticClass:"c2c-dot",on:{click:function(i){t.$emit("click-dots",t.value)}}},[e("div",{staticClass:"dot-inner"},[t._v(t._s(t.icon))])]):t._e()},staticRenderFns:[]};var p={name:"Pagination",props:["leftIcon","rightIcon","results","maxAmountOfPages","perPage"],data:function(){return{text:"",shownotfound:!1,size:0,pages:0,visiblePages:0,visible:{},rightMax:!1,leftMax:!1,first:1,dirty:!0,oldUrl:""}},components:{Results:e("VU/8")({name:"results",props:["title","description","url"]},c,!1,null,null,null).exports,PageComponent:e("VU/8")({name:"page-component",props:["page","maxAmount"]},a,!1,null,null,null).exports,DotComponent:e("VU/8")({name:"dot-component",props:["Max","value","icon"]},g,!1,function(t){e("T5bX")},null,null).exports},created:function(){this.size=this.results.length,this.setPages(this.results.length)},methods:{setPages:function(t){if(t<=this.perPage)return this.pages=0,void(this.visible=this.results);var i=Math.ceil(t/this.perPage);this.pages=i,this.navigate(1)},navigate:function(t){var i=t-1,e=this.perPage*i;this.visible=l()(this.results).splice(e,this.perPage),setTimeout(function(){var i,e=document.getElementsByClassName("page");for(i=0;i<e.length;i++){e[i].classList.remove("active");var s="page-"+t;e[i].classList.contains(s)&&e[i].classList.add("active")}}),this.dirty&&this.checkDots()},checkDots:function(){this.pages<=this.maxAmountOfPages?this.visiblePages=this.pages:(this.visiblePages=this.maxAmountOfPages,this.rightMax=!0,this.leftMax=!1)},clickDots:function(t){this.dirty=!1,this.leftMax=!0,this.rightMax=!0;var i=void 0,e=i="right"===t?this.rightDir():this.leftDir(),s=n()(e,2);this.first=s[0],this.visiblePages=s[1],this.navigate(i[0])},rightDir:function(){var t,i=void 0;return i=this.visiblePages+this.maxAmountOfPages,t=this.visiblePages,i>=this.pages&&(i=this.pages,this.rightMax=!1),[t,i]},leftDir:function(){var t,i=void 0;return 1===(i=(t=this.first)-this.maxAmountOfPages)&&(this.leftMax=!1),i<=0&&(i=1,this.leftMax=!1),[i,t]},range:function(t,i){for(var e=[],s=0,o=t;o<=i;o++)e[s]=o,s++;return e}}},u={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[t._l(t.visible,function(t){return e("results",{key:t.id,staticClass:"srch-results",attrs:{title:t.title,description:t.description,url:t.url,href:t.url}})}),t._v(" "),e("div",{staticClass:"c2c-pagination"},[e("dot-component",{attrs:{Max:t.leftMax,value:"left",icon:t.leftIcon},on:{"click-dots":t.clickDots}}),t._v(" "),t._l(t.range(t.first,t.visiblePages),function(i,s){return e("page-component",{key:i.id,class:["page-"+i],attrs:{page:i},on:{"navigate-of":function(e){t.navigate(i)}}})}),t._v(" "),e("dot-component",{attrs:{Max:t.rightMax,value:"right",icon:t.rightIcon},on:{"click-dots":t.clickDots}})],2)],2)},staticRenderFns:[]};var w={name:"App",components:{Pagination:e("VU/8")(p,u,!1,function(t){e("aKOL")},"data-v-337d540e",null).exports},data:function(){return{leftIcon:"<",rightIcon:">",results:[{title:"Title1",description:"Description",url:"www.google.com"},{title:"Title2",description:"Description",url:"www.google.com"},{title:"Title3",description:"Description",url:"www.google.com"},{title:"Title4",description:"Description",url:"www.google.com"},{title:"Title5",description:"Description",url:"www.google.com"},{title:"Title6",description:"Description",url:"www.google.com"},{title:"Title7",description:"Description",url:"www.google.com"},{title:"Title8",description:"Description",url:"www.google.com"},{title:"Title9",description:"Description",url:"www.google.com"},{title:"Title10",description:"Description",url:"www.google.com"},{title:"title11",description:"Description",url:"www.google.com"},{title:"Title12",description:"Description",url:"www.google.com"},{title:"Title13",description:"Description",url:"www.google.com"},{title:"Title14",description:"Description",url:"www.google.com"},{title:"Title15",description:"Description",url:"www.google.com"},{title:"Title16",description:"Description",url:"www.google.com"},{title:"Title17",description:"Description",url:"www.google.com"},{title:"Title18",description:"Description",url:"www.google.com"},{title:"Title19",description:"Description",url:"www.google.com"},{title:"Title20",description:"Description",url:"www.google.com"},{title:"Title21",description:"Description",url:"www.google.com"},{title:"Title22",description:"Description",url:"www.google.com"},{title:"Title23",description:"Description",url:"www.google.com"},{title:"Title24",description:"Description",url:"www.google.com"},{title:"Title25",description:"Description",url:"www.google.com"},{title:"Title26",description:"Description",url:"www.google.com"},{title:"Title27",description:"Description",url:"www.google.com"},{title:"Title28",description:"Description",url:"www.google.com"},{title:"Title29",description:"Description",url:"www.google.com"},{title:"Title30",description:"Description",url:"www.google.com"},{title:"Title31",description:"Description",url:"www.google.com"},{title:"Title32",description:"Description",url:"www.google.com"}],maxAmountOfPages:5,perPage:4}}},d={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("Pagination",{attrs:{rightIcon:this.rightIcon,leftIcon:this.leftIcon,results:this.results,maxAmountOfPages:this.maxAmountOfPages,perPage:this.perPage}})],1)},staticRenderFns:[]};var h=e("VU/8")(w,d,!1,function(t){e("K2IU")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:h},template:"<App/>"})},T5bX:function(t,i){},aKOL:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.2259c92be162202f6c76.js.map