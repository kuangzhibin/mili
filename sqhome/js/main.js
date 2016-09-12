$(function(){
    $('#warp').fullpage({
      scrollingSpeed:600,
      verticalCentered:true,
      // scrollOverflow:true,
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
      menu: '#menu',
      afterLoad: function(anchorLink, index){
        if(index==1){
          $('.section1').addClass('onload');
          $('#menu').css('display', 'none');
        }else{
          $('.section1').removeClass('onload');
          $('#menu').css('display', 'block');
        }
      }
    });
    // if($('.section-warp').height()>$('.section-warp').width()*0.5625){
    //   $('.section-warp').height($('.section-warp').width()*0.5625)
    // }
    // $('.section-warp').height($('.section-warp').width()*0.5625);
});