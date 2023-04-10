import { Component, Input } from '@angular/core';
import { Nave } from '../interfaces/dcs-interfaces';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
})
export class NavesComponent {

  @Input() naves: Nave[] =[]
}
