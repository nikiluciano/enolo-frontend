import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WineService } from './wine.service';

@Injectable({
  providedIn: 'root'
})


/**
 * Service for authentication.
 * Used to make login, signup and make a logout call,
 * to the server, based on user actions.
 */
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



}
