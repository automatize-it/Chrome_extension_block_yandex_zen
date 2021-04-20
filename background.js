function block_url_req(details){
	
	return {
		cancel: true
	};
}

var adr  = ["https://zen.yandex.ru/widget-loader", "http://zen.yandex.ru/widget-loader", "https://yastatic.net/*/zen-lib*", "http://zen.yandex.ru/*", "https://zen.yandex.ru/*"];
var opt_extraInfoSpec = ["blocking"];
chrome.webRequest.onBeforeRequest.addListener(block_url_req, {urls: adr}, opt_extraInfoSpec);