; // Начинать писать отсюда!!!!

$(document).ready(function () {

	function scrollMenu() {
		var windowTop = $(window).scrollTop();
		if (windowTop > 100) {
			$('.header-nav').addClass('fixed');
		} else {
			$('.header-nav').removeClass('fixed');

		}

	}
	scrollMenu();

	$(".service-item").hover(function () {
		var popup = $(this).find('.service-popup');
		popup.addClass('active');
	}, function () {
		var popup = $(this).find('.service-popup');
		popup.removeClass('active');
	});

	$(window).scroll(function () {
		scrollMenu();
	});

	$('.scroll-link').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('.popup-link').magnificPopup({
		type: 'inline',
	});

	$('.popup-link-port').click(function () {
		dataSlide = $(this).attr('data-slide-number');

	})
	$('.popup-link-port').magnificPopup({
		type: 'inline',
		callbacks: {
			open: function () {
				if (!($('.js-portfolio-date-slider').hasClass('slick-slider'))) {
					$('.js-portfolio-date-slider').slick({
						speed: 300,
						slidesToShow: 6,
						slidesToScroll: 1,
						vertical: true,
						lazyLoad: 'ondemand',
						focusOnSelect: true,
						prevArrow: '.date-slider__controls--prev',
						nextArrow: '.date-slider__controls--next',
						asNavFor: '.js-portfolio-current-date-slider',
						responsive: [{
							breakpoint: 1050,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
								vertical: false,
							}
						}, {
							breakpoint: 750,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
								vertical: false,
							}
						}, {
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								vertical: false,
							}
						}]
					});
					setTimeout(function () {
						$('.js-portfolio-date-slider').slick('slickGoTo', dataSlide);
					}, 700);

					$('.js-portfolio-current-date-slider').slick({
						speed: 300,
						slidesToShow: 1,
						slidesToScroll: 1,
						asNavFor: '.js-portfolio-date-slider',
						arrows: false,
						touchMove: false,
						swipe: false
					});
					$('.js-portfolio-main-slider').slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						// infinite: false,
						lazyLoad: 'ondemand',
						fade: true,
						asNavFor: '.js-portfolio-main-prev-slider',
						prevArrow: '.portfolio-main-slider__controls--prev',
						nextArrow: '.portfolio-main-slider__controls--next'
					});
					$('.js-portfolio-main-prev-slider').slick({
						slidesToShow: 5,
						slidesToScroll: 1,
						lazyLoad: 'ondemand',
						// infinite: false,
						asNavFor: '.js-portfolio-main-slider',
						focusOnSelect: true,
						prevArrow: '.main-prev-slider__controls--prev',
						nextArrow: '.main-prev-slider__controls--next',
						responsive: [{
							breakpoint: 750,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
							}
						}, {
							breakpoint: 600,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						}, {
							breakpoint: 500,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						}]

					});

				} else {

					$('.js-portfolio-date-slider').slick('slickGoTo', dataSlide);
				}
			},
			close: function () {}
		}
	});

	$('#close-popup').on("click", function () {
		$.magnificPopup.close();
	});
	$('#close-popup2').on("click", function () {
		$.magnificPopup.close();
	});
	$('#close-popup3').on("click", function () {
		$.magnificPopup.close();
	});

	$('.sandwich').click(function () {
		var menu = $('.header-nav__list');
		$(this).toggleClass('active');
		if (menu.is(':visible')) {
			menu.slideUp();
		} else {
			menu.slideDown();
		}

	})

	$('.js-review-slider').slick({
		dots: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '.reviews-slider__prev',
		nextArrow: '.reviews-slider__next',
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}]
	});

	$('.js-price-item__wrap').slick({
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.price-slider__prev',
		nextArrow: '.price-slider__next',
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		}, {
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				adaptiveHeight: true,
			}
		}]
	});
	$(document).on('click', '.portfolio-main-slider__controls--prev', function () {
		$('.js-portfolio-main-slider').slick('slickPrev');
	});

	$(document).on('click', '.portfolio-main-slider__controls--next', function () {
		$('.js-portfolio-main-slider').slick('slickNext');
	});

	$(document).on('click', '.main-prev-slider__controls--prev', function () {
		$('.js-portfolio-main-prev-slider').slick('slickPrev');
	});

	$(document).on('click', '.main-prev-slider__controls--next', function () {
		$('.js-portfolio-main-prev-slider').slick('slickNext');
	});
})

$("form").on("submit", function () {
	var formID = '#' + $(this).attr("id");
	var th = $(this);
	$(formID).validate({
		rules: {
			name: 'required',
			phone: 'required'
		},
		messages: {
			name: 'Введите корректные данные',
			phone: 'Введите корректные данные'
		}
	});
	if ($(formID).valid()) {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function () {
			console.log('test');
			console.log($(this));
			$(formID).hide();
			$(formID).parent().find('.success-form').addClass('success-show')
		});

	}
	return false;
})
