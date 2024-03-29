import { Component, OnInit } from '@angular/core';
import { DataService } from './services/DataService';
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


  /** 
   * deletes the data stored in the user's device
  */
  logout() {
    this.dataService.getUser().makeLogout()

  }

  ionViewWillEnter() {
    this.dataService.getUserDataStored();

  }


  /**
   * gets the mail and username to be shown in the menu 
   */
  async checkUser() {
    this.email = this.dataService.getUser().getEmail()
    this.username = this.dataService.getUser().getUsername()

  }

}
