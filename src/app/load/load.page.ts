import { Component, OnInit, ViewChild } from '@angular/core';
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
  conferments: any;

  loading = false;

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
    private router: Router) { }

  slideOpts = {
    slidesPerView: 2,
    centerSlide: true,
    loop: false,
  }


  ngOnInit() {
    this.getAllConferment();

    this.loadConferment();
    this.getPendingConferments()
  }



  async loadConferment() {
      this.loading = true;
      this.confermentService.getAllConferments().then((res) => {
      this.loading = false;
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
    this.getPendingConferments()
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

  viewDetailsConferment(id: string) {
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
          this.conferments = res
          this.thereArePendingConferments = true;

        }
        else {
          this.thereArePendingConferments = false;
        }
      }
    )
  }


}