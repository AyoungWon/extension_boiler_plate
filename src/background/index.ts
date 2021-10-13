import { Action, ActionForTab, SEND_OPINION } from "../ceci";

(function () {
  const sendMessageForTab = (message: ActionForTab) =>
    new Promise((resolve, reject) => {
      chrome.tabs.query({ url: ["*://*.youtube.com/*"] }, function (tabs) {
        tabs
          ? tabs.forEach((tab) => {
              tab.id
                ? chrome.tabs.sendMessage(tab.id, message, function (response) {
                    resolve(response);
                  })
                : reject("no id");
            })
          : reject("no tabs");
      });
    });

  const apiResponse = (message: Action, sender, sendResponse) => {
    switch (message.type) {
      case SEND_OPINION:
        console.log("send_opinion");
        break;
      default:
        break;
    }
    return true;
  };

  chrome.runtime.onMessage.addListener(apiResponse);
})();

var updateProperties = { active: true };
chrome.tabs.query({ status: "loading" }, console.log);
chrome.tabs.update({ active: true }, console.log);
