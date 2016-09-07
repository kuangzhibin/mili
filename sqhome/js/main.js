$(function(){
    $('#warp').fullpage();
    setTimeout(function(){
      $('.section1').addClass('onload');
    },30);
    $('.section-warp').height($('#warp').height());
});