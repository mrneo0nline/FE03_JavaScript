$(document).ready(function () {

	// load tableArray onload
	var todoList = ['Hoc CSS', 'Hoc React JS', 'Hoc Front End', 'On Tap'];
	var tblHTML = '';
	var editedTbl = '';
	var pText;

	$.each(todoList, function (i) {
		tblHTML += '<tr><td>' + (i + 1) + '</td><td><input type=\'checkbox\'></td><td><p>' + todoList[i] + '</p><input type=\"text\" class=\"edtTodos\"><input type=\"button\" class=\"btn btn-light ml-2 border-success edit_OK\" value=\"OK\"><input type=\"button\" class=\"btn btn-light ml-2 border-danger edit_cancel\" value=\"Cancel\"></td><td><input type=\"button\" class=\"btn btn-light ml-2 border-success btn_edit\" value=\"Edit\"><input type=\"button\" class=\"btn btn-light ml-2 border-danger btn_del\" value=\"Delete\"></td></tr>';
	});

	$("table tbody").append(tblHTML);
	// hide Add button, and show Input todolist form
	$("#btn_add").click(function () {
		$("#formAdd").show();
		$("#addBtn").hide();
	});

	// show Add button when pressing Cancel, and hide AddForm
	$("#cancelled").click(function () {
		$("#formAdd").hide();
		$("#addBtn").show();
	});

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
	// hide Input todolist onload
	$("#formAdd").hide();
	$(".edit_OK, .edit_cancel").hide();
	$(".edtTodos").hide();
});