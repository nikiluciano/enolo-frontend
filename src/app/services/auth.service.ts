import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../utilites/User';
import { WineService } from './wine.service';
import { get, set } from '../storage/data-storage'

const TOKEN_KEY = 'user-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
permissions: string[
	name:'read':value'false',
	name:'write':value'false',];
name:string;
role:string;


  constructor(private wineService: WineService,
    private router: Router) {
      this.loadUser();

      
     }
 
     loadUser() {
      // Normally load e.g. JWT at this point
      get('token').then(res => {
        if (res.value) {
          this.currentUser.next(JSON.parse(res.value));
        } else {
          this.currentUser.next(false);
        }
      });
    }

 

        login(postData: any): Observable<any> {
          return this.wineService.post('login', postData);
        }

        signup(postData: any): Observable<any> {
          return this.wineService.post('signup', postData);
        }

        logout() {

        }


        signIn(name) {
          // Local Dummy check, usually server request!
          let userObj: User;
       
          if (name === 'user') {
            userObj = {
              name: 'Tony Test',
              role: 'USER',
              permissions: ['read']
            };
          } else if (name === 'admin') {
            userObj = {
              name: 'Adam Admin',
              role: 'ADMIN',
              permissions: ['read', 'write']
            };
          }

}

hasPermission(permissions: string[]): boolean {
  for (const permission of permissions) {
    if (!this.currentUser.value || !this.currentUser.value.permissions.includes(permission)) {
      return false;
    }
  }
  return true;
}

}
