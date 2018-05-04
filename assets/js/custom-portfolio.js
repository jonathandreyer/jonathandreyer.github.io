(function($){

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Owl slider
		/* ---------------------------------------------- */

		$('.portfolio-slider').owlCarousel({
			navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			navigation: true,
			pagination: false,
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem: true
		});

		$('body').fitVids();

		$(document).keyup(function(i){
			var owl = jQuery(".owl-carousel");
			if(i.keyCode==37) {
			    owl.trigger('owl.prev');
		    } else if (i.keyCode==39) {
			    owl.trigger('owl.next');
		    }
		});
	});

})(jQuery);
