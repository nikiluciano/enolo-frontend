import { Injectable } from '@angular/core';
import { WineService } from './wine.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  
  constructor(private wineService: WineService) { }
  
  USER='users'
  
  getUser(username: string): Promise<any> {
    return this.wineService.get('users/' + username);
  }

  
  getWorkers(): Promise<any>{
    return this.wineService.get('users');
  }

  getShowUser() {
    return this.wineService.get('showUser');
  }

  changeWorkerRole(username: string, patchData: any){
    return this.wineService.patchWithToken('users/role/' + username, patchData)

  }

  addUser(patchData: any,username:string){
    return this.wineService.patchWithToken(this.USER + '/' + username ,patchData)

  }
  
  
}