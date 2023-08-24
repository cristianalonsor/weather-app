import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, tap, combineLatest } from 'rxjs';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
})
export class ConditionsComponent {

  
}
