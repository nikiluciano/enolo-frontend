import { Injectable } from '@angular/core';
import { WineService } from './wine.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private wineService: WineService) { }
   SUPPLIERS= 'suppliers'
  getAllSuppliers(){
    return this.wineService.get(this.SUPPLIERS)

  }

  insertSupplier(postData: any){
    return this.wineService.postWithToken(this.SUPPLIERS, postData)

  }

}
