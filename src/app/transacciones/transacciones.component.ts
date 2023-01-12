import { Component, OnInit } from '@angular/core';

import { PeticionesService } from 'src/app/services/peticiones.service';
import { Movimientos } from '../models/movimientos.model';
import { AlertController } from '@ionic/angular';

import { JsonPipe } from '@angular/common';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.scss'],
})
export class transaccionesComponent implements OnInit {

  model: Movimientos={ID_MOV: this.generate(), NO_CUENTA:0, NOMBRE_CLI:'' , RUN_CL: 0, NOMBRE_DESTINATARIO:'', RUN_DES:0, MONTO:0,SALDO:0}
  public movimiento: any;


  constructor(private _peticionesService: PeticionesService,
    public alert: AlertController) { }

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

  agregarMovimiento() {
    console.log(this.model);

    this._peticionesService.addMovimientos(JSON.stringify(this.model)).subscribe(
      (response: Movimientos) => {
        console.log(response)
        if (this.model.NOMBRE_CLI == "") {
          this.showAlert("Error", "no pueden quedar campos vacios")

        }
        else if(this.model.RUN_CL == this.model.RUN_DES){
          this.showAlert("Error", "Los RUN no pueden ser iguales") //revisar porque pasa igual cuando los rut son iguales

        }
        else {
          this.showAlert("Movimiento Realizado al destinatario", this.model.NOMBRE_DESTINATARIO)
        }
      }
    );
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    });
    await alert.present();
    setTimeout(location.reload.bind(location), 1000);
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
