import {createStore, applyMiddleware, Store} from "redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import {ApplicationState, reducers} from "./redux";

const loggerMiddleware = createLogger();

export default function configureStore(): Store<ApplicationState> {
    return createStore(
        reducers,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
}