// ==UserScript==
// @name         blockBaiduJunk
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  不显示百度首页中的低质量推荐与热搜
// @author       anyone
// @match        *://www.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
	//1.原生js写法
   //
   let baidu_junk=document.getElementsByClassName("water-container")[0];
   if(baidu_junk!=null){ baidu_junk.style.display="none";}
   let baidu_junk2=document.getElementsByClassName("hot-news-wrapper")[0];
   if(baidu_junk2!=null){ baidu_junk2.style.display="none";}
   let baidu_junk3=document.getElementsByClassName("c-table opr-toplist1-table")[0];
   if(baidu_junk3!=null){ baidu_junk3.style.display="none";}


	//2.jQuery写法，油猴现在已经支持jQuery了
	 //$('#water-container').hide();
     //$('#hot-news-wrapper').hide();
})();










