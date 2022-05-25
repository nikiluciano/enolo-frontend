import { Component, OnInit, ViewChild } from '@angular/core';
import { IonChip } from '@ionic/angular';
import { WarehouseService } from '../services/warehouse.service';
import { Storage } from '@capacitor/storage';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  [x: string]: any;

  constructor(public warehouseService: WarehouseService) { }

  Contatti = [
    { id: 1, name: 'mario', carico: 'deraspatura', peso: 1000 },
    { id: 2, name: 'benzema', carico: 'deraspatura', peso: 1306 },
    { id: 3, name: 'marra', carico: 'vinatura', peso: 1067 },
    { id: 4, name: 'simone', carico: 'vinatura', peso: 1100 }
  ]

  warehouse: any;
  contentLoaded = false;
  totalBottles=0;


  ngOnInit() {
    this.getWarehouse()
  }

  doRefresh(event) {
    setTimeout(()=>{
      console.log("piju ngul")
      event.target.complete()
    }, 2000);
    this.getWarehouse()
  }

  

  async getWarehouse() {
    await this.warehouseService.getWarehouse().then(
      (res: any) => {
        console.log("arrivato qui")
        if (res) {
          this.contentLoaded=true
          this.warehouse = res
          console.log("magazzino" + JSON.stringify(this.warehouse));

        } else {
          console.log("errore");

        }
      })

    }

}



