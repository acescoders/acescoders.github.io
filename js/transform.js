$(function() {
    var open = false;
    $( '#sb-container' ).swatchbook( {
        // number of degrees that is between each item
        angleInc : 15,
        neighbor : 15,
        // if it should be closed by default
        initclosed : true,
        // index of the element that when clicked, triggers the open/close function
        // by default there is no such element
        closeIdx : 11
    } );
    
    $( '.dv-about' ).click(function(){
        var left_dist = "+=650";
        if(open){
        }
        else{
            $( '.text-content' ).css('opacity', '0');
            $( '.content' ).delay(700).animate({"width":left_dist}, "slow");
            $( '.text-content' ).delay(1300).animate({"opacity": '1'}, "slow");
            $( '#sb-container' ).delay(1000).animate({"opacity": '0.5'}, "slow");
            open = true;
        }
        
    });
    
    $('.dv-home').click(function(){
        var left_dist = "-=650";
        if(open){
            $( '.content' ).delay(700).animate({"width":left_dist}, "slow");
            $( '.text-content' ).fadeTo("slow","0.0");
            $( '#sb-container' ).delay(1000).animate({"opacity": '1'}, "slow");
            open = false;
        }
    });
    
});