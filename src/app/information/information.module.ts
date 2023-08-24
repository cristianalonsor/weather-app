import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiempoComponent } from './tiempo/tiempo.component';
import { ContainerRoutesModule } from '../container/container-routes.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    MapComponent,
    TiempoComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    ContainerRoutesModule,
    GoogleMapsModule
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class InformationModule { }
