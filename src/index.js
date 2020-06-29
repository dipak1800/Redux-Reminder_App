import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import myStore, { persistor } from "./Redux/Store/Appstore";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={myStore}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
