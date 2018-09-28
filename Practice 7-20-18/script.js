$(document).ready(() => {
  var navScrollPos = $("nav").offset().top;

  $('.options').sticky({ topSpacing: 0 });

  $('.button').on('click', event => {
    if (($("html, body").scrollTop() + 200) < navScrollPos) {
      $("html, body").animate({ scrollTop: $('#arrow').offset().top + 1 }, 1000);
      $(event.currentTarget).addClass('rotate');
    } else if ($("html, body").scrollTop() >= (navScrollPos - 200)) {
      $("html, body").animate({ scrollTop: $('.sec1').offset().top }, 1000);
      $(event.currentTarget).removeClass('rotate');
    }
  });

  $(window).scroll(function() {
    if (($("html, body").scrollTop() + 200) < navScrollPos) {
      $('.button').removeClass('rotate');
      $('nav').removeClass('black',800);

      $('#toTop').fadeOut('slow');
    } else if ($("html, body").scrollTop() >= (navScrollPos - 200)) {
      $('.button').addClass('rotate');
      $('nav').addClass('black',800);

      $('#toTop').fadeIn('slow');
    };


  });

  $('.options').on('sticky-start', () => {
    $('.options').addClass('black');
    $('.options').on('mouseenter', () => {
      $('.options').addClass('active',300);
    });
    $('.options').on('mouseleave', () => {
      $('.options').removeClass('active',100);
    });
  });
  $('.options').on('sticky-end', () => {
    $('.options').removeClass('black');
    $('.options').removeClass('active');
  });

  $('.options').on('click', () => {
    $('#contactForm').fadeIn();
    // $('.wrapper').fadeOut();
  });
  $('#contactCancel').on('click', () => {
    $('#contactForm').fadeOut();
    // $('.wrapper').fadeIn();
  });

  $('#toTop').on('mouseenter', event => {
    $(event.currentTarget).addClass('active', 500);
  });
  $('#toTop').on('mouseleave', event => {
    $(event.currentTarget).removeClass('active', 500);
  });
  $('#toTop').on('click', () => {
    $("html, body").animate({ scrollTop: $('.sec1').offset().top }, 1000);
  });
});
