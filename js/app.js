<<<<<<< HEAD
var main = function() {
  /* Push the body and the icon nav to the right by 285px over 200ms */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
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


$(document).ready(main);
=======


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
>>>>>>> 23d1034c94c6ac05ad0688833bd81b6042e2c102
