import { Component } from '@angular/core';
import { Nave } from '../interfaces/dcs-interfaces';
import { DcsService } from '../services/dcs.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {

  //OBJETO NAVE IMPORTADO POR interface CON VARIABLES INICIALIZADAS EN DEFECTO
  nuevo:Nave = {
    nombre: '',
    tipo:'',
    patente:0
  }

  //PARA UTILIZAR LOS SERVICIOS DE DCS
  constructor(private dcsService:DcsService){}
}
