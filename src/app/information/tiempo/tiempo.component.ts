import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['../../app.component.css']
})
export class TiempoComponent implements OnInit {

  data$ = combineLatest({
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

  ngOnInit(): void {
    this.store.subscribe(
      data => {
      }
    )
  }
}
