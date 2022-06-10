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

  getAllUsers(): Promise<any>{
    return this.wineService.get('users');
  }

  getShowUser() {
    return this.wineService.get('showUser');
  }

  
  
}