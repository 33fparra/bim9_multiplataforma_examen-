import { Component, OnInit } from '@angular/core';

import { PeticionesService } from 'src/app/services/peticiones.service';
import { Cliente } from '../models/cliente.model';
import { AlertController } from '@ionic/angular';

import { JsonPipe } from '@angular/common';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {

  model: Cliente={ID_CLIENTE: this.generate(), DIRECCION: '', RUN: 0, NOMBRE_CLIENTE:''}
  public cliente: any;


  constructor(private _peticionesService: PeticionesService,
    public alert: AlertController) { }

  ngOnInit() {
    this._peticionesService.getCliente().subscribe(
      result => {
        console.log(result);
        this.cliente = result;
        return result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  agregarCliente() {
    console.log(this.model);

    this._peticionesService.addCliente(JSON.stringify(this.model)).subscribe(
      (response: Cliente) => {
        console.log(response)
        if (this.model.NOMBRE_CLIENTE == "") {
          this.showAlert("Error", "no pueden quedar campos vacios")

        }
        else {
          this.showAlert("Cliente Agregado", this.model.NOMBRE_CLIENTE)
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

