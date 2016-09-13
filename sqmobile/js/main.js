window.onload = function() {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    onInit: function(swiper){
      swiperAnimateCache(swiper); 
      swiperAnimate(swiper); 
    }, 
    // onSlideChangeStart:function(swiper){
    //   if(swiper.activeIndex>=1){
    //     $('.swiper-slide .delay').css('display','block');
    //   }
    // },
    onSlideChangeEnd: function(swiper){ 
      swiperAnimate(swiper);
    }   
  });
}