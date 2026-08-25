(function($){

	$(function() {

		/* ---------------------------------------------- /*
		 * Owl slider
		/* ---------------------------------------------- */

		$('.portfolio-slider').owlCarousel({
			navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
			nav: true,
			dots: false,
			smartSpeed: 400,
			items: 1,
			autoplay: false
		});

		$(document).on('keyup', function(e){
			var owl = $('.owl-carousel');
			if (e.keyCode === 37) {
				owl.trigger('prev.owl.carousel');
			} else if (e.keyCode === 39) {
				owl.trigger('next.owl.carousel');
			}
		});

	});

})(jQuery);
