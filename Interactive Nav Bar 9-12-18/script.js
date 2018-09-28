$(document).ready(() => {

  $('li').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  $('#resume').click(function () {
    $('#loadableContent').load("ajax/resume.html");
  });
  $('#comp_sci').click(function () {
    $('#loadableContent').load("ajax/comp_sci.html");
  });
  $('#photo').click(function () {
    $('#loadableContent').load("ajax/photo.html");
  });
  $('#video').click(function () {
    $('#loadableContent').load("ajax/video.html");
  });
  $('#video').click(function () {
    $('#loadableContent').load("ajax/video.html");
  });


});


console.log("Hello World");
