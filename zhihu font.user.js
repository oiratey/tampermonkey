// ==UserScript==
// @name         zhihu font and others
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/*
// @match        *://*.zhihu.com/*
// @grant        none
// ==/UserScript==

function large(objArr){
    for (var x in objArr) {
        var obj=objArr[x];
        var elems=document.getElementsByClassName(obj);
        for(var i=0;i<elems.length;i++)
        {
            elems[i].setAttribute('style','font-size:1.1em;font-family:微软雅黑');
        }
    }
}
large(['feed-item','zu-main-content-inner','Question-main']);


(function() {
	//1.原生js写法
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

	//2.jQuery写法，油猴现在已经支持jQuery了
	 //$('#ad-list').hide();
})();