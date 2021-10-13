import { createStore } from "redux";
import rootReducer from "./redux/reducer";
import {} from "./redux/common/action";
import { ScriptInjectionService } from "./service";
import { ActionForTab } from "../ceci";

(function () {
  const RENDER_TIME_OUT = 1000;
  const store = createStore(rootReducer);
  const { dispatch, getState } = store;

  ScriptInjectionService.instance.load("resource/http.js");
  ScriptInjectionService.instance.load("resource/config.js");

  const init = async () => {};

  init();

  chrome.runtime.onMessage.addListener(
    (action: ActionForTab, sender, sendResponse) => {
      switch (action.type) {
        default:
          break;
      }
      return true;
    }
  );

  const rendering = async () => {
    /*   
    // example
    const home = $('ytd-browse[page-subtype="home"] #contents').before(
      `<div id="homeRecommend"></div>`
    );
    const targetLocation = document.querySelector("#homeRecommend");
    home && ViewEntry(targetLocation, store);

 */
  };

  window.addEventListener(
    "load",
    async () => {
      rendering();
    },
    { once: true }
  );

  // action wallet
})();
