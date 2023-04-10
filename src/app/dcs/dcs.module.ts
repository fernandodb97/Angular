import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesComponent } from './naves/naves.component';
import { MainComponent } from './main/main.component';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { DcsService } from './services/dcs.service';



@NgModule({

  //MODULOS HIJOS A IMPORTAR PARA SER USADOS EN LOS exports:[] POR EL MODULO PADRE
  declarations: [
    NavesComponent,
    MainComponent,
    AgregarComponent
  ],

  //MODULOS IMPORTADOS CON FUNCIONES DE ANGULAR IMPORTANTES PARA SU USO
  imports: [
    CommonModule,
    FormsModule
  ],

  //AQUI VA EL MODULO PADRE DONDE SE VAN A UTILIZAR LOS MODULOS HIJOS declarations:[]
  exports:[
    MainComponent
  ],

  //AQUI VAN LOS SERVICIOS A INJECTAR EN LOS DEMÁS MODULOS
  providers:[
    DcsService
  ]
})
export class DcsModule { }
