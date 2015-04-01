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
    
    $( '.dv-nav' ).click(function(){
        /*$( '#sb-container' ).css("left","-43%");
        $(".hideNav").fadeIn();
        $( '#sb-container' ).delay(500).addClass("activeMenu");
        $( '#sb-container' ).removeClass("inactiveMenu");
        var pageTitle = $(this).parents(".mynav").attr("id")+".html";
        $(".myLaoder").fadeIn().delay(200).fadeOut();
        $("#mydiv").css("display","block");	
        $("header").slideDown();
        $("#myframe").removeClass("hidden").addClass("activeFrame");			
        $("#myframe").attr("src", pageTitle);*/
        var left_dist = "+=300";
        if(open){
            /*$('#sb-container').css("left","0%");
            open = false;*/
        }
        else{
            //$('#sb-container').css("left","30%");
            //$( '#sb-container' ).delay(700).animate({"left":left_dist}, "slow");
            open = true;
        }
        /*var string = $.trim($(this).text());*/
        
    });
    
    $('.dv-home').click(function(){
        var left_dist = "-=300";
        if(open){
            //$('#sb-container').css("left","0%");
            //$( '#sb-container' ).delay(700).animate({"left":left_dist}, "slow");
            open = false;
        }
    });
    
});