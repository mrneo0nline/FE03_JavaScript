"use strict";
$(document).ready(function() {
    $("#image_rollovers img").each(function() {
        var oldURL = $(this).attr("src");      // gets the src attribute
        var newURL = $(this).attr("id");       // gets the id attribute

        // preload rollover image		
        var rolloverImage = new Image();
        rolloverImage.src = newURL;

        // set up event handlers
       /*  $(this).hover(
            function() {
                $(this).attr("src", newURL);  // sets the src attribute when hover in
            },
            function() {
                $(this).attr("src", oldURL);   // sets the src attribute when hover out
            }
        ); */  // end hover
        $(this).mouseover(
            function() {
                $(this).attr("src", newURL);  // sets the src attribute when hover in
            }
        );
        $(this).mouseout(
            function() {
                $(this).attr("src", oldURL);   // sets the src attribute when hover out
            }
        );
    }); // end each
}); // end ready

