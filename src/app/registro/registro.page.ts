import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  username: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(public alertController: AlertController, private router:Router) { }

  ngOnInit() {
  }

  async registrar(){
    const {username, password,cpassword} = this;
    if(password !== cpassword){
      this.showAlert("Error", "contraseñas inválidas");
    }
    else{
      try{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,this.username, this.password)
        .then((userCredential) => {
        const user = userCredential.user;
        this.showAlert("Usuario Registrado","Se ha registrado "+this.username + " correctamente").then(() => this.router.navigate(['login']));
   
        })
        .catch((error) => {
        
        const errorMessage = error.message;

        this.showAlert("Error",errorMessage);
        });
      } catch(err){
        this.showAlert("Error",err.message);
      }
    }
  }

  async showAlert(header:string,message:string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ["Ok"]
    });
    await alert.present();
  }
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registro',
      message: 'Se ha registrado exitosamente',
      buttons: [
        {
          text: 'Ok',
          id: 'confirm-button',
          handler: () => {
            this.router.navigateByUrl('/login');
          }
        }
      ]
    });

    await alert.present();
  }
}
