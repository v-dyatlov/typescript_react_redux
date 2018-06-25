import {ActionCreator} from "redux";

import {
    LoginRequestAction,
    LoginSuccessAction,
    UserInfo
} from "./auth.types";

export const loginRequest: ActionCreator<LoginRequestAction> = (loggingIn: boolean) => ({
    type: '@@auth/LOGIN_REQUEST',
    payload: {
        loggingIn,
    },
});

export const loginSuccess: ActionCreator<LoginSuccessAction> = (user: UserInfo) => ({
    type: '@@auth/LOGIN_SUCCESS',
    payload: {
        user
    }
});