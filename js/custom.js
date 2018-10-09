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
    
    
    
    $('.modal-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
    
    $("a.ancLinks").click(function () { 
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			$('html,body').animate( { scrollTop: destination }, 400 );
			return false;
		});
    
    $(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scrollup, .callme').fadeIn();
			}
			else {
				$('.scrollup, .callme').fadeOut();
			}
		});

		$('.scrollup').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
    
    $(function(){
        $('[name="phone_footer"]').mask("+7(999) 999-99-99");
        $('[name="phone"]').mask("+7(999) 999-99-99");
    });




    function call(ev) {
 	  var msg   = $(ev).closest('form').serialize();
        $.ajax({
          type: 'POST',
          url: '../php/send.php',
          data: msg,
          success: function(data) {
            $(ev).closest('.result').html(data);
            $(ev).slideUp('fast');
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }
    
    
    $("#contacts-button").on("click", function(event){
        event.preventDefault();
         
         if(($('[name="phone_footer"]').val()!='')&&($('[name="phone_footer"]').val()!='+7(___)___-__-__')){
            call(this);
         }
    });
    
    $("#modal-button").on("click", function(event){
        event.preventDefault();
         
         if(($('[name="phone"]').val()!='')&&($('[name="phone"]').val()!='+7(___)___-__-__')){
            call(this);
         }
    });







})