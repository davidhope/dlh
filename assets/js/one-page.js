jQuery( function($){

	/*----------------------/
	/* PAGE SCROLLING
	/*---------------------*/

	// navigation scrolling
	$('#main-nav, .hero-left').localScroll({
		duration: 1000,
		easing: 'easeInOutExpo'
	});

	// scroll to top
	if( $(window).width() > 992 ) {
		$(window).scroll( function() {
			if( $(this).scrollTop() > 300 ) {
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});

		$('.back-to-top').click( function(e) {
			e.preventDefault();

			$('body, html').animate({
				scrollTop: 0
			}, 800, 'easeInOutExpo');
		});
	}
});