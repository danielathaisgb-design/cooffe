import { Routes } from '@angular/router';
import { Bebidas } from './bebidas/bebidas';
import { Nosotros } from './nosotros/nosotros';

export const routes: Routes = [
    {path:'', redirectTo:'nosotros', pathMatch:'full'},
    {path:'bebidas', component:Bebidas},
    {path:'nosotros', component:Nosotros},
    {path:'**', redirectTo:'nosotros'},
];

