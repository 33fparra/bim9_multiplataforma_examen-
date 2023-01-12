import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Injectable({
    providedIn: 'root'
})

export class DataLocalService {

    guardados: Registro[] = [];


    constructor(private storage: Storage, private navCtrl: NavController, private iab: InAppBrowser) {
        this.cargaStorage();
    }

    async ngOnInit() {
        await this.storage.create().then(() => {
            this.cargaStorage();
        })
    }

    async cargaStorage() {
        this.guardados = (await this.storage.get('registros') || [])
    }

    async guardarRegistro(format: string, text: string) {
        await this.cargaStorage();

        const nuevoRegistro = new Registro(format, text);
        this.guardados.unshift(nuevoRegistro);

        console.log(this.guardados);

        this.storage.set('registros', this.guardados);

        this.abrirRegistro(nuevoRegistro);
    }




    abrirRegistro(registro: Registro) {
        this.navCtrl.navigateForward('/navscan/historial');

        switch (registro.type) {
            case 'http':

                this.iab.create(registro.text, '_system');
                break;
            case 'geo':

                this.navCtrl.navigateForward(`/navscan/historial/mapa/${registro.text}`);
                break;
        }
    }

    /*const browser = this.iab.create('https://ionicframework.com/');
  
  browser.executeScript(...);
  
  browser.insertCSS(...);
  browser.on('loadstop').subscribe(event => {
     browser.insertCSS({ code: "body{color: red;" });
  });
  
  browser.close(); */

}
