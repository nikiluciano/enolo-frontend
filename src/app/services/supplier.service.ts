import { Injectable } from '@angular/core';
import { WineService } from './wine.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private wineService: WineService) { }

  getAllSuppliers(){
    return this.wineService.get('suppliers')

  }
}
