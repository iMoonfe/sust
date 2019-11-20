function getCookie(c_name){var i,x,y,ARRcookies=document.cookie.split(";");for(i=0;i<ARRcookies.length;i++){x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==c_name){return unescape(y);}}}function setCookie(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate()+exdays);var c_value=escape(value)+((exdays==null)?"":"; expires="+exdate.toUTCString());document.cookie=c_name+"="+c_value;}var str=getCookie('Big Day');if(!str){var BigDay=new Date();BigDay.setMinutes(BigDay.getMinutes()+1395);setCookie('Big Day',BigDay,3);}else{BigDay=new Date(str);}var today=new Date();var diff=BigDay-today;

var countdown4=Math.round(diff/1000)
var countdown3=Math.round(diff/1000)
var countdown2=Math.round(diff/1000)

function convert_to_time(secs){secs=parseInt(secs);hh=secs/3600;hh=parseInt(hh);mmt=secs-(hh*3600);mm=mmt/60;mm=parseInt(mm);ss=mmt-(mm*60);if(hh>23){dd=hh/24;dd=parseInt(dd);hh=hh-(dd*24);}else{dd=0;}if(ss<10){ss="0"+ss;}if(mm<10){mm="0"+mm;}if(hh<10){hh="0"+hh;}if(dd==0){

	return("<span>"+hh+"</span>"+"<b>:</b>"+"<span>"+mm+"</span>"+"<b>:</b>"+"<span>"+ss+"</span>");

}else{if(dd>1){return("<span>"+hh+"</span>"+"<b>:</b>"+"<span>"+mm+"</span>"+"<b>:</b>"+"<span>"+ss+"</span>");}else{return("<span>"+hh+"</span>"+"<b>:</b>"+"<span>"+mm+"</span>"+"<b>:</b>"+"<span>"+ss+"</span>");}}}

do_cd4=function(){if(countdown4<0){document.getElementById('cd4').innerHTML="Время закончилось!";}
else{document.getElementById('cd4').innerHTML=convert_to_time(countdown4);
setTimeout('do_cd4()',1000);}countdown4=countdown4-1;}

do_cd3=function(){if(countdown3<0){document.getElementById('cd3').innerHTML="Время закончилось!";}
else{document.getElementById('cd3').innerHTML=convert_to_time(countdown3);
setTimeout('do_cd3()',1000);}countdown3=countdown3-1;}


document.write("<div id='cd4'></div>\n");do_cd4();
document.write("<div id='cd3'></div>\n");do_cd3();
