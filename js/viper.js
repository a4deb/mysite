	(function($) {
	
		var $window = $(window),
		$doc_el = $('html, body');

		$('.down-btn').hover(function( down_border, btn_title ) {
			btn_title = $('.down-btn-title').toggleClass('show-down-btn-title');
			down_border = $('.btn-border2').toggleClass('hide-border2');
		});

		$('.nav-btn').hover(function( proj_border ) {
			proj_border = $('.proj-border').toggleClass('add-border');
		});

		var skills_box1 = $('.box-content-1'),
			skills_box2 = $('.box-content-2'),
			skills_box3 = $('.box-content-3'),
			skills_box4 = $('.box-content-4'),

			box_arr2 = [skills_box1, skills_box2, skills_box3, skills_box4];

			var animate_header_elements = function() {

				$doc_el.addClass('height'); // add html, body height of 100%

				var big_header1 = $('.first-header'), big_header2 = $('.second-header'),
					header = $('.header-text'),
					ltl_header = $('header .little-header'),
					proj_btn = $('.nav-btn'),
					proj_border = $('span.proj-border'),
					logo = $('header .logo-wrapper .logo'),
					down_nav = $('.down-btn-pos'),
					header_move_text = $('header .move-text');

				var $header_cont = $('.header-content').css('display', 'none');

					anime({
						targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
						points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
						baseFrequency: 0,
						scale: 1,
						loop: true,
						direction: 'alternate',
						easing: 'easeInOutExpo'
					});

					TweenMax.to('.loader-box', 3, {
						y: -100 + '%',
						delay: 5,
						opacity: 0,
						ease: Expo.easeInOut
					});

					$('.header-elements').css('display', 'block');
					TweenMax.to('.header-background', 3, {
						y: 0, 
						delay: 5,
						ease: Expo.easeInOut
					});

					TweenMax.to($header_cont, 0, {
						display: 'block',
						delay: 6.3
					});

					// header elements
					big_header1.each(function() {
						$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letters-1'>$&</span>"));
					}).css({
						opacity: 1
					});

					big_header2.each(function() {
					$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letters-2'>$&</span>"));
					}).css({
						opacity: 1
					});

					$('.mobile-header').each(function() {
						$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letters-3'>$&</span>"));
					}).css({
						opacity: 1
					});

					anime.timeline({loop: false}).add({
					    targets: '.first-header .letters-1',
					    translateY: [100,0],
					    translateZ: 0,
					    scale: [0.8,1],
					    opacity: [0,1],
					    easing: "easeInOutExpo",
					    duration: 1500,
					    delay: function(el, i) {
					    	return 6000 + 30 * i;
					    }
					});

					$('.second-header span:first-child').addClass('add-spacing');
					$('.second-header span:last-child').addClass('add-margin-left');

					anime.timeline({loop: false}).add({
					    targets: '.second-header .letters-2',
					    translateY: [100,0],
					    translateZ: 0,
					    scale: [0.8,1],
					    opacity: [0,1],
					    easing: "easeInOutExpo",
					    duration: 1500,
					    delay: function(el, i) {
					    	return 6100 + 30 * i;
					    }
					});

					anime.timeline({loop: false}).add({
					    targets: '.mobile-header .letters-3',
					    translateY: [50,0],
					    translateZ: 0,
					    scale: [0.8,1],
					    opacity: [0,1],
					    easing: "easeInOutExpo",
					    duration: 1500,
					    delay: function(el, i) {
					    	return 6100 + 30 * i;
					    }
					});

					TweenMax.to(logo, 3, {
						opacity: 1,
						marginTop: 0,
						delay: 7,
						ease: Expo.easeInOut
					});

					/* social media icons */
					var facebook_icon = $('.header-facebook'),
						instagram_icon = $('.header-ig'),
						pinterest_icon = $('.header-pinterest'),
						github_icon = $('.header-github'),
						linkedin_icon = $('.header-linkedin');

					TweenMax.to(facebook_icon, 2, {
						opacity: 1,
						marginTop: 0,
						delay: 7.8,
						ease: Power3.easeInOut
					});

					TweenMax.to(instagram_icon, 2, {
						opacity: 1,
						marginTop: 0,
						delay: 8,
						ease: Power3.easeInOut
					});

					TweenMax.to(pinterest_icon, 2, {
						opacity: 1,
						marginTop: 0,
						delay: 8.2,
						ease: Power3.easeInOut
					});

					TweenMax.to(github_icon, 2, {
						opacity: 1,
						marginTop: 0,
						delay: 8.4,
						ease: Power3.easeInOut
					});

					TweenMax.to(linkedin_icon, 2, {
						opacity: 1,
						marginTop: 0,
						delay: 8.6,
						ease: Power3.easeInOut
					});

					TweenMax.to(big_header1, 2, {
						top: 0,
						delay: 8.8,
						ease: Expo.easeOut
					});

					TweenMax.to(big_header2, 2, {
						top: 0,
						delay: 9,
						ease: Expo.easeOut
					});

					TweenMax.to('.mobile-header', 2, {
						top: 0,
						delay: 9,
						ease: Expo.easeOut
					});

					TweenMax.to(proj_btn, 2, {
						opacity: 1,
						y: 0,
						delay: 9.4,
						ease: Expo.easeOut
					});

					setTimeout(function() {
						$('#polygon').css({
							transform: 'rotate(360deg)',
							transition: '.75s ease-in'
						});
						$('#active-polygon').css({
							fill: '#090909',
							transition: 'fill .3s ease'
						});
					}, 5000);

					setTimeout(function() {
						ltl_header.addClass('animate-little-header');
						proj_border.css('display', 'block');
						$('.loader-box').css({
							display: 'none'
						});
					}, 10000 + 900);

					TweenMax.to(down_nav, 2.4, {
						opacity: 1,
						scale: 0.8,
						delay: 15.6,
						ease: Elastic.easeInOut
					});

					TweenMax.to('.mute-pos', 2.4, {
						opacity: 1,
						marginTop: 0,
						delay: 8.4,
						ease: Expo.easeInOut
					});

			}

		var play_audio = document.getElementById('bg-audio');

		var preloader = $window.on('load', function() { 
			animate_header_elements();
			// header_down_nav.click();

			setTimeout(function() {
				$('.loader-box').click();
			}, 5000);
		});

		$('.loader-box').on('click', function() {
			play_audio.play();
		});

		// audio controls

		$('.fa-volume-up').on('click', function() {
			play_audio.muted = true;
			$('.fa-volume-mute').css('display', 'block');
			$('.fa-volume-up').css('display', 'none');
		});

		$('.fa-volume-mute').on('click', function() {
			play_audio.muted = false;
			$('.fa-volume-up').css('display', 'block');
			$('.fa-volume-mute').css('display', 'none');
		});

		clearTimeout(animate_header_elements);

		/* button ripple effect */
		var ripple_btn = $('button[id="black-btn-effect"]');
		
		$(ripple_btn).on('mousedown', function( evt ) {

			$('.black-ripple-effect').remove();

				var btn_height = $(this).height(),
					btn_width = $(this).width();

				$(this).prepend("<span class='black-ripple-effect'></span>");
				if (btn_width >= btn_height) {
					btn_height = btn_width;
				} else {
					btn_width = btn_height;
				}

				// center the element when click
				var posX = $(this).offset().left,
					posY = $(this).offset().top;

				var x = evt.pageX - posX - btn_width / 2;
				var y = evt.pageY - posY - btn_height / 2;

				$('.black-ripple-effect').css({
					width: btn_width,
					height: btn_height,
					top: y + 'px',
					left: x + 'px'
				});

		});

		// white ripple effect
		var ripple_btn = $('button[id="white-btn-effect"]');
		
		$(ripple_btn).on('mousedown', function( evt ) {

			$('.white-ripple-effect').remove();

				var btn_height = $(this).height(),
					btn_width = $(this).width();

				$(this).prepend("<span class='white-ripple-effect'></span>");
				if (btn_width >= btn_height) {
					btn_height = btn_width;
				} else {
					btn_width = btn_height;
				}

				// center the element when click
				var posX = $(this).offset().left,
					posY = $(this).offset().top;

				var x = evt.pageX - posX - btn_width / 2;
				var y = evt.pageY - posY - btn_height / 2;

				$('.white-ripple-effect').css({
					width: btn_width,
					height: btn_height,
					top: y + 'px',
					left: x + 'px'
				});

		});

		/* animate right bottom navigator */
		const slide_duration = 1500,
			  box_duration = 2050;

		var animate_header = $('.logo-wrapper, .myheader'),
			top_header_nav = $('.navigations');

		var animate_navigator = function( box_arr ) {
			setTimeout(function( box1, box2 ) {

				box_arr = [box1, box2];
				box_arr[0] = '.box-2';
				box_arr[1] = '.box-3';

				$(box_arr[0]).animate({ top: 0 }, 700, 'easeOutElastic');
				$(box_arr[1]).animate({ top: 0 }, 1400, 'easeOutElastic');

			}, box_duration);

		}	

		/* header down toggle */
		var up_hash = document.querySelector('.continues-up-nav'),
			down_hash = document.querySelector('.continues-down-nav'),
			navigators = $('.navigations ul.navigators-list'),
			header_down_nav = $('a.down-nav'),
			menu = $('.radial-menu-nav'),
			proj_title = $('.proj-title'),
			contact_title = $('.contact-title');

			function show_menu() {

				menu.css({
					top: 0,
					transition: '1200ms ease-in-out'
				});
				
			}

		$(header_down_nav).click(function( e, header_obj ) {
			e.preventDefault();

			setTimeout(function() {
				proj_title.animate({ top: 0 }, slide_duration - 500, 'easeOutExpo');
			}, 4300);

			setTimeout(function() {
				$('.header-background').css('display', 'none');
			}, slide_duration + 1000);

			$doc_el.removeClass('height');
			navigators.addClass('hide-navigators');
			show_menu();

			if (this.hash) {
				setTimeout(function() {
					animate_navigator();
				}, 4500);

				var _hash = this.hash.substr(1),
					_el = $("a[name="+_hash+"]"),
					_pos = _el.position().top;

				if (_hash == 'projects') {	

					// animate project navigation list
					TweenMax.to('.project-nav ul li:nth-child(1)', 2, {
						opacity: 1,
						y: 0,
						delay: 1.2,
						ease: Power3.easeInOut
					});

					TweenMax.to('.project-nav ul li:nth-child(2)', 2, {
						opacity: 1,
						y: 0,
						delay: 1.4,
						ease: Power3.easeInOut
					});

					TweenMax.to('.project-nav ul li:nth-child(3)', 2, {
						opacity: 1,
						y: 0,
						delay: 1.6,
						ease: Power3.easeInOut
					});

					TweenMax.to('.project-nav ul li:nth-child(4)', 2, {
						opacity: 1,
						y: 0,
						delay: 1.8,
						ease: Power3.easeInOut
					});

					TweenMax.to('.project-nav ul li:nth-child(5)', 2, {
						opacity: 1,
						y: 0,
						delay: 2,
						ease: Power3.easeInOut
					});

					$('header').css({
						transform: 'scale(0.8)',
						transition: .3 + 's ' + 'ease'
					});

					$('.header-elements').css({ opacity: 0.5 });

					$doc_el.animate({
						scrollTop: _pos
					}, slide_duration, 'easeInOutExpo');

					setTimeout(function() {
						$('.slides-3').css({
							transform: 'scale(1)',
							transition: 500 + 'ms ' + 'ease'
						});

					}, slide_duration);

					setTimeout(function() {
						proj_title.animate({ top: 0 }, slide_duration - 500, 'easeOutExpo');
					}, 2500);

					down_hash.hash = 'contact';
					up_hash.hash = 'header'; // set up navigation hash to header_obj

				} else {
					return false
				}

				return false;
			}
			
		});

		// minimizer
		var minimizer = function() {
				// minimize box content
				// projects
				$('.slides-3').css({
					transform: 'scale(0.8)',
					transition: .3 + 's ' + 'ease'
				});

				// contact
				$('.slides-4').css({
					transform: 'scale(0.8)',
					transition: .3 + 's ' + 'ease'
				});
		}

		/* project navigation */
		var proj_nav = $('.proj-nav a.main-nav')

		$(proj_nav).click(function( e, down_nav, up_nav ) {
			e.preventDefault();

			setTimeout(function() {
				proj_title.animate({ top: 0 }, slide_duration - 500, 'easeOutExpo');
			}, 4300);

			setTimeout(function() {
				$('.header-background').css('display', 'none');
			}, slide_duration + 1000);

			$doc_el.removeClass('height');
			navigators.addClass('hide-navigators');
			show_menu();

			if (this.hash) {
				setTimeout(function() {
					animate_navigator();
				}, 4500);

				var _hash = this.hash.substr(1),
					_el = $("a[name="+_hash+"]"),
					_pos = _el.position().top;

				if (_hash == 'projects') {	

					// animate project navigation list
					TweenMax.to('.project-nav ul li:nth-child(1)', 2, {
						opacity: 1,
						y: 0,
						delay: 1.2,
						ease: Power3.easeInOut
					});

					TweenMax.to('.project-nav ul li:nth-child(2)', 2, {
						opacity: 1,
						y: 0,
						delay: 1.4,
						ease: Power3.easeInOut
					});

					TweenMax.to('.project-nav ul li:nth-child(3)', 2, {
						opacity: 1,
						y: 0,
						delay: 1.6,
						ease: Power3.easeInOut
					});

					TweenMax.to('.project-nav ul li:nth-child(4)', 2, {
						opacity: 1,
						y: 0,
						delay: 1.8,
						ease: Power3.easeInOut
					});

					TweenMax.to('.project-nav ul li:nth-child(5)', 2, {
						opacity: 1,
						y: 0,
						delay: 2,
						ease: Power3.easeInOut
					});

					$('header').css({
						transform: 'scale(0.8)',
						transition: .3 + 's ' + 'ease'
					});

					$('.header-elements').css({ opacity: 0.5 });

					$doc_el.animate({
						scrollTop: _pos
					}, slide_duration, 'easeInOutExpo');

					setTimeout(function() {
						$('.slides-3').css({
							transform: 'scale(1)',
							transition: 500 + 'ms ' + 'ease'
						});

					}, slide_duration);

					setTimeout(function() {
						proj_title.animate({ top: 0 }, slide_duration - 500, 'easeOutExpo');
					}, 2500);

					down_hash.hash = 'contact';
					up_hash.hash = 'header'; // set up navigation hash to header_obj

				} else {
					return false
				}

				return false;
			}
			
		});

		var down_nav = $('.continues-down-nav'),
			up_btn = $('.continues-up-nav');

		$(down_nav).click(function(e) {
			e.preventDefault();

			if (this.hash) { // if hash not defined, return false

				var _hash = this.hash.substr(1),
					_el = $("a[name="+_hash+"]"),
					_pos = _el.position().top;

				var slide_to_bottom = function() {
					$doc_el.animate({
						scrollTop: _pos
					}, slide_duration, 'easeInOutExpo');
				}	

				/* slide page down continuously */
				if (_hash == 'contact') {

						$('.footer-elements').css('display', 'block');
						/* social media icons */
						var facebook_icon = $('.footer-facebook'),
							instagram_icon = $('.footer-ig'),
							pinterest_icon = $('.footer-pinterest'),
							github_icon = $('.footer-github'),
							linkedin_icon = $('.footer-linkedin');

						TweenMax.to(facebook_icon, 2, {
							opacity: 1,
							marginTop: 0,
							delay: 1.2,
							ease: Power3.easeInOut
						});

						TweenMax.to(instagram_icon, 2, {
							opacity: 1,
							marginTop: 0,
							delay: 1.4,
							ease: Power3.easeInOut
						});

						TweenMax.to(pinterest_icon, 2, {
							opacity: 1,
							marginTop: 0,
							delay: 1.6,
							ease: Power3.easeInOut
						});

						TweenMax.to(github_icon, 2, {
							opacity: 1,
							marginTop: 0,
							delay: 1.8,
							ease: Power3.easeInOut
						});

						TweenMax.to(linkedin_icon, 2, {
							opacity: 1,
							marginTop: 0,
							delay: 2,
							ease: Power3.easeInOut
						});

					$('.slides-3').css({
						transform: 'scale(0.8)',
						transition: .3 + 's ' + 'ease'
					});

					setTimeout(function() {
						$('.slides-4').css({
							transform: 'scale(1)',
							transition: 500 + 'ms ' + 'ease'
						});

					}, slide_duration);

					slide_to_bottom(); // scroll down to contact

					setTimeout(function() {
						proj_title.animate({
							top: -40 + 'px'
						}, slide_duration, 'easeInOutExpo');
					});

					setTimeout(function() {
						contact_title.animate({ top: 0 }, slide_duration - 500, 'easeOutExpo');
					}, 2500);

					setTimeout(function() {

						TweenMax.to('ul.info-list li:nth-child(1)', 1, {
							opacity: 1,
							y: 0,
							delay: 0.5,
							ease: Expo.easeOut
						});

						TweenMax.to('ul.info-list li:nth-child(2)', 2, {
							opacity: 1,
							y: 0,
							delay: 1,
							ease: Expo.easeOut
						});

						TweenMax.to('ul.info-list li:nth-child(3)', 3, {
							opacity: 1,
							y: 0,
							delay: 1.5,
							ease: Expo.easeOut
						});

					}, 5000);

					setTimeout(function() {
						TweenMax.to('.email-title', 1.5, {
							opacity: 1,
							y: 0,
							delay: 1.5,
							ease: Expo.easeOut
						});

						TweenMax.to('.form-container .input-name input', 1.5, {
							opacity: 1,
							x: -50 + '%',
							delay: 1.5,
							ease: Expo.easeOut
						});

						TweenMax.to('.form-container .input-email input', 1.5, {
							opacity: 1,
							x: -50 + '%',
							delay: 1.5,
							ease: Expo.easeOut
						});

						TweenMax.to('.form-container .input-subject input', 1.5, {
							opacity: 1,
							x: -50 + '%',
							delay: 1.5,
							ease: Expo.easeOut
						});

						TweenMax.to('.form-container .input-message textarea', 1.5, {
							opacity: 1,
							x: -50 + '%',
							delay: 1.5,
							ease: Expo.easeOut
						});

						TweenMax.to('.form-container .mat-button', 1.5, {
							opacity: 1,
							x: -50 + '%',
							delay: 1.5,
							ease: Expo.easeOut
						});

					}, slide_duration + 1000);

					setTimeout(function() {

						TweenMax.to('.form-container .name-placeholder', 1.5, {
							opacity: 1,
							delay: 1,
							ease: Expo.easeOut
						});

						TweenMax.to('.form-container .email-placeholder', 1.5, {
							opacity: 1,
							delay: 1,
							ease: Expo.easeOut
						});

						TweenMax.to('.form-container .subj-placeholder', 1.5, {
							opacity: 1,
							delay: 1,
							ease: Expo.easeOut
						});

						TweenMax.to('.form-container .msg-placeholder', 1.5, {
							opacity: 1,
							delay: 1,
							ease: Expo.easeOut
						});

					}, slide_duration + 3000);

					up_hash.hash = 'projects';

				} else {
					return false;
				}

				return false;
			}

		});

				// slides up toggle
		$(up_btn).click(function( e, header_obj, navigator_box ) {
			e.preventDefault();

			if (this.hash) {

				var _hash = this.hash.substr(1),
					_el = $("a[name="+_hash+"]"),
					_pos = _el.position().top;

					var scroll_to_top = function() {
						$doc_el.animate({
							scrollTop: _pos
						}, slide_duration, 'easeInOutExpo');
					}

				if (_hash == 'header') {

					setTimeout(function() {
						menu.css({
							top: '-80px',
							transition: '1200ms ease-in-out'
						});
					}, 0);

					setTimeout(function() {

						$('header').css({
							transform: 'scale(1)',
							transition: 500 + 'ms ' + 'ease'
						});

						$('.header-elements').css({ opacity: 1 });
						$('.header-background').css('display', 'block');

					}, slide_duration);

					$('.slides-3').css({
						transform: 'scale(0.8)',
						transition: .3 + 's ' + 'ease'
					});

					$('.about-elements').css({ opacity: 0.3 });

					scroll_to_top();	// scroll up to header
					this.hash = '';
					header_down_nav.hash = 'projects';
					navigators.removeClass('hide-navigators');

				} else if (_hash == 'projects') {

					$('.slides-4').css({
						transform: 'scale(0.8)',
						transition: .3 + 's ' + 'ease'
					});

					setTimeout(function() {
						$('.slides-3').css({
							transform: 'scale(1)',
							transition: 500 + 'ms ' + 'ease'
						});
					}, slide_duration);

					contact_title.animate({ top: -40 + 'px' }, slide_duration, 'easeInOutExpo');
					setTimeout(function() {
						proj_title.animate({ top: 0 }, slide_duration - 500, 'easeOutExpo');						
					}, 2500);

					scroll_to_top(); // scroll up to header
					this.hash = 'header';
					down_hash.hash = 'contact';

				} else {

					return false;

				}

				return false;
			}			

		});

		/* animate inputs */
		var name_input = $('.form-container .mat-inputs .name-input'),
			email_input = $('.form-container .mat-inputs .email-input'),
			subj_input = $('.form-container .mat-inputs .subj-input'),
			msg_textarea = $('.form-container .mat-inputs .message-input');

			$(name_input).focus(function( input_background ) {

				setTimeout(function() {

					input_background = $('#name-background');
					input_background.addClass('add-height');

				}, 500);

			}).blur(function( input_background ) {

				input_background = $('#name-background');
				input_background.removeClass('add-height');

			});

			$(email_input).focus(function( input_background ) {

				setTimeout(function() {

					input_background = $('#email-background');
					input_background.addClass('add-height');

				}, 500);

			}).blur(function( email_bg ) {

				input_background = $('#email-background');
				input_background.removeClass('add-height');

			});

			$(subj_input).focus(function( input_background ) {

				setTimeout(function() {

					input_background = $('#subj-background');
					input_background.addClass('add-height');

				}, 500);

			}).blur(function( email_bg ) {

				input_background = $('#subj-background');
				input_background.removeClass('add-height');

			});

			$(msg_textarea).focus(function( input_background ) {

				setTimeout(function() {

					input_background = $('#message-background');
					input_background.addClass('add-height');

				}, 500);

			}).blur(function( email_bg ) {

				input_background = $('#message-background');
				input_background.removeClass('add-height');

			});

		// navigate project contents
		$('.proj-btn-1').click(function() {

			TweenMax.to('.project-section > ul.project-list > li.project-box-1 > .fa', 1, {
				y: -40,
				opacity: 0,
				delay: 0,
				ease: Expo.easeOut
			});

			TweenMax.to('.proj-btn-1', 1, {
				opacity: 0,
				y: 30,
				delay: 0,
				ease: Expo.easeOut
			});

			setTimeout(function() {
				$('.proj-btn-1').hide();
			}, 80);

			TweenMax.to('#project-content-1 > ul > li:nth-child(1)', 2, {
				display: 'inline-flex',
				y: 0,
				delay: 1,
				ease: Expo.easeOut
			});

			TweenMax.to('#project-content-1 > ul > li:nth-child(2)', 2, {
				display: 'inline-flex',
				y: 0,
				delay: 1.2,
				ease: Expo.easeOut
			});

			TweenMax.to('#project-content-1 > ul > li:nth-child(3)', 2, {
				display: 'inline-flex',
				y: 0,
				delay: 1.4,
				ease: Expo.easeOut
			});

		});

		// scroll counter for project
    //     var counter = document.querySelector(".project-sections .percent");

    //         TweenLite.set(counter, {
    //             xPercent: -5,
    //             yPercent: -5,
    //         });
            
    //         window.addEventListener("mousemove", moveCounter);

    //         function moveCounter(e) {
    //             TweenLite.to(counter, 0.5, {
    //                 x: e.clientX,
    //                 y: e.clientY,
    //             });
    //         }

    //         function progress1() {
    //             var currY = $('.project-section-1 .project-section').scrollTop();
			 //    var postHeight = $('.project-section-1 .project-section').height();
				// var scrollHeight = $('.project-section-1 .project-section .grid').height();

			 //    // Current percentual position
				// var scrollPercent = (currY / (scrollHeight - postHeight)) * 100;

			 //    $('.fill').height(scrollPercent + "%").css({ backgroundColor: '#ff8f42' });
			 //    $('h1.scroll-text').text(Math.round(scrollPercent) + "%").css({ color: '#ff8f42' });
    //         }

    //         function progress2() {
    //             var currY = $('.project-section-2 .project-section').scrollTop();
			 //    var postHeight = $('.project-section-2 .project-section').height();
				// var scrollHeight = $('.project-section-2 .project-section .grid').height();

			 //    // Current percentual position
				// var scrollPercent = (currY / (scrollHeight - postHeight)) * 100;

			 //    $('.fill').height(scrollPercent + "%").css({ backgroundColor: '#ff8f42' });
			 //    $('h1.scroll-text').text(Math.round(scrollPercent) + "%").css({ color: '#ff8f42' });
    //         }

    //         function progress3() {
    //             var currY = $('.project-section-3 .project-section').scrollTop();
			 //    var postHeight = $('.project-section-3 .project-section').height();
				// var scrollHeight = $('.project-section-3 .project-section .grid').height();

			 //    // Current percentual position
				// var scrollPercent = (currY / (scrollHeight - postHeight)) * 100;

			 //    $('.fill').height(scrollPercent + "%").css({ backgroundColor: '#ff8f42' });
			 //    $('h1.scroll-text').text(Math.round(scrollPercent) + "%").css({ color: '#ff8f42' });
    //         }

    //         function progress4() {
    //             var currY = $('.project-section-4 .project-section').scrollTop();
			 //    var postHeight = $('.project-section-4 .project-section').height();
				// var scrollHeight = $('.project-section-4 .project-section .grid').height();

			 //    // Current percentual position
				// var scrollPercent = (currY / (scrollHeight - postHeight)) * 100;

			 //    $('.fill').height(scrollPercent + "%").css({ backgroundColor: '#ff8f42' });
			 //    $('h1.scroll-text').text(Math.round(scrollPercent) + "%").css({ color: '#ff8f42' });
    //         }

    //         function progress5() {
    //             var currY = $('.project-section-5 .project-section').scrollTop();
			 //    var postHeight = $('.project-section-5 .project-section').height();
				// var scrollHeight = $('.project-section-5 .project-section .grid').height();

			 //    // Current percentual position
				// var scrollPercent = (currY / (scrollHeight - postHeight)) * 100;

			 //    $('.fill').height(scrollPercent + "%").css({ backgroundColor: '#ff8f42' });
			 //    $('h1.scroll-text').text(Math.round(scrollPercent) + "%").css({ color: '#ff8f42' });
    //         }
    //         progress1();
    //         progress2();
    //         progress3();
    //         progress4();
    //         progress5();

    //         $('.project-section-1 .project-section').on('scroll', progress1);	
    //         $('.project-section-2 .project-section').on('scroll', progress2);	
    //         $('.project-section-3 .project-section').on('scroll', progress3);	
    //         $('.project-section-4 .project-section').on('scroll', progress4);	
    //         $('.project-section-5 .project-section').on('scroll', progress5);	

	        // show images on scroll
            function isElementInViewPort(el) {
            	if (typeof jQuery === "function" && el instanceof jQuery) {
            		el = el[0];
            	}
            	var rect = el.getBoundingClientRect();
            	return (
            		(rect.top <= 0 
            			&& rect.bottom >= 0) 
            		|| 
            		(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            		   	rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
            		   	(rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) 
            		   	);
            }

            var scroll = window.requestAnimationFrame || function(callback) {
            	window.setTimeout(callback, 1000/60);
            }

            var element_to_show = document.querySelectorAll('.show-on-scroll');

            function loop() {
            	element_to_show.forEach(function (element) {
            		if (isElementInViewPort(element)) {
            			element.classList.add('is-visible');
            		} else {
            			element.classList.remove('is-visible');
            		}
            	});

            	scroll(loop);
            }

	        $('.project-section').on('scroll', function() {
	            loop();
	        });

	        $('.scroll-indicator').bind('mousewheel', function() {

				$('.scroll-indicator').css({
					marginTop: '-30px',
					opacity: '0',
					transition: '.3s ease'
				});

				setTimeout(function() {
					$('.scroll-indicator').hide();
				}, 300);

				$('.visible-img').addClass('is-visible');

	        });

	        $('.scroll-indicator').on('click', function() {

				$('.scroll-indicator').css({
					marginTop: '-30px',
					opacity: '0',
					transition: '.3s ease'
				});

				setTimeout(function() {
					$('.scroll-indicator').hide();
				}, 300);

				$('.visible-img').addClass('is-visible');

	        });

	        // project nav hover animation

	        $('.project-nav ul li:nth-child(1)').hover(function() {
	        	$(this).toggleClass('li-hover');
	        	$('.project-nav ul li:nth-child(1) img').toggleClass('show-image');
	        	$('.project-nav ul li:nth-child(1) a').toggleClass('project-nav-bg');
	        });

	        $('.project-nav ul li:nth-child(2)').hover(function() {
	        	$(this).toggleClass('li-hover');
	        	$('.project-nav ul li:nth-child(2) img').toggleClass('show-image');
	        	$('.project-nav ul li:nth-child(2) a').toggleClass('project-nav-bg');
	        });

	        $('.project-nav ul li:nth-child(3)').hover(function() {
	        	$(this).toggleClass('li-hover');
	        	$('.project-nav ul li:nth-child(3) img').toggleClass('show-image');
	        	$('.project-nav ul li:nth-child(3) a').toggleClass('project-nav-bg');
	        });

	        $('.project-nav ul li:nth-child(4)').hover(function() {
	        	$(this).toggleClass('li-hover');
	        	$('.project-nav ul li:nth-child(4) img').toggleClass('show-image');
	        	$('.project-nav ul li:nth-child(4) a').toggleClass('project-nav-bg');
	        });

	        $('.project-nav ul li:nth-child(5)').hover(function() {
	        	$(this).toggleClass('li-hover');
	        	$('.project-nav ul li:nth-child(5) img').toggleClass('show-image');
	        	$('.project-nav ul li:nth-child(5) a').toggleClass('project-nav-bg');
	        });

	        $('.project-section-close a').hover(function() {
	        	$('.project-section-close span').toggleClass('close-label');
	        });

	        // project section navigator

	        var proj_nav_1 = $('.proj-nav-1'),
	        	proj_nav_2 = $('.proj-nav-2'),
	        	proj_nav_3 = $('.proj-nav-3'),
	        	proj_nav_4 = $('.proj-nav-4'),
	        	proj_nav_5 = $('.proj-nav-5');

	        	// close project section
	        	$('.project-section-close a').on('click', function(e) {
	        		e.preventDefault();
	        		TweenMax.to('.project-nav', 3, {
						opacity: 1,
						ease: Power3.easeOut
					});

					setTimeout(function() {
						$('.project-nav').css({
							display: 'block'
						});

						TweenMax.to('.project-nav', 0.75, {
							scale: 1,
							opacity: 1,
							ease: Power3.ease
						});
					}, 3000);

					$('.project-section-close').css({
						right: -1 + '%',
						opacity: 0,
						zIndex: 0,
						transition: '.75s ease'
					});

					TweenMax.to('.project-sections', 2, {
						y: 100 + 'vh',
						opacity: 0,
						ease: Power3.easeOut
					});
	        	});

	        	// project section 1
	        	proj_nav_1.on('click', function(e) {
	        		e.preventDefault();

					$('.project-section-1').css({
						display: 'block'
					});

	        		TweenMax.to('.project-nav', 0.3, {
						scale: 1.1,
						opacity: 0,
						ease: Power3.ease
					});

					setTimeout(function() {
						$('.project-nav').css({
							display: 'none'
						});
					}, 1000);

					TweenMax.to('.project-section-1', 3, {
						y: 0,
						opacity: 1,
						ease: Power3.easeInOut
					});

		        	setTimeout(function() {
						$('.project-section-close').css({
							right: 0,
							opacity: 1,
							zIndex: 10000,
							transition: '.3s ease-out'
						});
					}, 3000);

	        	});

	        	// project section 2
	        	proj_nav_2.on('click', function(e) {
	        		e.preventDefault();

	        		$('.project-section-2').css({
						display: 'block'
					});

	        		TweenMax.to('.project-nav', 0.3, {
						scale: 1.1,
						opacity: 0,
						ease: Power3.ease
					});

					setTimeout(function() {
						$('.project-nav').css({
							display: 'none'
						});
					}, 1000);

					TweenMax.to('.project-section-2', 3, {
						y: 0,
						opacity: 1,
						ease: Power3.easeInOut
					});

					setTimeout(function() {
						$('.project-section-close').css({
							right: 0,
							opacity: 1,
							zIndex: 10000,
							transition: '.3s ease-out'
						});
					}, 3000);

	        	});

	        	// project section 3
	        	proj_nav_3.on('click', function(e) {
	        		e.preventDefault();

	        		$('.project-section-3').css({
						display: 'block'
					});

	        		TweenMax.to('.project-nav', 0.3, {
						scale: 1.1,
						opacity: 0,
						ease: Power3.ease
					});

					setTimeout(function() {
						$('.project-nav').css({
							display: 'none'
						});
					}, 1000);

					TweenMax.to('.project-section-3', 3, {
						y: 0,
						opacity: 1,
						ease: Power3.easeInOut
					});

					setTimeout(function() {
						$('.project-section-close').css({
							right: 0,
							opacity: 1,
							zIndex: 10000,
							transition: '.3s ease-out'
						});
					}, 3000);

	        	});

	        	// project section 4
	        	proj_nav_4.on('click', function(e) {
	        		e.preventDefault();

	        		$('.project-section-4').css({
						display: 'block'
					});

	        		TweenMax.to('.project-nav', 0.3, {
						scale: 1.1,
						opacity: 0,
						ease: Power3.ease
					});

					setTimeout(function() {
						$('.project-nav').css({
							display: 'none'
						});
					}, 1000);

					TweenMax.to('.project-section-4', 3, {
						y: 0,
						opacity: 1,
						ease: Power3.easeInOut
					});

					setTimeout(function() {
						$('.project-section-close').css({
							right: 0,
							opacity: 1,
							zIndex: 10000,
							transition: '.3s ease-out'
						});
					}, 3000);

	        	});

	        	// project section 5
	        	proj_nav_5.on('click', function(e) {
	        		e.preventDefault();

	        		$('.project-section-5').css({
						display: 'block'
					});

	        		TweenMax.to('.project-nav', 0.3, {
						scale: 1.1,
						opacity: 0,
						ease: Power3.ease
					});

					setTimeout(function() {
						$('.project-nav').css({
							display: 'none'
						});
					}, 1000);

					TweenMax.to('.project-section-5', 3, {
						y: 0,
						opacity: 1,
						ease: Power3.easeInOut
					});

					setTimeout(function() {
						$('.project-section-close').css({
							right: 0,
							opacity: 1,
							zIndex: 10000,
							transition: '.3s ease-out'
						});
					}, 3000);

	        	});
		       

	})(jQuery);
	        
	        
	        
