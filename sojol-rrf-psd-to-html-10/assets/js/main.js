(function ($) {
  "use strict";

    jQuery(document).ready(function($){


       $(".case-studies-carousel").owlCarousel({
            items: 3,
            margin:30,
            loop:true,
            dots:true,
            nav:false,
            autoplay: true,
       });
        $(".logo-carousel").owlCarousel({
            items: 6,
            margin:30,
            loop:true,
            dots:false,
            nav:false,
            autoplay: true,
       });

       $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop:true,
            dots:true,
            nav:false,
            autoplay: true,
            
       });

        $(".testimonial-item").owlCarousel({
            items: 1,
            loop:true,
            dots:true,
            nav:false,
            autoplay: true,
            
       }); $(".homepage-3-slides").owlCarousel({
            items: 1,
            loop:true,
            dots:true,
            nav:true,
            navText:["<i class='zmdi zmdi-arrow-left'></i>","<i class='zmdi zmdi-arrow-right'></i>"],
            autoplay: false,
            
       });

    });

    jQuery(window).load(function(){
        
    });


}(jQuery)); 