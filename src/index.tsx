import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "./store";
import App from "./containers/App";

const store = configureStore({});

const app = (
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
    {/* </BrowserRouter> */}
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
