$(document).ready(function() {


    /*----- Twitter Bubble ----- */

    
    var twitterInit = function(){
        
    
        var tweet = $("#tweet");
        var container = $("#latest-tweet");
        var link = $(".twitter a");
        
        // Do the showing and hiding bubble
    
        var tweetHover = function(){
            clearTimeout(container.data("timeoutId"));
            container.fadeIn();
            link.addClass("hover");
        };
        
        var tweetOut = function(){
            var timeoutId = setTimeout(function(){ 
                container.fadeOut(); 
                link.removeClass("hover");
            }, 500);
            
            container.data("timeoutId", timeoutId);
            
        };
        
        container.bind("mouseover focus", tweetHover);
        container.bind("mouseout blur", tweetOut)
        link.bind("mouseover focus", tweetHover);
        link.bind("mouseout blur", tweetOut);
        
        // Load the latest tweet
    
        $.getJSON("http://twitter.com/statuses/user_timeline/"+TWITTER_UN+".json?callback=?", function(data) {
            tweet.html(data[0].text);
        });
    
    };
    
    twitterInit();

});