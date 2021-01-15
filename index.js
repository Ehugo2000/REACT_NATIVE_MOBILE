import React from "react";
import { Provider } from "react-redux";
import store from "./app/state/store/store";
import { registerRootComponent } from "expo";
import App from "./App";

const ConnectedApp = () =>
  <Provider store={store}>
    <App />
  </Provider>

registerRootComponent(ConnectedApp);
