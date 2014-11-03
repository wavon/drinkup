

$(document).ready(function(){

  var mainNav = function() {
    $('.icon-menu').click(function() {
      $('.main-nav').animate({
        left: "0px"
      }, 200);

      $('.main-container').animate({
        left: "13em"
      }, 200);
    });

  /* Then push them back on clicking the X */
    $('.icon-close').click(function() {
      $('.menu').animate({
        left: "-285px"
      }, 200);

      $('body').animate({
        left: "0px"
      }, 200);
    });
  };

$('button').click(function() {
 alert("yay!");
});



});
