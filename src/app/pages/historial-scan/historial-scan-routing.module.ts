import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialScanPage } from './historial-scan.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialScanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialScanPageRoutingModule {}
