$(document).ready( function() {

	/*----------------------------/
	/* POSTS CAROUSEL
	/*---------------------------*/

	if( $('.posts-carousel').length > 0 ) {
		$('.posts-carousel').slick({
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1281,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 480,
					settings: "unslick"
				}
			]
		});
	}


	/*----------------------------/
	/* BIG SEARCH BOX
	/*---------------------------*/

	if( $('.big-searchbox').length > 0 ) {
		$('.btn-open-searchbox').on( 'click', function(e) {
			e.preventDefault();
			$('.big-searchbox').addClass('active')
			.find('input.keyword').focus();
		});

		$('.btn-close-searchbox').on( 'click', function(e) {
			e.preventDefault();
			$('.big-searchbox').removeClass('active');
		});
	}


	/*----------------------------/
	/* GO TO TOP SCROLLING
	/*---------------------------*/

	if( $(window).width() > 992 ) {
		$(window).scroll( function() {
			if( $(this).scrollTop() > 800 ) {
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
	

	/*-----------------------------------/
	/* AJAX CALL FOR NEWSLETTER FUNCTION
	/*----------------------------------*/

	if( $('.newsletter-form').length > 0 ) {
		$newsletter = $('.newsletter-form');
		$newsletter.find('.btn').click( function() {
			$url = 'php/mailchimp.php';

			$attr = $newsletter.attr('action');
			if (typeof $attr !== typeof undefined && $attr !== false) {
				if($newsletter.attr('action') != '') $url = $newsletter.attr('action');
			}

			subscribe($newsletter, $url);
		});
	}
	
	function subscribe(newsletter, formUrl) {
		$btn = newsletter.find('.btn');

		$.ajax({

			url: formUrl,
			type: 'POST',
			dataType: 'json',
			cache: false,
			data: {
				email: newsletter.find('input[name="email"]').val(),
			},
			beforeSend: function(){
				$btn.addClass('loading');
				$btn.attr('disabled', 'disabled');
			},
			success: function( data, textStatus, XMLHttpRequest ){
				
				var className = '';

				if( data.result == true ){
					className = 'alert-success';
				}else {
					className = 'alert-danger';
				}

				newsletter.find('.alert').html( data.message )
				.removeClass( 'alert-danger alert-success' )
				.addClass( 'alert active ' + className )
				.slideDown(300);

				$btn.removeClass('loading');
				$btn.removeAttr('disabled');
			},
			error: function( XMLHttpRequest, textStatus, errorThrown ){
				console.log("AJAX ERROR: \n" + XMLHttpRequest.responseText + "\n" + textStatus);
			}
			
		});
	}

	

	/*-----------------------------------/
	/* TWITTER FETCHER
	/*----------------------------------*/

	if( $('#tweets').length > 0 ) {
		function momentDateFormatter(date, dateString) {
			return moment(dateString).fromNow();
		}

		function populateTpl(tweets){
			var element = document.getElementById('tweets');
			var html = '<ul class="list-inline">';
			for (var i = 0, lgth = tweets.length; i < lgth ; i++) {
				var tweetObject = tweets[i];
				html += '<li>'
				+ '<p class="tweet-infos">' + tweetObject.author + '</p>'
				+ '<p class="tweet-content">' + tweetObject.tweet + '</p>'
				+ '<span class="tweet-time">' + tweetObject.time  + '</span>'
				+ '</li>';
			}

			html += '</ul>';
			element.innerHTML = html;
		}

		twitterFetcher.fetch({
			"id": '441767385733668865',
			"maxTweets": 5,
			"enableLinks": true,
			"dateFunction": momentDateFormatter,
			"dataOnly": true,
			"customCallback": populateTpl
		});
	}
});

