import { Component, Input, OnInit } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: [
  ]
})
export class MapComponent implements OnInit {

  mapOptions: google.maps.MapOptions = {
    zoom: 12,
    streetView: null,
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    panControl: false,
    scaleControl: false,
    disableDoubleClickZoom: false,
  }

  marker = {
    lat: 1,
    lng: 1
  }

  map: any;

  constructor(private store: Store<AppState>,) { }

  ngOnInit(): void {
    //Suscrito al store atento a los cambios que existieran en el state
    this.store.subscribe(
      ({ weather }) => {

        this.marker = {
          lat: weather.weather!.coord!.lat,
          lng: weather.weather!.coord!.lon
        }

      }
    )
  }
}
