import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WineService} from './wine.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private wineService: WineService,
              private router: Router) { }
              
              login(postData: any): Observable<any> {
                return this.wineService.post('login', postData);
                }
                
                signup(postData: any): Observable<any> {
                return this.wineService.post('signup', postData);
                }
                
                logout() {
              
                }
}
