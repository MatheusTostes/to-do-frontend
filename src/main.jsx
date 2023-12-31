import { initStore } from "./store";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

var store = initStore({
  initialState: {},
});

render(
  <Provider {...{ store }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
