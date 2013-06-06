$(document).ready(function(){
  var nav = $('nav')
      ,infoContainer = $('.info-container');

  nav.css({'display': 'none'})
  nav.fadeIn(1000);

  $('nav li').on('click', function(){
    $('#main-title').addClass('main-title');
    nav.animate({'margin-top': '1%'}, 1100, 'easeOutElastic');
    $('#main-title span').animate({'font-size': '1.3em', 'top': '0.4em'}, 200);
  });

  // $('nav li').click(function() {
  //   $(this).addClass('active').siblings().removeClass('active')
  // });

  $('#contact').on('click', function(){
    infoContainer.fadeOut(200);
    $('#contact_container').delay(300).slideDown(200);

  });

  $('#work').on('click', function(){
    infoContainer.fadeOut(200);
    $('#work_container').delay(300).slideDown(200);

  });

  $('#about').on('click', function(){
    infoContainer.fadeOut(200);
    $('#about_container').delay(300).slideDown(200);
  });

  $('#send-email').on('click', function(){
    $('#email').slideToggle(200)
  });

});