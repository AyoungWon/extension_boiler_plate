export const SEND_OPINION = "SEND_OPINION" as const;
export const SEND_OPINION_FOR_TAB = "SEND_OPINION_FOR_TAB" as const;

export type Action = {
  type: typeof SEND_OPINION;
  opinion: string;
};

export const sendAction: <T>(action: Action) => Promise<T> = (action) =>
  new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(action, function (response: any) {
      resolve(response);
    });
  });

export type ActionForTab = {
  type: typeof SEND_OPINION_FOR_TAB;
  opinion: boolean;
};
