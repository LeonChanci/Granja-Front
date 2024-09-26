import { Routes } from '@angular/router';
import { PorcinoListComponent } from './pages/porcino-list/porcino-list.component';
import { ClienteListComponent } from './pages/cliente-list/cliente-list.component';
import { AlimentacionListComponent } from './pages/alimentacion-list/alimentacion-list.component';

export const routes: Routes = [  
    {path : 'porcinos', component: PorcinoListComponent},
    {path : 'clientes', component: ClienteListComponent},
    {path : 'alimentacion', component: AlimentacionListComponent},
    {path : '', redirectTo: '/porcinos', pathMatch : 'full'},
];
