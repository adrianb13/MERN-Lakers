import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import store from "./store";
import { loadInfo, loadRetired, loadRoster, loadStats, loadTrivia, getSchedule } from "./actions/index";

import "./index.css";

store.dispatch(loadInfo());
store.dispatch(loadRetired());
store.dispatch(loadRoster());
store.dispatch(loadStats());
store.dispatch(loadTrivia());
store.dispatch(getSchedule());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
