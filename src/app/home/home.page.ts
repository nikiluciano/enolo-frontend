import { Component, OnInit, ViewChild } from '@angular/core';
import { IonChip } from '@ionic/angular';
import { WarehouseService } from '../services/warehouse.service';
import { Storage } from '@capacitor/storage';
import { ConfermentService } from '../services/conferment.service';
import { Style } from '@capacitor/status-bar';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  [x: string]: any;

  constructor(public warehouseService: WarehouseService,
    public confermentService: ConfermentService) { }

  warehouse: any;
  contentLoaded = false;
  pandingConferments: any;
  progress:number;
  

  ngOnInit() {
    this.getWarehouse()
    this.getPandingConferments()
    this.progress;
  }

  doRefresh(event) {
    this.getWarehouse()
    this.getPandingConferments()
    setTimeout(() => {
      event.target.complete()
    }, 2000);

  }

  async getWarehouse() {
    await this.warehouseService.getWarehouse().then(
      (res: any) => {
        if (res) {
          this.contentLoaded = true
          this.warehouse = res
          console.log("magazzino" + JSON.stringify(this.warehouse));

        } else {
          console.log("errore");

        }
      })
  }

  async getPandingConferments() {
    await this.confermentService.getPandingConferments().then(
      (res: any) => {
        if (res) {
          this.contentLoaded = true
          this.pandingConferments = res
          this.findTheCurrentProcess()
          console.log("conferimenti" + JSON.stringify(this.pandingConferments));
        }
        else {
          console.log("errore");
        }
      }
    )
  }
  findTheCurrentProcess() {
    for (let i = 0; i < this.pandingConferments.length; i++) {
      if (this.pandingConferments[i].status == "READY") {
        this.pandingConferments[i].current_process = "Pronto"
      } else if (this.pandingConferments[i].status == "DELIVERED")
        this.pandingConferments[i].current_process = "Non iniziato"
      else if (this.pandingConferments[i].status == null)
        this.pandingConferments[i].current_process = "Non iniziato"
      else {
        switch (this.pandingConferments[i].current_process) {
          case "wine_pressing_process":
            this.pandingConferments.current_process = "Pigiatura"
        }
        switch (this.pandingConferments[i].current_process) {
          case "destemming_process":
            this.pandingConferments[i].current_process = "Diraspatura"
        }
        switch (this.pandingConferments[i].current_process) {
          case "winemaking_process":
            this.pandingConferments[i].current_process = "Vinificazione"
        }
        switch (this.pandingConferments[i].current_process) {
          case "racking_process":
            this.pandingConferments[i].current_process = "Svinatura"
        }
        switch (this.pandingConferments[i].current_process) {
          case "refinement_process":
            this.pandingConferments[i].current_process = "Affinamento"
        }
        switch (this.pandingConferments[i].current_process) {
          case "bottling_process":
            this.pandingConferments[i].current_process = "Imbottigliamento"
            this.progress=70;
        }

      }
    }
  }
}