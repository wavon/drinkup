var mainNav = function() {
 /* Push the body and the icon nav to the right by 285px over 200ms */
 $('.icon-menu').click(function() {
   $('.main-nav').animate({
     left: "0px"
   }, 200);

   $('.main-container').animate({
     left: "285px"
   }, 200);
 });

 /* Then push them back on clicking the X */
 $('.main-nav').click(function() {
   $('.main-nav').animate({
     left: "-285px"
   }, 200);

   $('.main-container').animate({
     left: "0px"
   }, 200);
 });
};


$(document).ready(mainNav);