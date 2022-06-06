import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ConfermentService } from '../services/conferment.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { findTheCurrentProcess } from '../utilites/utilities-functions';
import { DataService } from '../services/DataService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load',
  templateUrl: './load.page.html',
  styleUrls: ['./load.page.scss'],
})
export class LoadPage implements OnInit {

  search: string;
  postData: any;
  conferment = [];
  thereArePendingConferments = true;
  contentLoaded = false;
  filteredConferments = [];



  confermentsStatus = [
    { label: 'Pronto', value: 'READY', isChecked: false },
    { label: 'Non iniziato', value: 'DELIVERED', isChecked: false },
    { label: 'In lavorazione', value: 'PENDING', isChecked: false }
  ];


  filtersOrdering = [
    { label: 'Quantità crescente', value: 'READY', isChecked: false },
    { label: 'Quantità decrescente', value: 'DELIVERED', isChecked: false }
  ];

  filteringSuppliers = [
    { label: 'Nicola Scinocca', value: 'READY', isChecked: false },
    { label: 'Luigi Occhionero', value: 'DELIVERED', isChecked: false }
  ];



  filteringIsActive = false;

  constructor(public confermentService: ConfermentService,
    public ng2SearchPipeModule: Ng2SearchPipeModule,
    private loadingCtrl: LoadingController,
    private dataService: DataService,
    private router: Router) { }

  slideOpts = {
    slidesPerView: 2,
    centerSlide: true,
    loop: false,
  }


  ngOnInit() {
    this.getAllConferment();
    this.loadConferment();
  }



  async loadConferment() {

    const loading = await this.loadingCtrl.create({
      message: 'Caricamento...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.confermentService.getAllConferments().then((res) => {
      loading.dismiss();
      this.conferment = [...this.conferment, ...res];
      console.log(res);
    })
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete()
    }, 3000);
    this.getAllConferment();
    this.loadConferment();
  }


  getAllConferment() {
    this.confermentService.getAllConferments().then(
      (res: any) => {
        if (res) {
          this.postData = res
          this.postData = findTheCurrentProcess(this.postData)
        } else {
          console.log("errore");
        }
      }
    )

  }

  viewDetailsConferment(id: string){
    this.dataService.setIdConfermentToView(id);
    console.log(id)
    this.router.navigate(['/view-conferment']);
  }

  onlyReadyConferments() {
    console.log("funziona")


  }


  async getPendingConferments() {
    await this.confermentService.getPandingConferments().then(
      (res: any) => {
        if (res) {
          this.contentLoaded = true
          this.conferment = res
          this.thereArePendingConferments = true;

          this.filterConferments()
          

        }
        else {
          this.thereArePendingConferments = false;
        }
      }
    )
  }

  filterConferments() {
    this.filteredConferments = []
    this.conferment.forEach(element => {
      if (element.status == "PENDING")
        this.filteredConferments.push(element)
    });
    if (this.filteredConferments.length == 0)
      this.thereArePendingConferments = false
    else {
      this.thereArePendingConferments = true
      this.postData.findTheCurrentProcess()
    }
  }
}