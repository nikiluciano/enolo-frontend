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

  typology = ''
  supplier = ''
  status = ''
  showFilters = false
  // confermentsStatus = [
  //   { label: 'Pronto', value: 'READY', isChecked: false },
  //   { label: 'Non iniziato', value: 'DELIVERED', isChecked: false },
  //   { label: 'In lavorazione', value: 'PENDING', isChecked: false }
  // ];


  // filtersOrdering = [
  //   { label: 'Quantità crescente', value: 'READY', isChecked: false },
  //   { label: 'Quantità decrescente', value: 'DELIVERED', isChecked: false }
  // ];

  // filteringSuppliers = [
  //   { label: 'Nicola Scinocca', value: 'READY', isChecked: false },
  //   { label: 'Luigi Occhionero', value: 'DELIVERED', isChecked: false }
  // ];



  // filteringIsActive = false;

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
        if (res.length>0) {
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
      err=>{
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
    let query: string;
    if (this.status != '')
      query = "status=" + this.status

    if (this.supplier)
      query = query + "&supplier=" + this.supplier


    if (this.typology)
      query = query + "&typology=" + this.typology + "&sort=-1"

    console.log(query)
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


}