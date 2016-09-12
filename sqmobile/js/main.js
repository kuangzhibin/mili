window.onload = function() {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    // initialSlide: 0,
    preloadImages:false,
    lazyLoading : true,
    lazyLoadingInPrevNext : true,
    onInit: function(swiper){
      swiperAnimateCache(swiper); 
      swiperAnimate(swiper); 
    }, 
    onSlideChangeEnd: function(swiper){ 
      swiperAnimate(swiper);
    }   
  });
}