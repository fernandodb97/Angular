import { Component, EventEmitter,Input, Output } from '@angular/core';
import { Nave } from '../interfaces/dcs-interfaces';
import { DcsService } from '../services/dcs.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

export class AgregarComponent {

  //SE LLAMA BAJO EL DECORADOR INPUT AL OBJETO nuevo DEL MODULO main
  @Input() nuevo:Nave ={
    nombre:'',
    tipo:'',
    patente:0,
  };

  //PARA UTILIZAR LOS SERVICIOS DE DCS
  constructor(private dcsservice:DcsService){}

  //@Output() onNave: EventEmitter<Nave> = new EventEmitter();

  //SE CREA UNA FUNCION AGREGAR PARA SER LLAMADA A TRAVÉS DEL FORMULARIO EN EL .html
  agregar(){

    //EXCEPCION PARA BORRAR ESPACIOS EN BLANCOS DEMASES EN CAMPO nombre
    if(this.nuevo.nombre.trim().length === 0){ return ;}

    //this.onNave.emit(this.nuevo)

    //LLAMA A LA FUNCION agregarNave() DE LOS SERVICIOS Y LE ASIGNA LOS VALORES MODIFICADOS POR EL USUARIO
    this.dcsservice.agregarNave(this.nuevo);
    console.log(this.nuevo);

    //INICIALIZA EL OBJETO nuevo EN VALOR POR DEFECTO ANTES DE SER CAMBIADO POR EL USUARIO
    this.nuevo = {
      nombre : '',
      tipo : '',
      patente : 0
    }
  }
}
