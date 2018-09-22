$(document).ready(function () {

	// runs when an h2 heading is clicked
	$("#faqs h2").click(function () {
		$(this).toggleClass("minus");
		$(this).next().slideToggle(500);
		// $(this).next().fadeToggle(1500);
		/* $(this).toggleClass("minus");
		if ($(this).attr("class") != "minus") {
			// $(this).next().hide();
			$(this).next().fadeOut("slow");
		} else $(this).next().fadeIn(); */
		/* 		if ($(this).attr("class") == "minus") {
					$(this).next().fadeIn("slow");
				} else {
					$(this).next().fadeOut("slow");
				} */
	}); // end click

	// runs when the page is ready
	$("#faqs h1").animate({
			fontSize: "650%",
			opacity: 1,
			left: "+=375"
		}, 200)
		.animate({
			fontSize: "175%",
			left: "-=200"
		}, 200);

	// runs when the top-level heading is clicked
	$("#faqs h1").click(function () {
		$(this).animate({
				fontSize: "650%",
				opacity: 1,
				left: "+=75"
			}, 1250, "easeInExpo")
			.animate({
				fontSize: "175%",
				left: "-=75"
			}, 1000, "easeOutExpo");
	}); // end click

}); // end ready