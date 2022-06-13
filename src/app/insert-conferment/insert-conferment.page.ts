import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { ConfermentService } from '../services/conferment.service';
import { CountryProvider } from '../utilites/CountryProvider';
import { MenuController } from '@ionic/angular';
import { SupplierService } from '../services/supplier.service';


@Component({
  selector: 'app-insert-conferment',
  templateUrl: './insert-conferment.page.html',
  styleUrls: ['./insert-conferment.page.scss'],
})


export class InsertConfermentPage implements OnInit {

  postData = {
    _idworker: '',
    country: 'Italia',
    supplier: '',
    description: '',
    typology: '',
    origin: '',
    quantity: ''
  };


  missing_idworker = false;
  missingSupplier = false;
  missingDescription = false;
  missingTypology = false;
  missingOrigin = false;
  missingQuantity = false;

  regions: Array<any>
  flagToShow = "";
  regionSelected = "";
  typologies = []
  typologySelected: string;
  suppliers: any;
  loading = false;

  chosenSupplier: any;
  constructor(
    private toastService: ToastService,
    private router: Router,
    public confermentService: ConfermentService,
    private countryProvider: CountryProvider,
    private menu: MenuController,
    private supplierService: SupplierService

  ) { }


  ngOnInit() {
    this.getRegions()
    this.getWineTypologies();
    this.getSuppliers();
  }



  /**
   * @returns true if all the required fields are correctly filled, false
   * if there is missing one of the fields
   */
  validateInputs() {
    let _idworker = this.postData._idworker.trim();
    let country = this.postData.country.trim();
    return (
      this.postData._idworker &&
      this.postData.country &&
      country.length > 0
    );
  }


  /**
   * Insert a new conferment, if the input are correctly validated, into the DB
   */
  insertNewConferment() {
    if (this.validateInputs()) {
      this.postData.supplier = this.chosenSupplier.name + " " + this.chosenSupplier.surname
      this.confermentService.insertConferment(this.postData).then(
        (res: any) => {
          if (res) {
            this.router.navigate(['load']);
            this.toastService.presentToast(
              'Conferimento aggiunto con successo.'
            );
          } else {
            this.toastService.presentToast(
              'Data alreay exists, please enter new details.'
            );
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast(
        'Riempire tutti i campi correttamente.'
      );
    }

    if (this.postData._idworker.length <= 0)
      this.missing_idworker = true;
    else
      this.missing_idworker = false;

    if (this.postData.supplier.length <= 0)
      this.missingSupplier = true;
    else
      this.missingSupplier = false;

    if (this.postData.description.length <= 0)
      this.missingDescription = true;
    else
      this.missingDescription = false;

    if (this.postData.typology.length <= 0)
      this.missingTypology = true;
    else
      this.missingTypology = false;

    if (this.postData.origin.length <= 0)
      this.missingOrigin = true;
    else
      this.missingOrigin = false;

    if (this.postData.quantity.length <= 0)
      this.missingQuantity = true;
    else
      this.missingQuantity = false;


  }


  /**
   * Change the flag of the region to be displayed, 
   * according to the current selected region
   */
  changeRegion() {
    let index = this.showFlag(this.regionSelected);
    this.flagToShow = this.regions[index].logo;

  }

  showFlag(regionName: string) {
    switch (regionName) {

      case "Abruzzo":
        return 0;


      case "Basilicata":
        return 1;


      case "Calabria":
        return 2;

      case "Campania":
        return 3;

      case "Emilia-Romagna":
        return 4;

      case "Friuli-Venezia Giulia":
        return 5;

      case "Lazio":
        return 6;

      case "Liguria":
        return 7;

      case "Lombardia":
        return 8;

      case "Marche":
        return 9;

      case "Molise":
        return 10;

      case "Piemonte":
        return 11;

      case "Puglia":
        return 12;

      case "Sardegna":
        return 13;

      case "Sicilia":
        return 14;

      case "Toscana":
        return 15;

      case "Trentino-Alto Adige":
        return 16;

      case "Umbria":
        return 17;

      case "Valle d'Aosta":
        return 18;

      case "Veneto":
        return 19;

    }

  }


  /**
   * Gets all the italian most known wine typologies
   */
  getWineTypologies() {
    this.typologies = this.countryProvider.getTypologies();
  }


  /**
   * Gets all the italian regions, 
   * with name and link to the logo image
   */
  getRegions() {
    this.regions = this.countryProvider.getItalianRegions().regions;

  }


/**
 * Changes the selected typology
 */
  changeTypology() {
    this.postData.typology = this.typologySelected
  }

  openMenu() {
    this.menu.open();
  }


  ionViewWillEnter() {
    this.menu.enable(true);
    this.getRegions()
    this.getWineTypologies();
    this.getSuppliers();
  }


  /**
   * Gets the list of the suppliers from the DB
   */
  getSuppliers() {
    this.loading = true

    this.supplierService.getAllSuppliers()
      .then((res) => {
        this.loading = false
        this.suppliers = res;

      }).catch((err => {
      }))
  }
}


