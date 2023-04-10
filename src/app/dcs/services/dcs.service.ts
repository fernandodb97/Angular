import { Injectable } from "@angular/core";
import { Nave } from '../interfaces/dcs-interfaces';

//USO DECORADOR INJECTABLE PARA TRASPASAR US METODOS ENTRE MODULOS
@Injectable()
export class DcsService{

  //CREA UN ARREGLO DEL OBJETO NAVE CON 3 ITERACIONES DEFINIDAS
  private _naves: Nave[] =[
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
  ];

  //FUNCION GET PARA QUE SE OBTENGAN LAS NAVES EN DISTINTOS MODULOS
  get naves(): Nave[]{
    return [...this._naves];
  }

  //CONSTRUCTOR NECESARIO PARA EL LLAMADO DE SERVICIO
  constructor(){
    console.log('ServiciosFUNCIONA');
  }

  //FUNCION QUE AGREGARA NUEVAS nave AL ARREGLO DE _naves
  agregarNave(nave:Nave){
    this._naves.push(nave)
  }
}
