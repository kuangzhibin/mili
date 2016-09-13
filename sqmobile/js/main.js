window.onload = function() {
  var timer1=null;
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    onInit: function(swiper){
      swiperAnimateCache(swiper); 
      swiperAnimate(swiper);
      setTimeout(function(){
       $('.slide1 .arrow-up').css('display',"block");
      },2500); 
    }, 
    onSlideChangeStart:function(swiper){
      // if(swiper.activeIndex>=1){
      //   $('.swiper-slide .delay').css('display','block');
      // }
      $('.arrow-up').css('display',"none");
    },
    onSlideChangeEnd: function(swiper){ 
      swiperAnimate(swiper);
      clearTimeout(timer1)
      if(swiper.activeIndex<=6){
        timer1=setTimeout(function(){
         $('.swiper-slide-active .arrow-up').css('display',"block");
        },3000); 
      }
    }   
  });
}