import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WineService } from './wine.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private wineService: WineService,
    private router: Router) {
  }

  login(postData: any): Promise<any> {
    return this.wineService.post('login', postData);
  }

  signup(postData: any): Promise<any> {
    return this.wineService.post('signup', postData);
  }

  logout(deleteData: any): Promise<any> {
    return this.wineService.deleteWithNoToken('logout', deleteData)
  }

  refreshToken(postData: any): Promise<any>{
    return this.wineService.postWithToken('refresh_token', postData)
  }

}
