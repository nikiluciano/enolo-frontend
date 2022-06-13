import { Injectable } from '@angular/core';
import { WineService } from './wine.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Services to get three type of statistics:
 * - quantity of kg for each typology,
 * - quantity of kg provided by each supplier
 * - get total of waste created from two processes,
 *   destemming and winemaking.
 */
export class StatisticsService {

  constructor(public wineService: WineService) { }
  STATISTICS = 'statistics/'
  getKgForTypology() {
    return this.wineService.get(this.STATISTICS + 'quantity_per_typology');
  }

  getKgForSuppliers() {
    return this.wineService.get(this.STATISTICS + 'quantity_per_supplier');
  }

  getWasteStats() {
    return this.wineService.get(this.STATISTICS + 'waste_per_quantity');
  }
}
