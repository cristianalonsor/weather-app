
import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './store/reducers/index';

export interface AppState {
    weather: reducers.WeatherState
}

export const appReducer: ActionReducerMap<AppState> = {
    weather: reducers.weatherReducer
}