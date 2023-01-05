$(document).ready(function(){

    $('.menu > li > a').click(function(event) {
        event.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
      });

//選單淡入淡出
//$('.dropdown').click(function(){
//$('.dropdownOpen').fadeToggle(3000);
//});


//點擊滑動效果
$('.contact-click').click(function(){
  $('html,body').animate({scrollTop:$('#contact').offset().top},800);
    });
    $('.gotopLogo').click(function(e){
      e.preventDefault();
      $("html,body").animate(
        {scrollTop: 0,},300);
        });
    });





//swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters

  speed: 3000,
  loop: true,
  autoplay: {
   delay: 1500,
 },
 effect: 'mode',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//light燈箱
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });
