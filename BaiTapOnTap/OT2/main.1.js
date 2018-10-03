$(document).ready(function () {
	"use strict";
	var todos = ["Hoc HTML", "Hoc CSS", "Hoc JS", "Hoc JQ"];

	//function showList Todo
	function showList(arr) {
		var trHtml = "";
		$.each(arr, function (i) {
			trHtml += '<tr>' +
				'<td>' + (i + 1) + '</td>' +
				'<td>' + '<input type="checkbox">' + '</td>' +
				'<td>' + '<input id=\'arr[' + i + ']\'' + 'type="text" value=\'' + arr[i] + '\' disabled>' + '</td>' +
				'<td>' +
				'<input id=\'edit' + i + '\'' + 'class="btn btn-outline-success btn-edit mr-2" type="button" value="Edit">' +
				'<input id=\'delete' + i + '\'' + 'class="btn btn-outline-danger btn-delete mr-2" type="button" value="Delete">' +
				'<input id=\'ok' + i + '\'' + 'class="btn btn-outline-info btn-ok mr-2" type="button" value="OK">' +
				'<input id=\'cancel' + i + '\'' + 'class="btn btn-outline-warning btn-cancel mr-2" type="button" value="Cancel">' +
				'</td>' +
				'</tr>';
		});
		$("tbody").html(trHtml);
		$('.btn-ok, .btn-cancel').hide();
	}

	//call function to show list Todo
	showList(todos);

	//show input field when click Add button
	$("#fieldset-2").hide();
	$("#add").click(function () {
		$(this).hide();
		$("#fieldset-2").show();
		$("#addTodo").focus(); //focus on input field
	});

	//hide input field when click Cancel button
	$("#cancelAdd").click(function () {
		$("#addTodo").val(""); //xoa input o text khi cancel
		$("#fieldset-2").hide();
		$("#add").show();
	});

	//click Delete button will delete row
	$('#mytable').on('click', '.btn-delete', function () {
		var id = this.id.substr(-1); //lay so cuoi cua id cua row
		var confirm = prompt("Are you sure want to delete?", "Yes");
		if (confirm == "Yes") {
			todos.splice(id, 1); //xoa phan tu bi delete khoi arr todos
			showList(todos); //show new arr todos
		}
	});

	//click Confirm button will add more todo
	$("#confirm").on('click', function () {
		if ($("#addTodo").val() === "") {
			alert("Please fill Todo");
		} else {
			var addTodo = $("#addTodo").val();
			todos.splice(todos.length, 0, addTodo); //them addTodo vao cuoi cua arr todos
			showList(todos);
		}
		$("#addTodo").val("").focus(); //xoa input o addTodo khi Confirm & focus
	});

	//click Edit button will make input textbox appears	
	$("#mytable").on('click', '.btn-edit', function () {
		//get current row
		var currentRow = $(this).closest("tr");

		//remove disable attribute from input field & focus
		currentRow.find(":input:text")
			.attr("disabled", false)
			.addClass("border border-primary bg-white")
			.focus();

		//change button shown
		currentRow.find(":button:lt(2)").hide(); //hide Edit & Delete button
		currentRow.find(":button:gt(1)").show(); //show OK & Candel button
	});


	//click Cancel button
	$("#mytable").on('click', '.btn-cancel', function () {
		//get currentTodo value
		var id = this.id.substr(-1); //lay so cuoi cua id cua row
		var currentTodo = todos[id]; //update arr todos
		//get current row
		var currentRow = $(this).closest("tr");

		//add disable attribute to input field
		currentRow.find("input:text")
			.attr("disabled", true)
			.removeClass("border border-primary bg-white")
			.val(currentTodo);

		//change button shown
		currentRow.find(":button:lt(2)").show(); //show Edit & Delete button
		currentRow.find(":button:gt(1)").hide(); //hide OK & Candel button
	});

	//click OK button will update todo
	$("#mytable").on('click', '.btn-ok', function () {
		//get current row
		var currentRow = $(this).closest("tr");

		// get value of input field
		var todo = currentRow.find(":input:text").val();

		//set new value for todo and disable input field
		if (todo === "") {
			alert("Please fill Todo");
			currentRow.find(":input:text").focus();
		} else {
			var id = this.id.substr(-1); //lay so cuoi cua id cua row
			todos[id] = todo; //update arr todos

			//set value cho input field sau do disable
			currentRow.find(":input:text")
				.attr({
					"value": todo,
					"disabled": true
				})
				.removeClass("border border-primary bg-white");

			//change button shown
			currentRow.find(":button:lt(2)").show(); //hide Edit & Delete button
			currentRow.find(":button:gt(1)").hide(); //show OK & Candel button
		}
	});

	//checkall button
	$("#checkall").change(function () {
		$("input:checkbox").prop('checked', $(this).prop("checked"));
	});
});