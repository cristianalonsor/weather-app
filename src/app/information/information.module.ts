import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiempoComponent } from './tiempo/tiempo.component';
import { ContainerRoutesModule } from '../container/container-routes.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { SharedModule } from '../shared/shared.module';
import { ConditionsComponent } from './conditions/conditions.component';

@NgModule({
  declarations: [
    MapComponent,
    TiempoComponent,
    MapComponent,
    ConditionsComponent,
  ],
  imports: [
    CommonModule,
    ContainerRoutesModule,
    GoogleMapsModule,
    NzLayoutModule,
    NzSpaceModule,
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class InformationModule { }
