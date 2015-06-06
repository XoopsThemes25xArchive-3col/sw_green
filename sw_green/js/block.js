function getposOffset(overlay, offsettype){
var totaloffset=(offsettype=="right")? overlay.offsetLeft : overlay.offsetTop;
var parentEl=overlay.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}

function overlay(curobj, subobj){
if (document.getElementById){
var subobj=document.getElementById(subobj)
subobj.style.left=getposOffset(curobj, "right")+"px"
subobj.style.top=getposOffset(curobj, "top")+"px"
subobj.style.display="block"
return false
}
else
return true
}

function overlayclose(subobj){
document.getElementById(subobj).style.display="none"
}