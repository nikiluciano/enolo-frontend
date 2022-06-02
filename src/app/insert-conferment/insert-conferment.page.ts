import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { ConfermentService } from '../services/conferment.service';
import { CountryProvider } from '../utilites/CountryProvider';


@Component({
  selector: 'app-insert-conferment',
  templateUrl: './insert-conferment.page.html',
  styleUrls: ['./insert-conferment.page.scss'],
})


export class InsertConfermentPage implements OnInit {

  postData = {
    _idworker: '',
    // status: '',
    country: '',
    supplier: '',
    description: '',
    typology: '',
    origin: '',
    date: ''
  };


  missing_idworker = false;
  // missingStatus = false;
  missingCountry = false;
  missingSupplier = false;
  missingDescription = false;
  missingTypology = false;
  missingOrigin = false;
  missingDate = false;

  regions: Array<any>
  flagToShow = "";
  regionSelected = "";

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    public confermentService: ConfermentService,
    private countryProvider: CountryProvider

  ) { }


  ngOnInit() {
    this.regions = this.countryProvider.getItalianRegions().regions;
  }

  validateInputs() {
    console.log(this.postData);
    let _idworker = this.postData._idworker.trim();
    // let status = this.postData.status.trim();
    let country = this.postData.country.trim();
    return (
      this.postData._idworker &&
      // this.postData.status &&
      this.postData.country &&
      // status.length > 0 &&
      country.length > 0
    );
  }


  checkEmpityFields() {
    if (this.validateInputs()) {
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

    console.log(this.postData);
    if (this.postData._idworker.length <= 0)
      this.missing_idworker = true;
    else
      this.missing_idworker = false;


    // if (this.postData.status.length <= 0)
    //   this.missingStatus = true;
    // else
    //   this.missingStatus = false;

    if (this.postData.country.length <= 0)
      this.missingCountry = true;
    else
      this.missingCountry = false;

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

    if (this.postData.date.length <= 0)
      this.missingDate = true;
    else
      this.missingDate = false;


  }

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


}


