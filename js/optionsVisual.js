window.mdc.autoInit();

// messages
const snackbar = mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));


$(document).ready(function() {
	new Tooltip($('#save-options')[0], {
		placement: 'left',
		title: 'Save options'
	});
	new Tooltip($('#reset-options')[0], {
		placement: 'left',
		title: 'Reset options'
	});
});