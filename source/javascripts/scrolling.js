

var items = ["Fullstack Developer","Frontend Developer", "Ruby on Rails", "PHP Developer", "Web Designer"];

setInterval(function(){
  var item = items[Math.floor(Math.random()*items.length)];
  $("#scrolling_titles").text(item);
}, 2000);

// setInterval(function(){
//   for (var i = 0; i < items.length; i++) {
//     $("#scrolling_titles").text(items[i]);
//   }
// }, 2000);
