import { Injectable } from '@angular/core';
import { WineService } from './wine.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private wineService: WineService) { }

  getUser(username: string): Promise<any> {
    return this.wineService.get('users/' + username);
  }

  getWorkers(): Promise<any>{
    return this.wineService.get('users');
  }

 
  changeWorkerRole(username: string, patchData: any){
    return this.wineService.patchWithToken('users/role/' + username, patchData)
  }

}