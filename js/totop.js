// build time:Sun May 14 2017 15:51:06 GMT+0800 (中国标准时间)
function hasClass(o,s){return o.className.match(new RegExp("(\\s|^)"+s+"(\\s|$)"))}function addClass(o,s){if(!hasClass(o,s))o.className+=" "+s}function removeClass(o,s){if(hasClass(o,s)){var e=new RegExp("(\\s|^)"+s+"(\\s|$)");o.className=o.className.replace(e," ")}}window.onscroll=function(){var o=document.getElementById("totop");var s=document.documentElement.scrollTop||document.body.scrollTop||window.scrollY;if(s>=300){addClass(o,"show")}else{removeClass(o,"show");removeClass(o,"launch")}};function gotoTop(o,s){o=o||.1;s=s||10;var e=document.getElementById("totop");var l=document.documentElement.scrollTop||document.body.scrollTop||window.scrollY||0;var t=1+o;window.scrollTo(0,Math.floor(l/t));if(l>0){var n="gotoTop("+o+", "+s+")";window.setTimeout(n,s)}}totop.onclick=function(){var o=document.getElementById("totop");gotoTop(.1,20);addClass(o,"launch");return false};
//rebuild by neat 