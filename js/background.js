function executeScripts(tabId, injectDetailsArray) {
	function createCallback(tabId, injectDetails, innerCallback) {
		return function () {
			chrome.tabs.executeScript(tabId, injectDetails, innerCallback);
		};
	}
	var callback = null;
	for (var i = injectDetailsArray.length - 1; i >= 0; --i)
		callback = createCallback(tabId, injectDetailsArray[i], callback);

	if (callback !== null)
		callback(); // execute outermost function
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(request, sender, sendResponse);
		switch (request.directive) {
			case 'add-guide-lines':
				executeScripts(null, [ 
					{ file: "js/libs/jquery-3.3.1.min.js" },
					{ file: "js/libs/js.cookie.js" },
					{ file: "js/actions/add-guide-lines.js" }
				])
				break;
			case 'remove-guide-lines':
				executeScripts(null, [ 
					{ file: "js/libs/jquery-3.3.1.min.js" },
					{ file: "js/libs/js.cookie.js" },
					{ file: "js/actions/remove-guide-lines.js" }
				])
				break;
		}
	}
);