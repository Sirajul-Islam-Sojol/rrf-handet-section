(function ($) {
  "use strict";

    jQuery(document).ready(function($){


       $(".homepage-slides").owlCarousel({
            items: 1,
            loop:true,
            dots:true,
            nav:true,
            navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            animateOut: 'fadeOut',
            autoplay: true,
       });
        
      
    });

    jQuery(window).load(function(){
        
    });


}(jQuery)); 