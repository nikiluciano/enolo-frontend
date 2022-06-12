import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfermentService } from '../services/conferment.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { findTheCurrentProcess } from '../utilites/utilities-functions';
import { DataService } from '../services/DataService';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.page.html',
  styleUrls: ['./load.page.scss'],
})
export class LoadPage implements OnInit {

  search: string;
  postData: any;


  thereArePendingConferments = true;
  conferments: any;

  loading = false;

  isOpen = false;

  typology = null
  supplier = null
  status = null
  order = null
  showFilters = false
  activeFilters = 0;

  constructor(public confermentService: ConfermentService,
    public ng2SearchPipeModule: Ng2SearchPipeModule,
    private dataService: DataService,
    private router: Router,
    private menu: MenuController,
    private toastService: ToastService) { }

  slideOpts = {
    slidesPerView: 2,
    centerSlide: true,
    loop: false,
  }


  ngOnInit() {
    this.getAllConferment();
  }


  doRefresh(event) {
    setTimeout(() => {
      event.target.complete()
    }, 3000);
    this.getAllConferment();
  }


  getAllConferment() {
    this.loading = true
    this.confermentService.getAllConferments().then(
      (res: []) => {
        if (res.length > 0) {
          this.loading = false
          this.postData = res
          this.postData = findTheCurrentProcess(this.postData)
          this.thereArePendingConferments = true;

        } else {
          this.loading = false
          console.log("errore");
          this.thereArePendingConferments = false;

        }
      }
    ).catch(
      err => {
        this.loading = false
        this.toastService.presentToast(err.msg);
      }
    )

  }


  viewDetailsConferment(id: string) {
    this.dataService.setIdConfermentToView(id);
    console.log(id)
    this.router.navigate(['/view-conferment']);
  }

  onlyReadyConferments() {
    console.log("funziona")


  }


  handleFilters() {
    if (this.showFilters)
      this.showFilters = false
    else
      this.showFilters = true

  }

  filterConferments() {
    this.activeFilters = 0
    let query: string;
    if (this.status != '') {
      query = "status=" + this.status
      this.activeFilters += 1
    }

    if (this.supplier) {
      query = query + "&supplier=" + this.supplier
      this.activeFilters += 1

    }


    if (this.typology) {
      query = query + "&typology=" + this.typology
      this.activeFilters += 1

    }

    if (this.order) {
      if (this.order == "Decrescente")
        query = query + "&typology=" + this.typology + "&sort=-1"
      else if (this.order = "Crescente")
        query = query + "&typology=" + this.typology + "&sort=1"
      this.activeFilters += 1

    }

    this.loading = true
    this.confermentService.getFilteredConferments(query)
      .then(
        (res) => {

          this.loading = false

          this.conferments = res
          this.conferments = findTheCurrentProcess(this.conferments)
          this.postData = this.conferments
          console.log(JSON.stringify(this.conferments))

        })

  }

  openMenu() {
    this.menu.open();
  }


  ionViewWillEnter() {
    this.menu.enable(true);
  }

  resetFilters() {
    this.typology = null
    this.supplier = null
    this.status = null
    this.order = null
    this.activeFilters = 0
  }


}