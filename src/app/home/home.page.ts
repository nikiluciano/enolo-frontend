import { Component, OnInit, ViewChild } from '@angular/core';
import { IonChip } from '@ionic/angular';
import { WarehouseService } from '../services/warehouse.service';
import { Storage } from '@capacitor/storage';
import { ConfermentService } from '../services/conferment.service';
import { Style } from '@capacitor/status-bar';
import { MenuController } from '@ionic/angular';
import { ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  [x: string]: any;

  warehouse: any;
  contentLoaded = false;
  conferments: any;
  progress: number;

  thereArePendingConferments = true;

  statusOfTheProcesses = [];
  filteredConferments = [];

  constructor(public warehouseService: WarehouseService,
    public confermentService: ConfermentService,
    private menu: MenuController) { }



  ngOnInit() {
    this.getWarehouse()
    this.getPendingConferments()
  }


  doRefresh(event) {
    this.getWarehouse()
    this.getPendingConferments()
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

        } else {

      
        }
      })
  }

  async getPendingConferments() {
    await this.confermentService.getPandingConferments().then(
      (res: any) => {
        if (res) {
          this.contentLoaded = true
          this.conferments = res
          this.thereArePendingConferments = true;

          this.filterConferments()
          //this.fillTheProgressBar()

        }
        else {
          this.thereArePendingConferments = false;
        }
      }
    )
  }
  
  findTheCurrentProcess() {

    this.filteredConferments.forEach(element => {
      if (element.status == "READY") {
        element.current_process = "Pronto"

      } else if (element.status == "DELIVERED")
        element.current_process = "Non iniziato"

      else if (element.status == null)
        element.current_process = "Non iniziato"

      else {

        switch (element.current_process) {
          case "wine_pressing_process":
            element.current_process = "pigiatura"
            this.statusOfTheProcesses.push(1 / 6)
            break;

          case "destemming_process":
            element.current_process = "diraspatura"
            this.statusOfTheProcesses.push(2 / 6)
            break;

          case "winemaking_process":
            element.current_process = "vinificazione"
            this.statusOfTheProcesses.push(3 / 6)
            break;

          case "racking_process":
            element.current_process = "svinatura"
            this.statusOfTheProcesses.push(4 / 6)
            break;

          case "refinement_process":
            element.current_process = "affinamento"
            this.statusOfTheProcesses.push(5 / 6)
            break;

          case "bottling_process":
            element.current_process = "imbottigliamento"
            this.statusOfTheProcesses.push(6 / 6)
            break;
        }
      }



    })



  }

  filterConferments() {
    this.filteredConferments = []
    this.conferments.forEach(element => {
      if (element.status == "PENDING")
        this.filteredConferments.push(element)
    });
    if (this.filteredConferments.length == 0)
      this.thereArePendingConferments = false
    else {
      this.thereArePendingConferments = true
      this.findTheCurrentProcess()
    }
  }

  
  openMenu() {
    this.menu.open();
  }


  ionViewWillEnter() {
    this.menu.enable(true);
  }



}