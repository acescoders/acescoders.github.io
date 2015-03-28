
$(document).ready(function() {

        /*---- custom category dropdown ---- */

        var categorySelector = $('select.categories');

        var categoryOnChange = function(){
             categoryFormat();
             window.location.href = $(this).val();
        };

        var categoryFormat = function(){
            var menu = $('a.categories');
            var status = $('.ui-selectmenu-status', menu);
            var text = status.text();
            
            // Show and hide menu to reset the width
            menu.hide();
            status.text("Category: " +text);
            menu.css('width');
            menu.show();
        };
        
        $(categorySelector).selectmenu({ 
            select: categoryOnChange 
        });

        categoryFormat();
        
        /*---- custom newsletter popup ---- */
        
        var newsletterButton = $("#newsletter-button");
        var newsletterForm = $("#newsletter-form");
                    
        newsletterButton.bind("click focus", function(e){
            newsletterForm.show();
            newsletterButton.addClass("active");
            e.stopPropagation();
        });
        
        newsletterForm.bind("clickoutside focusoutside", function(){
            newsletterForm.hide();
            newsletterButton.removeClass("active");
        });
        
        
        /*---- full-screen background ---- */

        var slides = [
            {
                image : '/img/bgs/news.jpg'
            }
        ];

        $.supersized({
            autoplay: 0,
            vertical_center: 0,
            image_path: '/img/supersized/',
            slides: slides
        }); 


    });
    