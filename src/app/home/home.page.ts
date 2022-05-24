import { Component, OnInit, ViewChild } from '@angular/core';
import { IonChip } from '@ionic/angular';
import { WarehouseService } from '../services/warehouse.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public warehouseservice:WarehouseService) {}

  Contatti = [
    { id: 1, name: 'mario', carico: 'deraspatura', peso: 1000 },
    { id: 2, name: 'benzema', carico: 'deraspatura', peso: 1306 },
    { id: 3, name: 'marra', carico: 'vinatura', peso: 1067 },
    { id: 4, name: 'simone', carico: 'vinatura', peso: 1100 }
  ]

  warehouse = [];
  
  ngOnInit() {

  }

doRefresh(event){
  setTimeout(()=>{
    console.log("piju ngul")
    event.target.complete()
  }, 2000);
}
}

