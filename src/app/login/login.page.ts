import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(public alertController: AlertController, private router:Router) { }

  ngOnInit() {
  }

  async login(){
    const {username, password} = this;
    if(username == ""){
      this.showAlert("Error","Nombre de usuario no puede estar vacío")
    }
    if(password == ""){
      this.showAlert("Error","Contraseña no puede estar vacía")
    }else{
      try{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          
          const user = userCredential.user;
          
          this.showAlert("Logeado","Bienvenido "+this.username).then(() => this.router.navigate(['menu']));
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
          if(error.code === "auth/invalid-email"){
            this.showAlert("Error","El nombre de usuario es invalido")
          }
          if(error.code === "auth/wrong-password"){
            this.showAlert("Error","Contraseña incorrecta")
          }
          if(error.code === "auth/user-not-found"){
            this.showAlert("Error","El usuario no existe")
          }

          });
      }catch(error){
        error.message;
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
}
