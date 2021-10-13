import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./View";
import { StoreType } from "./redux/reducer";

const element = document.createElement("div");

const ViewEntry = (insertLocation: any, store: StoreType) => {
  return ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    insertLocation.insertBefore(element, insertLocation.firstChild)
  );
};

export default ViewEntry;
