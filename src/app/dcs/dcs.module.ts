import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesComponent } from './naves/naves.component';
import { MainComponent } from './main/main.component';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavesComponent,
    MainComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainComponent
  ]
})
export class DcsModule { }
