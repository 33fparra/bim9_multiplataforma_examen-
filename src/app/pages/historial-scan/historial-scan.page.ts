import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-historial-scan',
  templateUrl: './historial-scan.page.html',
  styleUrls: ['./historial-scan.page.scss'],
})
export class HistorialScanPage implements OnInit {

  constructor(public dataLocal: DataLocalService) { }

  ngOnInit() {
  }

  abrirRegistro(registro){
    console.log('Registro', registro);
    this.dataLocal.abrirRegistro(registro);
  }

}
