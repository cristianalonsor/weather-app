import { Component, EventEmitter, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import * as weatherActions from '../../store/actions/weather.actions';
import { Coord } from '../../interface/weather.interface';
import { RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit {

  txtInput!: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required)
  }

  ngOnInit(): void {
  }

  buscar() {
    if (this.txtInput.invalid) { return }
    const comuna: string = this.txtInput.value;
    this.store.dispatch(weatherActions.getWeather({ comuna }));
  }
}
