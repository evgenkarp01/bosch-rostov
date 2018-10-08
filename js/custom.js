$( document ).ready(function() {
	$(".slider-slick-banner").slick({
		prevArrow: $('.prev-arrow-banner'),
		nextArrow: $('.next-arrow-banner'),
		speed: 400,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		dotsClass: 'slider__dots',
		responsive: [
            {
              breakpoint: 630,
              settings: {
              	dots: false
              }
            }

          ]
	})

	$(".services-arrow").on("click", function(){
		$(this).parent(".service").toggleClass("active");
		$(this).siblings(".oplet").toggle('fast');
		$(this).children("img").toggleClass("services-arrow-scale");
	});
    $(".sldr-review").slick({
        prevArrow: $('.prev-review-arrow'),
		nextArrow: $('.next-review-arrow'),
		responsive: [
            {
              breakpoint: 480,
              settings: {
              	arrows: false
              }
            }

          ]
    })


    var men=true;

	$("#sandwich").click(function()
	{
		if(men==false)
		{
			$(".menu").slideUp();
			men=!men;
		}
		else
		{
			$(".menu").slideDown();
			men=!men;
		}
	});

		$("#sandwich, .menu_item").click(function() {
	     $("#sandwich").toggleClass("active");
	});
})


