import * as React from "react";
import * as ReactDOM from "react-dom";

import {Provider} from 'react-redux';

import {App} from "./components/App";
import configureStore from "./configureStore";
import createBrowserHistory from "history/createBrowserHistory";
import {AuthState, UserInfo} from "./redux/auth/auth.types";
import {ApplicationState} from "./redux";


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);