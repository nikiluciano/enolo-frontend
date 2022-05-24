import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-insert-conferment',
  templateUrl: './insert-conferment.page.html',
  styleUrls: ['./insert-conferment.page.scss'],
})


export class InsertConfermentPage implements OnInit {

  postData = {
    id: '',
    status: '',
    country: '',
    supplier: '',
    description: '',
    typology: '',
    origin: '',
    date: ''
  };



  missingId = false;
  missingStatus = false;
  missingCountry = false;
  missingSupplier = false;
  missingDescription = false;
  missingTypology = false;
  missingOrigin = false;
  missingDate = false;


  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  validateInputs() {
    console.log(this.postData);
    let id = this.postData.id.trim();
    let status = this.postData.status.trim();
    let country = this.postData.country.trim();
    return (
      this.postData.id &&
      this.postData.status &&
      this.postData.country &&
      id.length > 0 &&
      status.length > 0 &&
      country.length > 0
    );
  }


  checkEmpityFields() {

    console.log(this.postData);
    if (this.postData.id.length <= 0)
      this.missingId = true;
    else
      this.missingId = false;

    if (this.postData.status.length <= 0)
      this.missingStatus = true;
    else
      this.missingStatus = false;

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



}


