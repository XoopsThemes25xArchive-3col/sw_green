//定义右联图片的所在位置及其链接目标的地址
var rightsrc =  "http://ffxk.com/uploads/img457df8a4cd157.gif";
var rightlink = "http://ffxk.com/modules/newbb/";



///////////////////////////
////  以下代码无需改动  ////
////////////////////////// 

lastScrollY=0;

function heartBeat(){ 
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
 diffY = document.documentElement.scrollTop;
else if (document.body)
 diffY = document.body.scrollTop
else
 {/*Netscape stuff*/}
//alert(diffY);
percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.getElementById("lovexin14").style.top=parseInt(document.getElementById("lovexin14").style.top)+percent+"px";
lastScrollY=lastScrollY+percent; 
//alert(lastScrollY);
} 

suspendcode14="<div id=\"lovexin14\" style='right:-5px;position:absolute;top:120px; cursor:pointer;'><div onclick=javascript:window.open(\"" + rightlink + "\")><img src=\"" + rightsrc +"\" /></div><div onclick=\"document.getElementById('lovexin12').style.display = 'none'; document.getElementById('lovexin14').style.display = 'none';\" style='text-align:center;'></div></div>" 
document.write(suspendcode14);  
window.setInterval("heartBeat()",1);