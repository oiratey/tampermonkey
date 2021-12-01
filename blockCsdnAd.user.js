// ==UserScript==
// @name        blockCsdnAd
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  blockCsdnOschinaAd
// @author        mizuhokaga
// @match        *://*.csdn.net/*
// @match        *://*.oschina.net/*
// @grant        none
// ==/UserScript==


(function() {
	//1.原生js写法
    //let ad_list=document.getElementById("ad-list");
    //let =document.getElementsByClassName("")[0];
    //if(!=null){ .style.display="none";}
    //let =document.getElementsByClassName("")[0];
    //let left_ad=document.getElementsByClassName("GoogleCreativeContainerClass")[0];
    let left_ad=document.getElementsByClassName("GoogleActiveViewElement")[0];
    if(left_ad!=null){ left_ad.style.display="none";}
    let left_ad2=document.getElementsByClassName("GoogleActiveViewElement")[1];
    if(left_ad2!=null){ left_ad2.style.display="none";}
    //let ad_list=document.getElementsByClassName("ad-list")[0];
    //if(ad_list!=null){ ad_list.style.display="none";}
    //let ad_list_bottom=document.getElementsByClassName("ad-list")[1];
    //if(ad_list_bottom!=null){ ad_list_bottom.style.display="none";}
    let oschina_content_ad=document.getElementsByClassName("content-section section-ad")[0];
    if(oschina_content_ad!=null){ oschina_content_ad.style.display="none";}
    //content-section section-ad
    let oschina_right_box_ad=document.getElementsByClassName("ad-box ad-box--label")[1];
    if(oschina_right_box_ad!=null){ oschina_right_box_ad.style.display="none";}
    //ad-box ad-box--label

    let isShowFooterAds=document.getElementsByClassName("isShowFooterAds")[0];
    if(isShowFooterAds!=null){ isShowFooterAds.style.display="none";}
    let aside_box=document.getElementsByClassName("aside-box")[0];
    if(aside_box!=null){ aside_box.style.display="none";}
    let adsbygoogle=document.getElementsByClassName("adsbygoogle")[0];
    if(adsbygoogle!=null){ adsbygoogle.style.display="none";}
    //let =document.getElementsByClassName("")[0];
    //if(!=null){ .style.display="none";}
    //isShowFooterAds
    //aside-box
    //adsbygoogle

    let banner=document.getElementById("banner")[0];
    if(banner!=null){ banner.style.display="none";}
   //let ad_unit=document.getElementById("ad_unit")[0];
   //if(ad_unit!=null){ ad_unit.style.display="none";}
    let footerRightAds=document.getElementById("footerRightAds")[0];
    if(footerRightAds!=null){ footerRightAds.style.display="none";}
   //footerRightAds
   //banner
   //ad_unit
   //let col_xs0=document.getElementsByClassName("col-xs-12 col-md-4 text-center ptb10")[0];
   //if(col_xs0!=null){ col_xs0.style.display="none";}
   //let col_xs1=document.getElementsByClassName("col-xs-12 col-md-4 text-center ptb10")[1];
   //if(col_xs1!=null){ col_xs1.style.display="none";}
   //let col_xs2=document.getElementsByClassName("col-xs-12 col-md-4 text-center ptb10")[2];
   //if(col_xs2!=null){ col_xs2.style.display="none";}
	//2.jQuery写法，油猴现在已经支持jQuery了
	 //$('#ad-list').hide();
})();

// col-xs-12 col-md-4 text-center ptb10

(function() {
	//1.原生js写法
   let ad_list_bottom=document.getElementsByClassName("ad-list")[1];
   if(ad_list_bottom!=null){ ad_list_bottom.style.display="none";}
	//2.jQuery写法，油猴现在已经支持jQuery了
	 //$('#ad-list').hide();
})();


//GoogleCreativeContainerClass