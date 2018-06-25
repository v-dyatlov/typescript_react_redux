import {Reducer} from "redux";
import {AuthState, AuthActions} from "./auth.types";

export const initialState: AuthState = {
    loggingIn: false,
    user: null,
};

const authReducer: Reducer<AuthState> = (state: AuthState = initialState, action) => {
    switch ((action as AuthActions).type) {
        case '@@auth/LOGIN_REQUEST':
            return {...state, loggingIn: true};
        case '@@auth/LOGIN_SUCCESS':
            return {...state, user: action.payload.user, loggingIn: false};
        default:
            return state;
    }
};

export default authReducer;