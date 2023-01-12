import { Component, OnInit } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Movimientos } from '../models/movimientos.model';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  model: Movimientos={ID_MOV: this.generate(), NO_CUENTA:0, NOMBRE_CLI:'' , RUN_CL: 0, NOMBRE_DESTINATARIO:'', RUN_DES:0, MONTO:0,SALDO:0}
  public movimiento: any;

  constructor(private menuCtrl: MenuController, private router:Router, private _peticionesService: PeticionesService, ) { }

  ngOnInit() {
    this._peticionesService.getMovimientos().subscribe(
      result => {
        console.log(result);
        this.movimiento = result;
        return result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  presionarMenu(){
    this.menuCtrl.toggle();
  }
  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  generate() {
    while (this.getRandomInt) {
      return this.getRandomInt(0, 99999);
    }
  }
}
