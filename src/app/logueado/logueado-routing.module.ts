import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogueadoPage } from './logueado.page';

const routes: Routes = [
  {
    path: '',
    component: LogueadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogueadoPageRoutingModule {}
