import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { environment } from 'src/environments/environment';

import * as firebase from 'firebase/app';


import {ClienteComponent} from './cliente/cliente.component';
import { transaccionesComponent } from "./transacciones/transacciones.component";
import { HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { MenuPage } from './menu/menu.page';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


//import { initializeApp } from "firebase/app";


firebase.initializeApp(environment.firebase);



@NgModule({
  declarations: [AppComponent, MenuPage, ClienteComponent, transaccionesComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    //AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireAuthModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    //StatusBar,
    //SplashScreen,
    //Storage,
    InAppBrowser,
    BarcodeScanner,
    HttpClientModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
