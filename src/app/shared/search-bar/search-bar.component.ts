import { Component, EventEmitter, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as weatherActions from '../../store/actions/weather.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['../../app.component.css']
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
