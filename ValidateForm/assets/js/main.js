jQuery(document).ready(function($) {

    var headerFixed = function() {
        if ($('body').hasClass('header-sticky')) {
            var nav = $('#site-header');

            if (nav.length) {
                var offsetTop = nav.offset().top,
                    headerHeight = nav.height(),
                    injectSpace = $('<div />', {height: headerHeight}).insertAfter(nav);
                //console.log(offsetTop)
            }

            $(window).on('load scroll', function() {
                if($(window).scrollTop() > offsetTop ) {
                   // alert('lon hon');
                   injectSpace.show();
                   nav.addClass('is-fixed');
                } else {
                    injectSpace.hide();
                    nav.removeClass('is-fixed');
                }
            });
        } 
    };

    var hereSection = function() {
        $(window).on('load resize', function() {
            var 
            hero = $('#hero-section'),
            heroContent = hero.find('.hero-content'),
            contentHeight = heroContent.height(),
            sliderHeight = $(window).height(),
            headerHeight = $('#site-header-wrap').height();

            //console.log(headerHeight);
            if($('body').hasClass('header-sticky') ) {
                headerHeight = headerHeight / 2;
                var contentMargin = (sliderHeight - contentHeight - headerHeight) /2;

                //
                hero.css({height: sliderHeight + 'px'});

                heroContent.css({
                    "margin-top" : headerHeight + contentMargin + "px"
                });
               // console.log(headerHeight);
            }
        });

        if ( $().vegas ) {
                $("#hero-section").each(function() {
                    var
                    $this = $(this),
                    number = $this.data('number'),
                    number = parseInt(number),
                    effect = $this.data('effect'),
                    i = 1,
                    slides = [];

                    while ( i <= number ) {
                        slides.push( {src:$this.data('image-'+i)} );
                        i++;
                    }

                    $this.vegas({
                        slides: slides,
                        overlay: true,
                        transition: effect
                    });
                });
            }

            if ( $('.hero-title').is('.scroll') ) {
                var
                current = 1,
                height = $('.hero-title').height(),
                numberDivs = $('.hero-title').children().length,
                first = $('.hero-title h1:nth-child(1)');

                setInterval(function() {
                    var number = current * -height;
                    
                    first.css('margin-top', number + 'px');
                    if ( current === numberDivs ) {
                        first.css('margin-top', '0px');
                        current = 1;
                    } else current++;
                }, 2500);
            }

            if ( $().fitText ) {
                $('#hero-section .hero-title').each(function(){
                    var min = $(this).data("min");
                    var max = $(this).data("max");

                    $(this).children('h1').fitText(1.8, {
                        minFontSize: min,
                        maxFontSize: max
                    });
                });
            }
    };

    var handlerHeader = function() {
        if($('body').hasClass('one-page')) {
            //$('#main-nav ul li a')
            //alert('has class one page');
            //var mainHeader = $('#site-header').outerHeight();  
            //console.log(mainHeader)

           // var anchor = $this
            $('.one-page #main-nav ul > li > a').on('click', function() {
                // console.log('co click');
                var anchor = $(this).attr('href').split('#')[1];
                // console.log(anchor)
                if ( anchor ) {
                    if ( $('#'+ anchor).length > 0 ) {
                        var target = $('#'+anchor).offset().top - 65;

                        $('html, body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
                    }
                }
                $(this).parent().addClass('active').siblings().removeClass('active');
                return false;
            });
        }

        $('.scroll-target').on('click',function() {
            var anchor = $(this).attr('href').split('#')[1];

            $(this).parent()
                .addClass('current-menu-item')
                .siblings()
                    .removeClass('current-menu-item');

            if ( anchor ) {
                if ( $('#'+anchor).length > 0 ) {
                    var headerHeight = 0;

                    if ( $('body').hasClass('header-sticky') )
                        headerHeight = $('#site-header').height();

                    var target = $('#' + anchor).offset().top - headerHeight;

                    $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
               }
            }
            return false;
        });
    };


	var accordion = function() {
        var args = {easing:'easeOutExpo', duration:300};
        $('.accordion-wrap .accordion-item.active').find('.accordion-content').show();
        $('.accordion-wrap .accordion-heading').on('click', function() {
            if (!$(this).parent().is('active')) {
                //console.log('is-active');
                $(this).parent().toggleClass('active')
                .children('.accordion-content').slideToggle()
                .parent().siblings('.active').removeClass('active')
                .children('.accordion-content').slideToggle();

            }
            else {
                
                $(this).toggleClass('acitve');
                $(this).next().slideToggle();
            }

        });
    };

    var tabs = function() {
        $('.tabs-wrap').each(function() {
            $(this).children('.tab-content.active').show();

            // click tab nav 
            $(this).find('.tab-nav .tab-nav-item').on('click', function() {
                var index = $(this).index(),
                    contentIndex = $(this).parents('.tabs-wrap').children('.tab-content').eq(index);
                //console.log(index);

                $(this).addClass('active').siblings().removeClass('active');
                contentIndex.addClass('active').siblings('.tab-content').removeClass('active');

            });
        });
    };

    var spacer = function() {
        $(window).on('load resize', function() {
            $('.wprt-spacer').each(function(){
                if ( $(window).width() > 991 ) {
                    $(this).attr('style', 'height:' + $(this).data('desktop') + 'px')
                } else if ( $(window).width() > 767 ) {
                    $(this).attr('style', 'height:' + $(this).data('mobi') + 'px')
                } else {
                    $(this).attr('style', 'height:' + $(this).data('smobi') + 'px') 
                }
            })
        });
    };

    
    var ajaxContactForm = function() {
        if ( $().validate ) {        
            $('.contact-form').each(function() {
                $(this).validate({
                    submitHandler: function( form ) {
                        var
                        $form = $(form),
                        str = $form.serialize();

                        $.ajax({
                            type: "POST",
                            url:  $form.attr('action'),
                            data: str,
                            beforeSend: function () {
                                $form.find('.bwp-alert').remove();
                            },
                            success: function( msg ) {
                                var result, cls;

                                if ( msg == 'Success' ) {
                                    result = 'Your message has been sent. Thank you!';
                                    cls = 'success';
                                } else {
                                    result = 'Error sending email.';
                                    cls = 'error';
                                }

                                $form.prepend(
                                    $('<div />', {
                                        'class': 'bwp-alert ' + cls,
                                        'text' : result
                                    }).append(
                                        $('<a class="remove" href="#"><i class="fa fa-close"></i></a>')
                                    )
                                );

                                $form.find(':input').not('.submit').val('');
                            }
                        });
                    }
                });
            });
        }
      
    };


    var counter = function() {
        if ( $().countTo ) {
            $('.wprt-counter').on('on-appear', function() {
                $(this).find('.number').each(function() {
                    var to = parseInt( $(this).data('to'), 10 ),
                        speed = parseInt( $(this).data('speed'), 10 );
                        
                    $(this).countTo({
                        to: to,
                        speen: speed
                    });
                });
            }); //counter
        }
    };

    var inViewport = function() {
        $('[data-in-viewport="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '75%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };
	

	$(function() {

        headerFixed();
        hereSection();
        handlerHeader();
		accordion();
        tabs();
        spacer();

        ajaxContactForm();

        counter();

        inViewport();
		
	});
});