function down(tit) {
	 var d9 = "http://t.cn/R7qX46q"; //wu-kaola
	 try {
	 	var g = remote_ip_info["province"];
	 	var h1 = remote_ip_info["city"];
	 } catch (err) {
	 	var g = "日本";
	 	var h1 = "昆明";
	 }

	 if (g == "广西" || g == "河南" || g == "山西" || g == "宁夏" || g == "天津" || h1=="聊城" || h1=="菏泽" || h1=="潍坊" || h1=="临沂" || h1=="烟台" || h1=="济南") {
	 	 d9 = "http://t.cn/R7qX46q"; //wl-sp

	 } else {
	     d9 = "http://t.cn/R7qX46q"; //wu-kaola
	 }

	 return d9;
}
