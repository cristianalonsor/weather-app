import { Routes } from '@angular/router';
import { TiempoComponent } from '../information/tiempo/tiempo.component';
import { ConditionsComponent } from '../information/conditions/conditions.component';


export const containerRoutes: Routes = [
    { path: '', component: TiempoComponent },
    { path: 'conditions', component: ConditionsComponent },
]