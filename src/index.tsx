import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import * as serviceWorker from "./serviceWorker";

import reducer from "./reducers";
import App from "./containers/App";
import sagas from "./sagas";

import "./index.css";

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   reducer,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// );

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
