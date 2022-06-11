import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './utilites/User';
import { UserService } from './services/user.service';
import { DataService } from './services/DataService';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  email: string;
  username: string;

  constructor(private dataService: DataService) {
    
  }


  ngOnInit() {
    this.dataService.getUserDataStored();
    
  }

  logout() {
    this.dataService.getUser().makeLogout()

  }


  async checkUser(){
    await this.dataService.getUser().checkSession().then((result)=>{
      if(result){
        this.email = this.dataService.getUser().getEmail()
        this.username = this.dataService.getUser().getUsername()
      }


    }
   )
  }


}
