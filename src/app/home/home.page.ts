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
    { id: 1, name: 'mario', carico:'deraspatura',peso:1000 },
    { id: 2, name: 'benzema',carico:'deraspatura', peso:1306 },
    { id: 3, name: 'marra' ,carico:'vinatura',peso:1067 },
    { id: 4, name: 'simone',carico:'vinatura',peso:1100 }
  ]

}
