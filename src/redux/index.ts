import {combineReducers, Reducer} from "redux";

//reducers
import authReducer from "./auth/auth.reducer";

//types
import {AuthState} from "./auth/auth.types";
import {MapState} from "./map/map.types";
import mapReducer from "./map/map.reducer";

export interface ApplicationState {
    auth: AuthState;
    map: MapState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    auth: authReducer,
    map: mapReducer
});