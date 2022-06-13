import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfermentService } from '../services/conferment.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { findTheCurrentProcess } from '../utilites/utilities-functions';
import { DataService } from '../services/DataService';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ToastService } from '../services/toast.service';
import { User } from '../utilites/User';
import { CountryProvider } from '../utilites/CountryProvider';
import { SupplierService } from '../services/supplier.service';


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
  status = null
  order = null
  showFilters = false
  activeFilters = 0;
  typologies = []

  suppliers: any;
  supplier = null
  chosenSupplier: any;

  constructor(public confermentService: ConfermentService,
    public ng2SearchPipeModule: Ng2SearchPipeModule,
    private dataService: DataService,
    private router: Router,
    private menu: MenuController,
    private toastService: ToastService,
    private user: User,
    private countryProvider: CountryProvider,
    private supplierService: SupplierService
  ) { }

  slideOpts = {
    slidesPerView: 2,
    centerSlide: true,
    loop: false,
  }


  ngOnInit() {
    this.getAllConferment();
    this.getWineTypologies();
    this.getSuppliers();

  }


  doRefresh(event) {
    setTimeout(() => {
      event.target.complete()
    }, 3000);
    this.getAllConferment();
    this.getWineTypologies();
    this.getSuppliers();


  }


  /**
   * Gets the conferments from the DB
   */
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


/**
 * 
 * @param id id of the conferment the user wants to see in details.
 * the function calls the dataService to set the id 
 * so after this, the page view-conferment,
 * calling back the dataService will be able to have the id
 * of the conferment
 */
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

  /**
   * checks on which filters the user has selected
   * and creates the query to be passed to the server
   */
  filterConferments() {
    console.log(this.typology)
    this.activeFilters = 0
    let query: string;
    if (this.status) {
      query = "status=" + this.status
      this.activeFilters += 1
    }

    if (this.chosenSupplier) {
      query = query + "&supplier=" + this.chosenSupplier.name + " " + this.chosenSupplier.surname
      this.activeFilters += 1

    }

    if (this.typology) {
      query = query + "&typology=" + this.typology
      this.activeFilters += 1

    }


    this.loading = true
    console.log(query)
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
    this.getAllConferment();

  }


  /**Reset the filter
   * and requires again the conferments from the DB.
   * 
   */
    resetFilters() {
    this.typology = null
    this.supplier = null
    this.status = null
    this.order = null
    this.chosenSupplier = null
    this.activeFilters = 0
    this.getAllConferment();

  }



  /**
   * 
   * @param id id of the conferment to be deleted.
   */
  deleteConferment(id: string) {
    let deleteData = {
      id: id
    }
    this.confermentService.deleteConferment(this.dataService.getUser().username, deleteData)
      .then(
        res => {
          this.getAllConferment()
          this.toastService.presentToast("Conferimento cancellato con successo!")
        }
      )
      .catch(
        err => {
          this.toastService.presentToast(err.msg)
        }
      )
  }

  getWineTypologies() {
    this.typologies = this.countryProvider.getTypologies();
  }



  /**
   * Gets the list of the suppliers to be shown in the menu select,
   * from the DB.
   */
  getSuppliers() {


    this.supplierService.getAllSuppliers()
      .then((res) => {
        this.suppliers = res;

      }).catch((err => {

      }))
  }
}