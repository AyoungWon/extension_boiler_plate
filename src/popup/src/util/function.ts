import { ActionForTab } from "../../../ceci";

export const sendMessageForTab = (
  message: ActionForTab,
  cb?: (response: any) => void
) => {
  chrome.tabs.query({ url: ["*"] }, function (tabs) {
    tabs.forEach((tab) => {
      tab.id && chrome.tabs.sendMessage(tab.id, message, cb);
    });
  });
};
