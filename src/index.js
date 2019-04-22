import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/App";
import { createStore } from "redux";
import combineReducers from "./reducers";
const store = createStore(combineReducers);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
