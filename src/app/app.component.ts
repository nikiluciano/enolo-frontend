import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './utilites/User';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private user: User) {
    
   }

  logout(){
    this.user.makeLogout();

  }
}
 