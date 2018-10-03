$(document).ready(function () {
	"use strict";
	// load tableArray onload of page
	var todoList = ['Hoc CSS', 'Hoc React JS', 'Hoc Front End', 'On Tap'];

	showData(todoList);
	$("#formAdd").hide();

	// Function to show data base on array inputted
	function showData(arrTbl) {
		var tblHTML = '';
		$.each(arrTbl, function (i) {
			tblHTML +=
				'<tr>' +
				'<td>' + (i + 1) + '</td>' +
				'<td><input type=\'checkbox\'></td>' +
				'<td>' +
				'<p>' + arrTbl[i] + '</p>' +
				'<input type=\"text\" class=\"edtTodos\">' +
				'</td>' +
				'<td>' +
				'<input type=\"button\" class=\"btn btn-light ml-2 border-success btn_edit\" value=\"Edit\">' +
				'<input type=\"button\" class=\"btn btn-light ml-2 border-danger btn_del\" value=\"Delete\">' +
				'<input type=\"button\" class=\"btn btn-success ml-2 border-light btn-edit-group edit_OK\" value=\"Confirm\">' +
				'<input type=\"button\" class=\"btn btn-danger ml-2 border-light btn-edit-group edit_cancel\" value=\"Cancel\">' +
				'</td>' +
				'</tr>';
		});
		$("tbody").html(tblHTML);
		$(".edit_OK, .edit_cancel").hide();
		$(".edtTodos").hide();
	};

	// hide Add button when input field appears
	$("#btn_add").click(function () {
		$("#formAdd").show();
		$(".taskName").val('').focus();
		$("#addBtn").hide();
	});

	// show Add button and hide input field after pressed Cancel button
	$("#cancelled").click(function () {
		$(".taskName").val('');
		$("#formAdd").hide();
		$("#addBtn").show();
	});

	//Add To-do list
	$(".btn_add").click(function () {

		// Add new to-do list
		var isBlank = $('.taskName').val();

		if (isBlank === '') {
			alert('You must input name for the task!');
			$('#formAdd input[type=text]').focus();
		} else {
			todoList.push($('#formAdd input[type=text]').val());
			showData(todoList);
			$(".taskName").focus();
			$(".taskName").val("");
		};
	});

	//Edit To-do list
	$('table').on('click', '.btn_edit', function () {

		//Edit button
		var pText = $(this).parent().prev().children('p').text();

		$(this).parent().prev().children('p').hide();
		$(this).parent().children(".btn_edit, .btn_del").hide();
		$(this).parent().children('.btn-edit-group').show();
		$(this).parent().prev().children("input[type=text]").show().val(pText).focus();

		//Cancel button
		$('table').on('click', '.edit_cancel', function () {
			$(this).parent().prev().children('p').show();
			$(this).parent().children(".btn_edit, .btn_del").show();
			$(this).parent().children('.btn-edit-group').hide();
			$(this).parent().prev().children("input[type=text]").hide();
		});

		//OK button
		$('table').on('click', '.edit_OK', function () {
			var index = $(this).closest('tr').children(':first-child').text() - 1;
			var updatedInfo = $(this).parent().prev().children("input[type=text]");

			if ( updatedInfo.val() == '') {
				alert('You must not input a blanked task name!');
				updatedInfo.focus();
			} else {
			todoList.splice(index, 1, updatedInfo.val());
			showData(todoList);
			};
		});
	});

	//DELETE button
	$('table').on('click', '.btn_del', function () {
		var index = $(this).closest('tr').children(':first-child').text() - 1;
		var confirmation = confirm('Are you SURE to DELETE IT ?');
		if ( !confirmation ) {
			showData(todoList);
		} else {
		todoList.splice(index, 1);
		showData(todoList);
		}
	}); // End delete function

}); // End document ready functions