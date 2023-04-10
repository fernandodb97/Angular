import { Component, Input } from '@angular/core';
import { Nave } from '../interfaces/dcs-interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {
  @Input() naves: Nave[]=[]

  @Input() nuevo:Nave ={
    nombre:'',
    tipo:'',
    patente:0,
  }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){ return ;}

    console.log(this.nuevo);
    this.naves.push(this.nuevo)
    this.nuevo = {
      nombre : '',
      tipo : '',
      patente : 0
    }


  }
}
