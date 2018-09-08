"use strict";
$(document).ready(function(){
    $("#countdown").click( function() {
        var event = new Event( $("#event").val(), $("#date").val() );

        //make sure task and due date are entered
        if ( event.inputMissing() ) {
            $("#message").text( message.required() );
            return;
        }  
        //make sure due date string is valid
        if ( event.invalidDate() ) { 
            $("#message").text( message.invalidDate() );
            return;
        } 

        //calculate days
        event.calculateDays();

        //create and display countdown message 
        if (event.days === 0) {
            $("#message").text( message.today(event) );
        }
        if (event.days < 0) {
            $("#message").text( message.past(event) );       
        }
        if (event.days > 0) {
            $("#message").text( message.future(event) );
        }
    });
    
    $("#event").focus();
});