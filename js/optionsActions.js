// Saves options to chrome.storage
function save_options() {
	var optLcBgActive = $('#opt-lc-bg-active').prop('checked');
	var optLcBgValue = $('#opt-lc-bg-value').val();
	
	var optLcPagridActive = $('#opt-lc-pagrid-active').prop('checked');

	chrome.storage.sync.set({

		optLcBgActive: optLcBgActive,
		optLcBgValue: optLcBgValue,

		optLcPagridActive: optLcPagridActive

	}, function() {
		// Update status to let user know options were saved.
		var dataObj = {
			message: "Options saved",
			actionText: 'Close'
		};

		snackbar.show(dataObj);
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
	// Defaults
	chrome.storage.sync.get({
		
		optLcBgActive: true,
		optLcBgValue: chrome.extension.getURL('img/background-default.jpg'),
		optLcPagridActive: false,

	}, function(items) {
		
		$('#opt-lc-bg-active')
			.prop('checked', items.optLcBgActive)
			.filter(function(index) {
				if (items.optLcBgActive) return true;
			})
			.parents('.mdc-switch').addClass('mdc-switch--checked');
		
		$('#opt-lc-bg-value')
			.val(items.optLcBgValue)
			.filter(function(index) {
				if ($.trim(items.optLcBgValue).length) return true;
			})
			.next()
			.addClass('mdc-floating-label--float-above');

		$('#opt-lc-pagrid-active')
			.prop('checked', items.optLcPagridActive)
			.filter(function(index) {
				if (items.optLcPagridActive) return true;
			})
			.parents('.mdc-switch').addClass('mdc-switch--checked');
	});
}

function restore_dev() {
	chrome.storage.sync.set({
		
		optLcBgActive: true,
		optLcBgValue: chrome.extension.getURL('img/background-default.jpg')

	}, function() {});
}

$(document).ready(function() {
	restore_options();

	$('#save-options').click(function(event) {
		save_options();
	});
});