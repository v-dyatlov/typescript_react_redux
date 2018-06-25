import {Reducer} from "redux";
import {MapState, MapActions} from "./map.types";
import * as MapConstants from "./map.constants";

export const initialState: MapState = {
    accounts: null
};

const mapReducer: Reducer<MapState> = (state: MapState = initialState, action) => {
    switch ((action as MapActions).type) {
        case MapConstants.MAP_REQUEST:
            return {...state, accounts: []};
        case MapConstants.MAP_SUCCESS:
            return {...state, accounts: [...state.accounts, action.payload.account]};
        default:
            return state;
    }
};

export default mapReducer;