jQuery(function($) {
    /*=============================================================
        Author URI: www.binarytheme.com
        License: Commons Attribution 3.0
        http://creativecommons.org/licenses/by/3.0/
        100% To use For Personal And Commercial Use.
        IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
    =============================================================*/

    // CUSTOM LINKS SCROLLING FUNCTION
    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, 800);
                return false;
            }
        }
    });

    /*==========================================
       SCROLL REVEAL SCRIPTS
    ==========================================*/
    window.scrollReveal = new scrollReveal({
        duration: 500,         // faster fade-in (0.5s)
        distance: '50px',      // subtle movement
        origin: 'bottom',      // come from bottom
        easing: 'ease-in-out', // smooth motion
        reset: false,          // don't repeat on scroll up
        scale: 1,              // no scaling
        opacity: 0,            // fade in from 0 opacity
        interval: 100          // stagger multiple elements
    });

    /*==========================================
       WRITE YOUR SCRIPTS BELOW
    ==========================================*/

});
