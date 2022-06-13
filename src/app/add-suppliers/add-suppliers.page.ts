import { Component, OnInit } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { MenuController } from '@ionic/angular';
import { SupplierService } from '../services/supplier.service';
import { Router } from '@angular/router';
import { DataService } from '../services/DataService';


@Component({
  selector: 'app-add-suppliers',
  templateUrl: './add-suppliers.page.html',
  styleUrls: ['./add-suppliers.page.scss'],
})
export class AddSuppliersPage implements OnInit {

  postData = {
    username: '',
    email: '',
    name: '',
    surname: '',
    address: '',
    phone: '',
    company:''
  };

  idSupplier = ''

  missingUsername = false;
  missingName = false;
  missingSurname = false;
  missingAddress = false;
  missingEmail = false;
  missingPhone = false;
  missingCompany = false;



  constructor(private toastService: ToastService,
    private menu: MenuController,
    private supplierService: SupplierService,
    private router: Router,
    private dataService: DataService) { }



  ngOnInit() {

  }

  openMenu() {
    this.menu.open();
  }


  /**
   * 
   * @returns true if all the fields are correctly filled, false if some of the fields is missing.
   */
  validateInputs() {
    let username = this.postData.username.trim();
    let email = this.postData.email.trim();
    let surname = this.postData.surname.trim();
    let name = this.postData.name.trim();
    let address = this.postData.address.trim();


    return (


      this.postData.username &&
      this.postData.email &&
      this.postData.name &&
      this.postData.surname &&
      this.postData.address &&
      this.postData.phone &&
      username.length > 0 &&
      email.length > 0 &&
      surname.length > 0 &&
      name.length > 0 &&
      address.length> 0 

      
    );
  }


  /**
   * Adds a new supplier to the DB.
   */
  async addSupplier() {

    if (this.validateInputs()) {

      this.supplierService.insertSupplier(this.postData).then(
        (res) => {
          if (res) {
            this.router.navigate(['suppliers'])
            this.toastService.presentToast(
              'Nuovo fornitore inserito correttamente.'
            );
          }
        }
      ).catch((err) => {
        this.toastService.presentToast(
          'Errore.'
        );
      })
    }
    else {
      this.toastService.presentToast(
        'Riempire tutti i campi correttamente.'
      );
    }

    if (this.postData.username.length <= 0)
      this.missingUsername = true;
    else
      this.missingUsername = false;


    if (this.postData.name.length <= 0)
      this.missingName = true;
    else
      this.missingName = false;

    if (this.postData.surname.length <= 0)
      this.missingSurname = true;
    else
      this.missingSurname = false;

    if (this.postData.address.length <= 0)
      this.missingAddress = true;
    else
      this.missingAddress = false;

    if (this.postData.phone.length <= 0)
      this.missingPhone = true;
    else
      this.missingPhone = false;

    if (this.postData.email.length <= 0)
      this.missingEmail = true;
    else
      this.missingEmail = false;


      if (this.postData.company.length <= 0)
      this.missingCompany = true;
    else
      this.missingCompany = false;



  }


}