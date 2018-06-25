import * as React from "react";
import {UserInterface} from "../../interfaces/user.interface";

export const AuthService = {
    login
};

function login(user: UserInterface) {
    const defaultUser = {
        username: 'test',
        password: 'password'
    };

    if (defaultUser.username === user.login && defaultUser.password === user.password) {
        localStorage.setItem('user', JSON.stringify(defaultUser));
        return defaultUser;
    } else {
        return false;
    }
}