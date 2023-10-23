import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';
import * as weatherActions from '../actions/weather.actions';
import { WeatherAppInterface, Coord } from '../../interface/weather.interface';
import Swal from 'sweetalert2';

@Injectable()
export class WeatherEffect {

  constructor(private actions$: Actions,
    private weatherService: WeatherService) { }

  getWeatherData$ = createEffect(

    () => {
      return this.actions$.pipe(
        ofType(weatherActions.getWeather),
        switchMap(({ comuna }) => this.weatherService.getInfoByComuna(comuna)
          .pipe(
            map((weather: WeatherAppInterface) => {
              return weatherActions.getWeatherSuccess({ weather })
            }),
            catchError(error => {
              return of(weatherActions.getWeatherFailure({ payload: error }))
            })
          )
        ),
      );
    });
}
