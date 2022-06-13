import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.page.html',
  styleUrls: ['./suppliers.page.scss'],
})
export class SuppliersPage implements OnInit {

  suppliers: any


  constructor(private supplierService: SupplierService,
    private menu: MenuController) { }

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers() {
    this.supplierService.getAllSuppliers()
      .then((res) => {
        this.suppliers = res;
        console.log(JSON.stringify(this.suppliers))

      }).catch((err => {


      }))
  }

  openMenu() {
    this.menu.open();
  }


  ionViewWillEnter() {
    this.menu.enable(true);
  }


}
