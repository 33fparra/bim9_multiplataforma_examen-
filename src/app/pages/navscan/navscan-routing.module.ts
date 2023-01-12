import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavscanPage } from './navscan.page';

const routes: Routes = [
  {
    path: 'navscan',
    component: NavscanPage,
    children: [
      {
        path : 'scan',
        children: [
          {
            path : '',
            loadChildren: () => import('../scan/scan.module').then(m => m.ScanPageModule)
          }
        ]
      },
      {
        path: 'historial',
        children: [
          {
            path: '',
            loadChildren: () => import('../historial-scan/historial-scan.module').then(m => m.HistorialScanPageModule)
          },
          {
            path: 'mapa/:geo',
            loadChildren: () => import('../mapa/mapa.module').then(m => m.MapaPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'navscan/scan',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'navscan/scan',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavscanPageRoutingModule {}
