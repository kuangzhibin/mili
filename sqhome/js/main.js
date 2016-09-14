$(function(){
    var timer=null;
    $('#warp').fullpage({
      scrollingSpeed:600,
      verticalCentered:true,
      // scrollOverflow:true,
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
      menu: '#menu',
      afterLoad: function(anchorLink, index){
        if(index==1){
          // $('.section1').addClass('onload');
          setTimeout(function(){
            $('.section1').addClass('onload');
          },300);
          $('#menu').css('display', 'none');
        }else{
          $('.section1').removeClass('onload');
          $('#menu').css('display', 'block');
        }
        if(index<=7){
            clearTimeout(timer);
            $('.arrow-up').css('display', 'none');
            if($('.arrow-up').parents('.section').hasClass('active')){
              timer=setTimeout(function(){
                $('.active .arrow-up').css('display', 'block');
              },4000);
            }
        }
      }
    });
    // if($('.section-warp').height()>$('.section-warp').width()*0.5625){
    //   $('.section-warp').height($('.section-warp').width()*0.5625)
    // }
    // $('.section-warp').height($('.section-warp').width()*0.5625);

});