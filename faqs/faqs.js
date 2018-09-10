"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function() {
    var link = this;                    // clicked h2 tag     
    var h2 = link.parentNode;
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.hasAttribute("class")) { 
        h2.className = "";	
    } else { 
        h2.className = "minus";
    }

    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) { 
        div.className = "";
    } else { 
        div.className = "open"; 
    } 
};

window.onload = function() {
    var faqs = $("faqs");
    var linkElements = faqs.getElementsByTagName("a");
       
    for (var i = 0; i < linkElements.length; i++ ) {
    	linkElements[i].onclick = toggle;
    }
    linkElements[0].focus();       
};
