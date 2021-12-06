// ==UserScript==
// @name         zhihu_font_and_others
// @namespace    http://tampermonkey.net/
// @version      0.102
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/*
// @match        *://*.zhihu.com/*
// @match        *://*.bing.com/*
// @match        *://*.weibo.com/*
// @match        *://*.libaclub.com/*
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

    let ListShortcut_s=document.getElementsByClassName('ListShortcut');
    if (ListShortcut_s!=null){
        for (let i = 0; i < ListShortcut_s.length; i++){
        ListShortcut_s[i].style.width="900px";
        }
    }

    let SearchMain_s=document.getElementsByClassName('SearchMain');
    if (SearchMain_s!=null){
        for (let i = 0; i < SearchMain_s.length; i++){
        SearchMain_s[i].style.width="1100px";
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

//屏蔽新浪微博feed流中的广告
//head_info_authtag_29zK2_s
//head-info_authtag_29zK2
//temp_s = wbpro-auth-tag head-info_authtag_29zK2
    let hot_t_s = document.getElementsByClassName("wbpro-auth-tag head-info_authtag_29zK2");
    if (hot_t_s!=null){
        for (let i = 0; i < hot_t_s.length; i++){
            if (hot_t_s[i].textContent == "热推"){
                hot_t_s[i].parentNode.parentNode.parentNode.parentNode.parentNode.style.display="none";
            }
        }
    }


    let head_info_authtag_29zK2_s=document.getElementsByClassName("head-info_authtag_29zK2");
    if (head_info_authtag_29zK2_s!=null){
        for (let i = 0; i < head_info_authtag_29zK2_s.length; i++){
            if ( head_info_authtag_29zK2_s[i].hasChildNodes("img") && head_info_authtag_29zK2_s[i].querySelector("img").hasAttribute("src")
                && head_info_authtag_29zK2_s[i].querySelector("img").getAttribute("src") == "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA"+
"ADgAAAAeCAYAAAB5c901AAACbUlEQVR4AeWYA5AdQRCGY9spxradQmwXYtsux0lxdrQ3sQqxbdssxLbN7trJ1flu92bv7m226j/0m/lff9O9mlT/1XHnzp1M58+f73/u3DkF2hJiUpg7"+
"MsQId+nSpQpnz569CfoOOhdqgJizzv0mskSrHH4AAy9euHChZKh2IOaODMgSqZIQGID0oQwXERJZsF3Dg9i/WGKvpgsXLszDmDWPc57X7VylaPGVK2mOiLEFC1hRzq01nJOmXvLRp5iK"+
"CLgF5RUQkunGGPkDv9e7n0suwNw3S5YsCW8p26ZV0U8IOtitX0QeY4A60U2YlJS0ccLn8Lp6YfRqJzMgtg1oS0yCFj0Bvx/h33GoVRS/lRpwN/ye/0/YCTp+RMeiSSlV2A/AD2D+DWDu"+
"eRHM7xmhSrXA6xdU/gV8diOiIHZHAz7RsWjCc9cXQPjyk4m90h04cCAdeF3CxZJSlsaYwRZNfkDwGe5UiM7SoWABbt9OMwLcxNWrV2cOHKAQZATeFuISfMd7BAR9jnucJU0DfkksoG2z+"+
"oxZ000IKtzJGOCCBaSgs6rWnlQp9/AOKITVQF+615hKBPy6gt8gt1JKpfcBkPZBQAC1zQFa19DTrYQQ2YwD4iVdX9kGmgTEp5g/f/6kTog4JzN8AwTj7WgeFkbLmQQE7XIxfrovgNCW9f"+
"QF5jauZKAAndawTusLzDiMBQpQCNrLgSMvlFI5zQOSX/D7a0IEC/zTOCCYTnXak7XTIdMVvCEEGZYQ4XXAK2CcWxZS0jqG2bQv6SEl65Dw8bQO53QU3gddbVngBk2QN52Cv22oy1oxsB"+
"u/wd+6D/DxF6S9dE9EL8SBAAAAAElFTkSuQmCC"){
                head_info_authtag_29zK2_s[i].parentNode.parentNode.parentNode.parentNode.parentNode.style.display="none";
            }
        head_info_authtag_29zK2_s[i].style.width="900px";
        }
    }

//    <div class="head-info_authtag_29zK2"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAACbUlEQVR4AeWYA5AdQRCGY9spxradQmwXYtsux0lxdrQ3sQqxbdssxLbN7trJ1flu92bv7m226j/0m/lff9O9mlT/1XHnzp1M58+f73/u3DkF2hJiUpg7MsQId+nSpQpnz569CfoOOhdqgJizzv0mskSrHH4AAy9euHChZKh2IOaODMgSqZIQGID0oQwXERJZsF3Dg9i/WGKvpgsXLszDmDWPc57X7VylaPGVK2mOiLEFC1hRzq01nJOmXvLRp5iKCLgF5RUQkunGGPkDv9e7n0suwNw3S5YsCW8p26ZV0U8IOtitX0QeY4A60U2YlJS0ccLn8Lp6YfRqJzMgtg1oS0yCFj0Bvx/h33GoVRS/lRpwN/ye/0/YCTp+RMeiSSlV2A/AD2D+DWDueRHM7xmhSrXA6xdU/gV8diOiIHZHAz7RsWjCc9cXQPjyk4m90h04cCAdeF3CxZJSlsaYwRZNfkDwGe5UiM7SoWABbt9OMwLcxNWrV2cOHKAQZATeFuISfMd7BAR9jnucJU0DfkksoG2z+oxZ000IKtzJGOCCBaSgs6rWnlQp9/AOKITVQF+615hKBPy6gt8gt1JKpfcBkPZBQAC1zQFa19DTrYQQ2YwD4iVdX9kGmgTEp5g/f/6kTog4JzN8AwTj7WgeFkbLmQQE7XIxfrovgNCW9fQF5jauZKAAndawTusLzDiMBQpQCNrLgSMvlFI5zQOSX/D7a0IEC/zTOCCYTnXak7XTIdMVvCEEGZYQ4XXAK2CcWxZS0jqG2bQv6SEl65Dw8bQO53QU3gddbVngBk2QN52Cv22oy1oxsBu/wd+6D/DxF6S9dE9EL8SBAAAAAElFTkSuQmCC"></div>
//    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAACbUlEQVR4AeWYA5AdQRCGY9spxradQmwXYtsux0lxdrQ3sQqxbdssxLbN7trJ1flu\
//92bv7m226j/0m/lff9O9mlT/1XHnzp1M58+f73/u3DkF2hJiUpg7MsQId+nSpQpnz569CfoOOhdqgJizzv0mskSrHH4AAy9euHChZKh2IOaODMgSqZIQGID0oQwXERJZsF3Dg9i/WGK\
//vpgsXLszDmDWPc57X7VylaPGVK2mOiLEFC1hRzq01nJOmXvLRp5iKCLgF5RUQkunGGPkDv9e7n0suwNw3S5YsCW8p26ZV0U8IOtitX0QeY4A60U2YlJS0ccLn8Lp6YfRqJzMgtg1oS0\
//yCFj0Bvx/h33GoVRS/lRpwN/ye/0/YCTp+RMeiSSlV2A/AD2D+DWDueRHM7xmhSrXA6xdU/gV8diOiIHZHAz7RsWjCc9cXQPjyk4m90h04cCAdeF3CxZJSlsaYwRZNfkDwGe5UiM7So\
//WABbt9OMwLcxNWrV2cOHKAQZATeFuISfMd7BAR9jnucJU0DfkksoG2z+oxZ000IKtzJGOCCBaSgs6rWnlQp9/AOKITVQF+615hKBPy6gt8gt1JKpfcBkPZBQAC1zQFa19DTrYQQ2YwD\
//4iVdX9kGmgTEp5g/f/6kTog4JzN8AwTj7WgeFkbLmQQE7XIxfrovgNCW9fQF5jauZKAAndawTusLzDiMBQpQCNrLgSMvlFI5zQOSX/D7a0IEC/zTOCCYTnXak7XTIdMVvCEEGZYQ4XX\
//AK2CcWxZS0jqG2bQv6SEl65Dw8bQO53QU3gddbVngBk2QN52Cv22oy1oxsBu/wd+6D/DxF6S9dE9EL8SBAAAAAElFTkSuQmCC"


//屏蔽篱笆论坛帖子列表中的广告
    let ui_list_item_and_ui_list_merchant_ad_s=document.getElementsByClassName('ui-list-item ui-list-merchant-ad');
    if (ui_list_item_and_ui_list_merchant_ad_s!=null){
        for (let i = 0; i < ui_list_item_and_ui_list_merchant_ad_s.length; i++){
        ui_list_item_and_ui_list_merchant_ad_s[i].style.display="None";
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
