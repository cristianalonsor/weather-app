import { createAction, props } from '@ngrx/store';
import { Coord, WeatherAppInterface } from '../../interface/weather.interface';



export const getWeather = createAction(
    '[Weather] Get Weather Info',
    props<{ comuna: string }>()
);

export const getWeatherSuccess = createAction(
    '[Weather] Get Weather Info Success',
    props<{ weather: WeatherAppInterface }>()
);

export const getWeatherFailure = createAction(
    '[Weather] Get Weather Info Failure',
    props<{ payload: any }>()
);