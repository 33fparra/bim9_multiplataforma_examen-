import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavscanPageRoutingModule } from './navscan-routing.module';

import { NavscanPage } from './navscan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavscanPageRoutingModule
  ],
  declarations: [NavscanPage]
})
export class NavscanPageModule {}
