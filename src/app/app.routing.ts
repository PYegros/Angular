import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FrutaComponent} from './fruta/fruta.component';
import {ProfesorComponent} from '../profesor/profesor.component';

const appRoutes: Routes = [
    { path: '', component: ProfesorComponent}, //ruta inicial
    { path: 'profesor', component: ProfesorComponent}, 
    { path: 'fruta', component: FrutaComponent},
    { path: '**', component: FrutaComponent}, //ruta cuando falle, por defecto
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);