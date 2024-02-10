(function($) {
    'use strict';

    // Video Popup JS
    $(".play-1").yu2fvl({ vid: "ZG6tNrxXh1k", ratio: 4/3 });


    // Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Progress Bar JS
    $('#campaign01').LineProgressbar({
        percentage: 95,
        animation: true,
        duration: 5000
    });
    $('#campaign02').LineProgressbar({
        percentage: 74,
        animation: true,
        duration: 5000
    });
    $('#campaign03').LineProgressbar({
        percentage: 94,
        animation: true,
        duration: 5000
    });

    $('#campaign01-v2').LineProgressbar({
        percentage: 84,
        animation: true,
        duration: 5000
    });
    $('#campaign02-v2').LineProgressbar({
        percentage: 74,
        animation: true,
        duration: 5000
    });
    $('#campaign03-v2').LineProgressbar({
        percentage: 94,
        animation: true,
        duration: 5000
    });
    $('#campaign04-v2').LineProgressbar({
        percentage: 50,
        animation: true,
        duration: 5000
    });
    $('#donation01').LineProgressbar({
        percentage: 20,
        animation: true,
        duration: 5000
    });
    $('#donation02').LineProgressbar({
        percentage: 84,
        animation: true,
        duration: 5000
    });

    //  Testimonial JS
    $('.testimonial-slider').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1,
                nav: false,
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

    //  Our Campaign Home V2 JS
    $('.campaign-slider').owlCarousel({
        loop: false,
        autoplay: true,
        margin: 30,
        smartSpeed: 1500,
        dots: false,
        autoHeight:true,
        nav: true,
        navText: ["<img src='./assets/images/icon-svg/long-arrow-left.svg' /> <img src='./assets/images/icon-svg/long-arrow-left-green.svg' />", "<img src='./assets/images/icon-svg/long-arrow-right.svg' /> <img src='./assets/images/icon-svg/long-arrow-right-green.svg' />"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
            },
            600: {
                items: 1,
                nav: false,
                margin: 0,
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });

    //  Testimonial V2 JS
    $('.testimonial-slider-v2').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        smartSpeed: 1500,
        dots: false,
        autoHeight:true,
        nav: true,
        navText: ["<img src='./assets/images/icon-svg/long-arrow-left.svg' /> <img src='./assets/images/icon-svg/long-arrow-left-green.svg' />", "<img src='./assets/images/icon-svg/long-arrow-right.svg' /> <img src='./assets/images/icon-svg/long-arrow-right-green.svg' />"],
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

    //  Blog Slider V2 JS
    $('.blog-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        smartSpeed: 1500,
        dots: false,
        autoHeight:true,
        nav: true,
        navText: ["<img src='./assets/images/icon-svg/long-arrow-left.svg' /> <img src='./assets/images/icon-svg/long-arrow-left-green.svg' />", "<img src='./assets/images/icon-svg/long-arrow-right.svg' /> <img src='./assets/images/icon-svg/long-arrow-right-green.svg' />"],
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 1,
                margin: 0
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })

    //  Testimonial V3 JS
    $('.testimonial-slider-v3').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        smartSpeed: 1500,
        dots: true,
        autoHeight:true,
        nav: false,
        navText: ["<img src='./assets/images/icon-svg/long-arrow-left.svg' /> <img src='./assets/images/icon-svg/long-arrow-left-green.svg' />", "<img src='./assets/images/icon-svg/long-arrow-right.svg' /> <img src='./assets/images/icon-svg/long-arrow-right-green.svg' />"],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });

    //  Team V3 Slider JS
    $('.team-v3-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        smartSpeed: 1000,
        dots: true,
        autoHeight:true,
        nav: false,
        navText: ["<img src='./assets/images/icon-svg/long-arrow-left.svg' /> <img src='./assets/images/icon-svg/long-arrow-left-green.svg' />", "<img src='./assets/images/icon-svg/long-arrow-right.svg' /> <img src='./assets/images/icon-svg/long-arrow-right-green.svg' />"],
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 2,
                margin: 20
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    });

    // AOS Animation
    AOS.init({
        duration: 600
    });


    //  Previous Event Slider JS
    $('.prev-event-slider').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 30,
        smartSpeed: 1500,
        dots: false,
        autoHeight:true,
        nav: false,
        navText: ["<img src='./assets/images/icon-svg/long-arrow-left.svg' /> <img src='./assets/images/icon-svg/long-arrow-left-green.svg' />", "<img src='./assets/images/icon-svg/long-arrow-right.svg' /> <img src='./assets/images/icon-svg/long-arrow-right-green.svg' />"],
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 1,
                margin: 0
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });

    //  Previous Event Slider JS
    $('.gallery-wrapper-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 15,
        smartSpeed: 1500,
        dots: true,
        autoHeight:true,
        nav: false,
        navText: ["<img src='./assets/images/icon-svg/long-arrow-left.svg' /> <img src='./assets/images/icon-svg/long-arrow-left-green.svg' />", "<img src='./assets/images/icon-svg/long-arrow-right.svg' /> <img src='./assets/images/icon-svg/long-arrow-right-green.svg' />"],
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 2,
                margin: 10
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });


    // Hamburger Menu
    $('.sub-btn').click(function(event){
        $(this).next('.submenu').slideToggle();
        event.preventDefault();
    });
    $('.hamburger-menu').click(function() {
        $('.hoperaiser-menu').addClass('active');
    });
    $('.close-btn').click(function() {
        $('.hoperaiser-menu').removeClass('active');
    });

    // sticky Header
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });


   $(window).on('load', function () {
        // Window Loading JS
        $(".hoperaiser-loading").fadeOut();
        $(".spinner").delay(450).fadeOut('slow');
   });

})(jQuery);
