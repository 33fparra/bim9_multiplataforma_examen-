import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialScanPageRoutingModule } from './historial-scan-routing.module';

import { HistorialScanPage } from './historial-scan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialScanPageRoutingModule
  ],
  declarations: [HistorialScanPage]
})
export class HistorialScanPageModule {}
