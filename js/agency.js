// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Load More button
    $(".portfolio-item").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".portfolio-item:hidden").slice(0, 3).slideDown();
        if ($(".portfolio-item:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top -200
        }, 1000);
    });

    // Portfolio filter
    $(".cat-sel").click(function(){
      var value = $(this).attr('data-filter');
      if(value == "all") {
        //$('.filter').removeClass('hidden');
        $(".portfolio-item").hide(500);
        $('.portfolio-item').slice(0, 6).show(500);
        $("#loadMore").fadeIn('slow');
      }
      else {
        //$('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //$(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');

        //remove load more button when category is changed
        $("#loadMore").fadeOut('slow');

        $(".portfolio-item").not('.'+value).hide(500);
        $('.portfolio-item').filter('.'+value).show(500);
      }
    });

    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

})(jQuery); // End of use strict
