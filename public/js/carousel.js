$(document).ready(function(){
    $('.carousel-games').slick({
    slidesToShow: 5,
    dots:true,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
    });

    
  });

  $('.banners-carousel').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
  });

  $('.productos-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 2500
  });