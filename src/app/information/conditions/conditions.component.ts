import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, tap, combineLatest } from 'rxjs';
import Swal from 'sweetalert2';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls : ['./condition.style.css']
})
export class ConditionsComponent implements OnInit{

  ngOnInit(): void {
    Swal.fire({
      title: 'Ups...',
      text: 'Error inesperado, porfavor revisa tu busqueda.',
      icon: 'warning'
    })
  }

}
