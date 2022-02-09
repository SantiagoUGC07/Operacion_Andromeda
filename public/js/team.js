 
 $('.carousel-team').slick({
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: false,
    fade: true,
    asNavFor: '.select-member'
  });
  $('.select-member').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.carousel-team',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });