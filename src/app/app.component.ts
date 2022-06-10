import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './utilites/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  
  email: string;
  username: string;

  constructor(private user: User,
              private userService:UserService) {
    
   }


  ngOnInit() {
    this.setMenuCredentials()
  }

  logout(){
    this.user.makeLogout();

  }

  setMenuCredentials(){
    this.email = this.user.getEmail()
    this.username = this.user.getUsername()

}
}
 