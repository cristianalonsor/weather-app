import { Action, createReducer, on } from '@ngrx/store';
import { WeatherAppInterface } from 'src/app/interface/weather.interface';
import * as weatherActions from '../actions/weather.actions';

export interface WeatherState {
    isLoading: boolean,
    error: any,
    weather: WeatherAppInterface | null
}

const initialState: WeatherState = {
    isLoading: false,
    error    : null,
    weather  : null,
};


const _weatherReducer = createReducer(
  initialState,
  on(weatherActions.getWeather, (state, { comuna }) => ({
    ...state,
    isLoading: true,
  })),

  on( weatherActions.getWeatherSuccess, ( state, { weather } ) => ({
    ...state,
    weather,
    isLoading: false,
    error: null
  })),
  
  on( weatherActions.getWeatherFailure, ( state, { payload } ) => ({
    ...state,
    weather: null,
    isLoading: false,
    error: payload
  })),
)


export function weatherReducer(state: any, action: Action) {
   return _weatherReducer(state, action)
}