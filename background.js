function checkForValidUrl(tabId, changeInfo, tab) {
	if (tab.url.indexOf('linkedin.com') > -1) {
		chrome.pageAction.show(tabId);
	}
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab.id, {file: "jquery-1.11.2.min.js"});
	chrome.tabs.executeScript(tab.id, {file: "script.js"});
});