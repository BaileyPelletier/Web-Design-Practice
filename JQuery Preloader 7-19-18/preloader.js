$(document).ready(function() {

  var counter = 0;
  var i = setInterval(function() {
    $(".loading-page .counter h1").html(counter);
    $(".loading-page").css("width", counter + "%");

    counter++;
    if (counter == 101) {
      clearInterval(i);
    }
  }, 50);


});
