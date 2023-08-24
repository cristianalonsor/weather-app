import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Coord, WeatherAppInterface } from '../interface/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  _URL: string = environment._URL;

  constructor(private http: HttpClient) { }

  getInfoByComuna(comuna: string): Observable<WeatherAppInterface> {
    return this.http.get<WeatherAppInterface>(`${this._URL}/searchWeatherByGeolocation?city=${comuna},cl&limit=1&unit=metric` )
  }
}
