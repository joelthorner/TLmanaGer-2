// function getCurrentTabCookies(){
// 	chrome.tabs.query({ "status": "complete", "windowId": chrome.windows.WINDOW_ID_CURRENT, "active": true }, function(tab) {
// 		chrome.cookies.getAll({ "url": tab[0].url }, function (cookie){
// 			allCookieInfo = "[";
// 			for(i = 0; i < cookie.length; i++){
// 				if (i == 0) allCookieInfo += JSON.stringify(cookie[i]);
// 				else if (i > 0 && i < cookie.length) allCookieInfo += ',' + JSON.stringify(cookie[i]);
// 			}
// 			localStorage.currentCookieInfo = allCookieInfo + ']';
// 		});
// 	});
// }
// window.onload = getCurrentTabCookies;



$(document).ready(function() {

	// init [add-guide-lines]
	chrome.tabs.query({ "status": "complete", "windowId": chrome.windows.WINDOW_ID_CURRENT, "active": true }, function(tab) {
		chrome.cookies.get({ url: tab[0].url, name: 'add-guide-lines-active' }, function (cookie) {
			if (cookie) {
				var cookieVal = parseInt(cookie.value);
				
				if (cookieVal == 0) dataDirective = 'add-guide-lines';
				else if (cookieVal == 1) dataDirective = 'remove-guide-lines';
			} else {
				dataDirective = 'add-guide-lines';
			}

			$('#guide-lines-btn')
				.attr('data-directive', dataDirective)
				.parents('.item-grid')
				.addClass(function() { 
					if (dataDirective == 'remove-guide-lines') return 'active';
				})
		});
	});

	// default background action
	$('.runtime-action').click(function(event) {
		var directiveName = $(this).data('directive');

		// execute directive
		chrome.runtime.sendMessage({ directive: directiveName }, function(response) {
			this.close();
		});
	});

	// link open action
	$('.runtime-link').click(function(event) {
		var directiveName = $(this).data('directive');

		// execute directive
		var newURL = $(this).data('url');
		chrome.tabs.create({ url: newURL });
	});

});

