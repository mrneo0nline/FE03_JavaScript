"use strict";
$(document).ready(function() {
    $("#image_rollovers img").each(function() {
        var oldURL = $(this).attr("src");      // gets the src attribute
        var newURL = $(this).attr("id");       // gets the id attribute

        // preload rollover image		
        var rolloverImage = new Image();
        rolloverImage.src = newURL;
        $(this).mouseover(function() {
            $(this).attr("src", newURL);
        });// end function and mouseover

        $(this).mouseout(function() {
            $(this).attr("src", oldURL);
        }); // end function and mouseout

        // set up event handlers
/*      $(this).hover(
            function() {
                $(this).attr("src", newURL);  // sets the src attribute
            },
            function() {
                $(this).attr("src", oldURL);   // sets the src attribute
            }
        );  // end hover
*/
    }); // end each
}); // end ready

