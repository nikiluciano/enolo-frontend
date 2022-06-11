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

  getWarehouse() {
    return this.wineService.get('warehouse');
  }

  constructor(private wineService: WineService) { }
 
  updateCapsQuantity(patchData : any){
    return this.wineService.patchWithToken("warehouse/update_caps", patchData)
  }


  updateTagsQuantity( patchData : any){
    return this.wineService.patchWithToken("warehouse/update_tags", patchData)
  }


  updateBottleQuantity( patchData : any){
    return this.wineService.patchWithToken("warehouse/update_bottle", patchData)
  }


  updateBottleFormat( patchData : any){
    return this.wineService.patchWithToken("warehouse/updateFormat", patchData)
  }

}
