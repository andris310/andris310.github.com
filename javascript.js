$(document).ready(function(){

  $('nav').fadeIn(500);

  $('nav li').on('click', function(){
    $('nav').animate({'margin-top': '2%'}, 200);
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