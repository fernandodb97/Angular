import { Component, Input } from '@angular/core';
//import { Nave } from '../interfaces/dcs-interfaces';
import { DcsService } from '../services/dcs.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
})
export class NavesComponent {

  //@Input() naves: Nave[] =[]

  //SE LLAMA AL ARREGLO DE NAVES EN EL SERVICIO
  get naves(){
    return this.dcsservice.naves;
  }

  //PARA UTILIZAR LOS SERVICIOS DE DCS
  constructor( private dcsservice:DcsService){}

}
