import {ActionCreator} from "redux";

import {
    MapRequestAction,
    MapSuccessAction,
    Account
} from "./map.types";
import * as MapConstants from "./map.constants";

export const mapRequest: ActionCreator<MapRequestAction> = () => ({
    type: MapConstants.MAP_REQUEST,
    payload: {},
});

export const mapSuccess: ActionCreator<MapSuccessAction> = (account: Account) => ({
    type: MapConstants.MAP_SUCCESS,
    payload: {
        account
    }
});