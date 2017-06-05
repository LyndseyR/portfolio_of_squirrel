(function() {
    // viewport stuff
    var targetWidth = 980;
    var deviceWidth = 'device-width';
    var viewport = $('meta[name="viewport"]');

    // check to see if local storage value is set on page load
    localStorage.isResponsive = (localStorage.isResponsive == undefined) ? 'true' : localStorage.isResponsive;

    var showFullSite = function(){
        localStorage.responsiveViewportValue = viewport.attr('content');
        viewport.attr('content', 'width=' + targetWidth);

        if(!$('.display__options #view-responsive').length){
            $('.display__options').append('<span id="view-responsive">View Mobile Site</span>');
        }

        localStorage.isResponsive = 'false';
    }

    var showMobileOptimized = function(){
        localStorage.isResponsive = 'true';
        viewport.attr('content', localStorage.responsiveViewportValue);
    }

    // if the user previously chose to view full site, change the viewport
    if(Modernizr.localstorage){
        if(localStorage.isResponsive == 'false'){
            showFullSite();
        }
    }

    $("#view-full").on("click", function(){
        showFullSite();
    });

    $('.display__options').on("click", "#view-responsive", function(){
        showMobileOptimized();
    });
})(jQuery);
