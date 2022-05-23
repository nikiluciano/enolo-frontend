import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WineService } from './wine.service';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private wineService: WineService) { }

  getWarehouse(){
    return this.wineService.get('warehouse');
  }
  
}
