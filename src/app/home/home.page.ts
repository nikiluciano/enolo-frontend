import { Component, OnInit, ViewChild } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { ConfermentService } from '../services/conferment.service';
import { MenuController } from '@ionic/angular';
import { ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
import { DataService } from '../services/DataService';
import { AppComponent } from '../app.component';
import { ToastService } from '../services/toast.service';
import { User } from '../utilites/User';

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

  loading = false

  constructor(public warehouseService: WarehouseService,
    public confermentService: ConfermentService,
    private menu: MenuController,
    private dataService: DataService,
    private menuSet: AppComponent,
    private toastService: ToastService,
    private user: User) { }



  ngOnInit() {

    this.getWarehouse()
    this.getPendingConferments()
  }

  
  ionViewWillEnter() {
    this.loading = true
    setTimeout(() => {
      this.menuSet.checkUser()
      this.loading = false
      this.getWarehouse()
      this.getPendingConferments()

    }, 2000);

  }


  doRefresh(event) {
    this.getWarehouse()
    this.getPendingConferments()
    setTimeout(() => {
      event.target.complete()
    }, 2500);

  }


  /**
   * gets the warehouse data frome the DB.
   */
  async getWarehouse() {
    await this.warehouseService.getWarehouse().then(
      (res: any) => {

        this.contentLoaded = true
        this.warehouse = res

      }).catch((
        err => {
          this.toastService.presentToast(err.msg);
        }
      ))
  }


  /**
   * Gets the conferments from the DB.
   */
  async getPendingConferments() {
    await this.confermentService.getPandingConferments().then(
      (res: any) => {
        if (res) {
          this.contentLoaded = true
          this.conferments = res
          this.thereArePendingConferments = true;
          this.filterConferments()
          //this.fillTheProgressBar()
        } else
          this.thereArePendingConferments = false;
      }
    ).catch((
      err => {
        this.toastService.presentToast(err.msg);
      }
    ))
  }



  /**
   * Finds the current status of a process and the value which the progress bar will be filled with.
   * The value is calculated by dividign by 6 the current process number.
   */
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


  /**
   * Filters the conferments by pushing in the filteredConferments array 
   * only the one that are currently processed
   */
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

  openMenu(
  ) {
    this.menu.open()
  }

  ionViewDidEnter() {
    this.menu.enable(true)
  }
}