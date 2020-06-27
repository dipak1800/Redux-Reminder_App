import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
ReactDOM.render(<App />, document.getElementById("root"));
let initialState = {
  myAge: 21,
};
let reducer = (state = initialState, action) => {
  let newstate = { ...state };
  if (action.type === "increaseAge") {
    newstate.myAge += action.payload;
  } else if (action.type === "decreaseAge") {
    newstate.myAge -= action.payload;
  }
  return newstate;
};
const myStore = createStore(reducer, applyMiddleware(logger));
myStore.dispatch({ type: "increaseAge", payload: 10 });
myStore.dispatch({ type: "increaseAge", payload: 10 });
myStore.dispatch({ type: "decreaseAge", payload: 5 });
myStore.dispatch({ type: "decreaseAge", payload: 5 });

myStore.subscribe(() => console.log(myStore.getState()));
