import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./container/container-routes.module').then(
            m => m.ContainerRoutesModule
        )
    },
    {
        path: '**',
        redirectTo: ''
    }
]

