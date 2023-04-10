import { Component } from '@angular/core';
import { Nave } from '../interfaces/dcs-interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  naves: Nave[] =[
    {nombre: 'primera',
    tipo:'f-16',
    patente:0
    },
    {nombre: 'segunda',
    tipo:'pillan',
    patente:0
    },
    {nombre: 'tercera',
    tipo:'f-5',
    patente:0
    }
  ]

  nuevo:Nave = {
    nombre: '',
    tipo:'',
    patente:0
  }

}
