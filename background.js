chrome.tabs.onActivated.addListener(function(activeInfo){
	chrome.tabs.get(activeInfo.tabId, function(tab){});
});

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
	if (change.url != undefined)
	{
		if (tab.url.indexOf("game.granbluefantasy.jp") >= 0)
		{
			if (tab.url.substring(31).indexOf("result_multi") >= 0)
			{
				chrome.notifications.create('', {
							title: "Raid ended",
							message: "ale blyat",
							iconUrl: "/bell.png",
							type: "basic"});
			}
		}
	}
	
});
