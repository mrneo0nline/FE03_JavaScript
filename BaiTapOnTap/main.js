$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip({
		animation: true,
		delay: {show: 750, hide: 250},
		placement: "top"
	});

	/* Function for expanding/ collapsing accordions */
	$("h3").addClass("rounded py-3");
	$("h3").removeClass("bg-info lead");
	$("h3").next().hide();
	$("h3").click(function () {
		$(this).toggleClass("minus");
		if ($(this).attr("name") !== "minus") {
			$(this).attr("name", "minus");
			// $(this).removeClass("bg-info text-light");
			// $(this).addClass("text-dark");
			$(this).css("background-color", "rgb(163, 163, 163)");
			$(this).next().show();
		} else {
			$(this).attr("name", "");
			$(this).next().hide();
			$(this).css("background-color","#1f497d");
			$(this).removeClass("text-dark");
			// $(this).addClass("bg-info text-light");
		};
	}); /* End function - Expand/ Collapse Accordions */

	/* Function for toogle tabs & their content */
	$(".tabs, .tabCtn").addClass("rounded");
	$("#tab1").addClass("active"); // Selected and displayed first tab and its content
	$(".tabContent2").hide(); // hide second tab onload
	$(".tabContent3").hide(); // hide third tab onload
	$(".tabContent4").hide(); // hide fourth tab onload
	$(".tabs").click(function () { // Function - highlight and display tab/ content when pressing
		$("div.tabs").removeClass("active");
		$(this).addClass("active");
		if ($(this).attr("id") == "tab1") {
			$(".tabContent1").show();
			$(".tabContent2").hide();
			$(".tabContent3").hide();
			$(".tabContent4").hide();
		} else if ($(this).attr("id") == "tab2") {
			$(".tabContent2").show();
			$(".tabContent3").hide();
			$(".tabContent4").hide();
			$(".tabContent1").hide();
		} else if ($(this).attr("id") == "tab3") {
			$(".tabContent3").show();
			$(".tabContent4").hide();
			$(".tabContent1").hide();
			$(".tabContent2").hide();
		} else if ($(this).attr("id") == "tab4") {
			$(".tabContent4").show();
			$(".tabContent1").hide();
			$(".tabContent2").hide();
			$(".tabContent3").hide();
		};
	}); // End function - toogle tabs & their content

	// End function - toogle tabs & their content
	$("form div span div").hide(); // hide all error message onload of window 
	$("#btnSubmit").click(function () {
		var isValid = true;
		var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		var phonePattern = /\d{10,11}/; 
		// Check the name has value or not
		if ($("#name").val() == "") {
			$("#name").next().addClass("error");
			$("#name").next().show();
			isValid = false;
		} else {
			$("#name").next().removeClass("error");
			$("#name").next().hide();
		}
		// Check the email has value or not
		if ($("#email").val() == "") {
			$("#email").next().addClass("error");
			$("#email").next().show();
			isValid = false;
		} else if ( !emailPattern.test($("#email").val().trim()) ) {
			$("#email").next().addClass("error");
			$("#email").next().text("*** INVALID FORMAT!");
			$("#email").next().show();
			isValid = false;
		} else {
			$("#email").next().removeClass("error");
			$("#email").next().hide();
		}
		// Check the phone number has value or not
		if ($("#phone").val() == "") {
			$("#phone").next().addClass("error");
			$("#phone").next().show();
			isValid = false;
		} else if ( !phonePattern.test($("#phone").val().trim()) ) {
			$("#phone").next().addClass("error");
			$("#phone").next().text("*** MUST BE 10 OR 11 DIGITS NUMBER!");
			$("#phone").next().show();
			isValid = false;
		} else {
			$("#phone").next().removeClass("error");
			$("#phone").next().hide();
		}
		// Check the subject has value or not
		if ($("#subject").val() == "") {
			$("#subject").next().addClass("error");
			$("#subject").next().show();
			isValid = false;
		} else {
			$("#subject").next().removeClass("error");
			$("#subject").next().hide();
		}
		// Check the message has value or not
		if ($("textarea").val() == "") {
			$("textarea").next().addClass("error");
			$("textarea").next().show();
			isValid = false;
		} else {
			$("textarea").next().removeClass("error");
			$("textarea").next().hide();
		}
		/* Function - only after click SEND MESSAGE button
		*	Check to hide/ display error message when has/ has not value inputted
		*/
		$(".inputFields").on("input", function () {
			if ($(this).val() == "") {
				$(this).next().text("This field is required.");
				$(this).next().show();
			} else {
				$(this).next().hide();
			}
		}); // End function hide/ display error message

		/* Submit form if isValid at all */
		if (isValid) {
			$("#registerForm").submit();
		}
	});
});