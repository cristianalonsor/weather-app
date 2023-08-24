import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
})
export class TiempoComponent {

  data$ =  combineLatest({
    isLoading: this.store.select('weather').pipe(
      map((data) => data.isLoading)
    ),
    error: this.store.select('weather').pipe(
      map((data) => data.error)
    ),
    weather: this.store.select('weather').pipe(
      map((data) => data.weather)
    ),
  });

  constructor(private store: Store<AppState>) {
  }
}
