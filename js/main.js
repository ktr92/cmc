$(document).ready(function() {

    if ($(window).width() > 999) {
    $(document).ready(function() {
         $(".sticky-header").floatThead({top:0});
    });
    } else {

          $('span.values').click(function(e) {
                $(this).toggleClass('active');
            });

         $('.searchbutton').click(function(e) {
            $('.search').slideToggle();
        });
        
        $(document).mouseup(function(e) {
            var container = $(".search");
            var ext = $(".search");

            // if the target of the click isn't the container nor a descendant of the container
            if (!ext.is(e.target) && !container.is(e.target) && ext.has(e.target).length === 0) {
                container.hide();
            }
        });

    }

  

   $('.menubutton').click(function(e) {
        $('.mainmenu').toggle('slide');
    });

   
   


    $('.filter__title').click(function(e) {
        $('.filter__form').slideToggle();
    });





    jQuery("a.scrollto").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 90;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1100);
        return false;
    });


});



