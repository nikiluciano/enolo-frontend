import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
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
