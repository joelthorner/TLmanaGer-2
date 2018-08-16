var cookie = Cookies.get('add-guide-lines-active');

if (typeof cookie == 'undefined') cookie = 0;

cookie = parseInt(cookie);

if (cookie == 1) {
	$.getScript( chrome.extension.getURL('js/libs/jquery-3.3.1.min.js'), function() {
		$.getScript( chrome.extension.getURL('js/libs/js.cookie.js'), function() {
			$.getScript( chrome.extension.getURL('js/actions/add-guide-lines.js'), function() {

			});
		});
	});
}