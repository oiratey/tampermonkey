// ==UserScript==
// @name         zhihu font and others
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/*
// @match        *://*.zhihu.com/*
// @match        *://*.bing.com/*
// @grant        none
// ==/UserScript==

function large(objArr){
    for (var x in objArr) {
        var obj=objArr[x];
        var elems=document.getElementsByClassName(obj);
        for(var i=0;i<elems.length;i++)
        {
            elems[i].setAttribute('style','font-size:1.1em;font-family:å¾®è½¯éé»');
        }
    }
}
large(['feed-item','zu-main-content-inner','Question-main']);


(function() {
	//1.åçjsåæ³
   //let ad_list=document.getElementById("ad-list");
    //let aria_labes_s=document.getElementsByTagName('aria-label');
    let a_s=document.getElementsByTagName('a');
    if(a_s!=null){
        for (let i=0; i < a_s.length; i++) {
            if (a_s[i].hasAttribute('aria-label') && a_s[i].getAttribute('aria-label')=="知乎"){
            a_s[i].style.display="none";
            }
        }
    }

	let b_results_dom=document.getElementById('b_results');
	if(b_results_dom!=null){
	b_results_dom.style.width="848px";
	}

	//2.jQueryåæ³ï¼æ²¹ç´ç°å¨å·²ç»æ¯æjQueryäº
	 //$('#ad-list').hide();
})();