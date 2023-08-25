import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from "ng-zorro-antd/layout";

import { environment } from 'src/environments/environment';
import { routes } from './app-routing.module';
import { appReducer } from './app.reducers';

import { InformationModule } from './information/information.module';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { SharedModule } from './shared/shared.module';

import { EffectsArray } from './store/effects';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    SharedModule,
    InformationModule,
    RouterModule.forRoot( routes ),
    HttpClientModule,
    StoreModule.forRoot( appReducer ),
    EffectsModule.forRoot( EffectsArray ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !environment.production
    }),
    BrowserAnimationsModule,
    NzLayoutModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
