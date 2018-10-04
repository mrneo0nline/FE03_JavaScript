$(document).ready(function () {
	'use strict';
	// load table array onload of page
	var todoList = ['Hoc CSS', 'Hoc React JS', 'Hoc Front End', 'On Tap'];

	showData(todoList);		// show data table on load
	$('#formAdd').hide();	// hide input field and buttons on load

	/** Function to show data table
	 * @param: arrTbl = your [arrayName] inputted manually
	 */
	function showData(arrTbl) {
		var tblHTML = '';
		$.each(arrTbl, function (i) {
			tblHTML +=
				'<tr>' +
				'<td>' + (i + 1) + '</td>' +
				'<td><input type=\'checkbox\'></td>' +
				'<td>' +
				'<p>' + arrTbl[i] + '</p>' +
				'<input type=\"text\" class=\"edit_txt btn-edit-group\">' +
				'</td>' +
				'<td>' +
				'<input type=\"button\" class=\"btn btn-light ml-2 border-success action_group btn_edit\" value=\"Edit\">' +
				'<input type=\"button\" class=\"btn btn-light ml-2 border-danger action_group btn_del\" value=\"Delete\">' +
				'<input type=\"button\" class=\"btn btn-success ml-2 border-light btn-edit-group edit_OK\" value=\"Confirm\">' +
				'<input type=\"button\" class=\"btn btn-danger ml-2 border-light btn-edit-group edit_cancel\" value=\"Cancel\">' +
				'</td>' +
				'</tr>';
		});
		$('tbody').html(tblHTML); 		// replace all content inside 'tbody' element
		$('.btn-edit-group').hide();	// hide all elements of 'Edit function' after loading the table
	};

	/**	-- Click ADD button --
	 * If Edit task form is showing
	 * 	- Confirmation pop-up appears:
	 * 		+ OK = hide Edit task form, show and focus to Add task form
	 * 		+ Cancel = Focus to Edit task form, skip Add task form
	 * If Edit task form is not showing
	 * 	- If value is emptied at input text field
	 * 		+ alert user to re-input value
	 * 	- Confirmation pop-up appears:
	 * 		+ OK = add new alue at the end of array
	 * 		+ Cancel = turn back and focus to input text field
	 */ 
	$('#btn_add').click(function () {
		var hasEditting = $('.btn-edit-group').is(':visible');	// check whether buttons in 'Edit form' appear or not

		if (hasEditting)
			{				// if appears button of 'edit form' ---------------------------->

			/** Confirmation pop-up (returns boolean) with:
			 * true = 'OK':
			 * 	- Skip 'edit form'
			 * 	- Display the 'Add task form'
			 * false = 'Cancel':
			 * 	- Continue at 'edit form'
			 * 	- hide the 'Add task form'
			 * 	- Display 'Add tasks' button
			*/	
			var cf_Edit = confirm('You are still not completed editting task!\nSwitch to \'Add tasks\' anyway ?');
			
				if (!cf_Edit)
					{				// Confirm = Cancel
						$('#formAdd').hide();				// hide 'Add task form'
						$('#addBtn').show();					// show 'Add tasks' button
						$('.edit_txt').focus();				// re-focus 'input text field' at 'edit task form'
					} else {		// Confirm = OK
						$('.edit_cancel').click();			// perform a 'Click' on 'Cancel' button in 'edit form'
						$('#formAdd').show(); 				// show input field and buttons after clicking 'Add tasks' button
						$('.taskName').val('').focus();	// focus on the input text field
						$('#addBtn').hide(); 				// hide the 'Add tasks' button
					}
			} else { 	// if not appeared button of 'edit form' ----------------------->
			$('#formAdd').show(); 				// show input field and buttons after clicking 'Add tasks' button
			$('.taskName').val('').focus(); 	// focus on the input field
			$('#addBtn').hide();					// hide the 'Add tasks' button
			}
	});

	// show Add button and hide input field after pressed Cancel button
	$('#cancelled').click(function () {
		$('.taskName').val('');	// set 'empty value' at 'input task name' field
		$('#formAdd').hide();	// hide 'Add task form'
		$('#addBtn').show();		// show 'Add tasks button'
	});

	// 'Confirm' button in 'Adding To-do list form'
	$('#added').click(function () {
		var isBlank = $('.taskName').val();	// assign 'value' of 'Input task name field' to a variable

		// Add new to-do list
		if (isBlank === '') {	// check when 'Input task name field' has no value (empty)
			alert('You must input name for the task!');	// alert promt to notify user to re-input task name
			$('.taskName').focus();								// 'focus' on the 'input task name field'
		} else {						// when 'Input task name field' had value
			todoList.push($('.taskName').val());			// add 'value of Input task name field' into the end of array
			showData(todoList);									// show table with new array data
			$('.taskName')
				.focus()												// 'focus' on the 'input task name field'
				.val('');											// set empty value
		};
	});

	/**	-- Click EDIT button from table, column TO-DO --
	 * If Add task form is showing
	 * 	- Confirmation pop-up appears:
	 * 		+ OK = hide Add task form, focus to Edit form
	 * 		+ Cancel = Focus to Add task form, skip Edit form
	 * If Add task form is not showing
	 * 	- If value is emptied at input text field
	 * 		+ alert user to re-input value
	 * 	- Confirmation pop-up appears:
	 * 		+ OK = update value into array at the same index
	 * 		+ Cancel = skip Edit function, back to default view
	 */
	$('table').on('click', '.btn_edit', function () {

		//Edit button
		var pText = $(this).parent().prev().children('p').text();	// get value of tag 'p' in current row
		var hasAdding = $('#added').is(':visible');						// check whether buttons in 'Add task form' appear or not

		if (hasAdding) {	// the 'Add task form' is exist

			/** Confirmation pop-up (returns boolean) with:
			 * true = 'OK':
			 * 	- Skip and hide 'Add task form'
			 * 	- Show 'Add task' button
			 * 	- Focus on the 'input text field' in 'Edit task form'
			 * false = 'Cancel':
			 * 	- Continue at 'Add task form'
			 * 	- Skip 'Edit task form'
			 */	
			var cf_Add = confirm('You are still not completed \'Adding\' task!\nSwitch to \'Edit task\' anyway ?');

			if (!cf_Add) {	// Confirm = Cancel
				$('.btn-edit-group').hide();							// hide Edit task form: input text field, Confirm & Cancel buttons
				$('.action_group').show();								// show Edit & Delete buttons at 'column ACTION'
				$('#formAdd').show();									// show 'Add task form'
				$('.taskName').focus();									// focus on 'Input task name field'
			} else {			// Confirm = OK
				$('.taskName').val('');									// Set 'empty value' at 'Input task name field'
				$('#formAdd').hide();									// hide 'Add task form'
				$('#addBtn').show();										// show 'Add tasks button'
				$(this).parent().prev().children('p').hide();	// hide tag 'p' in 'edit task form'
				$('.action_group').hide();								// hide 'Edit & Delete' buttons at 'column ACTION'
				$(this).parent().children('.btn-edit-group').show();	// show 'Confirm and Cancel' buttons at 'column Action'
				$(this).parent().prev().children('.edit_txt').show().val(pText).focus();	// focus on the tag 'input' of 'Edit task form'
			}
		} else {			// the 'Add task form' is NOT exist
				$(this).parent().prev().children('p').hide();	// hide tag 'p' in 'edit task form'
				$('.action_group').hide();								// hide 'Edit & Delete' buttons at 'column ACTION'
				$(this).parent().children('.btn-edit-group').show();	// show 'Confirm and Cancel' buttons at 'column ACTION'
				$(this).parent().prev().children('.edit_txt').show().val(pText).focus();	// focus on the tag 'input' of 'Edit task form'
		}

		/**	-- Click CANCEL button from Edit task form --
		 * will hide Input text field, Confirm & Cancel buttons
		 * then display tag 'p', buttons 'Edit' & 'Delete' again
		 */
		$('table').on('click', '.edit_cancel', function () {
			$(this).parent().children('.btn-edit-group').hide();	// hide Confirm and Cancel buttons
			$(this).parent().prev().children('.edit_txt').hide();	// hide input text field
			$(this).parent().prev().children('p').show();			// show tag 'p'
			$('.action_group').show();										// show Edit & Delete buttons
		});
	});

	/**	-- Click CONFIRM button from Edit task form --
	 * replace the value of array at current row
	 * update new value to array
	 * re-show table with array updated new value
	 */
	$('table').on('click', '.edit_OK', function () {
		// get value of 1st cell('NO.') of current row
		// then minus 1 to have correct index number from array
		var index = $(this).closest('tr').children(':first-child').text() - 1;

		// Assign value from Input text field into tag 'p'
		// for displaying with updated value
		// after pressing Confirm button
		var updatedInfo = $(this).parent().prev().children('.edit_txt');

		if (updatedInfo.val() == '') {	// check when the input text field is blank
			alert('You must not input a blanked task name!');	// alert to notify user to re-input the task name
			updatedInfo.focus();											// focus on the input text field of current row
		} else {									// when the input text had value inputted
			todoList.splice(index, 1, updatedInfo.val());		// remove current value from array and update with the new value as replacement
			showData(todoList);											// show table with new array data
		};
	});

	/**	-- Click DELETE button from table, column ACTION --
	 * If Add task form is showing
	 * 	- Confirmation pop-up appears:
	 * 		+ OK = hide Add task form
	 * 		+ Cancel = Focus to Add task form, skip DELETE function
	 * If Add task form is not showing
	 * 	- Confirmation pop-up appears:
	 * 		+ OK = hide remove corresponding row of DELETE button
	 * 		+ Cancel = Turn back to default view
	 */
	$('table').on('click', '.btn_del', function () {
		// get value of 1st cell('NO.') of current row
		// then minus 1 to have correct index number from array
		var index = $(this).closest('tr').children(':first-child').text() - 1;

		// check if 'Add task form' is showing or not
		var hasAdding = $('#added').is(':visible');

		if (hasAdding) {	// 'Add task form' is showing
			$('#cancelled').click();	// perform a Click on 'Cancel' button of 'Add task form'
		};

		/** Confirmation pop-up (returns boolean) with:
		 * true = 'OK':
		 * 	- Remove array value corresponding to current row
		 * 	- Re-display table with updated array
		 * false = 'Cancel':
		 * 	- show table with non-updated array
		 */
		var confirmation = confirm('Are you SURE to DELETE IT ?');
		if (!confirmation) {		// Confirm = Cancel
			showData(todoList);				// show table with non-updated array
		} else {						//	Confirm = OK
			todoList.splice(index, 1);		// Remove array value corresponding to current row
			showData(todoList);				// show table with new array data
		}
	}); // End delete function

});