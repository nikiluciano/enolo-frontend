import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../utilites/User';
import { WineService } from './wine.service';
import { get, set } from '../storage/data-storage'

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

  logout() {

  }



}
