var items = ["Fullstack Developer","Frontend Developer", "Ruby on Rails", "PHP Developer", "Web Design"]

setInterval(function(){
  var item = items[Math.floor(Math.random()*items.length)];
  $("#scrolling_titles").attr("placeholder", item);
}, 2000);
