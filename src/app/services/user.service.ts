import { Injectable } from '@angular/core';
import { WineService } from './wine.service';


@Injectable({
  providedIn: 'root'
})


/**
 * Services to get data about users
 */
export class UserService {



  constructor(private wineService: WineService) { }

  USER = 'users'

  getUser(username: string): Promise<any> {
    return this.wineService.get('users/' + username);
  }


  getWorkers(): Promise<any> {
    return this.wineService.get('users');
  }


  changeWorkerRole(username: string, patchData: any) {
    return this.wineService.patchWithToken('users/role/' + username, patchData)
  }


  addUser(patchData: any, username: string) {
    return this.wineService.patchWithToken(this.USER + '/' + username, patchData)

  }

}