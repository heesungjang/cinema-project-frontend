import App from "./shared/App";
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./Redux/configureStore";

import GlobalStyles from "./shared/GlobalStyles";

ReactDOM.render(
    <Provider store={store}>
        <App />
        <GlobalStyles />
    </Provider>,
    document.getElementById("root")
);
