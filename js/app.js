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