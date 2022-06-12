import { Injectable } from '@angular/core';
import { WineService } from './wine.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(public wineService:WineService) { }
  STATISTICS = 'statistics/'
  getKgForTypology() {
    return this.wineService.get(this.STATISTICS + 'quantity_per_typology');
  }

  getKgForSuppliers(){
    return this.wineService.get(this.STATISTICS + 'quantity_per_supplier');
  }

  getWasteStats(){
    return this.wineService.get(this.STATISTICS +'waste_per_quantity');
  }
}
