<!-- project:SHOPGRID-->
<!--AHHOR:Md:sirajul islam (sojol)-->
<!--dat:16-07-2017-->

(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $(".slide-area").owlCarousel({
            items: 1,
            loop: true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            animateOut: 'fadeOut',
            autoplay: true,

        });


        $('.logo-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop:true,
                    autoplay:true
                },
                600: {
                    items: 2,
                    nav: false,
                    loop:true,
                    autoplay:true
                },
                1000: {
                    items: 5,
                    nav: false,
                    loop:true,
                    autoplay:true
                },
                
            }
        })


    });

    jQuery(window).load(function () {

    });


}(jQuery));
