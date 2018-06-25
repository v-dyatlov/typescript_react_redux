import {Action} from "redux";
import * as MapConstants from "./map.constants";

export interface MapState {
    accounts: Account[];
}

export interface Account {
    id: string;
    name: string;
    address: string;
}

export interface MapRequestAction extends Action {
    type: MapConstants.MAP_REQUEST,
    payload: {}
}

export interface MapSuccessAction extends Action {
    type: MapConstants.MAP_SUCCESS,
    payload: {
        account: Account;
    }
}

export type MapActions = MapRequestAction | MapSuccessAction;