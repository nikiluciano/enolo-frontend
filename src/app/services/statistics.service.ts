import { Injectable } from '@angular/core';
import { WineService } from './wine.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(public wineService:WineService) { }
  
  getWaste() {
    return this.wineService.get('statistics/waste-per-quantity');
  }
}
