// POCO PEOPLE 
// Home page full-screen background and rollover effect


$(document).ready(function() {
        
    var userAgent = navigator.userAgent;
    var iPhone = userAgent.match(/iPhone/i);
    
    var browserVersion = $.browser.version.substr(0,1);
    var oldIE = ($.browser.msie && browserVersion < 9);


    // Do the fullscreen background for non-iphones
    // NB: should actually be for non-small-screen-devices!!

    
    if (!iPhone) {
    
        var slides = [
            {image : 'img/bgs/home.jpg'},
            {image : 'img/bgs/home-about.png'},
            {image : 'img/bgs/home-folio.png'},
            {image : 'img/bgs/home.jpg'},
            {image : 'img/bgs/home-contact.png'},
            {image : 'img/bgs/home-news.png'}
        ];
        
        $.supersized({
            autoplay: 0,
            vertical_center: 0,
            start_slide: 1,
            image_path: 'img/supersized/',
            slides: slides,
            transition_speed: 300       
            
        });
        
        
        // Do the fullscreen background rollover effect for non-old-IE (IE8 and below)

        if (!oldIE) {
        
            var ss = $("#supersized");
            var tempID = "supersized-temp";
            var nav = $("#primary-navigation");
            var menuitems = $("li", nav);
            
            var temp;
            var init = true;
            
            // Function to load a slide on mouseover - mimics a rollover
            var menuMouseover = function(){  

                var i = $(this).index() + 2;
            
                if (init) {

                    if (temp != null) {
                        temp.remove();
                    }
                    
                    temp = ss.clone().attr("id", tempID);
                    temp.insertBefore(ss);
                    temp.show();
                    
                    init = false;
                }
                
                if (vars.in_animation) {
                    setTimeout(function(){ api.goTo(i); }, 100)
                }
                else {
                    api.goTo(i);
                }
            
            };
            
            // Function to return to the first slide on mouseout  
            var menuMouseout = function(){
                api.goTo(1);
            };
        
            // Attach the rollover events
            menuitems.hover(menuMouseover, menuMouseout);
        
            // Reset the rollovers on window resize
            $(window).resize(function() {  init = true; });
        }

    }
    
});