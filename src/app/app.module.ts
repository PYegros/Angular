import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';//elementos de formulario
import { HttpModule } from '@angular/http';
import {routing, appRoutingProviders} from './app.routing'; //routeado

import { AppComponent } from './app.component';

import { ProfesorComponent} from '../profesor/profesor.component';
import { FrutaComponent } from './fruta/fruta.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfesorComponent,
    FrutaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
