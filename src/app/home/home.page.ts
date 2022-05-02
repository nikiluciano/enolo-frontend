import { Component } from '@angular/core';
import { IonChip } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  Contatti = [
    { id: 1, name: 'mario' },
    { id: 2, name: 'benzema' },
    { id: 3, name: 'marra' },
    { id: 4, name: 'simone' }

  ]


}
