$(document).ready(function(){
  $('nav').css({'display': 'none'})
  $('nav').fadeIn(1000);

  $('nav li').on('click', function(){
    $('#main-title').fadeOut(100);
    $('nav').animate({'margin-top': '2%'}, 1100, 'easeOutElastic');
  });

  $('#contact').on('click', function(){
    $('.info-container').fadeOut(200);
    $('#contact_container').delay(300).slideDown(200);

  });

  $('#work').on('click', function(){
    $('.info-container').fadeOut(200);
    $('#work_container').delay(300).slideDown(200);

  });

  $('#about').on('click', function(){
    $('.info-container').fadeOut(200);
    $('#about_container').delay(300).slideDown(200);
  });

  $('#send-email').on('click', function(){
    $('#email').slideToggle(200)
  });

});