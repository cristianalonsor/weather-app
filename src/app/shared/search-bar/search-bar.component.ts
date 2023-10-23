import { Component, EventEmitter, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import Swal from 'sweetalert2';
import * as weatherActions from '../../store/actions/weather.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['../../app.component.css']
})
export class SearchBarComponent implements OnInit {

  txtInput!: FormControl;
  icons = [
    { class: 'fa fa-sun' },
    { class: 'fa fa-cloud' },
    { class: 'fa fa-cloud-sun-rain' },
  ]

  currentIndex = 0;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required)
  }

  ngOnInit(): void {
    this.changeIcon();
    setInterval(() => {
      this.changeIcon();
    }, 1500)
  }

  buscar() {
    if (this.txtInput.invalid) { return }
    const comuna: string = this.txtInput.value;
    this.store.dispatch(weatherActions.getWeather({ comuna }));
  }

  changeIcon() {
    this.currentIndex = (this.currentIndex + 1) % this.icons.length;
  }
}
