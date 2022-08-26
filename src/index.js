import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

import "./index.css";

window.firebaseLink = "cokolwiek";
window.testMode = false;

ReactDOM.render(
  <Provider store={store}>
    <ParallaxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  </Provider>,
  document.getElementById("root")
);
