import { Component, ViewChild } from '@angular/core';
import { IonChip } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  Contatti = [
    { id: 1, name: 'mario', carico:'deraspatura' },
    { id: 2, name: 'benzema',carico:'deraspatura' },
    { id: 3, name: 'marra' ,carico:'vinatura'},
    { id: 4, name: 'simone',carico:'vinatura' }
  ]

}
