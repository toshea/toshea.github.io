$(document).ready(function(){
  $('.dropdown').on('mouseenter', function(){
    $(this).children('.dropgroup').slideDown(80);
  })
  $('.dropdown').on('mouseleave', function(){
    $(this).children('.dropgroup').slideUp(80);
  })
});