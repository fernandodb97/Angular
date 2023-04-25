import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DcsModule } from './dcs/dcs.module';



@NgModule({
  declarations: [
    AppComponent,
  ],

  //EL MODULO PRINCIPAL IMPORTA TODOS LOS MODULOS "HIJOS" JUNTO A LOS PROPIOS QUE IMPORTEN FUNCIONES DE 3EROS 
  imports: [

    HeroesModule,
    ContadorModule,
    DcsModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
