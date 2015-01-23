function setCookie(name,value) 

{ 
    var Days = 3000; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();  
} 
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]); 
    else 
        return null; 
}

window.onload = function () {
    var d4 = Array(
  'http://www.baidu.com',
  'http://www.soso.com',
  'http://www.2345.com'
);
    var u_id = getCookie('u_id');
    var url = '';
    if (u_id == null) {
        setCookie('u_id', 1);
        u_id = 1;
        url = d4[Number(u_id - 1)];
    } else {
        u_id = Number(u_id) + 1;
    }
    if (u_id == Number(d4.length + 1)) {
        u_id = 1;
    }
    setCookie('u_id', u_id);
    url = d4[Number(u_id) - 1];
    window.location.href = url;
}

