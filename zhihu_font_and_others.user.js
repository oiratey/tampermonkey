// ==UserScript==
// @name         zhihu_font_and_others
// @namespace    http://tampermonkey.net/
// @version      0.101
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/*
// @match        *://*.zhihu.com/*
// @match        *://*.bing.com/*
// @match        *://*.weibo.com/*
// @grant        none
// ==/UserScript==

//增大知乎部分block内字体大小
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
large(['feed-item','zu-main-content-inner','Question-main','Post-RichTextContainer']);

//屏蔽知乎标签logo图片
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

//加宽zhihu页面部分block宽度
    let Post_RichTextContainer_s=document.getElementsByClassName('Post-RichTextContainer');
    if (Post_RichTextContainer_s!=null){
        for (let i = 0; i < Post_RichTextContainer_s.length; i++){
        Post_RichTextContainer_s[i].style.width="990px";
        }
    }
    let Question_main_s=document.getElementsByClassName('Question-main');
    if (Question_main_s!=null){
        for (let i = 0; i < Question_main_s.length; i++){
        Question_main_s[i].style.width="1200px";
        }
    }

    let Question_mainColumn_s=document.getElementsByClassName('Question-mainColumn');
    if (Question_mainColumn_s!=null){
        for (let i = 0; i < Question_mainColumn_s.length; i++){
        Question_mainColumn_s[i].style.width="900px";
        }
    }



//新浪微博


    let woo_box_flex_and_Frame_content_3XrxZ_s=document.getElementsByClassName('woo-box-flex Frame_content_3XrxZ');
    if (woo_box_flex_and_Frame_content_3XrxZ_s!=null){
        for (let i = 0; i < woo_box_flex_and_Frame_content_3XrxZ_s.length; i++){
        woo_box_flex_and_Frame_content_3XrxZ_s[i].style.margin="100px";
        }
    }

    let Main_full_1dfQ_s=document.getElementsByClassName('Main_full_1dfQ');
    if (Main_full_1dfQ_s!=null){
        for (let i = 0; i < Main_full_1dfQ_s.length; i++){
        Main_full_1dfQ_s[i].style.width="1300px";
        }
    }

    let Home_wrap_XXu6Z_s=document.getElementsByClassName('Home_wrap_XXu6Z');
    if (Home_wrap_XXu6Z_s!=null){
        for (let i = 0; i < Home_wrap_XXu6Z_s.length; i++){
        Home_wrap_XXu6Z_s[i].style.width="900px";
        }
    }

    let Main_side_i7Vti_s=document.getElementsByClassName('Main_side_i7Vti');
    if (Main_side_i7Vti_s!=null){
        for (let i = 0; i < Main_side_i7Vti_s.length; i++){
        Main_side_i7Vti_s[i].style.display="none";
        }
    }

    let Frame_main_3Z_V0_s=document.getElementsByClassName('Frame_main_3Z_V0');
    if (Frame_main_3Z_V0_s!=null){
        for (let i = 0; i < Frame_main_3Z_V0_s.length; i++){
        Frame_main_3Z_V0_s[i].style.width="900px";
        }
    }

    let woo_box_flex_and_Main_wrap_2GRrG_s=document.getElementsByClassName('woo-box-flex Main_wrap_2GRrG');
    if (woo_box_flex_and_Main_wrap_2GRrG_s!=null){
        for (let i = 0; i < woo_box_flex_and_Main_wrap_2GRrG_s.length; i++){
        woo_box_flex_and_Main_wrap_2GRrG_s[i].style.width="900px";
        }
    }

    let Main_full_1dfQX_s=document.getElementsByClassName('Main_full_1dfQX');
    if (Main_full_1dfQX_s!=null){
        for (let i = 0; i < Main_full_1dfQX_s.length; i++){
        Main_full_1dfQX_s[i].style.width="900px";
        }
    }
//加宽bing搜索结果宽度
	let b_results_dom=document.getElementById('b_results');
	if(b_results_dom!=null){
	b_results_dom.style.width="848px";
	}

	//2.jQuery写法，油猴现在已经支持jQuery了
	 //$('#ad-list').hide();
})();