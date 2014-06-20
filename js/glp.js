$(document).ready(function(){
  $('.dropdown').on('mouseenter', function(){
    $(this).children('.dropgroup').slideDown(80);
  })
  $('.dropdown').on('mouseleave', function(){
    $(this).children('.dropgroup').slideUp(80);
  })
  $('.slick').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    dots: true,
    speed: 1000,
    slide: 'img'

  });
});