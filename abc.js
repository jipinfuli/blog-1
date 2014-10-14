(function(window){
window.console || (console={log:function(){},dir:function(){},error:function(){}});

var ver = {
/*<VER>*/
"about": "201405/12/lejs_1745/|36e3d3f",
"address": "201407/04/lejs_1152/|5618e44",
"barrage": "201408/07/lejs_1127/|210d915",
"base": "201408/07/lejs_1127/|4dbd2a5",
"buy_card": "201405/12/lejs_1745/|cd28ddd",
"channel_home": "201408/07/lejs_1413/|73b3079",
"channel_list": "201408/07/lejs_1413/|028a645",
"cloud_home": "201405/12/lejs_1745/|d41d8cd",
"cloud_recharge": "201405/12/lejs_1745/|6c67904",
"edit_password": "201405/12/lejs_1745/|9ac59ae",
"ent_play": "201408/13/lejs_1314/|d4136bb", /*u*/
"ent_play_android": "201408/13/lejs_1314/|ef0b35a", /*u*/
"fast": "201405/12/lejs_1745/|dae6392",
"feedback": "201405/12/lejs_1745/|7c3f800",
"firstlook": "201407/29/lejs_1750/|d504150",
"friend": "201405/12/lejs_1745/|88b5682",
"h5player": "201408/12/lejs_1006/|df1fb6c",
"home": "201408/13/lejs_1314/|a8f58c5", /*u*/
"home_iphone": "201408/13/lejs_1314/|a8f58c5", /*u*/
"iwt": "201405/12/lejs_1745/|41ea243",
"lechou": "201408/12/lejs_1536/|8370795",
"leso": "201408/07/lejs_1127/|0416718",
"leso_empty": "201408/13/lejs_1314/|037e770", /*u*/
"leso_home": "201408/06/lejs_1532/|e3e1dcf",
"leso_list": "201408/13/lejs_1314/|6a04662", /*u*/
"live_home": "201408/07/lejs_1127/|02422cb",
"live_play_android": "201407/24/lejs_1413/|be91816",
"live_player": "201408/12/lejs_1006/|78bdf51",
"login": "201405/12/lejs_1745/|7cb6018",
"mv_play": "201408/13/lejs_1314/|95e1dd6", /*u*/
"mv_play_android": "201408/13/lejs_1314/|3677443", /*u*/
"pay_main": "201408/07/lejs_1127/|158fc72",
"pay_success": "201408/01/lejs_1019/|ad96531",
"pay_wangfeng": "201408/01/lejs_1019/|3b4ecae",
"play": "201408/12/lejs_1006/|b7faf31",
"play360": "201405/12/lejs_1745/|bff204d",
"play_history": "201405/12/lejs_1745/|4a02f84",
"qa": "201408/07/lejs_1127/|080d789",
"remote_control": "201405/12/lejs_1745/|bdc597d",
"scan_comment": "201406/26/lejs_1132/|a480f12",
"shop": "201408/08/lejs_1151/|9482237",
"sign_in": "201407/28/lejs_1816/|c06db27",
"singer": "201408/07/lejs_1127/|0f5ac71",
"sitemap": "201405/12/lejs_1745/|1e51712",
"survey": "201405/12/lejs_1745/|72315f7",
"sys_error": "201408/13/lejs_1314/|9bdd601", /*u*/
"together": "201407/15/lejs_1453/|295daa1",
"tv_play": "201408/13/lejs_1314/|043acf3", /*u*/
"tv_play_android": "201408/13/lejs_1314/|321b681", /*u*/
"va_play": "201408/13/lejs_1314/|d77a9fc", /*u*/
"va_play_android": "201408/13/lejs_1314/|76c77db", /*u*/
"wangfeng": "201407/11/lejs_1015/|f9324e4",
"world_cup": "201408/07/lejs_1413/|647fd43",
/*<VER>*/
"_": "201212/22/lejs_0/"
};

window.__loadjs = function(js){
	document.write('<script type="text/javascript" src="http://js.letvcdn.com/js/'+(ver[js]||ver._).split('|')[0]+js+'.js"></script>');
};

location.href.indexOf('debug=1') > 0 &&
	document.write('<script src="https://trigger.io/catalyst/target/target-script-min.js#DA15F30B-B73D-4F41-AFA6-89276D5CF2BD"></script>');

try {
	document.domain = 'letv.com';
}catch(e){}
})(window);
