import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ConfermentService } from '../services/conferment.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { findTheCurrentProcess } from '../utilites/utilities-functions';

@Component({
  selector: 'app-load',
  templateUrl: './load.page.html',
  styleUrls: ['./load.page.scss'],
})
export class LoadPage implements OnInit {

  search: string;
  postData: any;
  conferment = [];

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
    private loadingCtrl: LoadingController) { }

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


  onlyReadyConferments() {
    console.log("funziona")


  }

}