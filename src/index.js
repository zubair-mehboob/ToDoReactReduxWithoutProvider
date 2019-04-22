import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/App";
import { createStore } from "redux";
import combineReducers from "./reducers";
import { Provider } from "react-redux";
const store = createStore(combineReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
