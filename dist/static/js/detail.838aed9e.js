(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["detail"],{"157d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"newscontent"}},[t._m(0),s("div",{staticClass:"new-list"},[t._l(t.news,(function(e){return s("router-link",{key:e.id,attrs:{to:{name:"newsdetail",params:{id:e.id}}}},[s("div",{staticClass:"news-item"},[s("div",{staticClass:"news-img"},[s("img",{staticClass:"news-img-left",attrs:{src:e.img,alt:""}})]),s("div",{staticClass:"news-information"},[s("div",{staticClass:"news-title"},[t._v(t._s(e.title))]),s("div",{staticClass:"news-time"},[t._v(t._s(t._f("dateformat")(e.creat_at,"YYYY-MM-DD")))]),s("div",{staticClass:"news-describe"},[t._v(t._s(e.info))])])])])})),s("div",{staticClass:"pagyer"},[s("el-pagination",{attrs:{layout:"prev, pager, next","current-page":t.currentpage,"hide-on-single-page":!0,"page-size":6,total:t.totalCount},on:{"current-change":t.handleCurrentChange,click:t.toTop}})],1)],2),s("Foot")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topban"},[a("img",{staticClass:"ban",attrs:{src:s("dd1f"),alt:""}}),a("div",{staticClass:"banner-pop"},[a("div",{staticClass:"company-name"},[t._v("新闻中心")])])])}],n={data:()=>({news:[],currentpage:1,totalCount:0}),methods:{toTop(t){if(console.log(t),document.documentElement.scrollTop-=t,document.documentElement.scrollTop>0)var e=setTimeout(()=>this.toTop(t),16);else clearTimeout(e)},handleCurrentChange(t){this.currentpage=t,this.toTop(),this.$http.get(this.url+"/news/",{params:{page:this.currentpage}}).then(t=>{if(200===t.status){this.totalCount=t.data.data.totalCount,this.news=t.data.data.lists;var e=[];for(let t=0;t<=this.news.length;t++)e.push(this.news[t].fields),this.newlist=e}}).catch(()=>{})},newsdetail:function(t){localStorage.setItem("item",JSON.stringify(t)),this.$router.push("/newsdetail")},getNews:function(){this.$http.get(this.url+"/news/",{params:{page:this.currentpage}}).then(t=>{console.log(t),200===t.status&&(this.totalCount=t.data.data.totalCount,this.news=t.data.data.lists)}).catch(()=>{})}},mounted(){this.getNews()}},c=n,r=(s("fbf2"),s("b039"),s("2877")),o=Object(r["a"])(c,a,i,!1,null,"d927ca28",null);e["default"]=o.exports},"1f3a":function(t,e,s){"use strict";var a=s("f9f4"),i=s.n(a);i.a},2246:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"about-history",attrs:{id:"fzlc"}},[s("div",{staticClass:"our-service"},[t._v("发展历程")]),s("div",{staticClass:"our-line"}),s("div",{staticClass:"about-history-list"},[s("ul",{staticClass:"slides clearfix list "},[s("div",{staticClass:"swiper-father"},[s("div",{staticClass:"swiper-container swiper-container1"},[s("div",{staticClass:"swiper-wrapper"},[t._l(t.develop,(function(e){return s("div",{key:e,staticClass:"swiper-slide"},[s("li",{staticClass:"firstBox",staticStyle:{display:"block"}},[s("div",{staticClass:"items"},[t._v(t._s(e.title))]),s("div",{staticClass:"circle"}),s("div",{staticClass:"desc"},[t._v(t._s(e.content))])])])})),s("div",{staticClass:"swiper-slide"})],2)]),s("div",{staticClass:"swiper-button-next swiper-button-black",attrs:{id:"swiper1"}}),s("div",{staticClass:"swiper-button-prev swiper-button-black",attrs:{id:"swiper2"}})])])])]),s("div",{staticClass:"mainDevelop"},[s("div",{staticClass:"devTit"},[t._v("发展历程")]),t._l(t.develop,(function(e){return s("div",{key:e,staticClass:"developList block"},[s("el-timeline",{staticStyle:{"line-height":"20px"},attrs:{reverse:t.reverse,size:"large"}},[s("el-timeline-item",{attrs:{timestamp:e.title,placement:"top"}},[s("el-card",{staticStyle:{padding:"10px"}},[s("h4",[t._v(t._s(e.content))])])],1)],1)],1)}))],2),s("Foot")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"company-banner"},[a("img",{staticClass:"ban",attrs:{src:s("369d"),alt:""}}),a("div",{staticClass:"banner-pop"},[a("div",{staticClass:"company-name"},[t._v("星际里程碑")])])])}],n=s("b619"),c=s("7212"),r={name:"Develop",data:()=>({options:{autoplay:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},companyinfo:[],develop:[],reverse:!0}),components:{swiper:c["swiper"],swiperSlide:c["swiperSlide"]},beforeCreate:{},beforeDestroy:{},methods:{fetchCompanyinfo:function(){this.$http.get(this.url+"/companyinfo/",{}).then(t=>{200===t.data.code&&(this.companyinfo=t.data.data)}).catch(()=>{})},fetchDevelop:function(){var t=this;this.$http.get(this.url+"/about/",{params:{id:this.id}}).then(e=>{200===e.data.code&&(t.develop=e.data.data.filter(t=>"grow"===t.category),t.$nextTick((function(){new n["a"](".swiper-container1",{slidesPerView:4,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})})))}).catch(()=>{})}},mounted(){this.fetchCompanyinfo(),this.fetchDevelop()}},o=r,l=(s("1f3a"),s("b09d"),s("e908"),s("2877")),d=Object(l["a"])(o,a,i,!1,null,"d34a60a6",null);e["default"]=d.exports},"369d":function(t,e,s){t.exports=s.p+"static/img/develop-banner.60c0ee61.png"},4041:function(t,e,s){},6037:function(t,e,s){},b039:function(t,e,s){"use strict";var a=s("6037"),i=s.n(a);i.a},b09d:function(t,e,s){"use strict";var a=s("4041"),i=s.n(a);i.a},b99d:function(t,e,s){"use strict";var a=s("ecc8"),i=s.n(a);i.a},c803:function(t,e,s){},dd1f:function(t,e,s){t.exports=s.p+"static/img/news-banner.20956339.png"},e908:function(t,e,s){"use strict";var a=s("e9c7"),i=s.n(a);i.a},e9c7:function(t,e,s){},ecc8:function(t,e,s){},f4eb:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"newsdetails"}},[s("div",{staticClass:"nav"}),s("div",{staticClass:"news-title"},[t._v(t._s(t.news.title))]),s("div",{staticClass:"news-info"},[s("span",[t._v(t._s(t.news.author)+" "+t._s(t._f("dateformat")(t.news.create_at,"YYYY-MM-DD")))])]),s("div",{staticClass:"news-main",domProps:{innerHTML:t._s(t.news.content)}},[t._v(t._s(t.news.content))]),s("Foot")],1)},i=[],n={data:()=>({news:[]}),methods:{fetchNews:function(){var t=1*this.$route.params.id;this.$http.get(this.url+"/news/"+t).then(t=>{200===t.data.code&&(this.news=t.data.data)})}},mounted(){this.fetchNews()}},c=n,r=(s("b99d"),s("2877")),o=Object(r["a"])(c,a,i,!1,null,null,null);e["default"]=o.exports},f9f4:function(t,e,s){},fbf2:function(t,e,s){"use strict";var a=s("c803"),i=s.n(a);i.a}}]);