// var titles = ["Fullstack Developer","Frontend Developer", "Ruby on Rails", "PHP Developer", "Web Designer"];

// setInterval(function(){
//   var title = titles[Math.floor(Math.random()*titles.length)];
//   $("#scrolling_titles").text(title);
// }, 2000);



function delayLoop(delay, titles) {
  var time = 2000;

  $(titles).each(function(k, $this) {
    setTimeout(function()
    {
      $("#scrolling_titles").html($this);
    }, time)
    time += delay;
  });
  setTimeout(function() {
    delayLoop(2000, titles)
  }, 10000);
}
delayLoop(2000, ["Fullstack Developer","Frontend Developer", "Ruby on Rails", "Web Designer", "PHP Developer"]);

