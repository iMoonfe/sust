$(function() {

	$('.nav a').on('click', function(event){
		event.preventDefault();
		var hr = $(this).attr('href');
		$('body, html').animate({scrollTop : $(hr).offset().top} ,1000);
	})

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
		$('.nav').toggle();
	});

	var ww = $(window).width();
	if(ww < 992){
		$('.nav a').on('click', function(event){
			$('.nav').hide();
			$(".sandwich").removeClass("active");
		});
	}

	var owl = $('.rev-carousel');
      owl.owlCarousel({
        margin: 20,
        loop: true,
        nav:true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          }
        }
      })

});
