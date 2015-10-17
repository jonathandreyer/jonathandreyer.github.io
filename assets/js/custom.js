(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
		document.getElementById("age").textContent = calcAge();
	});
	
	function calcAge() {
		var birthday = new Date(atob('MTk4OS0wMy0wMg=='));
	    var ageDifMs = Date.now() - birthday.getTime();
	    var ageDate = new Date(ageDifMs);
	    return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	$(document).ready(function() {

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 50
		});

		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});
		
		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});
		
		/* ---------------------------------------------- /*
		 * Animated scrolling / Scroll Up
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});
		
		/* ---------------------------------------------- /*
		 * Size
		/* ---------------------------------------------- */
		
		function computeHeightContact() {
			var delta = $(window).height() - $('#contact').outerHeight(true) - $('#footer').outerHeight(true);
			if (delta >= 0) { return delta; } else { return 0; }
		}
		
		$('#intro').height($(window).height());
		$('#contact-adjust').height(computeHeightContact());

		$(window).resize(function(){
			$('#intro').height($(window).height());
			$('#contact-adjust').height(computeHeightContact());
		});

		/* ---------------------------------------------- /*
		 * Background images
		/* ---------------------------------------------- */
		
		$('#intro').backstretch([
			'assets/images/intro1.jpg',
			'assets/images/intro2.jpg',
			'assets/images/intro3.jpg',
			'assets/images/intro4.jpg',
			'assets/images/intro5.jpg',
			'assets/images/intro6.jpg',
			'assets/images/intro7.jpg'
		], {duration: 3000, fade: 750});
		
		/* ---------------------------------------------- /*
 		 * Navbar
		/* ---------------------------------------------- */

		var navbar = $('.navbar');
		var navbarBrand = $('.navbar-brand');
		var navHeight = 150;

		if($(window).width() <= 767) {
			navbar.addClass('custom-collapse');
		} else {
			navbarBrand.addClass('hidden');
		}
		
		if($(this).scrollTop() >= navHeight) {
			navbar.addClass('navbar-color');
			navbarBrand.removeClass('hidden');
		}

		$(window).resize(function() {
			if($(this).width() <= 767) {
				navbar.addClass('custom-collapse');
				navbarBrand.removeClass('hidden');
			}
			else {
				navbar.removeClass('custom-collapse');
				if($(this).scrollTop() >= navHeight) {
					navbarBrand.removeClass('hidden');
				} else {
					navbarBrand.addClass('hidden');
				}
			}
		});

		$(window).scroll(function() {
			if($(this).scrollTop() >= navHeight) {
				navbar.addClass('navbar-color');
				navbarBrand.removeClass('hidden');
			}
			else {
				navbar.removeClass('navbar-color');
				if(!$("#navbar").hasClass("custom-collapse")) {
					navbarBrand.addClass('hidden');
				}
			}
		});
		
		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * Owl slider
		/* ---------------------------------------------- */

		$("#owl-clients").owlCarousel({
			items : 4,
			slideSpeed : 300,
			paginationSpeed : 400,
			autoPlay: 5000
		});

		/* ---------------------------------------------- /*
		 * Rotate
		/* ---------------------------------------------- */

		$(".rotate").textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});
		
		/* ---------------------------------------------- /*
		 * QR Code pop up lightbox
		/* ---------------------------------------------- */

		$('#contact').magnificPopup({
			delegate: 'a.pop-up-lightbox',
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				titleSrc: 'title',
				tError: 'The image could not be loaded.',
			}
		});

		/* ---------------------------------------------- /*
		 * A jQuery plugin for fluid width video embeds
		/* ---------------------------------------------- */

		$(".video").fitVids();
		
		/* ---------------------------------------------- /*
		 * Initialize shuffle plugin
		/* ---------------------------------------------- */

		$('.simple-ajax-popup').magnificPopup({
			type: 'ajax',
			mainClass: 'mfp-portfolio',
			callbacks: {
				parseAjax: function(mfpResponse) {
					$.getScript('assets/js/jquery.fitvids.js');
					$.getScript('assets/js/custom-portfolio.js');
				},
			}
		});

		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};
		
		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$("#contact-form").submit(function(e) {

			e.preventDefault();
			
			var timeIntervalFadeOut = 5000;

			var c_name = $("#c_name").val();
			var c_email = $("#c_email").val();
			var c_message = $("#c_message").val();
			var c_gotcha = $("#c_gotcha").val();
			var responseMessage = $('.ajax-response');
			var btnSend = $('#contact-form button');

			if (( c_name== "" || c_email == "" || c_message == "") || (!isValidEmailAddress(c_email) )) {
				responseMessage.fadeIn(500);
				responseMessage.html('<i class="fa fa-warning"></i> Check all fields.');
				
				setInterval(function () {responseMessage.fadeOut(1000);}, timeIntervalFadeOut);
			}
			else {
				var base64_email = 'bWVAamRyZXllci5jaA==';
				var base_url = '//formspree.io/';
				var action = base_url + atob(base64_email);
				
				$.ajax({
					url: action,
					method: 'POST',
					data: {
						name: c_name,
						email: c_email,
						message: c_message,
						_gotcha: c_gotcha
					},
					dataType: "json",
					beforeSend: function() {
						btnSend.empty();
						btnSend.append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(data) {
						responseMessage.html('Thanks for contacting us!');
						responseMessage.fadeIn(500);
						
						btnSend.empty();
						btnSend.append('<i class="fa fa-bullhorn icon-before"></i> Send it');
						
						setInterval(function () {responseMessage.fadeOut(1000);}, timeIntervalFadeOut);
						
						$('#c_name').val("");
						$('#c_email').val("");
						$('#c_message').val("");
					},
					error: function(err) {
						responseMessage.html('Sorry, something is wrong');
						responseMessage.fadeIn(500);
						
						btnSend.empty();
						btnSend.append('<i class="fa fa-retweet"></i> Try again.');
						
						setInterval(function () {responseMessage.fadeOut(1000);}, timeIntervalFadeOut);
					}
				});
			}

			return false;
		});

	});

})(jQuery);
