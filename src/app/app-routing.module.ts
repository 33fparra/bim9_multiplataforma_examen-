import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { transaccionesComponent } from './transacciones/transacciones.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'movimientos',
    loadChildren: () => import('./movimientos/movimientos.module').then( m => m.MovimientosPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'logueado',
    loadChildren: () => import('./logueado/logueado.module').then( m => m.LogueadoPageModule)
  },

  { path: 'cliente', component: ClienteComponent },
  { path: 'transacciones', component: transaccionesComponent },
  
  {
    path: 'navscan',
    loadChildren: () => import('./pages/navscan/navscan.module').then( m => m.NavscanPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
