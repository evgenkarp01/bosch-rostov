$( document ).ready(function() {
	$(".slider-slick-banner").slick({
		prevArrow: $('.prev-arrow-banner'),
		nextArrow: $('.next-arrow-banner'),
		autoplay: true,
		speed: 400,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		dotsClass: 'slider__dots',
	})

	$(".services-arrow").on("click", function(){
		$(this).parent(".service").toggleClass("active");
		$(this).siblings(".oplet").toggle('fast');
		$(this).children("img").toggleClass("services-arrow-scale");
	});
    $(".sldr-review").slick({
        prevArrow: $('.prev-review-arrow'),
		nextArrow: $('.next-review-arrow'),
    })

})


