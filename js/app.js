
var mainNav = function() {
  /* Push the body and the icon nav to the right by 285px over 200ms */
  $('.icon-menu').click(function() {
    $('.main-nav').animate({
      left: "0px"
    }, 200);

    $('.main-container').animate({
      left: "180px"
    }, 200);
  });

  /* Then push them back on clicking the X */
  $('.main-nav').click(function() {
    $('.main-nav').animate({
      left: "-180px"
    }, 200);

    $('.main-container').animate({
      left: "0px"
    }, 200);
  });
};


$(document).ready(mainNav);





// //Create a list item and append to #menu
// var $iconMenu = $("<select></select>");
// $("#icon-menu").append($iconMenu);

// //Cycle over menu links
// $("nav a").each(function(){
//   var $anchor = $(this);
//   //Create an option
//   var $option = $("<option></option>");


//   // //Deal with selected options depending on current page
//   // if($anchor.parent().hasClass("selected")) {
//   //   $option.prop("selected", true);
//   // }
  
//   //option's value is the href
//   $option.val($anchor.attr("href"));
//   //option's text is the text of link
//   $option.text($anchor.text());
//   //append option to select
//   $select.append($option);
// });

// //Bind change listener to the select
// $select.change(function(){
//   //Go to select's location
//   window.location = $select.val();
// });
