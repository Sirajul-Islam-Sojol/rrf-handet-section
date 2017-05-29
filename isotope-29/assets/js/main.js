(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".project-list li").on('click',function(){
            
            var selector=$(this).attr('data-filter');
            $("project-list").isotope({
                filter:selector
            });
        });
            
        


    });


    jQuery(window).load(function(){

        jQuery(".project-list").isotope();
    });


}(jQuery));	



(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        //isotope start //
        
        $(".project-list li").on('click', function(){
            
            $(".project-list ul li").removeClass("active");
            $(this).addClass("active");
            
            var selector = $(this).attr('data-filter');
            $(".project-list").isotope({
                filter: selector
            });
            
        });
        //isotope end //
        
    });


    jQuery(window).load(function(){
        //isotope start //
            jQuery(".iso-list").isotope();
        //isotope end //
        
    });


}(jQuery)); 