import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

//import { LogueadoPageRoutingModule } from './logueado-routing.module';

import { Routes, RouterModule } from '@angular/router';

import { LogueadoPage } from './logueado.page';
//import { MenuPageModule } from '../menu/menu.module';

const routes: Routes = [
  {
    path: '',
    component: LogueadoPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    //MenuPageModule,
    //LogueadoPageRoutingModule
  ],
  declarations: [LogueadoPage]
})
export class LogueadoPageModule {}
