$(document).ready(function() {

	$("h2").click(function(){
		$(this).toggleClass("minus");
		if( $(this).attr("class") !== "minus" ) {
			$(this).next().hide();
		} else {
			$(this).next().show();
		}
		$("#image").attr("src", "");
	});

	// preload images
	$("a").each(function() {
		var imageURL = $(this).attr("href");
		var bookImages = new Image();
		bookImages.src = imageURL;

		$(this).click(function(evt) {
			$("#image").attr("src", imageURL);
			// cancel the default action of the link
			evt.preventDefault();  // jQuery cross-browser method
		});
	});

	// set up event handlers for links    
	 // end click

	// // move focus to first thumbnail
	// $("li:first-child a").focus();
}); // end ready