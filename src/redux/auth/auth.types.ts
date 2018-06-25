import {Action} from "redux";

export interface AuthState {
    loggingIn: boolean;
    user: UserInfo;
}

export interface UserInfo {
    username: string;
    // bla bla bla
}

export interface LoginRequestAction extends Action {
    type: '@@auth/LOGIN_REQUEST',
    payload: {
        loggingIn: boolean;
    }
}

export interface LoginSuccessAction extends Action {
    type: '@@auth/LOGIN_SUCCESS',
    payload: {
        user: UserInfo;
    }
}

export type AuthActions = LoginRequestAction | LoginSuccessAction;