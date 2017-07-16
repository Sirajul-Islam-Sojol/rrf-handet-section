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
                320: {
                    items: 1,
                    loop: true,
                    autoplay: true
                },
                480: {
                    items: 2,
                    loop: true,
                    autoplay: true
                },
                767: {
                    items: 3,
                    loop: true,
                    autoplay: true
                },
                1170: {
                    items: 5,
                    loop: true,
                    autoplay: true,
                }
            }
        })


   });

    jQuery(window).load(function () {

    });


}(jQuery));
