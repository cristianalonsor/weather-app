import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container.component';
import { containerRoutes } from './container.routes';


const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: containerRoutes
    }
]


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class ContainerRoutesModule { }
