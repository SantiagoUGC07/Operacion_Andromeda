 
/*$('.carousel-team').slick({
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
});*/


/*
<script type="text/javascript">
    jQuery(function(){
    jQuery('#showall').click(function(){
    jQuery('.target').show();
    });

    jQuery('.single').click(function(){
      jQuery('.target').hide();
      jQuery('#div'+$(this).attr('target')).show();
    });
    });
</script>*/

function hola()
{
jQuery('#showall').click(function(){
jQuery('.target').show();
});

jQuery('.single').click(function(){
  jQuery('.target').hide();
  jQuery('#div'+$(this).attr('target')).show();
});
}
hola();

