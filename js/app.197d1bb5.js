(function(t){function s(s){for(var i,l,_=s[0],c=s[1],r=s[2],m=0,v=[];m<_.length;m++)l=_[m],e[l]&&v.push(e[l][0]),e[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);o&&o(s);while(v.length)v.shift()();return n.push.apply(n,r||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],i=!0,_=1;_<a.length;_++){var c=a[_];0!==e[c]&&(i=!1)}i&&(n.splice(s--,1),t=l(l.s=a[0]))}return t}var i={},e={app:0},n=[];function l(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,s,a){l.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,s){if(1&s&&(t=l(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)l.d(a,i,function(s){return t[s]}.bind(null,i));return a},l.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(s,"a",s),s},l.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},l.p="/";var _=window["webpackJsonp"]=window["webpackJsonp"]||[],c=_.push.bind(_);_.push=s,_=_.slice();for(var r=0;r<_.length;r++)s(_[r]);var o=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"034f":function(t,s,a){"use strict";var i=a("64a9"),e=a.n(i);e.a},"56d7":function(t,s,a){"use strict";a.r(s);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("Pool",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},n=[],l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main"},[a("div",{staticClass:"main_top_back"},[a("div",{staticClass:"navbar navbar--extended",attrs:{id:"navbar"}},[a("div",{staticClass:"container_max"},[a("div",{},[a("div",{staticClass:"navbar__inner"},[a("a",{staticClass:"navbar__logo",attrs:{href:"/"}},[t._v("微信群合影")]),a("nav",{staticClass:"navbar__menu"},[a("ul",{staticClass:"navbar_items"},[a("li",{staticClass:"navbar_item",on:{click:function(s){t.navScroll(1)}}},[t._v("安装")]),a("li",{staticClass:"navbar_item",on:{click:function(s){t.navScroll(4)}}},[t._v("帮助")]),a("li",{staticClass:"navbar_item",on:{click:function(s){t.navScroll(7)}}},[t._v("会员")]),a("li",{staticClass:"navbar_item",on:{click:function(s){t.navScroll(8)}}},[t._v("视频")]),a("li",{staticClass:"navbar_item",on:{click:function(s){t.navScroll(6)}}},[t._v("常见问题")]),a("li",{staticClass:"navbar_item",on:{click:function(s){t.navScroll(5)}}},[t._v("联系")])])])])])])]),a("div",{staticClass:"hero",attrs:{id:"hero"}},[a("div",{staticClass:"hero__overlay hero__overlay--gradient"}),a("div",{staticClass:"hero__inner"},[a("div",{staticClass:"container"},[a("div",{staticClass:"hero__content"},[a("div",{staticClass:"hero__content__inner",attrs:{id:"navConverter"}},[a("h1",{staticClass:"hero__title"},[t._v("微信群合影效率工具")]),a("p",{staticClass:"hero__text"},[t._v("基于微信网页版的Chrome插件，一键生成微信全家福")]),a("div",{staticClass:"down_items"},[a("a",{staticClass:"install-btn",attrs:{href:t.downUrl},on:{click:function(s){t.navScroll(4)}}},[t._v("直接下载安装")]),a("a",{staticClass:"install-btn",attrs:{href:t.chromeUrl,target:"_blank"}},[t._v("Chrome应用店安装")])]),a("div",{staticClass:"down_item_version"},[t._v("最新版本号2.4.2 更新于2020-4-9")]),a("div",{staticClass:"down_item_version"},[t._v("支持微信网页版不能登录账号")])])])])])])]),a("div",{staticClass:"main_use",attrs:{id:"main_use"}},[a("div",{staticClass:"container_max"},[a("div",{staticClass:"main_use_carousel"},[a("el-carousel",{attrs:{"indicator-position":"outside"}},t._l(t.useShowArray,function(t){return a("el-carousel-item",{key:t},[a("img",{staticClass:"main_use_img",attrs:{src:t}})])}))],1)])]),a("div",{staticClass:"main_show",attrs:{id:"main_show"}},[a("div",{staticClass:"container_max main_show_container"},t._l(t.showArray,function(t){return a("div",{key:t,staticClass:"main_show_item"},[a("img",{staticClass:"main_show_img",attrs:{src:t}})])}))]),a("div",{staticClass:"main_install",attrs:{id:"main_install"}},[a("div",{staticClass:"container_max"},[a("a",{staticClass:"main_install_btn",attrs:{href:t.downUrl}},[t._v("直接下载安装")]),t._m(0),t._m(1),t._m(2),t._m(3)])]),a("div",{staticClass:"main_vip",attrs:{id:"main_vip"}},[a("div",{staticClass:"container_max container_max_vip"},[a("div",{staticClass:"main_ask_top"},[t._v("会员")]),a("div",{staticClass:"main_vip_desc"},[t._v("在插件内完成注册、付款后即可开通VIP会员服务")]),a("div",{staticClass:"main_vip_table"},[a("el-row",[a("el-col",{staticClass:"main_vip_head_item",attrs:{span:8}},[t._v("功能")]),a("el-col",{staticClass:"main_vip_head_item main_vip_head_item_golden",attrs:{span:8}},[t._v("会员版")]),a("el-col",{staticClass:"main_vip_head_item main_vip_head_item_gray",attrs:{span:8}},[t._v("免费版")])],1),a("el-row",[a("el-col",{staticClass:"main_vip_list_item",attrs:{span:8}},[t._v("去除二维码水印")]),a("el-col",{staticClass:"main_vip_list_item",attrs:{span:8}},[a("i",{staticClass:"el-icon-success main_vip_list_icon_vip"})]),a("el-col",{staticClass:"main_vip_list_item",attrs:{span:8}},[a("i",{staticClass:"el-icon-error main_vip_list_icon_free"})])],1),a("el-row",[a("el-col",{staticClass:"main_vip_list_item main_vip_list_item_gray",attrs:{span:8}},[t._v("自定义二维码")]),a("el-col",{staticClass:"main_vip_list_item main_vip_list_item_gray",attrs:{span:8}},[a("i",{staticClass:"el-icon-success main_vip_list_icon_vip"})]),a("el-col",{staticClass:"main_vip_list_item main_vip_list_item_gray",attrs:{span:8}},[a("i",{staticClass:"el-icon-error main_vip_list_icon_free"})])],1),a("el-row",[a("el-col",{staticClass:"main_vip_list_item",attrs:{span:8}},[t._v("自定义背景图片")]),a("el-col",{staticClass:"main_vip_list_item",attrs:{span:8}},[a("i",{staticClass:"el-icon-success main_vip_list_icon_vip"})]),a("el-col",{staticClass:"main_vip_list_item",attrs:{span:8}},[a("i",{staticClass:"el-icon-error main_vip_list_icon_free"})])],1),a("el-row",[a("el-col",{staticClass:"main_vip_list_item main_vip_list_item_gray",attrs:{span:8}},[t._v("透明背景支持")]),a("el-col",{staticClass:"main_vip_list_item main_vip_list_item_gray",attrs:{span:8}},[a("i",{staticClass:"el-icon-success main_vip_list_icon_vip"})]),a("el-col",{staticClass:"main_vip_list_item main_vip_list_item_gray",attrs:{span:8}},[a("i",{staticClass:"el-icon-error main_vip_list_icon_free"})])],1),a("el-row",[a("el-col",{staticClass:"main_vip_list_item",attrs:{span:8}},[t._v("VIP专属背景图")]),a("el-col",{staticClass:"main_vip_list_item",attrs:{span:8}},[a("i",{staticClass:"el-icon-success main_vip_list_icon_vip"})]),a("el-col",{staticClass:"main_vip_list_item",attrs:{span:8}},[a("i",{staticClass:"el-icon-error main_vip_list_icon_free"})])],1),a("el-row",[a("el-col",{staticClass:"main_vip_list_item main_vip_list_item_gray",attrs:{span:8}},[t._v("中心头像放大")]),a("el-col",{staticClass:"main_vip_list_item main_vip_list_item_gray",attrs:{span:8}},[a("i",{staticClass:"el-icon-success main_vip_list_icon_vip"})]),a("el-col",{staticClass:"main_vip_list_item main_vip_list_item_gray",attrs:{span:8}},[a("i",{staticClass:"el-icon-error main_vip_list_icon_free"})])],1),a("el-row",[a("el-col",{staticClass:"main_vip_list_item",attrs:{span:8}},[t._v("头像排序、删除")]),a("el-col",{staticClass:"main_vip_list_item",attrs:{span:8}},[a("i",{staticClass:"el-icon-success main_vip_list_icon_vip"})]),a("el-col",{staticClass:"main_vip_list_item",attrs:{span:8}},[a("i",{staticClass:"el-icon-error main_vip_list_icon_free"})])],1),a("el-row",{staticClass:"main_vip_row"},[a("el-col",{staticClass:"main_vip_list_item main_vip_list_item_gray",attrs:{span:8}},[t._v("不断更新的VIP高阶功能")]),a("el-col",{staticClass:"main_vip_list_item main_vip_list_item_gray",attrs:{span:8}},[a("i",{staticClass:"el-icon-success main_vip_list_icon_vip"})]),a("el-col",{staticClass:"main_vip_list_item main_vip_list_item_gray",attrs:{span:8}},[a("i",{staticClass:"el-icon-error main_vip_list_icon_free"})])],1)],1)])]),t._m(4),t._m(5),a("div",{staticClass:"main_contact",attrs:{id:"main_contact"}},[a("div",{staticClass:"container_max"},[a("div",{staticClass:"main_contact_title"},[t._v("\n                头像可以很有趣\n            ")]),a("div",{staticClass:"down_items"},[a("a",{staticClass:"install-btn",attrs:{href:t.downUrl},on:{click:function(s){t.navScroll(4)}}},[t._v("直接下载安装")]),a("a",{staticClass:"install-btn",attrs:{href:t.chromeUrl,target:"_blank"}},[t._v("Chrome应用店安装")])])])]),t._m(6)])},_=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._v("如果可以正常访问谷歌，可以 "),a("a",{staticClass:"active",attrs:{href:""}},[t._v("前往应用商店")]),t._v(" 下载")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main_install_items"},[a("div",{staticClass:"main_install_item"},[a("img",{attrs:{src:"/images/install/install-chrome-step-1.png"}}),a("div",{staticClass:"main_install_item_title"},[t._v("1.下载安装文件")]),a("div",{staticClass:"main_install_item_desc"},[t._v("\n                        下载插件，并在浏览器系统提示时选择【保留】，在下载文件夹中找到下载好的文件，后缀是.crx\n                        "),a("br"),t._v("\n                        说明：若提示“无法从该网站添加应用”请点击确定。\n                    ")])]),a("div",{staticClass:"main_install_item"},[a("img",{attrs:{src:"/images/install/install-chrome-step-2.jpg"}}),a("div",{staticClass:"main_install_item_title"},[t._v("2.打开扩展程序页面")]),a("div",{staticClass:"main_install_item_desc"},[t._v("\n                        复制 "),a("span",{staticClass:"active"},[t._v("chrome://extensions")]),t._v(" 并粘贴到地址栏，按回车键\n                    ")])]),a("div",{staticClass:"main_install_item"},[a("img",{attrs:{src:"/images/install/install-chrome-step-3.png"}}),a("div",{staticClass:"main_install_item_title"},[t._v("3.安装插件")]),a("div",{staticClass:"main_install_item_desc"},[t._v("\n                        在扩展安装页面打开右上角的"),a("span",{staticClass:"active"},[t._v("【开发者模式】")]),t._v("按钮，然后刷新页面，将下载好的.crx文件拖入扩展安装页面内。\n                    ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main_install_wx"},[a("a",{staticClass:"main_install_btn",attrs:{href:"https://wx.qq.com/",target:"_blank"}},[t._v("打开微信网页版")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main_install_items"},[a("div",{staticClass:"main_install_item"},[a("img",{attrs:{src:"/images/guide/g1_840@2x.jpg"}}),a("div",{staticClass:"main_install_item_title"},[t._v("1. 选择一个群")]),a("div",{staticClass:"main_install_item_desc"},[t._v("\n                        插件安装成功之后。打开"),a("a",{staticClass:"active",attrs:{href:"https://wx.qq.com/",target:"_blank"}},[t._v("微信网页版")]),t._v("并扫描登录，选中一个群，并展开群头像列表，"),a("span",{staticClass:"active"},[t._v("点击聊天框顶部的向下箭头处")]),t._v("，如图。\n\n                    ")])]),a("div",{staticClass:"main_install_item"},[a("img",{attrs:{src:"/images/guide/g2_840@2x.jpg"}}),a("div",{staticClass:"main_install_item_title"},[t._v("2. 打开插件")]),a("div",{staticClass:"main_install_item_desc"},[a("span",{staticClass:"active"},[t._v("注意：当小图标为绿色的时候才能正常工作，如果还是灰色状态，请刷新下微信网页版")]),a("br"),t._v("\n                        点击浏览器右上方的插件小图标，打开插件；"),a("br"),t._v("点击选择自己喜欢的主题图片\n                    ")])]),a("div",{staticClass:"main_install_item"},[a("img",{attrs:{src:"/images/guide/g3_840@2x.jpg"}}),a("div",{staticClass:"main_install_item_title"},[t._v("3. 群合影生成")]),a("div",{staticClass:"main_install_item_desc"},[t._v("\n                        进入群合影生成页面，群头像会自动获取，请耐心等待。"),a("br"),t._v("\n                        之后对当前内容进行编辑：组合方式、大小、位置、更改背景图。"),a("br"),t._v("\n                        点击"),a("span",{staticClass:"active"},[t._v("【下载】")]),t._v("按钮即可下载到本地。\n                        "),a("br"),t._v("\n                        说明：如果出现卡顿现象，请刷新浏览器页面，再次操作\n                    ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main_video",attrs:{id:"main_video"}},[a("div",{staticClass:"container_max"},[a("div",{staticClass:"main_video_top"},[t._v("插件安装说明视频")]),a("iframe",{staticStyle:{width:"100%","max-width":"720px",height:"500px"},attrs:{frameborder:"0",src:"https://v.qq.com/txp/iframe/player.html?vid=b0858fwesas",allowFullScreen:"true"}}),a("div",{staticClass:"main_video_desc"},[t._v("前半部分视频介绍Chrome浏览器下的安装，后半部分介绍360极速浏览器下的安装")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main_ask",attrs:{id:"main_ask"}},[a("div",{staticClass:"container_max"},[a("div",{staticClass:"main_ask_top"},[t._v("常见问题")]),a("div",{staticClass:"main_ask_item"},[a("div",{staticClass:"main_ask_title"},[t._v("1. 支持的浏览器？")]),a("div",{staticClass:"main_ask_con"},[t._v("支持Chrome浏览器和"),a("a",{staticClass:"active",attrs:{href:"https://browser.360.cn/ee/",target:"_blank"}},[t._v("360极速浏览器")])])]),a("div",{staticClass:"main_ask_item"},[a("div",{staticClass:"main_ask_title"},[t._v("2. 安装不上？")]),a("div",{staticClass:"main_ask_con"},[t._v("请确认以下操作: 如果是直接下载安装方式，要打开"),a("span",{staticClass:"active"},[t._v("开发者模式")]),t._v("，把.crx后缀的文件拖进 "),a("span",{staticClass:"active"},[t._v("chrome://extensions")]),t._v(" 页面")])]),a("div",{staticClass:"main_ask_item"},[a("div",{staticClass:"main_ask_title"},[t._v("3. 右上角小图标是灰色的？")]),a("div",{staticClass:"main_ask_con"},[t._v("刷新下微信网页版的页面，确认下地址栏显示的地址是这3个当中的一种："),a("span",{staticClass:"active"},[t._v("wx.qq.com、wx2.qq.com、wx8.qq.com、web.wechat.com，")]),t._v("如果不是，请加我微信(当前页面底部有我的微信二维码)向我反馈")])]),a("div",{staticClass:"main_ask_item"},[a("div",{staticClass:"main_ask_title"},[t._v("4. 头像不能生成？")]),a("div",{staticClass:"main_ask_con"},[t._v("请按上面的帮助部分关于操作使用的说明，看是否选中了一个群，聊天框上面的"),a("span",{staticClass:"active"},[t._v("向下的小箭头")]),t._v("是否展开显示出群成员的头像")])]),a("div",{staticClass:"main_ask_item"},[a("div",{staticClass:"main_ask_title"},[t._v("4. 有新版本内容发布怎么知道？")]),a("div",{staticClass:"main_ask_con"},[t._v("请关注我的微信公众号"),a("span",{staticClass:"active"},[t._v('"凯凯而谈"')]),t._v("(当前页面底部)，有新的功能更新会在公众号通知。当前官网最上面也会显示最新的版本信息。")])]),a("div",{staticClass:"main_ask_item"},[a("div",{staticClass:"main_ask_title"},[t._v("5. 微信网页版不能登录问题")]),a("div",{staticClass:"main_ask_con"},[t._v("网页版登录如果提示不能登录。这是微信的限制，解决办法：\n                    "),a("p",[t._v("1、可以换账号试试，有的是可以登录的。")]),a("p",[t._v("2、另外，新版本的插件会员版支持上传本地头像生成群合影，可以通过电脑或者手机将成员头像保存，然后上传到插件进行生成。")]),a("p",[t._v("3、年度会员支持[群合影小助手]自动方式"),a("br"),t._v("\n                        1)、开通年度会员后，将[群合影小助手]拉到要生成群合影的微信群内。(注：提示成功后，可将小助手从群内删掉即可）"),a("br"),t._v("\n                        2)、重新打开插件，登录后右上角有（VIP）字样"),a("br"),t._v("\n                        3)、选择一个背景图 -> 选择导航顶部【选择群头像】生成即可\n                    ")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main_more",attrs:{id:"main_more"}},[a("div",{staticClass:"container_max"},[a("div",{staticClass:"footer__inner"},[a("a",{staticClass:"footer__textLogo",attrs:{href:"/"}},[t._v("微信群合影")]),a("div",{staticClass:"footer__data"},[a("div",{staticClass:"footer__data__item"}),a("div",{staticClass:"footer__data__item"},[a("div",{staticClass:"footer__row"},[a("strong",[t._v("微信公众号")])]),a("div",{staticClass:"footer__row"},[a("img",{staticClass:"footer_qrcode",attrs:{src:"/images/water/web-bear.jpg"}})])]),a("div",{staticClass:"footer__data__item"},[a("div",{staticClass:"footer__row"},[a("strong",[t._v("问题反馈")])]),a("div",{staticClass:"footer__row"},[a("img",{staticClass:"footer_qrcode",attrs:{src:"/images/water/qrcode_per.jpeg"}})])])])])])])}],c=(a("c5f6"),a("f4f9"),a("450d"),a("c2cc")),r=a.n(c),o=(a("7a0f"),a("0f6c")),m=a.n(o),v=(a("186a"),a("301f")),d=a.n(v),p=(a("96dc"),a("9cea")),u=a.n(p),C={name:"QunHeYing",components:{"el-carousel":u.a,"el-carousel-item":d.a,"el-row":m.a,"el-col":r.a},props:{msg:String},data:function(){return{canvasSize:{width:338,height:600},backImgSize:{width:1024,height:3e3},likeFlag:!1,title:"",useShowArray:["/images/useBack/use_back_8.png","/images/useBack/use_back_6.png","/images/useBack/use_back_7.png","/images/useBack/use_back_9.png"],showArray:["/images/showBack/show_13.jpg","/images/showBack/show_14.jpg","/images/showBack/show_15.jpg","/images/showBack/show_16.jpg","/images/showBack/show_11.jpg","/images/showBack/show_12.jpg","/images/showBack/show_7.png","/images/showBack/show_8.jpg"],downUrl:"http://qiniu.gafata.com/qunheying-2.4.2.crx",chromeUrl:"https://chrome.google.com/webstore/detail/%E5%BE%AE%E4%BF%A1%E7%BE%A4%E5%90%88%E5%BD%B1/okmigchmnpnkhpbadonggpnidnnjocma?hl=zh-CN"}},created:function(){window.addEventListener("scroll",this.handleScroll)},methods:{__getPageScrollY:function(t){return t||0==Number(t)?(self.pageYOffset&&(self.pageYOffset=Number(t)),document.documentElement&&document.documentElement.scrollTop&&(document.documentElement.scrollTop=Number(t)),document.body&&(document.body.scrollTop=Number(t)),!0):(self.pageYOffset?s=self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?s=document.documentElement.scrollTop:document.body&&(s=document.body.scrollTop),s);var s},handleScroll:function(){var t=this.__getPageScrollY(),s=document.getElementById("hero"),a=s.offsetHeight-100;if(t>a){var i=document.getElementById("navbar");i.classList.add("navbar_active")}else{var e=document.getElementById("navbar");e.classList.remove("navbar_active")}},navScroll:function(t){var s=65;if(1===t){var a=document.getElementById("hero").offsetTop;window.scrollTo(0,a-s)}else if(2===t){var i=document.getElementById("main_use").offsetTop;window.scrollTo(0,i-s)}else if(3===t){var e=document.getElementById("main_show").offsetTop;window.scrollTo(0,e-s)}else if(4===t){var n=document.getElementById("main_install").offsetTop;window.scrollTo(0,n-s-5),gtag("event","main",{event_category:"downloadDirect",event_label:"top"})}else if(5===t){var l=document.getElementById("main_more").offsetTop;window.scrollTo(0,l-s)}else if(6===t){var _=document.getElementById("main_ask").offsetTop;window.scrollTo(0,_-s)}else if(7===t){var c=document.getElementById("main_vip").offsetTop;window.scrollTo(0,c-s)}else if(8===t){var r=document.getElementById("main_video").offsetTop;window.scrollTo(0,r-s)}},showLike:function(){this.likeFlag=!0}}},f=C,g=(a("6a68"),a("2877")),h=Object(g["a"])(f,l,_,!1,null,null,null);h.options.__file="index.vue";var w=h.exports,b={name:"app",components:{Pool:w}},k=b,y=(a("034f"),Object(g["a"])(k,e,n,!1,null,null,null));y.options.__file="App.vue";var x=y.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(x)}}).$mount("#app")},"64a9":function(t,s,a){},"6a68":function(t,s,a){"use strict";var i=a("9fc2"),e=a.n(i);e.a},"9fc2":function(t,s,a){}});
//# sourceMappingURL=app.197d1bb5.js.map