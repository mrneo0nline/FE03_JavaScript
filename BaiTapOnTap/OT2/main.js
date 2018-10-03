$(document).ready(function () {
	"use strict";
	// load tableArray onload
	var todoList = ['Hoc CSS', 'Hoc React JS', 'Hoc Front End', 'On Tap'];
	/* 	var tblHTML = '';
		var editedTbl = '';
		var delTbl = '';
		var addTbl = ''; */
	var pText;

	// hide Input todolist onload

	/* 	$(".edit_OK, .edit_cancel").hide();
		$(".edtTodos").hide(); */

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
						'<input type=\"button\" class=\"btn btn-light ml-2 border-success edit_OK\" value=\"OK\">' +
						'<input type=\"button\" class=\"btn btn-light ml-2 border-danger edit_cancel\" value=\"Cancel\">' +
					'</td>' +
					'<td>' +
						'<input type=\"button\" class=\"btn btn-light ml-2 border-success btn_edit\" value=\"Edit\">' +
						'<input id=\"' + i + '\" type=\"button\" class=\"btn btn-light ml-2 border-danger btn_del\" value=\"Delete\">' +
					'</td>' +
				'</tr>';
		});
		$("tbody").html(tblHTML);
		$(".edit_OK, .edit_cancel").hide();
		$(".edtTodos").hide();
	};
	showData(todoList);
	$("#formAdd").hide();

	// hide Add button, and show Input todolist form
	$("#btn_add").click(function () {
		$("#formAdd").show();
		$(".taskName").val('');
		$("#addBtn").hide();
	});

	// show Add button when pressing Cancel, and hide AddForm
	$("#cancelled").click(function () {
		$(".taskName").val('');
		$("#formAdd").hide();
		$("#addBtn").show();
	});

	//ADD_Confirm button
	$(".btn_add").click(function () {
		todoList.push($('#formAdd input[type=text]').val());
		showData(todoList);
		$(".taskName").focus();
		$(".taskName").val("");
	});

	//DELETE button
	$('table').on('click', '.btn_del', function(){
		var index = this.id.substring(1);
		todoList.splice(index, 1);
		// todoList.splice($(this).closest("tr").children("td:first-child").text()-1, 1);
		showData(todoList);
	});
/* 	$(".btn_del").click(function () {
		var index = this.id.substring(1);
		todoList.splice(index, 1);
		// todoList.splice($(this).closest("tr").children("td:first-child").text()-1, 1);
		showData(todoList);
	}); */

	//Edit button
	$(".btn_edit").click(function () {
		pText = $(this).parent().prev().children("p").text();
		$(this).parent().prev().children().show();
		$(this).parent().prev().children("input[type=text]").val(pText);
		$(this).parent().prev().children("input[type=text]").focus();
		$(this).parent().prev().children("p").hide();
		$(this).parent().children(".btn_edit, .btn_del").hide();
	});

	//OK button in Edit form
	$(".edit_OK").click(function () {
		todoList.splice(parseInt($(this).closest("tr").children("td:first-child").text()) - 1, 1, $(this).parent().children(".edtTodos").val());
		$("table tbody").empty();
		$.each(todoList, function (i) {
			editedTbl += '<tr><td>' + (i + 1) + '</td><td><input type=\'checkbox\'></td><td><p>' + todoList[i] + '</p><input type=\"text\" class=\"edtTodos\"><input type=\"button\" class=\"btn btn-light ml-2 border-success edit_OK\" value=\"OK\"><input type=\"button\" class=\"btn btn-light ml-2 border-danger edit_cancel\" value=\"Cancel\"></td><td><input type=\"button\" class=\"btn btn-light ml-2 border-success btn_edit\" value=\"Edit\"><input type=\"button\" class=\"btn btn-light ml-2 border-danger btn_del\" value=\"Delete\"></td></tr>';
		});
		$("table tbody").append(editedTbl);
		$(".edit_OK, .edit_cancel").hide();
		$(".edtTodos").hide();
	});

	//Cancel button in Edit form
	$(".edit_cancel").click(function () {
		$(this).parent("td").next().children().show();
		$(this).parent().children("p").show();
		$(this).parent().children(".edtTodos, .edit_OK, .edit_cancel").hide();
	});

});