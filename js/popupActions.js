function getCurrentTabCookies(){
	chrome.tabs.query({ "status": "complete", "windowId": chrome.windows.WINDOW_ID_CURRENT, "active": true }, function(tab) {
		// console.log(JSON.stringify(tab));
		chrome.cookies.getAll({ "url": tab[0].url }, function (cookie){
			allCookieInfo = "[";
			for(i = 0; i < cookie.length; i++){
				// console.log(JSON.stringify(cookie[i]));
				if (i == 0) allCookieInfo += JSON.stringify(cookie[i]);
				else if (i > 0 && i < cookie.length) allCookieInfo += ',' + JSON.stringify(cookie[i]);
			}
			localStorage.currentCookieInfo = allCookieInfo + ']';
		});
	});
}
window.onload = getCurrentTabCookies;


$(document).ready(function() {
	
	// default background action
	$('.runtime-action').click(function(event) {
		var directiveName = $(this).data('directive');

		// switch case customa click action
		switch(directiveName){
			case 'add-guide-lines':
				getCurrentTabCookies();
				var cookie = 0;
				$.each($.parseJSON(localStorage.currentCookieInfo), function(index, val) {
					if (val.name == 'add-guide-lines-active') cookie = parseInt(val.value);
				});
				if (cookie == 0) directiveName = 'add-guide-lines';
				else if (cookie == 1) directiveName = 'remove-guide-lines';
				
				break;
		}

		// execute directive
		chrome.runtime.sendMessage({ directive: directiveName }, function(response) {
			// this.close();
		});
	});

});

