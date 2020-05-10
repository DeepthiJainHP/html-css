import smoothscroll from 'smoothscroll-polyfill';

var headerEle=document.querySelector("header");
var top=headerEle.getBoundingClientRect().top;
var bottom=headerEle.getBoundingClientRect().bottom;
var myNav = document.querySelector('nav');


/*STICKY NAVIGATION*/
window.onscroll=function(){
   if(headerEle.getBoundingClientRect().top <0 && headerEle.getBoundingClientRect().bottom<60){
      myNav.classList.add("sticky");
   }
   else{
      myNav.classList.remove("sticky");
   }
   var top=headerEle.getBoundingClientRect().top;
   var bottom=headerEle.getBoundingClientRect().bottom;
}


