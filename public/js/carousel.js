$('.banners-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        }
    ]

});

$('.carousel-games').slick({
    infinite: true,
    slidesToShow: 5,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                arrows: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: false
            }
        }
    ]
});

$('.productos-carousel').slick({
    infinite: true,
    slidesToShow: 5,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                arrows: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: false
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: false
            }
        }
    ]
});

$('.comentarios-carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: false
            }
        }
    ]

});

/* $(window).resize(function () {

    let containerHeight = $(".comentario-texto").width();
    let $text = $(".comentario-texto p");



    while ($text.outerWidth() > containerHeight) {
        console.log( $(".comentario-texto").width());
        $text.text(function (index, text) {
            return text.replace(/\W*\s(\S)*$/, '...');
        });
    }
}); */


