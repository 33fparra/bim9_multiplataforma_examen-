/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/quotes */
import{Injectable} from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';
import{Movimientos}from '../models/movimientos.model';
import{Cliente}from '../models/cliente.model';

@Injectable({
  providedIn:'root'
})

export class PeticionesService {

  public url:string;

  constructor(public _http:HttpClient){
      this.url="https://n7r8fp3np9.execute-api.us-east-1.amazonaws.com/produccion/";
  }
  getMovimientos():Observable<any>{
    return this._http.get(this.url+'api-mov/movimientos/getmovimientos');
  }
  getCliente():Observable<any>{
    return this._http.get(this.url+'api-mov/clientes/getclientes');
  }
   addMovimientos(movimientos):Observable<Movimientos>{
    return this._http.post<Movimientos>(this.url+'api-mov/movimientos/addmovimientos',movimientos);
  }
  addCliente(cliente):Observable<Cliente>{
    return this._http.post<Cliente>(this.url+'api-mov/clientes/addclientes',cliente);
  }
}

