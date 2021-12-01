// ==UserScript==
// @name        自定义的屏蔽网页中元素
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  屏蔽网页中指定元素
// @author        mizuhokaga
// @match        *://*.javbus.com/*
// @match        *://*.cdnbus.blog/*
// @match        *://*.busjav.bar/*
// @match        *://*.fanbus.bar/*
// @match        *://*.cdnbus.bar/*
// @match        *://*.buscdn.blog/*
// @match        *://*.buscdn.bar/*
// @match        *://*.busfan.bar/*
// @match        *://*.buscdn.bar/*
// @match        *://*.busfan.bar/*
// @match        *://*.busjav.bar/*

// @match        *://*.souka.xyz/*


// @grant        none
// @require https://cdn.staticfile.org/jquery/3.5.0/jquery.min.js
/* globals jQuery, $, waitForKeyElements */

//// @require      http://code.jquery.com/jquery-3.x-git.min.js
//* globals jQuery, $, waitForKeyElements *//

// ==/UserScript==

//防屏蔽地址：https://www.buscdn.bar
//防屏蔽地址：https://www.busfan.bar
//防屏蔽地址：https://www.busjav.bar
//https://www.seedmm.bar
//https://www.buscdn.bar
//https://www.fanbus.bar

(function() {
	//1.原生js写法
   //let ad_list=document.getElementById("ad-list");
    let ad_box=document.getElementsByClassName("ad-box")[0];
    if(ad_box!=null){ ad_box.style.display="none";}
    let ad_box2=document.getElementsByClassName("ad-box")[1];
    if(ad_box2!=null){ ad_box2.style.display="none";}
   let ad_list=document.getElementsByClassName("ad-list")[0];
   if(ad_list!=null){ ad_list.style.display="none";}
   let ad_list_bottom=document.getElementsByClassName("ad-list")[1];
   if(ad_list_bottom!=null){ ad_list_bottom.style.display="none";}

   let col_xs0=document.getElementsByClassName("col-xs-12 col-md-4 text-center ptb10")[0];
   if(col_xs0!=null){ col_xs0.style.display="none";}
   let col_xs1=document.getElementsByClassName("col-xs-12 col-md-4 text-center ptb10")[1];
   if(col_xs1!=null){ col_xs1.style.display="none";}
   let col_xs2=document.getElementsByClassName("col-xs-12 col-md-4 text-center ptb10")[2];
   if(col_xs2!=null){ col_xs2.style.display="none";}
	//2.jQuery写法，油猴现在已经支持jQuery了
	 //$('#ad-list').hide();
    $('#position: fixed; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 2147483647; background: black; opacity: 0.01; height: 322px; width: 1237px;').hide();
    $('#display: block; height: inherit;').hide()
    //var souka1 = $('#position: fixed; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 2147483647; background: black; opacity: 0.01; height: 322px; width: 1237px;');
    //$(".div[style='position: fixed; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 2147483647; background: black; opacity: 0.01; height: 322px; width: 1237px;']").hide()
    //$(".a[style='display: block; height: inherit;']").hide()
})();

//souka
//    let souka_ad0=document.getElementsByIdName("etoc7l6")[0];
//    if(souka_ad0!=null){ souka_ad0.style.display="none";}
//    let souka_ad1=document.getElementsByIdName("lkjfw")[0];
//    if(souka_ad1!=null){ souka_ad1.style.display="none";}
//souka




// col-xs-12 col-md-4 text-center ptb10

(function() {
	//1.原生js写法
   let ad_list_bottom=document.getElementsByClassName("ad-list")[1];
   if(ad_list_bottom!=null){ ad_list_bottom.style.display="none";}
	//2.jQuery写法，油猴现在已经支持jQuery了
	 //$('#ad-list').hide();
})();

